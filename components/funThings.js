import { useEffect, useState } from "react";
import AnimalAdvisor from "./animalAdvisor";

export default function FunThings() {
    const [sqncr, setSqncr] = useState(null);

    // useEffect(() => {
    //   setSqncr(<iframe className="mx-auto" src="https://itch.io/embed/1785455?border_width=0&amp;bg_color=B2B2B2&amp;fg_color=222222&amp;link_color=ff6120&amp;border_color=8b8b8b" width="206" height="165"><a href="https://sunonymous.itch.io/sqncr">Sqncr by Sunny</a></iframe>);
    // }, [sqncr]);

    return (
        <div className="p-4 prose dark:prose-invert">
            <h2>Fun Things</h2>
            <AnimalAdvisor />

            <h3>SQNCR</h3>
            <p>I made a tiny game using DragonRuby for the <a href="https://itch.io/jam/20-second-game-jam">20 Second Game Jam</a> of 2022! Fortunately, it is the game that lasts 20 seconds, <em>not</em> the jam! Try it in your browser to <a href='https://sunonymous.itch.io/sqncr/' target='_blank' rel="noreferrer">test your attention!</a></p>
            {/* {sqncr} */}

            <h3>AI Art</h3>
            <p>This is mostly unrelated to me, but did you know you can make art by typing a prompt into certain online art tools? It&apos;s seriously incredible. My favorites two tools are</p>
            <ul>
                <li><a href='https://midjourney.com/'>Midjourney</a> (<a href="https://photos.google.com/album/AF1QipP0mZwrggdQzvTZrTX3pi5aKR1UCZnxYtDQhRLw">see my results</a>)</li>
            </ul><p className="-my-4 ml-8 text-left">and</p>
            <ul>
                <li><a href="https://creator.nightcafe.studio">NightCafe</a> (<a href="https://photos.app.goo.gl/oW4TgzkZXUtV1u5DA">see what I&apos;ve made</a>)</li>
            </ul>
            <p><a href='https://openai.com/dall-e-2/'>Dall-E 2</a> is also worthwhile (<a href="https://photos.app.goo.gl/UpJ9VYx4E2qyB2if9">see?</a>).<br/><br/> Check them out (they are free to try). Use &quot;my&quot; art in whichever way you&apos;d like, credit entirely optional.</p>
        </div>
    );
}