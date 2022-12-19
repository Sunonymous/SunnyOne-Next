import { useState, useEffect } from "react";

export default function useDarkMode() {
    const insideBrowser = typeof window !== 'undefined';
    const [darkActive, setDarkActive] = useState(insideBrowser ? localStorage.darkActive : true);
    const darkTheme = darkActive ? false : true;

    useEffect(() => {
        const root = window.document.documentElement;

        const      addDarkToRoot = () => root.classList.add('dark');
        const removeDarkFromRoot = () => root.classList.remove('dark');

        darkTheme ? addDarkToRoot() : removeDarkFromRoot();

        if (insideBrowser) localStorage.setItem('darkActive', darkActive);
    }, [darkActive]);

    return [darkTheme, setDarkActive];
}