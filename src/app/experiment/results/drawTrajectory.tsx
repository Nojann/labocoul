'use client'

import React from "react";
import {point} from "../IfcColors";

interface Props {
    trajectory : point[]
}

interface State {

}

export default class DrawTrajectory extends React.Component<Props, State>{
    
    drawing(trajectory : point[]){
        let pointsX : number[] = trajectory.map(point => point.x);
        let minX : number = Math.min(...pointsX);
        let width : number =  Math.max(...pointsX)-minX;
        let pointsXadjusted : number[] = pointsX.map(point => point-minX);

        let pointsY : number[] = trajectory.map(point => point.y);
        let minY : number = Math.min(...pointsY);
        let heigth : number =  Math.max(...pointsY)-minY;
        let pointsYadjusted : number[] = pointsY.map(point => point-minY);

        let trajectoryAdjusted : point[] = new Array(pointsX.length);

        for(let i = 0; i<trajectoryAdjusted.length; i++){
            trajectoryAdjusted[i]={x:pointsXadjusted[i], y:pointsYadjusted[i]}
        }

        let pointsString = trajectoryAdjusted.map(point => `${point.x},${point.y}`).join(' ');

        return (
            <svg width={width} height={heigth}>
              <polyline points={pointsString} fill="none" stroke="black" />
            </svg>
          );
    }

    
    render(){
        return this.drawing(this.props.trajectory);
    }
}