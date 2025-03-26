import Layout from "./Layout"

import Home from "./Pages/Home"
import About from "./Pages/About"
import Blog from "./Pages/Blog"
import Works from "./Pages/Works"
import Works_cc3 from "./Pages/works/works_cc3"

import { Routes, Route } from "react-router"

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>

          <Route path="/works" element={<Works />}></Route>
          <Route path="/works/works_cc3" element={<Works_cc3 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;