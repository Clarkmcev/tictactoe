import React from 'react';

type Props = {
  children: string | JSX.Element | JSX.Element[] 
  onClick: any
};

function Button({ children, onClick }: Props) {
  return (
    <button onClick={onClick} className="p-2 my-2 hover:bg-gray-800 text-gray-700 font-bold hover:text-gray-500 duration-100 transition-all bg-gray-800 w-full rounded-lg">
      {children}
    </button>
  );
}

export default Button;
