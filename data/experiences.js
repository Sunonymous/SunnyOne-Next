// Ensure all level of detail arrays within the same object contain the same number of levels / elements!

const education = {
    highSchool :{
        name: 'High School',
        details: [
            '2007 - 2011',
            [
                'I graduated High School.',
                (<p>I went to two separate high schools. Only graduated from one though.</p>),
                (<p>I spent the first two years of high school in a charter school, before switching to a public school for the latter two years. How much more do you really want to know about this?</p>),
            ],
        ],
    },
    launchSchool: {
        name: 'Launch School',
        details: [
            '2021 - 2022',
            [
                'A long-term online school for the fundamentals of Software Engineering and Web Application Development.',
                (<p><a href="https://launchschool.com/">Launch School</a> is a long-term online school with a mastery-based pedagogy. Instead of trying to get you a job quickly or rushing through frameworks or specific use-cases, they build your knowledge from the ground up, only letting you move forward when you can demonstrate that you have mastered the material.</p>),
                (<p>I enrolled in <a href="https://launchschool.com/">Launch School</a> because I was fully aware of the limited extent of my knowledge. I wanted to write software and write it well, yet it seemed more and more evident that I was missing certain fundamental ideas. When I read the methodology behind Launch School, I knew I had found what I was looking for. Launch School has a wonderful community, and through the school I have learned how to understand, consider, and solve problems to a degree I had never before imagined.</p>),
            ],
        ],
    },
    humaneTech: {
        name: 'Center for Humane Technology',
        details: [
            '2022',
            [
                'Foundations for Humane Technology Course Completion',
                (<p>The Center for Humane Technology offers a free online course to raise awareness of the dangers and pitfalls of our modern technological world. I completed it!</p>),
                (<p>Technology has enriched our lives in many ways—so much so that it is difficult to imagine living <em>without</em> so much of our modern amenities. Having such high technology has its privileges, though it comes with sincere risks that are only recently entering the public awareness. I want to build a few applications to help people develop themselves, and this course assisted me in ensuring that I create them in an appropriate and &quot;humane&quot; way. The course is free, and I would encourage anyone to check into it!</p>),
            ],
        ],
    },
    joyOfReact: {
        name: 'Joy of React',
        details: [
            '2023',
            [
                (<p>Earned a completion certificate from Josh W. Comeau's <a href='https://www.joyofreact.com'>The Joy of React</a>. You can <a href="https://courses.joshwcomeau.com/certificate/63e03607ac6ea5d5bec6174d">see the certificate here!</a></p>),
                (<p>The Joy of React is Josh Comeau's second full-length web application course. I had learned the basics of React on my own, using various resources online. This course helped me to fill in the things that I missed or misunderstood, and I feel even more comfortable creating content using React.</p>),
                (<p>Josh W. Comeau is a well-rounded and friendly software developer who has made a name for himself creating high-quality educational content. He's released two full-length courses on an educational platform that he wrote himself! This is his second course, fresh off the virtual presses, which focuses on React.JS, and I'm delighted to have taken part. The quality really is fabulous and I deepened my knowledge of the inner mechanisms of React through his instruction. I would encourage anyone who wants to deeply grok React to consider checking out this course.</p>)
            ]
        ]
    }
};

const work = {
    captionCall: {
        name: 'CaptionCall',
        details: [
            (<p><time>2014 - 2018</time> | Meridian, ID; Tucson, AZ</p>),
            [
                'Captioning Agent, Mentor Assistant',
                (<p>Here I provided a telephone captioning service to customers with hearing loss. For a time, I worked as a mentor, assisting new hire training and helping struggling employees improve their performance.</p>),
                (<p>Enter CaptionCall. I remember it just like it was {new Date().getFullYear() - 2014} years ago... CaptionCall is a company which provides captioning service for telephone calls. I was one of countless Captioning Agents working the service. I signed a confidentiality agreement, which means that I am legally forbidden to speak of content of any of the calls which I captioned. The work was interesting at times and reasonably dull otherwise. There was a sort of strange initial appeal to listening to people's phone conversations without one side of the conversation knowing (it is explained to the customers during the installation of the phone that the service is made possible by real people who caption the calls, though generally those whom the customers are speaking with are not aware of this). Because of this, I heard plenty of interesting, very <em>human</em>, conversations. Most calls were mundane business, routine conversation, or familial gossip. Others might be strange, confusing, vulgar, or completely unintelligible. The captioners are also forbidden to communicate with the customer through the captions, which led to some interesting situations. My favorite part about the job was that we were allowed to do various things on the computer while we were not on a call. I worked the evening shift, so particularly in the late hours, I had plenty of time to work on various things.<br />Working at CaptionCall indirectly had a large impact on my life. For starters, the option to transfer to the center in Tucson invited my first experience of living on my own. I moved to Tucson having neither family nor friends there, and had plenty of adventures along the way. On a more subtle level, working at CaptionCall developed within me an intense awareness of my own language. I grew fascinated with hearing just how much of what we say and think is derived and recycled from culture. I was still a bit young, and drew from this newfound knowledge a direction of dissension from my culture. I monitored everything I thought and/or said to people and made efforts to detach myself from expressions which I considered negative or ineffective. This is something which continues to this day, as I remain very conscious of the communication around me.</p>),
            ],
        ],
        
    },
    guitarCenter: {
        name: 'Guitar Center',
        details: [
            (<p><time>2018 - 2019 | </time>Salt Lake City, UT</p>),
            [
                'Phone / Chat Sales & Support Rep',
                (<p>I worked on both the Phone and Chat teams at different times of my employment. Both teams provided sales and support service to incoming customers.</p>),
                (<p>The circumstances of my life had shifted a lot between working at CaptionCall and Guitar Center, despite being a relatively-short window of time. I had a friend who recommended this job to me (she worked there and thought that I'd do well), so I got the job and moved to Salt Lake City. For the record, this was at one of two call centers for Guitar Center Online, the company's website. I met some wonderful people there, got some incredible deals on musical merchandise (to me, that was the most valuable "perk"), and was reminded once again that <span className="italic tracking-tighter font-bold">sales is a poor choice of department for me</span>. Customer Service I can handle, though sales in particular is less than my forte. I initially worked on the phone team, though they created an online chat team during my time there, and I joined to try it out. I was certainly capable of maneuvering the chats, though I found the experience of handling five-to-six simultaneous conversations to be incredibly uncouth. I switched back to the phone teams as soon as I could.</p>),
            ],
        ],
    },
    gap: {
        name: 'Mysterious Employment Gap',
        details: [
            '2019 - 2022',
            [
                'International Traveling',
                (<p>After quitting Guitar Center, I got on a plane to go on an arguably absurd journey into Central America. My Spanish improved, my son was born, I survived my first two hurricanes, and met countless wonderful people throughout the nearly two years I was abroad.</p>),
                (<p>For some time I had been in a long-distance relationship with a foreign woman whom I met online (stories beginning like that often end poorly!). Our relationship blossomed, despite the distance, though her country was (/is) undergoing extreme political and economical collapse. I had a strong desire to help my partner escape the environment she was facing. I saved as much as possible for some time. We intended to move in together in a country which was foreign to the both of us, as a veritable test of our relationship and the strength of the love we felt from afar... And so it was that after quitting Guitar Center I went on an inadvertent adventure through a few Central American countries. Within these years I met my partner (now-wife), later my son was born, at which point we were stranded in Mexico when COVID appeared, and we all returned to the US together in March 2021, where we remain. Shortly after returning I enrolled in Launch School.</p>),
            ],
        ],
    },
};

const projects = {
    shiftTacToe: {
        name: 'Shift-Tac-Toe',
        details: [
            (<p><span>2021</span> | <span>Ruby</span></p>),
            (<p><a href='https://replit.com/@Sunonymous1/Shift-Tac-Toe#main.rb'>Try it out</a> online via REPLit!</p>),
            [
                'A new take on an old classic.',
                (<p>One of the projects made during Launch School. A console Tic-Tac-Toe, presented in an interesting and highly-configurable way, and including a new game mode I made up (because TTT games are too simple!).</p>),
                (<p>This is a text-based Tic Tac Toe in a console. I made it during the section on Object Oriented Programming in the Launch School curriculum. I found Tic Tac Toe (especially playing it hundreds of times during development) extremely bland. I considered ways of making it more interesting. I improved the visual presentation, making the tiles and marks larger, and allowing the player to change their letter mark (instead of only Xs and Os). There are many more settings I added (you can even watch two computer players compete), though the most interesting addition is a new game mode which I called, 'Shift Tac Toe'. In this, every few turns (also configurable), the board will "shift" all tiles simultaneously in a single direction. This adds a degree of randomness and surprise which can change the tide of a game in a moment. Let it be shouted from the heavens: Tic Tac Toe no longer suffers from the predictable strategies of old! And there was much merriment made, for this was good.<br/><span className="text-xs">The code itself may be a little messy though. That's old work. More a relic than anything else.</span></p>)
            ],
        ],
    },
    musicPracTools: {
        name: 'Musical Practice Tools',
        details: [
            (<p><span>Late 2022</span> | <span>JS, Next, React, Tailwind CSS</span></p>),
            (<p>Try out the tools at <a href="https://musicalpractice.tools/">MusicalPractice.tools</a></p>),
            (<p>This project is <a href="https://github.com/Sunonymous/Musical-Practice-Tools">Open Source</a>.</p>),
            [
                'A set of tools created for the practice and exploration of instrumentation.',
                (<p>I created a series of tools for an avid instrumentalist to take advantage of to bolster their practice routine. Everything is on a single page, graciously hosted by <a href="https://vercel.com/">Vercel</a>.</p>),
                (<p>I play music, and over the years that I have played and explored music, I have grown to appreciate the value of practice. The effects of practice can range based on what and how a player practices. These tools are designed to assist the 'how' part of the equation. Feel free to explore the page and try them out.</p>),
            ],
        ],
    },
    sqncr: {
        name: 'SQNCR',
        details: [
            (<p><span>November 2022</span> | <span>Ruby</span></p>),
            (<p>Try the game at <a href='https://sunonymous.itch.io/sqncr/' target='_blank'>Itch.io</a>!</p>),
            [
                'A simple and short relaxed focus trainer.',
                'A twenty-second game created for the 20 Second Game Jam. This game let you measure and potentially train a state of relaxed focus.',
                (<p>This is one of a series of ideas I've had for mental training apps/games. There are a lot of mental skills or tasks which seem to me to be open to growth. What better way exists to train something than to gamify it? This was the first time I used DragonRuby, and the experience was mostly positive.</p>),
            ],
        ],
    },
    compound: {
        name: 'Compound',
        details: [
            (<p><span>2021</span> | <span>Clojure</span></p>),
            (<p>Try it out in your browser via <a href="https://replit.com/@Sunonymous1/Compound">REPLit</a>.</p>),
            [
                'A mutator of compound words.',
                'A program written to slightly alter the fragments of a compound word to create a new word.',
                (<p>This program takes a compound word and mutates (individually) both of its halves by a single letter. I wrote this program because I thought it could be useful to help invent some interesting language. There are some areas which I didn't end up exploring, like substitution of rhymes for single-syllable fragments. Overall, it's a nice entry point into the idea, and good practice for functional programming as well.</p>)
            ],
        ],
    },
};

const experiences = {
    education,
    work,
    projects,
};

export default experiences;