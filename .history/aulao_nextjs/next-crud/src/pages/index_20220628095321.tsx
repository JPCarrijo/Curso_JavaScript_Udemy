import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente();

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

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

  function clienteSelecionado(cliente: Cliente) {
    // console.log(`Cliente selecionado: ${cliente.nome}`);
    setCliente(cliente);
    setVisivel("form");
  }

  async function clienteExcluido(cliente: Cliente) {
    // console.log(`Cliente excluído: ${cliente.nome}`);
    await repo.excluir(cliente)
    set

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

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
   `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Button cor="green" onClick={novoCliente}>
                Novo Cliente
              </Button>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelar={() => setVisivel("tabela")}
            clienteMudou={salvarCliente}
          ></Formulario>
        )}
      </Layout>
    </div>
  );
}
