import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { winLine } from '../utils';

type Props = {
  draw: any;
  type: any;
};

function WinnerLine({ draw, type }: Props) {
  const [position, setPosition] = useState({
    x1: '',
    y1: '',
    x2: '',
    y2: '',
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
