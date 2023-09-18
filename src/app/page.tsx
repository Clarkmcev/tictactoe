'use client';

import { useEffect, useState } from 'react';
import Board from './components/Board';
import Settings from './components/Settings';
import { KEY_EASY_DIFFICULTY, KEY_MODE_DUO, translateSign } from './components/utils';
import toast, { Toaster } from 'react-hot-toast';
import ToastResult from './components/ToastResult';
import ScoreBoard from './components/ScoreBoard';

export type Grid = {
  grid: number[][];
};

interface Score  {
  X: number;
  O: number;
};

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
  const [gameOver, setGameOver] = useState(true);
  const [score, setScore] = useState<Score>({ X: 0, O: 0 });

  function resetGame(grid: Grid) {
    setGrid({ grid: gridInit });
    setTurn(0);
    setGameOver(false);
  }

  function checkWin(grid: Grid) {
    let winner = 0;

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
          return;
        }

        // check columns
        if (
          grid.grid[0][j] === grid.grid[1][j] &&
          grid.grid[1][j] === grid.grid[2][j] &&
          grid.grid[0][j] === grid.grid[2][j] &&
          grid.grid[0][j] !== 0
        ) {
          winner = grid.grid[0][j];
          setGameOver(true);
          gameOverHandler(winner);
          return;
        }

        // check diagonal 1
        if (
          grid.grid[0][0] === grid.grid[1][1] &&
          grid.grid[1][1] === grid.grid[2][2] &&
          grid.grid[0][0] === grid.grid[2][2] &&
          grid.grid[0][0] !== 0
        ) {
          winner = grid.grid[0][0];
          setGameOver(true);
          gameOverHandler(winner);
          return;
        }

        // check diagonal 2
        if (
          grid.grid[0][2] === grid.grid[1][1] &&
          grid.grid[1][1] === grid.grid[2][0] &&
          grid.grid[0][2] === grid.grid[0][2] &&
          grid.grid[0][2] !== 0
        ) {
          grid.grid[0][2];
          setGameOver(true);
          gameOverHandler(winner);
          return;
        }
      }
    }
    if (turn === 9 && !gameOver) {
      gameOverHandler(winner);
      return;
    }
  }

  function gameOverHandler(winner: number) {
    toast((t) => <ToastResult className="bg-gray-700" winner={winner} />, {
      style: {
        borderRadius: '10px',
        fontStyle: 'bold',
        background: '#374151',
        color: '#9ca3af',
      },
      duration: 2000,
    });

    if (winner !== 0) {
      let copyScore = {...score }
      const sign = translateSign(winner)
      copyScore[sign] += 1 
      setScore(copyScore)
    }
  }

  useEffect(() => {
    checkWin(grid);
  }, [turn, grid]);

  return (
    <main className="p-10 bg-gray-900 m-auto">
      <div className="text-white font-bold text-4xl text-center mb-10">
        My TikTakTu
      </div>
      <div className="flex justify-center space-x-10">
        <Settings
          onClick={resetGame}
          mode={mode}
          setMode={setMode}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          gameOver={gameOver}
        />
        <Board
          grid={grid.grid}
          setGrid={setGrid}
          gameOver={gameOver}
          setGameOver={setGameOver}
          turn={turn}
          setTurn={setTurn}
          mode={mode}
        />
        <ScoreBoard score={score} />
        <Toaster position="bottom-center" reverseOrder={false} />

        {/* GameStatusDialog */}
        {/* {gameOver ? <InitDialog isOpen={gameOver} setIsOpen={setGameOver} onClick={() => resetGame()}/> : null} */}
        {/* {gameOver ?<>wwww</> : null} */}
      </div>
    </main>
  );
}
