import React from "react"

const Button = ({
  onClick,
  className,
  bgColor = "primary",
  type = "button",
  children,
}) => {
  let bgClassName = "bg-primary"
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary"
      break
    case "secondary":
      bgClassName = "bg-secondary"
      break
    default:
      break
  }
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`w-full px-6 py-3 mt-3 text-2xl font-bold rounded-lg ${bgClassName} ${className}`}
      >
        {children}
      </button>
    </>
  )
}

export default Button
