import { useState } from "react";
import experiences from "../data/experiences";
import Factoid from "./factoid";

const buttonClass = 'm-2 p-1 border border-2 border-black';

export default function Experience() {
    const [educationOpen, setEducationOpen] = useState(false);
    const   [projectsOpen, setProjectsOpen] = useState(false);
    const           [workOpen, setWorkOpen] = useState(false);
    

    const experienceObjectToHTML = (exp) => <Factoid key={exp.name} title={exp.name} deets={exp.details} />

    const Section = ({ title, experiences }) => {
        return (
            <div>
                <h2 className="text-2xl">{title}</h2>
                <div className="flex flex-col justify-center">
                    {Object.values(experiences).map(experienceObjectToHTML)}
                </div>
            </div>
        );
    }

    return (
        <div className="p-4 prose dark:prose-invert text-gray-700">
            <h1 className="text-3xl">Experience</h1>
            <h3 className="mt-2 italic tracking-tighter">A brief note:</h3>
            <p  className="mb-2 prose dark:prose-invert">Hi. I&apos;m currently looking for my first professional Software Engineer position. Let me show you why I deserve your consideration.</p>
            <p  className="mb-5 prose dark:prose-invert"><strong>Update:</strong> It occured to me much later than it should have that examples of me doing network requests are hard to see. There is a repository on my Github with literally <em>hundreds</em> of practice exercises which I completed during Launch School. They range in subject, though some of them include networking. Rather than send you, my browsing friend, on a wild goose chase through those files, I have chosen to create a contrived example on this website to illustrate that I am capable of making a network request. Check out the Animal Advisor in the Fun Stuff section to see it.</p>
            <hr />
            <p className="text-center prose dark:prose-invert">Choose the sections that you want to read about:</p>
            <div className="-mt-6 mb-2 mx-2 p-2 flex flex-row justify-center prose dark:prose-invert">
                <label className="select-none">Education<input type='checkbox' className="m-2" onChange={(e) => setEducationOpen(e.target.checked)} /></label>
                <label className="select-none">Projects<input type='checkbox' className="m-2" onChange={(e) => setProjectsOpen(e.target.checked)} /></label>
                <label className="select-none">Work<input type='checkbox' className="m-2" onChange={(e) => setWorkOpen(e.target.checked)} /></label>
            </div>
            {(educationOpen || projectsOpen || workOpen) && (<aside className="text-center prose dark:prose-invert">(Adjust the range sliders to read more detail about an item.)</aside>)}
            {educationOpen && <Section title='Education' experiences={experiences.education} />}
            {projectsOpen  && <Section title='Projects' experiences={experiences.projects} />}
            {workOpen      && <Section title='Work' experiences={experiences.work} />}
        </div>
    );
}