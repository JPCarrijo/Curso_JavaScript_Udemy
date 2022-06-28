import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../core/Cliente";
import Button from "./Button";

interface FormularioProps {
  cliente: Cliente
  clienteMudou?: (cliente: Cliente) => void
  cancelar?: () => void
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? (
        <Entrada somenteLeitura texto="Código" valor={id} className="mb-5" />
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-5"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />
      <div className="flex justify-end mt-7">
        <Button cor="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(id, nome, +idade))}>{id ? 'Alterar' : 'Salvar'}</Button>
        <Button cor="gray" onClick={props.cancelar}>Cancelar</Button>
      </div>
    </div>
  );
}
