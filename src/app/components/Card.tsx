'use client';

import React from 'react';
import { Grid } from '../page';
import { signLookUp } from './utils';

type CardProps = {
  value: number;
  position: number[];
  disabled: boolean
  turn: number;
  setTurn: React.Dispatch<React.SetStateAction<number>>;
  grid: number[][];
  setGrid: React.Dispatch<React.SetStateAction<Grid>>;
  gameOver: boolean;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Card = ({
  value,
  position,
  disabled,
  grid,
  setGrid,
  turn,
  setTurn,
  gameOver,
  setGameOver,
}: CardProps) => {

  function playCard(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setTurn((prev) => prev + 1);
    setGameOver(false);

    const playedPosition = e.currentTarget.value
      .split('')
      .map((el) => Number(el));
    let gridCopy = [...grid];
    gridCopy[playedPosition[0]][playedPosition[1]] = turn % 2 === 0 ? 1 : 2;
    setGrid({ grid: gridCopy });
  }


  return (
    <button
      disabled={disabled || gameOver}
      onClick={playCard}
      value={String(position[0] + String(position[1]))}
      className={`w-44 h-44 mb-2 bg-gray-800 rounded-lg text-white text-8xl duration-150 transition-all ${
        disabled || gameOver ? 'bg-gray-700' : 'hover:bg-gray-700'
      }`}
    >
      {signLookUp[value]}
    </button>
  );
};

export default Card;
