import { useEffect } from 'react';

function useDarkTheme({ className = 'dark' }) {
    useEffect(() => {
        let root = document.querySelector(':root');
        root.classList.add(className);
        return () => {
            root.classList.remove(className);
        }
    }, []);
}

export default useDarkTheme;
