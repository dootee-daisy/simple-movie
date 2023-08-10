import { useState } from "react"
import MovieList from "./components/movie/MovieList"
import Banner from "./components/banner/Banner"

function App() {
  return (
    <>
      <header className="flex gap-10 p-3 mb-10 text-white header">
        <span className="text-primary">TV Series</span>
        <span>Movie</span>
        <span>Anime</span>
      </header>
      <Banner></Banner>
      <section className="movies-layout page-container">
        <h2 className="inline-block my-5 text-2xl font-bold text-white capitalize">
          Now playing
        </h2>
        {/*  style={`--a: ${}`} */}
        <MovieList></MovieList>
      </section>
      <section className="movies-layout page-container">
        <h2 className="inline-block my-5 text-2xl font-bold text-white capitalize">
          Top rated movies
        </h2>
        {/*  style={`--a: ${}`} */}
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="movies-layout page-container">
        <h2 className="inline-block my-5 text-2xl font-bold text-white capitalize">
          Popular
        </h2>
        {/*  style={`--a: ${}`} */}
        <MovieList type="popular"></MovieList>
      </section>
    </>
  )
}

export default App
