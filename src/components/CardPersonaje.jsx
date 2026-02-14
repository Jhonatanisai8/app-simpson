import React from 'react'

const CardPersonaje = ({ personaje }) => {
  const frasesPersonaje = personaje.phrases;
  return (
    <div className="card__personaje">
      <h2 className="personaje__nombre">{personaje.name}</h2>
      <div className="personaje__img">
        <img src={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`} alt="Img Personaje" />
      </div>
      <div className="personaje__datos-personales">
        <ul className="listado__datos">
          <li className="listad__item"><p>Edad: {personaje.age}</p></li>
          <li className="listad__item"><p>Nacimiento: {personaje.birthdate}</p></li>
          <li className="listad__item"><p>Genero: {personaje.gender}</p></li>
          <li className="listad__item"><p>Ocupacion: {personaje.occupation}</p></li>
        </ul>
      </div>
      <div className="personaje__frases">
        <h3>Frases Iconicas: </h3>
        <ol>
          {frasesPersonaje.map((frase,index) => (
            <li key={index}>{frase}</li>))
          }
        </ol>
      </div>
    </div>
  )
}

export default CardPersonaje