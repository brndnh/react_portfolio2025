import { NavLink } from 'react-router';
import './BlogCard.css';

import placeholderImage from '../assets/placeholderbg.png';


function BlogCard({ link, title, desc, image, date }) {
    return (
        <NavLink to={link} className="blog-link">
            <div className="blog-card">
                <img src={image} alt={title} className="blog-image" />

                <div className="blog-content">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <span className="blog-date">{date}</span>
                </div>
            </div>
        </NavLink>
    );
}

export default BlogCard;
