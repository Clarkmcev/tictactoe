import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { winLine } from '../utils';

type Props = {
  draw: any;
  type: any;
};

type Coordinates = {
  x1: number
  y1: number
  x2: number
  y2: number
}

function WinnerLine({ draw, type }: Props) {
  const [position, setPosition] = useState<Coordinates>({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  function translatePosition() {}

  useEffect(() => {
    if (type) {
      setPosition(winLine[type.type][type.n]);
    }
  }, [position, type]);

  if (type) {
    return (
      <motion.svg
        width="560"
        height="560"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1={position.x1}
          y1={position.y1}
          x2={position.x2}
          y2={position.y2}
          stroke="#FFFFFF"
          variants={draw}
          custom={1}
        />
      </motion.svg>
    );
  }
}

export default WinnerLine;
