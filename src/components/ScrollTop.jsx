import { useState, useEffect } from "react";
import { ArrowUpCircleOutline } from 'react-ionicons';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 1000); 
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        visible && (
            <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Back to Top <ArrowUpCircleOutline color={"#fff"} height="30px" width="30px" />
            </button>
        )
    );
}

export default ScrollToTop;