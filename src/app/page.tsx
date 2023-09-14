import Image from 'next/image';
import Card from './components/Card';

export default function Home() {
  const grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 ">
      <div className="text-white text-xl">My Tic-Tac-Toe</div>
      <div>
        {grid.map((row, rowIndex) => (
          <div key={1} className="flex">
            {grid.map((col, colIndex) => (
              <Card position={[rowIndex, colIndex]} player={null} played={true} key={String(col) + String(colIndex)} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
