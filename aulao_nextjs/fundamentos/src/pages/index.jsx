import Navegador from '../components/Navegador';
import styles from '../styles/Navegador.module.css';

export default function Início() {
// return "Início III"
  return (
    <div className={styles.inicio}>
      <Navegador texto="Estiloso" destino="/estiloso" cor="#3532f3"/>
      <Navegador texto="JSX" destino="/jsx" cor=" #32f332"/>
      <Navegador texto="Exemplo" destino="/exemplo" cor="crimson"/>
      <Navegador texto="Navegacao #01" destino="/navegacao" cor="gray"/>
      <Navegador texto="Navegacao #02" destino="/cliente/sp-02/123456" cor="orange"/>
      <Navegador texto="Componente com Estado" destino="/estado" cor="#b04b3e"/>
      <Navegador texto="Integração com API" destino="/integracao" cor="#4e3763"/>
      <Navegador texto="Conteúdo Estático" destino="/estatico" cor="#6fa12d"/>
    </div>
  )
}