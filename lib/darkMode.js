import { useState, useEffect } from "react";

export default function useDarkMode() {
    const  insideBrowser = typeof window !== 'undefined';
    const getInitialMode = () => {
        if (insideBrowser) {
            return JSON.parse(localStorage.getItem('darkActive')) || false;
        } else {
            return false;
        }
    }
    
    const [darkActive, setDarkActive] = useState(getInitialMode);
    const darkTheme = darkActive ? false : true;

    useEffect(() => {
        const root = window.document.documentElement;

        const      addDarkToRoot = () => root.classList.add('dark');
        const removeDarkFromRoot = () => root.classList.remove('dark');

        darkActive ? addDarkToRoot() : removeDarkFromRoot();

        if (insideBrowser) localStorage.setItem('darkActive', darkActive);
    }, [darkActive]);

    return [darkActive, setDarkActive];
}