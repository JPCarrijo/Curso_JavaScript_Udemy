import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "./Cliente";

export default class ColecaoCliente implements ClienteRepositorio {
  async salvar(cliente: Cliente): Promise<Cliente> {
    return null;
  }

  async
}