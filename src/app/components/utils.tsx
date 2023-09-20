import { Grid } from "../page"

export const KEY_EASY_DIFFICULTY = 'easy'
export const KEY_MEDIUM_DIFFICULTY = 'medium'
export const KEY_HARD_DIFFICULTY = 'hard'

export const KEY_MODE_SOLO = 'solo'
export const KEY_MODE_DUO = 'duo'

interface signLookUp {
  [key: number] : string | null 
}

export const signLookUp : signLookUp = {
    0: null,
    1: 'X',
    2: 'O',
  };

export function translateSign(player: number) {
  return player === 1 ? 'X' : 'O';
}

export function scoreWriter(wins: number) {
  return wins !== 0 ? 'I'.repeat(wins) : ''
}

export function gridNotCompleted(grid: Grid, search: number) {
  console.log(grid.grid.some(row => row.includes(search)))
  return grid.grid.some(row => row.includes(search))
}