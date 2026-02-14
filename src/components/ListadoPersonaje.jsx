import React, { useEffect, useState } from 'react'
import CardPersonaje from './CardPersonaje'
import { obtemerPersonajes } from '../services/PersonajeService'
import '../assets/styles/ListadoPersonaje.css'
const ListadoPersonaje = () => {
  const [personajes, setPersonajes] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const datos = await obtemerPersonajes()
        setPersonajes(datos)
      } catch (error) {
        setError("No se pudieron cargar los personajes...")
      }
    }
    cargarDatos()
  }, [])

  if (error) {
    return <p>{error}</p>
  }
  return (
    <div className="container__personajes">
      <h1 className="container__title">Personajes de los Simpos</h1>
      <div className="container__personaje">
        {personajes.map((personaje) => (
          <CardPersonaje key={personaje.id} personaje={personaje}></CardPersonaje>
        ))}
      </div>
    </div>
  )
}

export default ListadoPersonaje