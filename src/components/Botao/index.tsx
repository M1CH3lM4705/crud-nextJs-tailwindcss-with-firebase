import { ReactNode } from 'react';

interface BotaoProps {
  children: ReactNode;
  cor?:'green'| 'blue'| 'gray';
  className?:string;
  onClick?:() => void;
}

function Botao({ children, className, cor, onClick }: BotaoProps) {
  const color = cor ?? 'gray'; 
  return (
    <button onClick={onClick} className={`
      bg-gradient-to-r from-${color}-400 to-${color}-700
      text-white px-4 py-2 rounded-md 
      ${className}
    `}>
      {children}
    </button>
  );
}

export default Botao;
