import { Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';

import './Breadcrumbs.css'

function Breadcrumbs() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  // Dynamically change breadcrumbs based on the current page.
  useEffect(() => {
    const title = document.querySelector('h1');
    if (title) {
      setPageTitle(title.textContent);
    }
  }, [location.pathname]); // Runs on route change

  const pathnames = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="breadcrumbs-container" aria-label="breadcrumb">
      <ul className="breadcrumbs">
        {pathnames.map((path, index) => {
          const url = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <li key={url}>
              {index === pathnames.length - 1 ? (
                <span>{pageTitle}</span> // Display the current page title as plain text
              ) : (
                <Link to={url}>{path.replace(/-/g, " ")}</Link> // Link to the previous page
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
