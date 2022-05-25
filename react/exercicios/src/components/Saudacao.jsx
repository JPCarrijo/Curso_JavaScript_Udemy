import React, { Component } from "react";

export default class Saudacao extends Component {

  state = {
    tipo: this.props.tipo,
    nome: this.props.nome
  }

  constructor(props) {
    super(props)

    this.setTipo = this.setTipo.bind(this);
    // this.setNome = this.setNome.bind(this);
  }

  setTipo(e) {
    this.setState({tipo: e.target.value}); // setState é uma função que atualiza o estado do componente
  }

  setNome(e) {
    this.setState({nome: e.target.value}); // setState é uma função que atualiza o estado do componente
  }
  
  render() {
    const { tipo, nome } = this.state;
    return (
      <>
        <h1>{tipo} {nome}</h1>
        <hr />
        <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
        <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
      </>
    );
  }
}