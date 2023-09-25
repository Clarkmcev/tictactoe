import React from 'react';
import ResultsIcons from './icons/ResultsIcons';
import { scoreWriter } from './utils';
import Refresh from './icons/Refresh';

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
      <div className="p-4 text-gray-500 font-bold bg-gray-900 rounded-lg flex flex-col space-y-8">
        <div>
          X : <span className="text-white font-bold text-md">{score.X}</span>
        </div>
        <div>
          O : <span className="text-white font-bold text-md">{score.O}</span>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
