import React, { useEffect, useState } from 'react'
import CardPersonaje from './CardPersonaje'
import { obtemerPersonajes } from '../services/PersonajeService'

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