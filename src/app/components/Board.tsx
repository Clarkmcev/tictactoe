import React, { useEffect, useState } from 'react';
import Card from './Card';

export type BoardProps = {
  grid: number[][];
  setGrid: any;
  gameOver: any;
  setGameOver: any;
  turn: any;
  setTurn: any;
  mode: any;
};

function Board({
  grid,
  setGrid,
  gameOver,
  setGameOver,
  turn,
  setTurn,
  mode,
}: BoardProps) {
  return (
    <main className="flex h-screen flex-col items-center bg-gray-900">
      <div className="p-4 flex justify-between w-full">
        <div>
          <p className="text-gray-500 font-bold">
            Mode : <span className="text-white">{mode}</span>
          </p>
        </div>
        <div>
          <p className="text-gray-500 font-bold">
            Turn : <span className="text-white">{turn}</span>
          </p>
        </div>
      </div>
      <div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-2">
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
