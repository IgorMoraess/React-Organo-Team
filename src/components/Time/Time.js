import Colaborador from '../Colaborador/Colaborador'
import './Time.css'
import React from 'react'

const Time = (props) => {

  const css = { backgroundColor: props.corSecundaria }

  return (
    // Pode ser assim simplificado <section className='time' style={{ backgroundColor: props.corSecundaria }}>
    (props.colaboradores.length > 0) ? <section className='time' style={css}>
      <h3 style={{ borderColor: props.corPrimario }}>{props.nome}</h3>
      <div className='colaboradores'>
        {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.corPrimario} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
      </div>
    </section>
    : ''
  )
}

export default Time
