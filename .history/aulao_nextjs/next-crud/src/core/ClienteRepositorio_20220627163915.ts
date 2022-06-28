import Cliente from '../model/Cliente';

export default interface ClienteRepositorio {
  salvar(cliente: Cliente): Promise<Cliente>;
}