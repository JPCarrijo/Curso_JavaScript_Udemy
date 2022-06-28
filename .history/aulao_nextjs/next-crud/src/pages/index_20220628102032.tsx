import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import useClientes from "../hooks/useClientes";
import useTabelaOuForm from "../hooks/useTabelaOuForm";

export default function Home() {
  const {
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,
  } = useClientes();

  const {
    exibirFormulario} = useTabelaOuForm();
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
              selecionarCliente={selecionarCliente}
              excluirCliente={excluirCliente}
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
