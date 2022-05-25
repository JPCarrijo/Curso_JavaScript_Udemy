import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
// export default props =>
//   <>
//     <h1>Bom dia {props.nome}, tem {props.idade} anos.</h1>
//     <h2>Até Breve!</h2>
//   </>

// eslint-disable-next-line import/no-anonymous-default-export
export default props => [
  <h1 key="h1">Bom dia {props.nome}, tem {props.idade} anos.</h1>,
  <h2 key="h2">Até Breve!</h2>
]