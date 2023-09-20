import React from 'react';

type Props = {
  children: string | JSX.Element | JSX.Element[] 
  onClick: any
  disabled: boolean
  icon: any
};

function Button({ icon, children, onClick, disabled }: Props) {
  return (
    <button onClick={onClick} className={`p-2 my-2 hover:bg-gray-800 font-bold  duration-100 transition-all bg-gray-800 w-full rounded-lg ${disabled ? 'text-gray-700' : 'text-gray-500 hover:text-gray-400'}`}>
      <div className="flex justify-center items-center space-x-2">
      {/* <div>{icon}</div> */}
      <div>{children}</div>
      </div>
    </button>
  );
}

export default Button;
