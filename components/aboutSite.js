export default function AboutSite() {
    return (
        <div id="aboutSite" className="m-3 p-4 prose dark:prose-invert">
            <h2>About this Site</h2>
            <p>Welcome to theSunny.one! My name is Sunny, and this is my personal website. It is meant as an introduction to me, and to show a bit of my work. You&apos;ll certainly get a sense of my energy just from perusing this page. This site takes advantage of the following technologies built by incredible engineers:</p>
            <ul>
                <li><a href="https://nextjs.org/">Next.JS</a> (for straightforward Web Development!)</li>
                <li><a href="https://reactjs.org/">React</a> (for modular design!)</li>
                <li><a href="https://ramdajs.com/">Ramda</a> (for a more functional flavor!)</li>
                <li><a href="https://tailwindcss.com/">TailwindCSS</a> (for a better design workflow and coherence!)</li>
            </ul>
            <p>The site is fairly simple overall, though it has a variety of unique things. Just to share some of the major points:</p>
            <ul>
                <li>The site is open source!</li>
                <li>Dynamic Greeting
                    <ul>
                        <li>The site can greet you by name (if you want; open the settings).</li>
                        <li>The greeting text will also vary, depending on the hour the site is opened.</li>
                    </ul>
                </li>
                <li>Light/Dark Mode (click the rotating sun!)</li>
                <li>Adjustable level of detail in reviewing my personal projects/experience.</li>
                <li>The Random Sunny Fact Machine™.</li>
                <li>Footer with a random silly phrase.</li>
                <li>Various text in the page is generated dynamically based on the content.</li>
                <li>Email link opens mail client OR copies email address on right click.</li>
            </ul>
        </div>
    );
}