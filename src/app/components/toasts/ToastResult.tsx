import React from 'react';
import { signLookUp } from '../utils';

type Props = {
  winner: number;
  className: string
};

export default function ToastResult({ winner, className }: Props) {
    const winnerSign = signLookUp[winner]

  switch (winner) {
    case 0:
      return <div className={className}>It&apos;s a <span className="text-white">tie.</span></div>;
    case 1:
      return <div className={className}><span className="text-white">{winnerSign}</span> has won.</div>;
    case 2:
      return <div className={className}><span className="text-white">{winnerSign}</span> has won.</div>;
  }
}
