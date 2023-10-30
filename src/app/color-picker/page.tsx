'use client'

import { useState } from 'react';
import ColorPiker from './colorPicker';

export default function ColorPikerPage() {

  return(
    <>
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl'>Préparateur de couleur</h1>
      <div className='w-1/2 mt-24'>
        <ColorPiker/>
      </div>
    </div>
    
    </>
  )
}