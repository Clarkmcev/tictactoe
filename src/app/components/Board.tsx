import React, { useEffect, useState } from 'react';
import Card from './Card';
import WinnerLine from './icons/WinnerLine';
import { draw } from './icons/Icon';
import { KEY_MODE_SOLO } from './utils';

export type BoardProps = {
  grid: number[][];
  setGrid: any;
  gameOver: any;
  setGameOver: any;
  turn: any;
  setTurn: any;
  mode: any;
  winLine: any;
  AIisPlaying: boolean;
  difficulty: string;
};

function Board({
  grid,
  setGrid,
  gameOver,
  setGameOver,
  turn,
  setTurn,
  mode,
  winLine,
  AIisPlaying,
  difficulty,
}: BoardProps) {
  return (
    <main className="flex flex-col items-center">
      <div className="p-4 flex justify-between w-full">
        <div className="flex items-center space-x-8">
          <div>
            <p className="text-gray-500 font-bold">
              Mode : <span className="text-white">{mode}</span>
            </p>
          </div>
          {mode === KEY_MODE_SOLO ? (
            <div>
              <p className="text-gray-500 font-bold">
                Difficulty : <span className="text-white">{difficulty}</span>
              </p>
            </div>
          ) : null}
          </div>
          <div>
            <p className="text-gray-500 font-bold">
              Turn : <span className="text-white">{turn}</span>
            </p>
          </div>
      </div>
      <div className="pt-2 px-2 bg-gray-700 rounded">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-2">
            {grid.map((col, colIndex) => (
              <Card
                value={grid[rowIndex][colIndex]}
                key={colIndex}
                position={[rowIndex, colIndex]}
                disabled={grid[rowIndex][colIndex] !== 0 || AIisPlaying}
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
      <div className="absolute m-14">
        {gameOver ? <WinnerLine draw={draw} type={winLine} /> : null}
      </div>
    </main>
  );
}

export default Board;
