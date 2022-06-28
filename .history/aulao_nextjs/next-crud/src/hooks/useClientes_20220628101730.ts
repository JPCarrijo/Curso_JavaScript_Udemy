import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const {
    exibirFormulario,
    exibirTabela,
    tabelaVisivel,
    formVisivel
  } = useTabelaOuForm();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);


  useEffect(() => {
    repo.obterTodos().then(setClientes);
  }, [])

  function obterTodos() {
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      setVisivel('tabela')
    });
  }
  // const clientes = [
  //   new Cliente("1", "João", 45),
  //   new Cliente("2", "Maria", 32),
  //   new Cliente("3", "José", 19),
  //   new Cliente("4", "Pedro", 12),
  //   new Cliente("5", "Paulo", 67),
  // ];

  function selecionarCliente(cliente: Cliente) {
    // console.log(`Cliente selecionado: ${cliente.nome}`);
    setCliente(cliente);
    setVisivel("form");
  }

  async function excluirCliente(cliente: Cliente) {
    // console.log(`Cliente excluído: ${cliente.nome}`);
    await repo.excluir(cliente)
    obterTodos();

  }

  async function salvarCliente(cliente: Cliente) {
    // console.log(`Cliente salvo: ${cliente.nome}`);
    await repo.salvar(cliente)
    obterTodos();
    // setVisivel('tabela')
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel('form');
  }

  return {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos
  }
}