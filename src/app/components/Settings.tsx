import React, { Dispatch, SetStateAction } from 'react';
import {
  KEY_EASY_DIFFICULTY,
  KEY_HARD_DIFFICULTY,
  KEY_MEDIUM_DIFFICULTY,
  KEY_MODE_DUO,
  KEY_MODE_SOLO,
} from './utils';
import Button from './Button';
import SettingsIcons from './icons/SettingsIcons';
import Refresh from './icons/Refresh';

export type SettingProps = {
  onClick: any;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  difficulty: string;
  setDifficulty: Dispatch<SetStateAction<string>>;
  gameOver: boolean;
  reset: any;
  grid: any;
};

function Settings({
  onClick,
  mode,
  setMode,
  difficulty,
  setDifficulty,
  gameOver,
  reset,
  grid,
}: SettingProps) {
  function onChange() {
    reset(grid);
  }

  return (
    <div>
      <div className="font-bold text-gray-500 p-4 flex items-center space-x-2">
        <SettingsIcons className="w-4 h-4" />
        <p className="text-gray-500">Settings</p>
      </div>
      <div className="text-white bg-gray-900 p-4 rounded-lg h-fit mb-2">
        <div className="flex-col space-y-4">
          <p className="font-bold text-gray-500">Number of players</p>
          <div>
            <label className="flex space-x-2">
              <input
                type="checkbox"
                checked={mode === KEY_MODE_SOLO}
                onClick={() => setMode(KEY_MODE_SOLO)}
                onChange={onChange}
              />
              <p>One player</p>
            </label>
          </div>
          <div>
            <label className="flex whitespace-nowrap space-x-2">
              <input
                type="checkbox"
                checked={mode === KEY_MODE_DUO}
                onClick={() => setMode(KEY_MODE_DUO)}
                onChange={onChange}
              />
              <p>Two players</p>
            </label>
          </div>
        </div>
      </div>
      {mode === KEY_MODE_SOLO ? (
        <div className="flex-col space-y-2 text-white bg-gray-900 p-4 rounded-lg h-fit">
          <p className="font-bold text-gray-500">Difficulty</p>
          <div>
            <label className="flex space-x-2">
              <input
                type="checkbox"
                checked={difficulty === KEY_EASY_DIFFICULTY}
                onClick={() => setDifficulty(KEY_EASY_DIFFICULTY)}
              />
              <p>Easy</p>
            </label>
          </div>
          <div>
            <label className="flex space-x-2">
              <input
                type="checkbox"
                checked={difficulty === KEY_MEDIUM_DIFFICULTY}
                onClick={() => setDifficulty(KEY_MEDIUM_DIFFICULTY)}
              />
              <p>Medium</p>
            </label>
          </div>
          <div>
            <label className="flex space-x-2">
              <input
                type="checkbox"
                checked={difficulty === KEY_HARD_DIFFICULTY}
                onClick={() => setDifficulty(KEY_HARD_DIFFICULTY)}
              />
              <p>Hard</p>
            </label>
          </div>
        </div>
      ) : null}

      <div className="flex space-x-2">
        <Button
          icon={<Refresh className="h-4 w-4" />}
          onClick={onClick}
          disabled={gameOver}
        >
          Start
        </Button>
        <Button
          icon={<Refresh className="h-4 w-4" />}
          onClick={onClick}
          disabled={gameOver}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Settings;
