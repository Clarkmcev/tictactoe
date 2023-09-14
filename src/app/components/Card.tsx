'use client'

import React, { useState } from 'react'

type CardProps = {
    position: number[]
    played: boolean;
    signPlayer: 'X' | 'O' | null;
    turn: number
    setTurn: React.Dispatch<React.SetStateAction<number>>
}

type Sign = {
    sign: 'X' | 'O' | null
}

export const Card = ({position, played, signPlayer, turn ,setTurn }: CardProps ) => {
    const [sign, setSign] = useState<Sign>({sign: null})
    const [cardPlayed, setCardPlayed] = useState(false)


    function handlePlay(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setTurn((prev) => prev + 1)

        const signToBePlayed = turn % 2 === 0 ? 'X' : 'O'

        setSign({sign: signToBePlayed})
        setCardPlayed(true)
    }

  return (
    <button onClick={handlePlay} className={`w-44 h-44 rounded-lg m-1 bg-gray-800 hover:bg-gray-700 duration-150 transition-all ${cardPlayed && 'bg-gray-700'}`}>
        {/* {position} */}
        {/* {signPlayer} */}
        {sign.sign}
    </button>
  )
}

export default Card