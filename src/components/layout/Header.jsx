import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <>
      <header className="flex gap-10 p-3 text-white page-container header">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Movies
        </NavLink>
      </header>
    </>
  )
}

export default Header
