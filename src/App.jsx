import Home from "./Pages/Home"
import About from "./Pages/About"
import Blog from "./Pages/Blog"

import { Routes, Route } from "react-router"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
    </Routes>
    </>
  )
}

export default App
