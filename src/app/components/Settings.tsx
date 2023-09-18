import React, { useState } from 'react';
import {
  KEY_EASY_DIFFICULTY,
  KEY_HARD_DIFFICULTY,
  KEY_MEDIUM_DIFFICULTY,
  KEY_MODE_DUO,
  KEY_MODE_SOLO,
} from './utils';

export type SettingProps = {
  onClick: any
}

function Settings({ onClick } : SettingProps) {
  const [mode, setMode] = useState(KEY_MODE_DUO);
  const [difficulty, setDifficulty] = useState(KEY_EASY_DIFFICULTY);

  return (
    <div className="text-white">
      <p>Settings</p>
      <div className="">
        <p>Number of players</p>
        <div>
          <label className="flex space-x-2">
            <input
              type="checkbox"
              checked={mode === KEY_MODE_SOLO}
              onClick={() => setMode(KEY_MODE_SOLO)}
            />
            <p>One player</p>
          </label>
        </div>
        <div>
          <label className="flex space-x-2">
            <input
              type="checkbox"
              checked={mode === KEY_MODE_DUO}
              onClick={() => setMode(KEY_MODE_DUO)}
            />
            <p>Two players</p>
          </label>
        </div>
        {mode === KEY_MODE_SOLO ? (
          <div>
            <p>Difficulty</p>
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
        <button onClick={onClick}>Start game</button>
      </div>
    </div>
  );
}

export default Settings;
