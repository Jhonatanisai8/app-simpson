const API_URL = "https://thesimpsonsapi.com/api/characters";

export const obtemerPersonajes = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error en el servicio de personajes:", error);
    throw error;
  }
};
