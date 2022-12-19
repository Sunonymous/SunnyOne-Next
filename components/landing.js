import          Box from "./box";
import { useState } from "react";
import { compose  } from 'ramda';

const getHourText = (hour) => {
    const hourDescriptors = {
        0:  'Midnight',
        1:  'Wee Hours',
        2:  'Quiet Time',
        3:  'Witching Hour',
        4:  'Early Bird Hour',
        5:  'Crack of Dawn',
        6:  'Daybreak',
        7:  'Morning',
        9:  'Clock-in Time',
        10: 'Brunchtime',
        11: 'Pre-noon',
        12: 'Noontime',
        13: 'Naptime',
        14: 'Snacktime',
        15: 'Afternoon',
        18: 'Evening',
        20: 'Night',
        22: 'Bedtime',
        23: 'Yawning Hour',
    }
    const time = hourDescriptors[hour];
    return (time === undefined) ? getHourText(hour + 1) : time;
}

const hubLinkClass = " w-max mb-2 py-1 px-2 font-extrabold rounded-md tracking-wider hover:tracking-wide md:text-gray-400 text-right text-2xl hover:font-bold hover:text-zinc-100 dark:hover:text-slate-800 hover:bg-gray-200 dark:hover:bg-slate-600 select-none cursor-pointer ";
const    hoverCyan = 'text-cyan-500 hover:bg-cyan-500 dark:hover:bg-cyan-500 md:hover:text-zinc-100 md:dark:hover:text-slate-800';
const    hoverLime = 'text-lime-600 hover:bg-lime-600 dark:hover:bg-lime-600 md:hover:text-zinc-100 md:dark:hover:text-slate-800';
const    hoverRose = 'text-rose-500 hover:bg-rose-500 dark:hover:bg-rose-500 md:hover:text-zinc-100 md:dark:hover:text-slate-800';
const   hoverAmber = 'text-yellow-600 hover:bg-yellow-600 dark:hover:bg-yellow-600 md:hover:text-zinc-100 md:dark:hover:text-slate-800';
const  hoverViolet = 'text-violet-500 hover:bg-violet-500 dark:hover:bg-violet-500 md:hover:text-zinc-100 md:dark:hover:text-slate-800';

export default function Landing({ username, darkModeFn, switchSectionFunc }) {
    const [name, setName] = useState(username);
    const [hintTextVisible, setHintTextVisible] = useState(true);

    function getGreeting() {
        const userName = username || 'Friend';
        const hour = new Date().getHours();
        return `Good ${getHourText(hour)}, ${userName}—`;
    }

    const removeHintText = () => hintTextVisible ? setHintTextVisible(false) : null;
    const toggleDarkAndRemoveText = () => {
        darkModeFn();
        removeHintText();
        document.querySelector('#sunSVG').blur();
        document.querySelector('h1').focus();
    }

    return (
      <div className="h-screen md:mx-auto md:w-3/6 flex flex-col content-between justify-between" id="landing">
        {/* <!-- Greeting --> */}
        <h1 className="text-2xl m-6 pl-2 font-title font-semibold rounded-t-md border-t-4 border-t-black dark:border-t-white border-l-4 border-l-black dark:border-l-white">{getGreeting()}</h1>
        {/* <!-- SVG Sun  --> */}
        <img id="sunSVG"
            className="w-48 h-48 mx-auto z-50 relative dark:invert animate-orbit hover:invert hover:drop-shadow-emBlack dark:hover:drop-shadow-emWhite dark:hover:invert-0 hover:pause"
            onClick={toggleDarkAndRemoveText}
            src="/svg/sun-leaf.svg" 
            alt="Sun SVG to toggle between dark and light mode." />
        {hintTextVisible && <p className="mt-4 z-0 text-center text-sm animate-pulse delay-1000" id="sunHintText">Click the sun!</p>}
        <h1 className="m-6 pr-2 pb-1 font-title font-semibold rounded-b-md border-b-4 border-b-black dark:border-b-white border-r-4 border-r-black dark:border-r-white text-2xl text-right">Welcome to my homepage!</h1>
        {/* <!-- Hub --> */}
        <p id="hubTarget" className="h-10 flex-grow text-center"></p> {/* <!-- Divider --> */}
        <Box> {/* shown by default w/o hide prop */}
          <div className="flex flex-col justify-center items-center">
              <p className="pl-5 text-zinc-500 text-xl italic select-none self-start">I want to...</p>
              <div onClick={() => switchSectionFunc('aboutSite')}  className={'w-max ' + hoverCyan   + hubLinkClass}>read about the site.</div>
              <div onClick={() => switchSectionFunc('sunnyFacts')} className={hoverLime   + hubLinkClass}>learn about Sunny.</div>
              <div onClick={() => switchSectionFunc('experience')} className={hoverAmber  + hubLinkClass}>see his experience.</div>
              <div onClick={() => switchSectionFunc('funThings')}  className={hoverRose   + hubLinkClass}>try something fun!</div>
              <div onClick={() => switchSectionFunc('music')}      className={hoverViolet + hubLinkClass}>hear Sunny&apos;s music.</div>
          </div>
        </Box>
        {/* <!-- Divider --> */}
        <div id="contentTarget" className="h-18 text-center flex-grow"></div>
      </div>
      );
    }