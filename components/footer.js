import { randInt, randEm } from '../lib/helpers';
import Link from 'next/link';
import Image from 'next/image';
import sunnyInCircle from '../public/images/sunny_circle.png';
import { useState, useEffect } from 'react';

const linkClass = 'm-2 p-3 bg-gray-200 border border-gray-500 rounded-xl';
const sillyPhrases = [
    "I would have gotten away with it too, if it weren't for those meddling kids!",
    'may I just say—you are looking fabulous today.',
    'hey—are those new shoes?',
    'it is a B-E-A-utiful day!',
    'you should take a deep breath.',
    "whatever it is that you've been thinking about recently... go for it.",
    "this ain't my first rodeo.",
    "when's the last time you smiled?",
    'I probably made it just for you.',
    '... why are you looking at me like that?',
    "I'd do it again, if I had to!",
    "I am standing on the shoulders of giants.",
    (<>it is brought to you by the letter <span className='font-extrabold text-2xl text-yellow-500 drop-shadow-emBlack'>S</span>.</>),
    "this is where I'd list my trophies... IF I HAD ANY!",
    'if you squint at it very closely, that makes it difficult to read.',
];

const leaveLinkTexts = [
    "I'll just leave these here...",
    'Thanks for stopping by!',
    'Have a wonderful day.',
    'Smile! You deserve it.',
    'Oh look, some links!',
    'Cheers!',
];

const INFO = {
    github: {
        lbl: 'GitHub',
        link: 'https://github.com/Sunonymous',
        txt: 'Check out my code on GitHub!',
    },
    linkedin: {
        lbl: 'LinkedIn',
        link: 'https://www.linkedin.com/in/the-sunny-one/',
        txt: 'Poke me on LinkedIn!',
    },
    mail: {
        lbl: 'Email',
        link: 'mailto:embodiedsunshine@gmail.com',
        txt: 'Send me virtual mail! (Right-click to copy, left-click to open client.)',
    },
};


export default function Footer({ onMobile, darkMode }) {
    const   [sillyPhrase,  setSillyPhrase] = useState('');
    const  [leaveLinkTxt, setLeaveLinkTxt] = useState('');
    const    [infoTextOn,   setInfoTextOn] = useState(false);
    const      [infoText,     setInfoText] = useState('Test text is longer than normal text.');
    const randomSillyPhrase = () => randEm(sillyPhrases);
    const    randomLinkText = () => randEm(leaveLinkTexts);

    useEffect(() => {
        setSillyPhrase(randomSillyPhrase());
        setLeaveLinkTxt(randomLinkText());
    }, []);

    const svgGitHub   = (<svg className={'dark:fill-white w-16 h-16'} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>);
    const svgLinkedIn = (<svg className={'dark:fill-white w-16 h-16'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>);
    const svgMail     = (<svg className={'dark:fill-white w-16 h-16'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>);

    const showInfoText = (id) => {
        setInfoText(INFO[id].txt);
        setInfoTextOn(true);
    }
    const hideInfoText = () => setInfoTextOn(false);

    const emailClickHandler = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('embodiedsunshine@gmail.com').then(() => {
            alert('My email has been copied to your clipboard!');
        }).catch((err) => alert('We tried to copy the email boss, and something went wrong!'));
    }

    const IconLink = function({ id, icon, link, txt, lbl, rightClick }) {
        return (
            <div className='text-center' onContextMenu={rightClick || null}>
                <Link className='' href={link} onMouseEnter={onMobile ? null : () => showInfoText(id)} onMouseLeave={onMobile ? null : hideInfoText}>{icon}</Link>
                {onMobile && (<p className='m-2'>{lbl}</p>)}
            </div>
        );
    }

    return (
        <footer id="footer" className='flex flex-row justify-around items-center'>
            <div className='w-full flex flex-col md:flex-row justify-center content-center bg-gradient-to-b from-zinc-100 to-zinc-300 dark:from-slate-800 dark:to-slate-600'>
                <div className='relative'>
                    <p id='footerHint' className='invisible absolute inset-x-0 -top-14 animate-bounce text-amber-500 text-6xl text-center'>↓</p>
                    <Image className='mx-auto md:mx-0 md:my-auto w-48 h-48' src={sunnyInCircle} alt='Picture of Sunny' width={150} height={150} />
                </div>
                <div className='my-auto'>
                    <h4 className='ml-3 px-2 text-lg text-center'>Hi, I'm <span className='text-2xl text-amber-500 tracking-wide font-extrabold'>Sunny</span>.</h4>
                    <div className='m-2 p-2'>
                        <p className='mx-1 px-2 text-center'>I made this website, and {sillyPhrase}</p>
                        <p className='text-xs text-center'>(One of {sillyPhrases.length} random phrases.)</p>
                    </div>
                    <p className='text-center'>{leaveLinkTxt}</p>
                    <div className='m-4 flex flex-row justify-around'>
                        <IconLink id='github'   icon={svgGitHub}   link={INFO.github.link}   txt={INFO.github.txt}   lbl={INFO.github.lbl} />
                        <IconLink id='linkedin' icon={svgLinkedIn} link={INFO.linkedin.link} txt={INFO.linkedin.txt} lbl={INFO.linkedin.lbl} />
                        <IconLink id='mail'     icon={svgMail}     link={INFO.mail.link}     txt={INFO.mail.txt}     lbl={INFO.mail.lbl} rightClick={emailClickHandler} />
                    </div>
                    <p className={infoTextOn ? 'text-center' : 'invisible'}>{infoText}</p>
                </div>
            </div>
        </footer>
    );
}