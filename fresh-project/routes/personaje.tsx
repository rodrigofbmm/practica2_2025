import axios from "npm:axios";
import { Handlers, PageProps } from "$fresh/server.ts";

interface Props {
  character: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  } | null;
}

export const handler: Handlers = {
  GET: async (request, context) => {
    const url = new URL(request.url);
    const name = url.searchParams.get("name") || "";

    const response = await axios.get(`https://swapi.dev/api/people/?search=${name}&format=json`);
    const character = response.data.results[0] || null;

    return context.render({ character });

  },
};

export default function Page(props: PageProps<{ character: any }>) {
  const { character } = props.data;

  return (
    <div className="container">
      <h1 className="titulos">Buscador de personajes</h1>
      <div className="mostrar">
        {character ? (
          <div className="character-info">
            <h1>{character.name}</h1>
            <p>Altura: {character.height}</p>
            <p>Peso: {character.mass}</p>
            <p>Color de cabello: {character.hair_color}</p>
            <p>Color de piel: {character.skin_color}</p>
            <p>Color de ojos: {character.eye_color}</p>
            <p>Año de nacimiento: {character.birth_year}</p>
            <p>Género: {character.gender}</p>
          </div>
        ) : (
          <p className="error-message">No se ha encontrado el personaje</p>
        )}
      </div>
    </div>
  );
}