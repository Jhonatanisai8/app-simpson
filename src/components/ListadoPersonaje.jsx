import React, { useEffect, useState } from 'react'
import CardPersonaje from './CardPersonaje'

const ListadoPersonaje = () => {
  const API_URL = 'https://thesimpsonsapi.com/api/characters'
  const [personajes, setPersonajes] = useState([])

  async function obtenerPersonajes() {
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const resultado = await response.json();
      console.log(resultado);
      setPersonajes(resultado.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerPersonajes()
  }, [])
  return (
    <div>
      <h1>Personajes de los Simpos</h1>
      <div className="listado__personajes">
        {personajes.map((personaje) => (
          <CardPersonaje key={personaje.id} personaje={personaje}></CardPersonaje>
        ))}
      </div>
    </div>
  )
}

export default ListadoPersonaje