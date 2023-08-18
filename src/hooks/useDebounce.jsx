import React from "react"

export default function useDebounce(initalizaValue, timeDelay) {
  const [value, setValue] = React.useState("")
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setValue(initalizaValue)
    }, timeDelay)

    return () => {
      return clearTimeout(timer)
    }
  }, [initalizaValue, timeDelay])
  return value
}
