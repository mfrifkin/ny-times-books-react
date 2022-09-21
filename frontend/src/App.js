import { Route, Routes } from "react-router-dom"
import MainDisplay from "./pages/MainDisplay"
import SingleGenreDisplay from "./pages/SingleGenreDisplay"
import SingleBookDisplay from './pages/SingleBookDisplay'
import Header from "./components/Header"
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainDisplay />} />
        <Route path="/:genre" element={<SingleGenreDisplay />} />
        <Route path="/book/:bookName" element={<SingleBookDisplay />} />
      </Routes>
    </>
  )
}

export default App
