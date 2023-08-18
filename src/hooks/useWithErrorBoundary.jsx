import { withErrorBoundary } from "react-error-boundary"

export default function useWithErrorBoundary({ ExampleComponent, name }) {
  const ComponentWithErrorBoundary = withErrorBoundary(ExampleComponent, {
    fallback: <div>{`Something went wrong with ${name}`}</div>,
  })
  return ComponentWithErrorBoundary
}
