import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepository from "../core/ClienteRepository";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes(){
    const repo: ClienteRepository = new ColecaoCliente();

    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm();

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>();

    useEffect(obterTodos,[])

    function obterTodos(){
        repo.obterTodos().then(clientes => {
            setClientes(clientes);
            exibirTabela();
        });
    }

    function selecionarCliente(cliente:Cliente){
        setCliente(cliente);
        exibirFormulario();
    }

    function novoCliente(){
        setCliente(Cliente.vazio());
        exibirFormulario();
    }

    async function excluirCliente(cliente:Cliente){
        await repo.excluir(cliente)
        obterTodos()
    }

    async function salvarCliente(cliente:Cliente){
        await repo.salvar(cliente);
        obterTodos();
    }

    return{
        tabelaVisivel,
        exibirTabela,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos
    }
}