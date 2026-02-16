# 🍩 App Simpsons - React

Una aplicación web desarrollada con **React** y **Vite** que consume la API de Los Simpson para mostrar un listado de personajes icónicos

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Características

- **Consumo de API:** Obtiene datos dinámicos desde [The Simpsons API](https://thesimpsonsapi.com/).
- **Diseño de Tarjetas:** Muestra la información de cada personaje en tarjetas estilizadas.
- **Listado de Frases:** Incluye las frases icónicas de cada personaje.
- **Responsive:** Adaptado para diferentes tamaños de pantalla.

## 🛠️ Tecnologías Utilizadas

- **React** (v19) - Biblioteca para construir interfaces de usuario.
- **Vite** - Entorno de desarrollo rápido.
- **CSS** - Estilos personalizados para componentes.
- **Fetch API** - Para realizar peticiones HTTP asíncronas.

## 🚀 Instalación y Ejecución

Sigue estos pasos para correr el proyecto en tu entorno local:

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd app-simpson
    ```

2.  **Instalar dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

4.  **Abrir en el navegador:**
    Visita `http://localhost:5173/` para ver la aplicación.

## 📂 Estructura del Proyecto

```
src/
├── assets/          # Imágenes y estilos globales
├── components/      # Componentes de React
│   ├── CardPersonaje.jsx    # Tarjeta individual de personaje
│   ├── ListadoPersonaje.jsx # Contenedor y lógica de listado
│   └── Footer.jsx           # Pie de página
├── services/        # Aislamos la lógica de la API
│   └── PersonajeService.js  # Función para obtener datos
├── App.jsx          # Componente principal
└── main.jsx         # Punto de entrada
```

## 🔗 API Reference

El proyecto consume el siguiente endpoint:

- **URL:** `https://thesimpsonsapi.com/api/characters`
- **Método:** `GET`
- **Datos obtenidos:** Nombre, imagen, edad, ocupación, frases, etc.

## ✒️ Autor

**Jhonatan** - Desarrollador Frontend

---

_Este proyecto fue creado con fines educativos para practicar el consumo de APIs en React._
