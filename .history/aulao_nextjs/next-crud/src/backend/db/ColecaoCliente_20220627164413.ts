import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "../../core/Cliente";

export default class ColecaoCliente implements ClienteRepositorio {

  conversor = {
    toFirestore: (cliente: Cliente) {
      return 
    }
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    return null;
  }

  async excluir(cliente: Cliente): Promise<void> {
    return null;
  }

  async obterTodos(): Promise<Cliente[]> {
    return null;
  }
}