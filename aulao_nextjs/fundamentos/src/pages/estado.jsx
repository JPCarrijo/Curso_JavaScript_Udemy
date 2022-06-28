import Layout from '../components/Layout';
import { useState } from 'react';

export default function Estado() {
  
  const [valor, setValor] = useState(3); // React Hooks
  const incrementar = () => {
    setValor(valor + 1)
    
  } 

  return (
    <Layout titulo="Componente com estado">
      <div>{valor}</div>
      <button onClick={incrementar}> Incrementar </button>
    </Layout>
  )
}