import { useState } from "react";
import { randInt, shuffler } from "../lib/helpers";
import * as R from 'ramda';

function ageInDays(year, month, day) {
    const MILLISECONDS_IN_DAY = 1000 * 60 * 60 *24;
    const birthday = new Date(year, month, day);
    const    today = new Date();
    return (today - birthday) / MILLISECONDS_IN_DAY;
}

const         factClass = 'm-4 px-1 border-b-2 border-gray-300 text-left text-gray-700 prose dark:text-white';
const     statesVisited = ['Idaho', 'Oregon', 'Utah', 'Arizona', 'Colorado', 'Texas', 'Washington', 'Nevada', 'California',];
const  countriesVisited = ["USA", "UK", "Scotland", "France", "Netherlands", "Mexico","Belize", "Costa Rica", "Canada",];
const factsExhausted = (<li key='factsExhausted' className={factClass}>is tired of writing about himself in the third person. (Also you have read all the facts...)</li>);

const facts = [
    'has only a single name. \'Sunny\' is his entire name.',
    `is roughly ${ageInDays(1993, 5, 12).toFixed(2)} days old (but who's counting??).`,
    'has a wife who is 3033 days older than him.',
    'has a son with three nationalities who is 9787 days younger than him.',
    'once traveled to Europe on a one way ticket with very little plan.',
    'once traveled through neighboring states, busking and staying with strangers (via "CouchSurfing") and sometimes in his car.',
    'had a young interest in video games. Somewhere there are home videos of 2-year-old Sunny playing Sonic the Hedgehog on the Sega Genesis.',
    'once sent a Facebook message to every girl that he had ever had a crush on, to let them know. This is unadvisable.',
    'was a very shy child until high school, where he forced himself out of his shell in a dramatic way.',
    'has an extremely musical aptitude. Owns and can play the piano, ukulele, guitar, and a tongue drum.',
    'is a full-fledged fruit fanatic.',
    `has spent a significant amount of time in ${statesVisited.length} states in the USA.`,
    `has visited ${countriesVisited.length} countries.`,
    'at one time considered pursuing voice acting.',
    'has a deep fascination with language. Used to write short stories and poetry.',
    'speaks English and Spanish, and used to speak Esperanto.',
    'has a calm and still physical energy. Is capable of long periods of focus and concentration.',
    'has a penchant for the abstract.',
    'is quite detached from culture and social media.',
    '"earned" his first kiss by serenading his first girlfriend at 18 years old.',
    'had a severe traumatic brain injury at the age of 18, which some people never fully recover from.',
];

export default function SunnyFacts() {
    const     [factsSeen, setFactsSeen] = useState([0]);
    const [activeFacts, setActiveFacts] = useState(factsSeen);

    const allFactsSeen =  () => factsSeen.length === facts.length;
    const   formatFact = (s) => (<li key={s} className={factClass}>{facts[s]}</li>);

    function randomUnseenFactIndexes(amt=3) {
        const unseenIndexes = R.without(factsSeen, R.range(0, facts.length));
        return R.take(amt, shuffler(unseenIndexes));
    }

    function showNewFacts() {
        const nextIndices = randomUnseenFactIndexes();
        setActiveFacts(nextIndices);
        setFactsSeen(factsSeen.concat(nextIndices));
    }

    function reset() {
        setActiveFacts([0]);
        setFactsSeen([0]);
    }

    return (
        <div id="sunnyFacts" className="prose dark:prose-invert p-2">
            <h2 className="text-2xl">Sunny Facts</h2>
            <p className="p-3">Introducing... the random Sunny fact machine!
               It&apos;s quite simple. There are {facts.length} facts present in its database right now. Just press the button and it will show you three facts at a time.
               Fortunately for everyone, it won&apos;t show you the same facts twice unless you press the reset button. 
               And please—relax. There&apos;s no quiz. My wife made me remove it.</p>
            <div className="m-4 p-3 border-4 rounded-lg drop-shadow-2xl">
                <p className="text-lg italic tracking-wide">Sunny...</p>
                <ul>
                    {allFactsSeen() ? factsExhausted : activeFacts.map(formatFact)}
                </ul>
            </div>
            <div className="flex justify-evenly">
                <button className="w-40 h-12 border-2 rounded-full text-gray-700 font-semibold bg-gradient-to-b from-zinc-100 hover:from-zinc-200 to-zinc-300"
                        onClick={showNewFacts}>{allFactsSeen() ? 'Useless Button' : 'More Sunny Facts!'}</button>
                <button className=" w-16 h-12 border hover:border-2 border-red-400 rounded-full text-gray-700 font-semibold bg-gradient-to-b from-zinc-100 hover:from-zinc-200 to-zinc-300"
                        onClick={reset}>Reset</button>
            </div> 
        </div>
    );
}