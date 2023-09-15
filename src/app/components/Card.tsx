'use client';

import React, { useEffect, useState } from 'react';
import { Grid } from '../page';

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

  const signLookUp = {
    0: null,
    1: 'X',
    2: 'O',
  };


  return (
    <button
      disabled={disabled || gameOver}
      onClick={playCard}
      value={String(position[0] + String(position[1]))}
      className={`w-44 h-44 rounded-lg m-1 bg-gray-800 text-white text-8xl duration-150 transition-all border-2 border-gray-700 ${
        disabled || gameOver ? 'bg-gray-700' : 'hover:bg-gray-700'
      }`}
    >
      {signLookUp[value]}
    </button>
  );
};

export default Card;
