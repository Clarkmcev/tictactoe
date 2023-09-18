import React from 'react';
import ResultsIcons from './icons/ResultsIcons';
import { scoreWriter } from './utils';

export type Props = {
  score: any;
};

function ScoreBoard({ score }: Props) {
  const scoreX = scoreWriter(score.X);
  const scoreO = scoreWriter(score.O);

  return (
    <div>
      <div className="font-bold text-gray-500 p-4 flex items-center space-x-2">
        <ResultsIcons className="w-4 h-4" />
        <p className="text-gray-500">Scores</p>
      </div>
      <div className="p-4 text-gray-500 font-bold bg-gray-800 rounded-lg flex-col space-y-8">
        <div>
          X : <span className="text-white font-normal text-md">{scoreX}</span>
        </div>
        <div>
          O : <span className="text-white font-normal text-md">{scoreO}</span>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
