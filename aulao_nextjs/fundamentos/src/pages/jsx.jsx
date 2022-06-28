import Layout from '../components/Layout';

export default function Jsx() {
  const a = 3
  const b = 4
  const frase = <h1>JSX é um conceito central</h1>
  function subtitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>
  }
  
  return (
    <Layout titulo="Entendendo o JSX">
      {frase}
      {subtitulo()}
      {/* {a ** b} */}
      {/* {"muito legal".toUpperCase()} */}
      <p>
        {JSON.stringify({ nome: "João", idade: 20 })}
      </p>
    </Layout>
  )
}