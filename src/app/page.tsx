'use client';

import { useEffect, useState } from 'react';
import Board from './components/Board';
import Settings from './components/Settings';
import {
  KEY_COLUMN,
  KEY_DIAGONAL,
  KEY_EASY_DIFFICULTY,
  KEY_MODE_DUO,
  KEY_MODE_SOLO,
  KEY_ROW,
  gridNotCompleted,
  translateSign,
} from './components/utils';
import toast, { Toaster } from 'react-hot-toast';
import ToastResult from './components/toasts/ToastResult';
import ScoreBoard from './components/ScoreBoard';
import Button from './components/Button';
import Refresh from './components/icons/Refresh';

export type Grid = {
  grid: number[][];
};

export type WinnerLine = {
  n: number;
  type: string;
} | null;

interface Score {
  X: number;
  O: number;
}

export default function Home() {
  const gridInit = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [turn, setTurn] = useState(0);
  const [grid, setGrid] = useState<Grid>({
    grid: gridInit,
  });
  const [mode, setMode] = useState(KEY_MODE_DUO);
  const [difficulty, setDifficulty] = useState(KEY_EASY_DIFFICULTY);
  const [AIisPlaying, setAIisPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState<Score>({ X: 0, O: 0 });
  const [winLine, setWinLine] = useState<WinnerLine>(null);
  let stop = false;

  function resetGame(grid: Grid) {
    setGrid({ grid: gridInit });
    setTurn(0);
    setGameOver(false);
    setScore({ X: 0, O: 0 });
  }

  function checkWInAndAI(grid: Grid) {
    let winner = 0;

    if (!gameOver) {
      for (let i = 0; i < grid.grid.length; i++) {
        for (let j = 0; j < grid.grid.length; j++) {
          // check rows
          if (
            grid.grid[i][0] === grid.grid[i][1] &&
            grid.grid[i][1] === grid.grid[i][2] &&
            grid.grid[i][0] === grid.grid[i][2] &&
            grid.grid[i][0] !== 0
          ) {
            winner = grid.grid[i][0];
            setGameOver(true);
            gameOverHandler(winner);
            setWinLine({ n: i, type: KEY_ROW });
            return true;
          }

          // check columns
          else if (
            grid.grid[0][j] === grid.grid[1][j] &&
            grid.grid[1][j] === grid.grid[2][j] &&
            grid.grid[0][j] === grid.grid[2][j] &&
            grid.grid[0][j] !== 0
          ) {
            winner = grid.grid[0][j];
            setGameOver(true);
            gameOverHandler(winner);
            setWinLine({ n: j, type: KEY_COLUMN });
            return true;
          }

          // check diagonal 1
          else if (
            grid.grid[0][0] === grid.grid[1][1] &&
            grid.grid[1][1] === grid.grid[2][2] &&
            grid.grid[0][0] === grid.grid[2][2] &&
            grid.grid[0][0] !== 0
          ) {
            winner = grid.grid[0][0];
            setGameOver(true);
            gameOverHandler(winner);
            setWinLine({ n: 1, type: KEY_DIAGONAL });
            return true;
          }

          // check diagonal 2
          else if (
            grid.grid[0][2] === grid.grid[1][1] &&
            grid.grid[1][1] === grid.grid[2][0] &&
            grid.grid[0][2] === grid.grid[0][2] &&
            grid.grid[0][2] !== 0
          ) {
            grid.grid[0][2];
            setGameOver(true);
            gameOverHandler(winner);
            setWinLine({ n: 0, type: KEY_DIAGONAL });
            return true;
          }
        }
      }
      if (turn === 9 && !gameOver) {
        gameOverHandler(winner);
        return true;
      }
    }

    if (!gameOver) {
      AIplayTimeout();
    }
  }

  function newGame(grid: Grid) {
    setGrid({ grid: gridInit });
    setTurn(0);
    setGameOver(false);
  }

  function AI(grid: Grid) {
    let hasNotPlayed = true;
    let randomRowIndex = 0;
    let randomColIndex = 0;

    const gridIsNotEmpty = gridNotCompleted(grid, 0);

    while (hasNotPlayed && gridIsNotEmpty) {
      randomRowIndex = Math.round(Math.random() * 2);
      randomColIndex = Math.round(Math.random() * 2);

      if (grid.grid[randomRowIndex][randomColIndex] === 0) {
        hasNotPlayed = false;
        AIplay(randomRowIndex, randomColIndex);
        break;
      }
    }
  }

  function AIplay(rowIndex: number, colIndex: number) {
    const copyGrid = [...grid.grid];
    copyGrid[rowIndex][colIndex] = 2;
    setGrid({ grid: copyGrid });
    const incrementTurn = turn + 1;
    setTurn(incrementTurn);
  }

  function AIplayTimeout() {
    if (mode === KEY_MODE_SOLO && turn % 2 !== 0 && !gameOver) {
      setAIisPlaying(true);
      setTimeout(() => {
        AI(grid);
        setAIisPlaying(false);
      }, 1000);
    }
  }

  function gameOverHandler(winner: number) {
    toast((t) => <ToastResult winner={winner} className="" />, {
      style: {
        borderRadius: '10px',
        fontStyle: 'bold',
        background: 'transparent',
        boxShadow: 'none',
        color: '#9ca3af',
      },
      duration: 2000,
    });

    if (winner !== 0) {
      let copyScore = { ...score };
      const sign = translateSign(winner);
      copyScore[sign] += 1;
      setScore(copyScore);
    }

    // init new game
    setTimeout(() => {
      newGame(grid);
    }, 2000);
  }

  useEffect(() => {
    checkWInAndAI(grid);

    // eslint-disable-next-line no-use-before-define
  }, [turn, grid, gameOver]);

  useEffect(() => {
    resetGame(grid);
  }, []);

  return (
    <main className="bg-gray-900 h-screen relative section">
      <div className="text-white font-bold text-4xl text-center p-8 w-full border-b-2 border-gray-700">
        TikTakTu
      </div>
      <div className="flex justify-center space-x-4 m-auto bg-gray-800 w-full p-10 border-b-2 border-gray-700">
        <Settings
          onClick={resetGame}
          mode={mode}
          setMode={setMode}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          gameOver={gameOver}
          reset={resetGame}
          grid={grid.grid}
          turn={turn}
        />
        <Board
          grid={grid.grid}
          setGrid={setGrid}
          gameOver={gameOver}
          setGameOver={setGameOver}
          turn={turn}
          setTurn={setTurn}
          mode={mode}
          winLine={winLine}
          AIisPlaying={AIisPlaying}
          difficulty={difficulty}
        />
        <ScoreBoard score={score} />
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </main>
  );
}
