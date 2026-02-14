import React from 'react'

const CardPersonaje = ({ personaje }) => {
  return (
    <div className="card__personaje">
      <h2 className="personaje__nombre">{personaje.name}</h2>
      <div className="personaje__datos-personales">
        <ul className="listado__datos">
          <li className="listad__item"><p>Edad: {personaje.age}</p></li>
          <li className="listad__item"><p>Nacimiento: {personaje.birthdate}</p></li>
          <li className="listad__item"><p>Genero: {personaje.gender}</p></li>
          <li className="listad__item"><p>Ocupacion: {personaje.occupation}</p></li>
        </ul>
      </div>
    </div>
  )
}

export default CardPersonaje