import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home(){

    
    const {
        cliente, 
        clientes, 
        novoCliente, 
        selecionarCliente, 
        excluirCliente, 
        salvarCliente,
        tabelaVisivel,
        exibirTabela 
    } = useClientes()

    const exibirLayoutTabela =(
        <>
            <div className="flex justify-end">
                <Botao
                    onClick={novoCliente} 
                    className="mb-4" cor='green'>
                    Novo Cliente
                </Botao>
            </div>
            <Tabela clientes={clientes}
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente} />
        </>
    )

    return (
        <div className={`
            flex h-screen justify-center items-center
            bg-gradient-to-r from-purple-500 to-blue-600
            text-white
        `}>
            <Layout titulo="Cadastro de Pessoas">
                {tabelaVisivel ?(
                    exibirLayoutTabela
                ):(
                    <Formulario 
                        cliente={cliente}
                        clienteMudou={salvarCliente}
                        cancelado={exibirTabela}
                    />
                )}
                
            </Layout>
        </div>
    )
}