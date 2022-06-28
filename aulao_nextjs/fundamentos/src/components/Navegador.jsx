import Link from 'next/link';
import styles from '../styles/Navegador.module.css';

export default function Navegador(props) {

  const cor = props => {
    if(props.cor) {
      return props.cor;
    } else {
      return 'dodgerblue';
    }
  }

  return (
    <Link href={props.destino}>
      <div className={styles.navegador} style={{backgroundColor: `${cor(props)}`}}>
        {props.texto}
      </div>
    </Link>
  )
}