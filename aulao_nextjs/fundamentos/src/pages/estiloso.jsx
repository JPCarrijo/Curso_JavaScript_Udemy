import styles from '../styles/Estiloso.module.css';
import Layout from '../components/Layout';
// import Link from 'next/link';

export default function Estiloso() {

  return (
    <Layout  titulo="Exemplo de CSS Modularizado">
      <div className={styles.roxo}>
        {/* <Link href="/">Voltar</Link> */}
        <h1>Estilizando CSS Módulos</h1>
      </div>
    </Layout>
  )
}