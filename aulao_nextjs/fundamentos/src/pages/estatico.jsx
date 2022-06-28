import Layout from "../components/Layout";

export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico(props) {

  return (
    <Layout titulo="Conteúdo Estático">
      <h1>{props.numero}</h1>
    </Layout>
  )
}