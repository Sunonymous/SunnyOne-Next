import { useState, useEffect } from "react";

export default function useDarkMode() {
    const insideBrowser = typeof window !== 'undefined';
    if (!insideBrowser) return []; // have to return an array because of usage as a hook

    const getInitialMode = () => JSON.parse(localStorage.getItem('darkActive')) || false;
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