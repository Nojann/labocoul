import React, { useEffect, useRef } from 'react';

interface CanvasProps {
    colors : string;
}

export default function Canvas(props: CanvasProps){
    const canvasRef = useRef(null)
    
    const draw = (ctx: CanvasRenderingContext2D) => {
        ctx.fillStyle = props.colors;
        ctx.beginPath();
        ctx.rect(20, 20, 150, 100);
        ctx.fill(); 
    }

    useEffect(() => {
        const canvas: HTMLCanvasElement = canvasRef.current!;
        const context: CanvasRenderingContext2D = canvas.getContext('2d')!;

        draw(context)
    }, [draw])
  
  return <canvas ref={canvasRef} {...props}/>
}