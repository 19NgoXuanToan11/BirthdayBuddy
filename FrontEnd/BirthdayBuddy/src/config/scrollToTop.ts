import { useEffect } from 'react';

function ScrollToTop() {

    useEffect(() => {
        window.scroll( {
            top: 0,
            behavior: 'instant'
        });
    }, []);

    return null; 
}

export default ScrollToTop;