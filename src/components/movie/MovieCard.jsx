import { useNavigate } from "react-router-dom"
import Button from "../button/Button"
import PropTypes from "prop-types"
import SkeletonLoading from "../skeletonLoading/SkeletonLoading"

const MovieCard = ({ item }) => {
  const {
    poster_path,
    title,
    vote_average,
    release_date,
    first_air_date,
    name,
    id,
  } = item
  const navDetail = useNavigate()
  return (
    <>
      <div className="flex flex-col h-full p-3 text-white rounded-lg movie-card bg-slate-700">
        <div
          className="w-full pt-[100%] bg-cover rounded-lg"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${poster_path}")`,
          }}
        ></div>
        <h2 className="text-lg font-bold capitalize opacity-80">
          {title || name}
        </h2>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between mt-auto text-sm opacity-80">
            <span>
              {new Date(release_date || first_air_date).getFullYear()}
            </span>
            <span>{vote_average}</span>
          </div>

          <Button bgColor="secondary" onClick={() => navDetail(`/movie/${id}`)}>
            Watch now
          </Button>
        </div>
      </div>
    </>
  )
}

MovieCard.propTypes = {
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  }),
}

export default MovieCard

export const SkeletonCard = () => {
  return (
    <>
      <div className="flex flex-col h-full p-3 text-white rounded-lg movie-card bg-slate-700">
        <SkeletonLoading className="w-full pt-[100%] bg-cover rounded-lg" />
        <SkeletonLoading className="w-full h-6 my-2" />
        <div className="flex flex-col flex-1">
          <div className="flex justify-between mt-auto text-sm opacity-80">
            <SkeletonLoading className="w-8 h-5" />
            <SkeletonLoading className="w-8 h-5" />
          </div>
          <SkeletonLoading className="w-full px-6 py-3 mt-3 rounded-lg h-14" />
        </div>
      </div>
    </>
  )
}
