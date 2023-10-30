import { useState } from 'react';

import Navbar from './navbar';

export default function Home() {

  return (
    <>
    <div className='flex justify-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 700" width="384" height="384"><defs><linearGradient gradientTransform="rotate(150, 0.5, 0.5)" x1="50%" y1="0%" x2="50%" y2="100%" id="ffflux-gradient"><stop stop-color="hsl(315, 100%, 72%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(227, 100%, 50%)" stop-opacity="1" offset="100%"></stop></linearGradient><filter id="ffflux-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.005 0.003" numOctaves="2" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
                <feGaussianBlur stdDeviation="20 0" x="0%" y="0%" width="100%" height="100%" in="turbulence" edgeMode="duplicate" result="blur"></feGaussianBlur>
            <feBlend mode="color-dodge" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" in2="blur" result="blend"></feBlend>
    
        </filter></defs><rect width="700" height="700" fill="url(#ffflux-gradient)" filter="url(#ffflux-filter)"></rect></svg>
      </figure>
      <div className="card-body">
        <h2 className="card-title">PoC émotion et couleurs</h2>
        <p>Labocoul est une Preuve de Concept à propos d'une expérience qui vise à découvrir les relations entre émotions et couleurs. 
          A travers une expérience de choix dichotomique, le programme capture les mouvements de la souris, le but à terme sera de calculer la couleur associée à une émotion.</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href='experiment'>Lancer l'expérience</a>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
