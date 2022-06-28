import { useState } from "react";
import Layout from "../components/Layout";
export default function Integracao() {

  const [valor, setValor] = useState({});
  const [codigo, setCodigo] = useState(0);

  async function obterCliente() {

    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const dados = await resp.json(); // requisição assincrona
    setValor(dados);

    // fetch(`http://localhost:3000/api/clientes/${codigo}`)
    //   .then(resp => resp.json())
    //   // .then(data => console.log(data))
    //   .then(data => setValor(data))
  }



  console.log(valor);
  return (
    <Layout>
      <input type="number"
        value={codigo} onChange={e => setCodigo(e.target.value)} />
      <button onClick={obterCliente}>Obter Cliente</button>

      <ul>
        <li>Código: {valor.id}</li>
        <li>Nome: {valor.nome}</li>
        <li>E-mail: {valor.email}</li>
      </ul>
    </Layout>
  )
}