import { useState } from "react";

const boxClass = "animate-in fade-in duration-300 delay-500 w-fit mx-auto my-5 p-3 rounded-lg border-l-4 border-l-zinc-600 dark:border-l-gray-400 border-r-4 border-r-zinc-600 dark:border-r-gray-400 flex flex-col ";

export default function Box({ children, hide }) {
    return (
        <div className={hide ? boxClass + 'hidden' : boxClass}>
            {children}
        </div>
    );
}