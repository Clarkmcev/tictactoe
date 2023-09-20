import { Grid } from '../page';

export const KEY_EASY_DIFFICULTY = 'easy';
export const KEY_MEDIUM_DIFFICULTY = 'medium';
export const KEY_HARD_DIFFICULTY = 'hard';

export const KEY_MODE_SOLO = 'solo';
export const KEY_MODE_DUO = 'duo';
export const KEY_COLUMN = 'column';
export const KEY_ROW = 'row';
export const KEY_DIAGONAL = 'diagonal';

interface winLine {
  [key: string]: any
}

export const winLine : winLine = {
  [KEY_ROW]: {
    0: {
      x1: '40',
      y1: '100',
      x2: '550',
      y2: '100',
    },
    1: {
      x1: '40',
      y1: '300',
      x2: '550',
      y2: '300',
    },
    2: {
      x1: '40',
      y1: '500',
      x2: '550',
      y2: '500',
    },
  },
  [KEY_COLUMN]: {
    0: {
      x1: '100',
      y1: '40',
      x2: '100',
      y2: '570',
    },
    1: {
      x1: '300',
      y1: '40',
      x2: '300',
      y2: '570',
    },
    2: {
      x1: '495',
      y1: '40',
      x2: '495',
      y2: '570',
    },
  },
  [KEY_DIAGONAL]: {
    0: {
      x1: '47',
      y1: '550',
      x2: '550',
      y2: '47',
    },
    1: {
      x1: '40',
      y1: '40',
      x2: '550',
      y2: '550',
    },
  },
};

interface signLookUp {
  [key: number]: string | null;
}

export const signLookUp: signLookUp = {
  0: null,
  1: 'X',
  2: 'O',
};

export function translateSign(player: number) {
  return player === 1 ? 'X' : 'O';
}

export function scoreWriter(wins: number) {
  return wins !== 0 ? 'I'.repeat(wins) : '';
}

export function gridNotCompleted(grid: Grid, search: number) {
  return grid.grid.some((row) => row.includes(search));
}
