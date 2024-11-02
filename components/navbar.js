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
        // removed for likely lack of use
        // FIXME - remove this at all levels if I ever feel like it. data is drilled via multiple levels for this functionality
        // { cb: openSettings, text: 'Settings'},
        { link: '#footer', cb: showFooterHint, text: 'Contact'},
    ];

    // TODO a very reasonable UI improvement would be to either conditionally render the menu button, or to add an indicator arrow
    // to the menu upon clicking the button (exactly like the contact button does, except horizontal)
    // I would start with the latter approach, for simplicity's sake
    return (
        <React.Fragment>
            <div id="menuBar" className="h-20 z-30 sticky top-0 bg-gradient-to-t to-zinc-300 from-transparent dark:to-slate-800 flex flex-row justify-evenly items-center">
                {barLinks.map((l) => {
                    return <a key={l.link || l.cb} onClick={l.cb || null} href={l.link || null} className={linkClasses}>{l.text}</a>
                })}
            </div>
            {/* removed for likely lack of use */}
            {/* {settingsOpen && settingsBox} */}
        </React.Fragment>
    );
}