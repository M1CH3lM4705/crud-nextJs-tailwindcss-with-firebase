import { ReactNode } from 'react';

interface TituloProps {
  children: ReactNode;
}

function Titulo({ children }: TituloProps) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className='pl-5 py-2 text-2xl'>
        {children}
      </h1>
      <hr className='border-2 border-purple-500' />
    </div>
  );
}

export default Titulo;
