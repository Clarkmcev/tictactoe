import Cross from './Cross';
import Circle from './Circle';
// import { draw } from './utils';

type Props = {
  value: number;
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Icon({ value }: Props) {
  switch (value) {
    case 0:
      return '';
    case 1:
      return <Cross draw={draw} />;
    case 2:
      return <Circle draw={draw} />;
  }
}
