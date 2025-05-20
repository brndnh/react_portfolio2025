import Snowfall from "react-snowfall";

import Layout from "./Layout"
import AlignTop from "./components/AlignTop"

import Home from "./Pages/Home"
import About from "./Pages/About"

import Blog from "./Pages/Blog"
import Blog241127 from "./Pages/blogs/b241127"
import Blog250121 from "./Pages/blogs/b250121"

import Works from "./Pages/Works"

import Works_aeamv from "./Pages/works/works_aeamv"
import Works_cc3 from "./Pages/works/works_cc3"
import Works_travel from "./Pages/works/works_travelblog"
import Works_uiux1 from "./Pages/works/works_uiux-casestudy"
import Works_plausiblegame from "./Pages/works/works_plausible-game"

import { Routes, Route } from "react-router"

function App() {
    return (
        <>
            <div className="background-wrapper">
                <Snowfall
                    color="black"
                    snowflakeCount={100}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />
            </div>

            <AlignTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>

                    <Route path="/blogs" element={<Blog />}></Route>
                    <Route path="/blogs/241127" element={<Blog241127 />}></Route>
                    <Route path="/blogs/250121" element={<Blog250121 />}></Route>

                    <Route path="/works" element={<Works />}></Route>
                    <Route path="/works/aeamv" element={<Works_aeamv />} />
                    <Route path="/works/cc3" element={<Works_cc3 />} />
                    <Route path="/works/travel-blog" element={<Works_travel />} />
                    <Route path="/works/uiux-casestudy" element={<Works_uiux1 />} />
                    <Route path="/works/plausible-game" element={<Works_plausiblegame />} />
                </Route>
            </Routes>
        </>
    )
}

export default App;