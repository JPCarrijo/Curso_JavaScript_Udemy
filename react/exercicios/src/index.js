import React from 'react';
import { createRoot } from 'react-dom/client';

// import First from './components/First';
// import GoodMorning from './components/GoodMorning';
// import { BoaTarde, BoaNoite } from './components/Multiplos';
// import Saudacao from './components/Saudacao';
import Pai from './components/Pai';
import Filho from './components/Filho';

createRoot(document.getElementById('root')).render(
  <>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Jorge" />
      <Filho nome="Maria" />
      <Filho nome="Osvaldo" />
    </Pai>
  </>
)
