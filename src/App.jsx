import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
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
      setPersonajes(personajes)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    obtenerPersonajes()
  }, [])
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
