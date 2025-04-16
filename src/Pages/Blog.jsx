import BlogCard from '../components/BlogCard'
import b241127 from '../assets/b241127.png';
import b250121 from '../assets/b250121.png';

import "./Blog.css"

function Blog() {
    return (
        <>
            <main>
                <div className="container grid">
                    <div className="col-0-sm col-1-md col-2-lg bg-columns"></div>
                    <div className="col-12 col-10-md col-8-lg">
                        <div>
                            <h1>blogs</h1>
                            <p>a folder of notes and thoughts i'll be updating periodically!</p>
                        </div>
                        <section>
                            <BlogCard
                                title="I Have Got to Start a Blog!"
                                desc="sharing the beginning of my journey in blogging."
                                image={b250121}
                                link="/blogs/250121"
                                date="2025/01/21"
                            />

                            <BlogCard
                                title="Apex Legends is Bad! But Why?"
                                desc="a tangent on what the state of apex legends was at the time of writing."
                                image={b241127}
                                link="/blogs/241127"
                                date="2024/11/27"
                            />

                        </section>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Blog;
