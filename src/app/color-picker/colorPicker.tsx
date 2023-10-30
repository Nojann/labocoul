'use client'

import { useState } from 'react';
import CSS from 'csstype';

interface ColorRGB {
  R: number,
  G: number,
  B: number,
}

type ColorHex = string;


export default function ColorPiker() {

  const [colorRGB, setColorRGB] = useState({R:100, G:100, B:100});

  function handleChange(e : any){
    switch(e.target.id){
      case 'Red':
      setColorRGB({R:e.target.value, G:colorRGB.G, B:colorRGB.B})
      break;
      case 'Green':
      setColorRGB({R:colorRGB.R, G:e.target.value, B:colorRGB.B})
      break;
      case 'Blue':
      setColorRGB({R:colorRGB.R, G:colorRGB.G, B:e.target.value})
      break;
    }
  }

  function RGBtoHex(color : ColorRGB) : ColorHex{
      let RHex : string;
      color.R == 0 ? RHex = '00' : RHex = Number(color.R).toString(16);
      let GHex : string;
      color.G == 0 ? GHex = '00' : GHex = Number(color.G).toString(16);
      let BHex : string;
      color.B == 0 ? BHex = '00' : BHex = Number(color.B).toString(16);
      
      return `#${RHex}${GHex}${BHex}`;
  }

  var colorBackground: CSS.Properties = {
    backgroundColor: RGBtoHex(colorRGB),
  }

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div style={colorBackground} className='lg:w-1/2 h-64 flex items-center justify-center'>
            <p>{RGBtoHex(colorRGB)}</p>
        </div>
        <div className="card-body">
            <input id="Red" type="range" min={0} max={255} value={colorRGB.R} className="range" onChange={handleChange}/>
            <div className='flex flex-row'>
                <p>Rouge</p>
                <span className="badge">{colorRGB.R}</span>
            </div>
            <input id="Green" type="range" min={0} max={255} value={colorRGB.G} className="range" onChange={handleChange}/>
            <div className='flex flex-row'>
                <p>Vert</p>
                <span className="badge">{colorRGB.G}</span>
            </div>
            <input id="Blue" type="range" min={0} max={255} value={colorRGB.B} className="range" onChange={handleChange}/>
            <div className='flex flex-row'>
                <p>Blue</p>
                <span className="badge">{colorRGB.B}</span>
            </div>
        </div>
        </div>
    </>
  )
}