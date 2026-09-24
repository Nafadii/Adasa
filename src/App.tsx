import { RouterProvider } from "react-router-dom"
// @ts-expect-error routes.jsx does not provide TypeScript declarations.
import routes from "./routes"

export function App() {
  return (
    <RouterProvider router={routes}/>
  )
}

export default App