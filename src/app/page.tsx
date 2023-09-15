'use client';

import Image from 'next/image';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import { InitDialog } from './components/MyDialog';

export type Grid = {
  grid: number[][];
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
  const [gameOver, setGameOver] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(1);

  function resetGame(grid: Grid) {
    setGrid({ grid: gridInit });
    setTurn(0);
    setGameOver(false);
  }

  function checkWin(grid: Grid) {
    for (let i = 0; i < grid.grid.length; i++) {
      for (let j = 0; j < grid.grid.length; j++) {
        // check rows
        if (
          grid.grid[i][0] === grid.grid[i][1] &&
          grid.grid[i][1] === grid.grid[i][2] &&
          grid.grid[i][0] === grid.grid[i][2] &&
          grid.grid[i][0] !== 0
        ) {
          console.log('Row win!');
          setGameOver(true);
        }

        // check columns
        if (
          grid.grid[0][j] === grid.grid[1][j] &&
          grid.grid[1][j] === grid.grid[2][j] &&
          grid.grid[0][j] === grid.grid[2][j] &&
          grid.grid[0][j] !== 0
        ) {
          console.log('Column win!');
          setGameOver(true);
        }

        // check diagonal 1
        if (
          grid.grid[0][0] === grid.grid[1][1] &&
          grid.grid[1][1] === grid.grid[2][2] &&
          grid.grid[0][0] === grid.grid[2][2] &&
          grid.grid[0][0] !== 0
        ) {
          console.log('Diagonal 1 win!');
          setGameOver(true);
        }

        // check diagonal 2
        if (
          grid.grid[0][2] === grid.grid[1][1] &&
          grid.grid[1][1] === grid.grid[2][0] &&
          grid.grid[0][2] === grid.grid[0][2] &&
          grid.grid[0][2] !== 0
        ) {
          console.log('Diagonal 2 win!');
          setGameOver(true);
        }
      }
    }
  }

  useEffect(() => {
    checkWin(grid);
  }, [turn]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gray-900 ">
      <div>
        {grid.grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {grid.grid.map((col, colIndex) => (
              <Card
                value={grid.grid[rowIndex][colIndex]}
                key={colIndex}
                position={[rowIndex, colIndex]}
                disabled={grid.grid[rowIndex][colIndex] !== 0}
                grid={grid.grid}
                setGrid={setGrid}
                turn={turn}
                setTurn={setTurn}
                gameOver={gameOver}
                setGameOver={setGameOver}
              />
            ))}
          </div>
        ))}
      </div>
      {gameOver ? <InitDialog isOpen={gameOver} setIsOpen={setGameOver} onClick={() => resetGame()}/> : null}
      {/* {gameOver ?<>wwww</> : null} */}
    </main>
  );
}
