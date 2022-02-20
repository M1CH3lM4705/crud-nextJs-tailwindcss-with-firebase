import { ReactNode } from 'react';

interface InputProps {
  texto:string;
  tipo?: string | 'text';
  value: any;
  readonly?:boolean;
  className?:string;
  valorMudou?:(value:any) => void;
}

function Input({ texto, tipo,value, readonly, valorMudou, className }: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className='mb-2'>{texto}</label>
      <input 
        type={tipo} 
        value={value} 
        readOnly={readonly}
        onChange={e => valorMudou?.(e.target.value)}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-50
          px-4 py-2 ${readonly ? '': 'focus:bg-white'}
        `}/>
    </div>
  );
}

export default Input;
