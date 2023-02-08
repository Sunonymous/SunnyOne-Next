import Box             from '../components/box';
import Head            from 'next/head';
import Image           from 'next/image';
import Music           from '../components/music';
import NavBar          from '../components/navbar';
import Footer          from '../components/footer';
import Landing         from '../components/landing';
import AboutSite       from '../components/aboutSite';
import FunThings       from '../components/funThings';
import Experience      from '../components/experience';
import SunnyFacts      from '../components/sunnyFacts';
import UselessData     from '../components/animalAdvisor';
import useDarkMode     from '../lib/darkMode';
import useDeviceDetect from '../lib/deviceDetect';
import { useEffect, useState } from 'react';

const defaultConfig = { username: null };

export default function Home() {
  const         [darkActive, setDarkMode] = useDarkMode();
  const               [config, setConfig] = useState(defaultConfig);
  const [activeSection, setActiveSection] = useState('none');

  const     updateName =        (name) => setConfig({...config, username: name});
  const toggleDarkMode =            () => setDarkMode(!darkActive);
  const  sectionHidden = (someSection) => activeSection === someSection;

  const switchSection = (toSection) => {
    setActiveSection(toSection);
    setTimeout(() => document.querySelector('#contentTarget').scrollIntoView(true), 250);
  }

  const onMobile = useDeviceDetect();

  return (
    <div className="z-0 bg-zinc-100 dark:bg-slate-800 font-body text-slate-900 dark:text-white">
      <Head>
        <title>The Sunny One</title>
        <meta name="description" content="Sunny's personal website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar nameFunc={updateName} closeSectionFunc={setActiveSection.bind(null, 'none')} />
        <Landing username={config.username} darkModeFn={toggleDarkMode} switchSectionFunc={switchSection} />
        <Box hide={activeSection !== 'aboutSite'} ><AboutSite  /></Box>
        <Box hide={activeSection !== 'experience'}><Experience /></Box>
        <Box hide={activeSection !== 'sunnyFacts'}><SunnyFacts /></Box>
        <Box hide={activeSection !== 'funThings'}><FunThings /></Box>
        <Box hide={activeSection !== 'music'}><Music /></Box>
        <div className='w-full h-[35vh]'></div> {/** Div as in divider! */}
      </div>
      <Footer onMobile={onMobile} />
    </div>
  );
}