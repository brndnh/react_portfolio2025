import Header from "../global/Header";
import Footer from "../global/Footer";

import "./Home.css";

function Home() {
    return (
        <>
            <Header />
            <main className="home">
                I am the Home Page
            </main>
            <Footer />
        </>
    );
}

export default Home;