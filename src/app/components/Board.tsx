import React, { useEffect, useState } from 'react';
import Card from './Card';
import Settings from './Settings';

export type BoardProps = {
  grid: number[][];
  setGrid: any
  gameOver: any
  setGameOver: any
  turn: any
  setTurn: any
};

function Board({ grid, setGrid, gameOver, setGameOver, turn, setTurn }: BoardProps) {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-gray-900">
      <div>
        <div className="text-white font-bold text-4xl text-center mb-10">
          Tic Tac Toe
        </div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {grid.map((col, colIndex) => (
              <Card
                value={grid[rowIndex][colIndex]}
                key={colIndex}
                position={[rowIndex, colIndex]}
                disabled={grid[rowIndex][colIndex] !== 0}
                grid={grid}
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
    </main>
  );
}

export default Board;
