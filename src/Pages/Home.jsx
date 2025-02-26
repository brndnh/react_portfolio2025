import Header from "../global/Header";
import Footer from "../global/Footer";

import "./Home.css";

function Home() {
    return (
        <>
            <Header />
            <main className="home">
                <div className="container">
                    <div className="grid">
                        <div className="col-12">
                            <h1>I am the Home Page</h1>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;