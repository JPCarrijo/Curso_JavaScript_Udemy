import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "../../core/Cliente";

export default class ColecaoCliente implements ClienteRepositorio {
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