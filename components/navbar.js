'use strict';

import React, { useState } from "react";

const linkClasses = "w-20 h-10 pt-2 rounded-lg font-header font-bold tracking-widest text-center text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-slate-700 border-l-2 border-r-2 border-slate-700 dark:border-zinc-300";

export default function NavBar({ nameFunc, closeSectionFunc }) {
    const [settingsOpen, setSettingsOpen] = useState(false);

    const openSettings = () => {
        setSettingsOpen(!settingsOpen);
        window.scrollTo(0, 0);
    }
    const showFooterHint = () => {
        const hinter = document.querySelector('#footerHint');
        hinter.classList.remove('invisible');
        setTimeout(() => hinter.classList.add('invisible'), 2222);
    }

    const settingsBox = (
        <div className="text-center">
            <label htmlFor="username">Greet You?<input className="ml-2 border-2 text-black" name="username" type='text' placeholder="Your Name"  /></label>
            <button className="m-2 p-2 border rounded-lg drop-shadow-md bg-gray-200 text-black"
                    onClick={(e) => {
                        nameFunc(document.querySelector("[name='username']").value)
                    }}>Save</button>
        </div>
    );

    const barLinks = [
        { link: '#', cb: closeSectionFunc, text: 'Menu'},
        { cb: openSettings, text: 'Settings'},
        { link: '#footer', cb: showFooterHint, text: 'Contact'},
    ];
    
    return (
        <React.Fragment>
            <div id="menuBar" className="h-20 z-30 sticky top-0 bg-gradient-to-t to-zinc-300 from-transparent dark:to-slate-800 flex flex-row justify-around items-center">
                {barLinks.map((l) => {
                    return <a key={l.link || l.cb} onClick={l.cb || null} href={l.link || null} className={linkClasses}>{l.text}</a>
                })}
            </div>
            {settingsOpen && settingsBox}
        </React.Fragment>
    );
}