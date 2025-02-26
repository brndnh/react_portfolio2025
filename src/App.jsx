import Home from "./Pages/Home"
import About from "./Pages/About"
import { Routes, Route } from "react-router"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
    </>
  )
}

export default App
