import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form/Form';
import Time from './components/Time/Time';
import Rodape from './components/Rodape/Rodape';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimario: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      nome: 'Front-End',
      corPrimario: '#82cffa',
      corSecundaria: '#e8f8ff'
    },
    {
      nome: 'Back-End',
      corPrimario: '#80bffa',
      corSecundaria: '#f8f4ff'
    },
    {
      nome: 'Data Science',
      corPrimario: '#a6d157',
      corSecundaria: '#f0f8e2'
    },
    {
      nome: 'Devops',
      corPrimario: '#e06b69',
      corSecundaria: '#fde7e8'
    },
    {
      nome: 'UX e Design',
      corPrimario: '#db6ebf',
      corSecundaria: '#fae9f5'
    },
    {
      nome: 'Mobile',
      corPrimario: '#ffba05',
      corSecundaria: '#fff5d9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimario: '#ff8a29',
      corSecundaria: '#ffeedf'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    // Pegando Todos colabores e colocando o novo no final
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Form nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {/* Poderia ser chamado corPrimario={time.corPrimario} não é uma palavra chave */}
      {times.map(time => <Time
        key={time.nome}
        nome={time.nome}
        corPrimario={time.corPrimario}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <Rodape />

    </div>
  );
}

export default App;
