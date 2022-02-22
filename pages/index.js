import dynamic from "next/dynamic";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Snake.module.css";

const Config = {
  height: 25,
  width: 25,
  cellSize: 32,
};

const CellType = {
  Snake: "snake",
  Food: "food",
  Empty: "empty",
};

const Direction = {
  Left: { x: -1, y: 0 },
  Right: { x: 1, y: 0 },
  Top: { x: 0, y: -1 },
  Bottom: { x: 0, y: 1 },
};

const Cell = ({ x, y, type }) => {
  const getStyles = () => {
    switch (type) {
      case CellType.Snake:
        return {
          backgroundColor: "yellowgreen",
          borderRadius: 8,
          padding: 2,
        };

      case CellType.Food:
        return {
          backgroundColor: "darkorange",
          borderRadius: 20,
          width: 32,
          height: 32,
        };

      default:
        return {};
    }
  };
  return (
    <div
      className={styles.cellContainer}
      style={{
        left: x * Config.cellSize,
        top: y * Config.cellSize,
        width: Config.cellSize,
        height: Config.cellSize,
      }}
    >
      <div className={styles.cell} style={getStyles()}></div>
    </div>
  );
};

const getRandomCell = () => ({
  x: Math.floor(Math.random() * Config.width),
  y: Math.floor(Math.random() * Config.width),
});

const Snake = () => {
  console.log("rendering");
  const getDefaultSnake = () => {
    console.log("getDefaultSnake");
    return [
      { x: 8, y: 12 },
      { x: 7, y: 12 },
      { x: 6, y: 12 },
    ];
  };
  const getFood = () => {
    console.log("getFood");
    return [{ x: 4, y: 10 }];
  };
  const grid = useRef();
  const reset = () => {
    setSnake(getDefaultSnake());
    setDirection(Direction.Right);
    setFood({ x: 4, y: 10 });
    setScore(0);
  };

  // snake[0] is head and snake[snake.length - 1] is tail
  const [snake, setSnake] = useState(() => getDefaultSnake());
  console.log(snake);
  const [direction, setDirection] = useState(Direction.Right);

  const [food, setFood] = useState(() => getFood());
  const [score, setScore] = useState(0);

  // move the snake

  useEffect(() => {
    console.log("use effect 1", snake);
    const runSingleStep = () => {
      setSnake((snake) => {
        const head = snake[0];
        const newHead = { x: head.x + direction.x, y: head.y + direction.y };

        // make a new snake by extending head
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        const newSnake = [newHead, ...snake];

        // remove tail
        // &&
        // (newSnake[0].x > Config.width || newSnake[0].x < 0)
        if (isSnake(newHead)) {
          alert(`Game Over! Your score is ${score}`);
          // clearInterval(grid.current);
          reset();
        }

        if (!isFood(newHead)) newSnake.pop();

        if (newHead.x >= Config.width) {
          newHead.x = 0;
        } else if (newHead.x < 0) {
          newHead.x = Config.width;
        }

        if (newHead.y > Config.height) {
          newHead.y = 0;
        } else if (newHead.y < 0) {
          newHead.y = Config.height;
        }
        // else if (tail.x === 0) {
        //   newSnake[0].x = Config.width;
        // }
        // if (tail.y === Config.height) {
        //   newSnake[0].y = 0;
        // }

        return newSnake;
      });
    };

    runSingleStep();
    grid.current = setInterval(runSingleStep, 500);

    return () => clearInterval(grid.current);
  }, [direction, food]);

  // update score whenever head touches a food
  useEffect(() => {
    console.log("use effect 2", snake);
    const head = snake[0];
    const found = isFood(head);
    if (found) {
      setScore((score) => {
        return score + 1;
      });

      let newFood = getRandomCell();
      while (isSnake(newFood)) {
        newFood = getRandomCell();
      }
      const id = food.indexOf(found);
      const newFoods = food.splice(id, 1);

      setFood([...newFoods, newFood]);
    }
    // const setNewFood = () => {
    //   const newFood = getRandomCell();
    //   while (isSnake(newFood)) {
    //     newFood = getRandomCell();
    //   }
    //   setFood(newFood);
    // };
    // setNewFood();
    // const timer2 = setInterval(setNewFood, 10000);

    // return () => clearInterval(timer2);
  }, [snake, food]);

  // const head = snake[0];
  // const newHead = { x: head.x + direction.x, y: head.y + direction.y };

  useEffect(() => {
    console.log("use effect 3", snake);
    const handleNavigation = (event) => {
      console.log("use effect 3-handle navigation", snake);
      switch (event.key) {
        case "ArrowUp":
          if (snake[0].y !== snake[1].y + 1) {
            setDirection(Direction.Top);
          }

          break;

        case "ArrowDown":
          if (snake[0].y + 1 !== snake[1].y) {
            setDirection(Direction.Bottom);
          }

          break;

        case "ArrowLeft":
          if (snake[0].x !== snake[1].x + 1) {
            setDirection(Direction.Left);
          }

          break;

        case "ArrowRight":
          if (snake[0].x + 1 !== snake[1].x) {
            setDirection(Direction.Right);
          }
          break;
      }
    };
    window.addEventListener("keydown", handleNavigation);

    return () => window.removeEventListener("keydown", handleNavigation);
  }, [snake]);

  // ?. is called optional chaining
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  // const isFood = ({ x, y }) => food.x === x && food.y === y;
  const isFood = ({ x, y }) =>
    snake.find((position) => position.x === x && position.y === y);

  const isSnake = ({ x, y }) =>
    snake.find((position) => position.x === x && position.y === y);

  const cells = [];
  for (let x = 0; x < Config.width; x++) {
    for (let y = 0; y < Config.height; y++) {
      let type = CellType.Empty;
      if (isFood({ x, y })) {
        type = CellType.Food;
      } else if (isSnake({ x, y })) {
        type = CellType.Snake;
      }
      cells.push(<Cell key={`${x}-${y}`} x={x} y={y} type={type} />);
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        style={{ width: Config.width * Config.cellSize }}
      >
        Score: {score}
      </div>
      <div
        className={styles.grid}
        style={{
          height: Config.height * Config.cellSize,
          width: Config.width * Config.cellSize,
        }}
      >
        {cells}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Snake), {
  ssr: false,
});
