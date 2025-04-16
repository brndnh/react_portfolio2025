import { useEffect } from 'react';
import { useLocation } from 'react-router'; 

function AlignTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // scrolls to the top of the window when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default AlignTop;
