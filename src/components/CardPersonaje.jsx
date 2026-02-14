import React from 'react'
import '../assets/styles/CardPersonaje.css'

const CardPersonaje = ({ personaje }) => {
  const frasesPersonaje = personaje.phrases;
  return (
    <div className="card__personaje">
      <h2 className="personaje__nombre">{personaje.name}</h2>
      <div className="personaje__img">
        <img src={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`} alt="Img Personaje" />
      </div>
      <div className="personaje__datos-personales">
        <div className="datos__personales">
          <ul className="listado__datos">
            <li className="listad__item"><p>Edad: <span>{personaje.age}</span></p></li>
            <li className="listad__item"><p>Nacimiento: <span>{personaje.birthdate}</span></p></li>
            <li className="listad__item"><p>Genero: <span>{personaje.gender}</span></p></li>
            <li className="listad__item"><p>Ocupacion: <span>{personaje.occupation}</span></p></li>
          </ul>
        </div>
        <div className="personaje__frases">
          <h3>Frases Iconicas: </h3>
          <ul className="frases__list">
            {frasesPersonaje.map((frase, index) => (
              <li className="listad__item" key={index}>{frase}</li>))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardPersonaje