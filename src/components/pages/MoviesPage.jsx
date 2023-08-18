import React from "react"
import { fetcher, tmdbAPI } from "../../conf"
import MovieCard, { SkeletonCard } from "../movie/MovieCard"
import useSWR from "swr"
import useDebounce from "../../hooks/useDebounce"
import ReactPaginate from "react-paginate"
import { v4 } from "uuid"
const MoviesPage = () => {
  const [filter, setFilter] = React.useState("")
  const [url, setUrl] = React.useState(tmdbAPI.getMovies(null, "upcoming"))
  const { data, isLoading } = useSWR(url, fetcher)

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const filterDebounce = useDebounce(filter, 500)
  const [nextPage, setNextPage] = React.useState(1)
  React.useEffect(() => {
    if (filterDebounce) {
      setUrl(tmdbAPI.searchMovies(nextPage, filterDebounce))
    } else {
      setUrl(tmdbAPI.getMovies(nextPage, "upcoming"))
    }
  }, [filterDebounce, nextPage])
  const Movies = data?.results || []
  const [itemOffset, setItemOffset] = React.useState(0)
  const [pageCount, setPageCount] = React.useState(0)
  const itemsPerPage = 20
  React.useEffect(() => {
    if (!data || !data.total_results) return
    setPageCount(Math.ceil(data.total_results / itemsPerPage))
  }, [data, itemOffset])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results
    setItemOffset(newOffset)
    setNextPage(event.selected + 1)
  }

  return (
    <div className="page-container">
      <div className="flex mb-10 overflow-hidden rounded-lg">
        <input
          onChange={handleFilter}
          type="text"
          name=""
          className="w-full p-3 text-white bg-transparent outline-none focus:placeholder:duration-300 focus:placeholder:transition-all focus:placeholder:translate-x-3 bg-slate-900"
          placeholder="Type your name search..."
        />
        <button className="p-3 bg-primary">
          <svg
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {!isLoading &&
          Movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
        {isLoading &&
          new Array(itemsPerPage)
            .fill(0)
            .map(() => <SkeletonCard key={v4()}></SkeletonCard>)}
      </div>
      <div className="mt-10">
        <ReactPaginate
          className="paginate"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  )
}

export default MoviesPage
