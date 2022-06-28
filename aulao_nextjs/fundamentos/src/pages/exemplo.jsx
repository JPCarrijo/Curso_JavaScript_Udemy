import Cabecalho from '../components/Cabecalho';
import Layout from '../components/Layout';

export default function Exemplo() {
  return (
    // <h1>Exemplo</h1>
    <Layout titulo="Usando Componentes">
      <Cabecalho titulo="Nextjs & React"/>
      <Cabecalho titulo="Aprenda Nextjs na prática"/>
    </Layout>
  )
}