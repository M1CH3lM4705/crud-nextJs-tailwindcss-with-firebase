import { useState } from 'react';
import Cliente from '../../core/Cliente';
import Botao from '../Botao';
import Input from '../Input';

interface FormularioProps {
  cliente:Cliente;
  clienteMudou?:(cliente:Cliente) => void;
  cancelado?:() => void;
}

function Formulario({ cliente, cancelado, clienteMudou }: FormularioProps) {
  const id = cliente?.getId
  const [nome, setNome] = useState(cliente?.getNome ?? '');
  const [idade, setIdade] = useState(cliente?.getIdade ?? '');

  return (
    <div>
      {id ?(
        <Input readonly texto='Código' value={id} className="mb-5"/>
      ):false}
      <Input texto='Nome' value={nome} valorMudou={setNome} className="mb-5"/>
      <Input texto='Idade' tipo="number" value={idade} valorMudou={setIdade}/>
      <div className='flex justify-end mt-3'>
        <Botao cor='blue' className='mr-2'
          onClick={() => clienteMudou?.(new Cliente(nome, +idade, id))}>
          {id ? 'Alterar':'Salvar'}
        </Botao>
        <Botao onClick={cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  );
}

export default Formulario;
