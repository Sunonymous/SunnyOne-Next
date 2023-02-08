import { useState, useEffect, useId, useRef } from 'react';
import { capitalize } from '../lib/helpers';

// shibe offers three choices of animals, which replace the $$$ in the url
const  shibeEndpoint = 'http://shibe.online/api/$$$?count=1&urls=true&httpsUrls=true'
const adviceEndpoint = 'https://api.adviceslip.com/advice';

// this could go in its own file, though it's only used here...
function LoadingSpinner() {
  return (
    <div className="mx-4 my-36 self-center" role="status">
      <svg
        aria-hidden="true"
        className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );
}

export default function AnimalAdvisor() {
  const [speaker, setSpeaker] = useState(null);
  const   [saying, setSaying] = useState(null);
  const   [status, setStatus] = useState("idle");   // idle | loading | success | error | rendered
  const   [animal, setAnimal] = useState('shibes'); // shibes | cats | birds

  const     imgRef = useRef();
  const displayRef = useRef();
  const   selectID = useId();

  const animalDisplayForm = (s) => capitalize(s).slice(0, s.length - 1);

  async function generateAdvice() {
    hideAdvice();
    setStatus("loading");

    const  shibeResponse = await fetch(shibeEndpoint.replace('$$$', animal));
    const adviceResponse = await fetch(adviceEndpoint);

    if (!shibeResponse.ok || !adviceResponse.ok) {
      setStatus("error");
      return;
    }

    const  shibeJson = await shibeResponse.json();
    const adviceJson = await adviceResponse.json();
    setSaying(adviceJson.slip.advice);
    setSpeaker(shibeJson[0]); // API returns an array
    setStatus("success");
  }

  const hideAdvice = () => displayRef.current.classList.add("hidden");
  const showAdvice = () => {
    displayRef.current.classList.remove("hidden");
    setStatus('rendered');
  }

  useEffect(() => {
    if (imgRef && imgRef.current) {
      const currentReference = imgRef.current;
      currentReference.addEventListener("load", showAdvice);
      return () => currentReference.removeEventListener("load", showAdvice);
    }
  }, [speaker]);

  return (
    <section className="flex flex-col justify-center prose dark:prose-invert">
      <h3>Animal Advisor</h3>
      {(status === "idle" || status === "rendered") && (
          <form className="self-end">
            <label htmlFor={selectID}>Choose your advisor:</label>
            <select
              id={selectID}
              className="ml-4 p-1 rounded-lg bg-gray-200 text-gray-800 "
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
            >
              <option value="shibes">Dog</option>
              <option value="cats"  >Cat</option>
              <option value="birds" >Bird</option>
            </select>
          </form>
        )}
      {status === "idle" && (
        <p>Some people say animals are wise. We can ask an animal for some advice to find out.</p>
      )}
      {(status === "loading" || status === "success") && <LoadingSpinner />}
      {status === "error" && (
        <p>Something has gone horribly wrong! Maybe try again?</p>
      )}

      <div ref={displayRef} className="hidden m-0 p-0">
        <p className="relative top-12 w-2/3 m-0 ml-auto p-3 bg-white border-2 border-gray-500 rounded-xl dark:text-black text-center font-semibold tracking-wide">
          &ldquo;{saying}&ldquo;
        </p>
        <img
          ref={imgRef}
          alt={`random picture of ${animal}`}
          className="mx-auto max-w-full max-h-96"
          src={speaker}
        />
      </div>

      <div className='self-center'>
        <button
          className="w-max p-2 h-12 self-center border-2 rounded-full text-gray-700 dark:text-zinc-200 font-semibold bg-gradient-to-b from-zinc-100 dark:from-slate-600 hover:from-zinc-200 dark:hover:from-slate-700 to-zinc-300 dark:to-slate-900 disabled:bg-gray-700 disabled:text-gray-500"
          onClick={generateAdvice}
          disabled={status === "loading"}
        >
          {status === "idle"     && "Ask Advice"}
          {status === "loading"  && "Asking Advice..."}
          {status === "success"  && "Putting things together..."}
          {status === "rendered" && "Ask another!"}
          {status === "error"    && "Try Again"}
        </button>
      </div>
    </section>
  );
}