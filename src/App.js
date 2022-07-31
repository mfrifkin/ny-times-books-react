import { Route, Routes } from "react-router-dom"
import MainDisplay from "./pages/MainDisplay"
import SingleGenreDisplay from "./pages/SingleGenreDisplay"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainDisplay />} />
      <Route path="/:genre" element={<SingleGenreDisplay />} />
    </Routes>
  )
}

export default App
