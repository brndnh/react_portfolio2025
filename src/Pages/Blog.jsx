import BlogCard from '../components/BlogCard'

import "./Blog.css"

function Blog() {
    return (
        <>
            <main>
                <div className="container grid">
                    <div className="col-0-sm col-1-md col-2-lg bg-columns"></div>
                    <div className="col-12 col-10-md col-8-lg">

                        <h1>blogs</h1>

                        <section>
                            <BlogCard
                                title="I Have Got to Start a Blog!"
                                desc="Sharing my journey in blogging and why I'm excited about it."
                                image="../assets/placeholderbg.png"
                                link="/blogs/250121"
                                date="2025/01/21"
                            />
                        </section>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Blog;
