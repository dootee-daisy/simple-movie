import React from "react"

const MovieCart = ({ item }) => {
  const { poster_path, title, vote_average, release_date } = item
  return (
    <>
      <div className="flex flex-col h-full p-3 text-white rounded-lg movie-card bg-slate-700">
        <div
          className="w-full pt-[100%] bg-cover rounded-lg"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${poster_path}")`,
          }}
        ></div>
        <h2 className="text-lg font-bold capitalize opacity-80">{title}</h2>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between mt-auto text-sm opacity-80">
            <span>{new Date(release_date).getFullYear()}</span>
            <span>{vote_average}</span>
          </div>
          <button className="w-full px-6 py-3 mt-3 text-2xl font-bold rounded-lg bg-primary">
            Watch now
          </button>
        </div>
      </div>
    </>
  )
}

export default MovieCart
