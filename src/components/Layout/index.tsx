import { ReactNode } from 'react';
import Titulo from '../Titulo';

interface LayoutProps {
  children: ReactNode;
  titulo: string;
}

function Layout({titulo, children }: LayoutProps) {
  return (
    <div className={`
      flex flex-col w-2/3
      bg-white text-gray-800 rounded-md
    `}>
      <Titulo>{titulo}</Titulo>
      <div className='p-6'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
