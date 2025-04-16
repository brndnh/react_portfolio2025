
// importing images here. newest to oldest

import aeTpImg from '../assets/works_aeamv.png'
import cc3Img from '../assets/works_cc3.png';
import js1TpImg from '../assets/works_responsiveTravel.png';
import uiux1Img from '../assets/works_uiProject.png';
import gdPrImg from '../assets/works_jsProject.png';


// newest to oldest works
const worksData = [
    {
        title: "AMV Motion Graphic",
        image: aeTpImg,
        tag: "#visual",
        description: "— Animation, Heavy Visual Effects, Compositing",
        year: "2025",
        navLink: "/works/aeamv",
    },

    {
        title: "“BH Cringe Compilation 3”",
        image: cc3Img,
        tag: "#misc",
        description: "— Video Direction; Compositing, Effects",
        year: "2024",
        navLink: "/works/cc3",
    },
    {
        title: "Responsive Travel Blog Page",
        image: js1TpImg,
        tag: "#frontend",
        description: "— Website Creation + Design, Photography",
        year: "2024",
        navLink: "/Works/travel-blog",
    },
    {
        title: "Broye Cafe Mobile App Redesign",
        image: uiux1Img,
        tag: "#uiux",
        description: "— UIUX Case Study, Mobile App UI Redesign",
        year: "2024",
        navLink: "/Works/uiux-casestudy",
    },
    {
        title: "Recreating “Geometry Dash” in Javascript",
        image: gdPrImg,
        tag: "#frontend",
        description: "— Game Design on Web, Animation with JS",
        year: "2023",
        navLink: "/Works/plausible-game",
    },
];

export default worksData;
