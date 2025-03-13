export default function Page() {
  return (
    <div className="container">
      <h1 className="titulos">Buscador de personajes</h1>
      <div>
        <form action="/personaje" method="get" className="search-form">
          <input type="text" name="name" placeholder="Buscar personajes" />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </div>
  );
}