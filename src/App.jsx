import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BarraDeStatus from './componentes/BarraDeStatus'
import Apresentacao from './componentes/Apresentacao'
import Agenda from './componentes/Agenda'
import Card from './componentes/Card'
import Perfil02 from './assets/Perfil02.svg';
import CardPresencial from './componentes/CardPresencial'
import Perfil03 from './assets/perfil03.svg';
import Perfil04 from './assets/perfil-4.svg';
import Perfil05 from './assets/perfil-5.svg';
import Botao from './componentes/Botao';
import Rodape from './componentes/Rodape';
import MenuLateral from './componentes/MenuLateral'

function App() {


  return (
    <>
      <div className='conteudo'>
      <header className='cabecalho'>
      <BarraDeStatus/>
      <Apresentacao/>
      </header>
      <Agenda
      dia='Hoje'/>
      <div className='grid-container'>
      <Card
      nome='Luciana Dias'
      horario='14:00 - 15:00 (1 hora)'
      perfil={Perfil02}
      />
      <CardPresencial
      nome='Larissa Santana'
      horario='16:00 - 17:00 (1 hora)'
      perfil={Perfil03}
      />
      <Card
      nome='Marcos Correia'
      horario='17:00 - 18:00 (1 hora)'
      perfil={Perfil04}/>
      <Card
      nome='Luciana Dias'
      horairo='14:00 - 15h (1 hora)'
      perfil={Perfil02}/>
      <Card
      nome='Marcos Correia'
      horario='17:20 - 18:00 (40 minutos)'
      perfil={Perfil04}/>
      <CardPresencial
      nome='Larissa Santana'
      horario='16:00 - 17:00 (1 hora)'
      perfil={Perfil03}
      />
      </div>
      <Agenda
      dia='Amanhã'/>
      <div className='grid-container'>
      <CardPresencial
      nome='Carla Lemos'
      horario='18:00 - 19:00 (1 hora)'
      perfil={Perfil05}
      />
      <Card
      nome='Luciana Dias'
      horario='14:00 - 15:00 (1 hora)'
      perfil={Perfil02}
      />
      <Card
      nome='Marcos Correia'
      horario='17:20 - 18:00 (40 minutos)'
      perfil={Perfil04}/>
      <CardPresencial
      nome='Larissa Santana'
      horario='16:00 - 17:00 (1 hora)'
      perfil={Perfil03}
      />
      </div>
      <Agenda
      dia='Quarta-feira'/>
      <div className='grid-container'>
      <CardPresencial
      nome='Carla Lemos'
      horario='18:00 - 19:00 (1 hora)'
      perfil={Perfil05}
      />
      <Card
      nome='Luciana Dias'
      horario='14:00 - 15:00 (1 hora)'
      perfil={Perfil02}
      />
       <Card
      nome='Marcos Correia'
      horario='17:20 - 18:00 (40 minutos)'
      perfil={Perfil04}/>
      <CardPresencial
      nome='Larissa Santana'
      horario='16:00 - 17:00 (1 hora)'
      perfil={Perfil03}
      />
      </div>
      <Botao/>
      </div>
      <Rodape/>
      <MenuLateral/>
      
    </>
  )
}

export default App
