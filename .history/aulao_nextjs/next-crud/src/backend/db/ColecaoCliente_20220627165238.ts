import ClienteRepositorio from "../../core/ClienteRepositorio";
import Cliente from "../../core/Cliente";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepositorio {

  #conversor = {
    toFirestore: (cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade
      }
    },
    fromFirestore: (snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Cliente {
      const dados = snapshot.data(options)
      return new Cliente(snapshot.id, dados.nome, dados.idade)
    }
  }

  async salvar(cliente: Cliente): Promise<Cliente> {
    if(cliente?)
    return this.colecao;
  }

  async excluir(cliente: Cliente): Promise<void> {
    return this.colecao().doc(cliente.id).delete();
  }

  async obterTodos(): Promise<Cliente[]> {
    return null;
  }

  private colecao() {
    return firebase
      .firestore().collection('clientes')
      .withConverter(this.#conversor)
  }
}