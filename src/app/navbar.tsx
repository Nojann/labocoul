'use client'

import { useState } from "react"

export default function Navbar() {

    const [menuActive, setMenuActive] = useState(false);

    function handleClick(){
        setMenuActive(!menuActive);
    }

    return(
        <>
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" href="/">Labocoul</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost" onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
            {menuActive ?
            (<div className="flex justify-end z-10">
                <ul className="menu bg-base-200 w-56 rounded-box absolute">
                    <li><a href="/color-picker">Préparateur de couleurs</a></li>
                    <li><a href="/experiment">Expérience</a></li>
                </ul>
            </div>) : (<></>)}
        </div>
        </>
    )
}