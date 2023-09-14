'use client'

import React, { useState } from 'react'

type CardProps = {
    position: number[]
    played: boolean;
    player: 'X' | 'O' | null;
}

type Sign = {
    sign: 'X' | 'O' | null
}

export const Card = ({position, played, player}: CardProps ) => {
    const [sign, setSign] = useState<Sign>({sign: null})

    function handlePlay(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setSign({sign: 'X'})
    }


  return (
    <button onClick={handlePlay} className=" w-44 h-44 rounded-lg m-1 bg-gray-800 hover:bg-gray-700 duration-150 transition-all">
        {/* {position} */}
        {player}
        {sign.sign}
    </button>
  )
}

export default Card