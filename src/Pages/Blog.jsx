import BlogCard from '../components/BlogCard'
import placeholderBg from '../assets/placeholderbg.png';

import "./Blog.css"

function Blog() {
    return (
        <>
            <main>
                <div className="container grid">
                    <div className="col-0-sm col-1-md col-2-lg bg-columns"></div>
                    <div className="col-12 col-10-md col-8-lg">

                        <h1>blogs</h1>
                        <p>a notes folder i'll be updating periodically!</p>

                        <section>
                            <BlogCard
                                title="I Have Got to Start a Blog!"
                                desc="sharing my journey in blogging and why I'm excited about it."
                                image={placeholderBg}
                                link="/blogs/250121"
                                date="2025/01/21"
                            />

                            <BlogCard
                                title="Apex Legends is Bad! But Why?"
                                desc="a tangent on what the state of apex legends was at the time of writing."
                                image={placeholderBg}
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
