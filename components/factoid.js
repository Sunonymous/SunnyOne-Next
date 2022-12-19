import { useState } from "react";

export default function Factoid({ title, deets }) {
    const [levelOfDetail, setLevelOfDetail] = useState(0);

    const maxLOD = Math.max(...Object.values(deets).filter(Array.isArray).map((d) => d.length - 1));

    const details = () => deets.map((d, idx) => {
        if (Array.isArray(d)) {
            return (<div key={idx}>{d[levelOfDetail]}</div>);
        } else {
            return (<div key={idx}>{d}</div>);
        }
    });

    return (
        <div className="m-2 p-4 text-center md:text-left prose dark:prose-invert">
            <h3 className="inline-block">{title}</h3>
            <input className="ml-5" type='range' min='0' max={maxLOD} step='1' list='rangemarks' defaultValue={levelOfDetail} onChange={(e) => setLevelOfDetail(e.target.valueAsNumber)} />
            <br />
            {details(deets)}
            <datalist id='rangemarks'>
                <option value='0' label='minimum'></option>
                <option value='1' label='moderate'></option>
                <option value='2' label='full'></option>
                <option value='3' label='excessive'></option>
            </datalist>
        </div>
    );
}