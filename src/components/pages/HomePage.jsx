import MovieList from "../movie/MovieList"

const HomePage = () => {
  return (
    <>
      <section className="movies-layout page-container">
        <h2 className="inline-block my-5 text-2xl font-bold text-white capitalize">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container">
        <h2 className="inline-block my-5 text-2xl font-bold text-white capitalize">
          Top rated movies
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container">
        <h2 className="inline-block my-5 text-2xl font-bold text-white capitalize">
          Popular
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  )
}

export default HomePage
