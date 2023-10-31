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

        let pointsTrajectoryAdjusted : string = trajectoryAdjusted.map(point => `${point.x},${point.y}`).join(' ');


        let firstPoint : string = `${trajectoryAdjusted[0].x},${trajectoryAdjusted[0].y}`;
        let lastPoint : string = `${trajectoryAdjusted[trajectoryAdjusted.length-1].x},${trajectoryAdjusted[trajectoryAdjusted.length-1].y}`;
        let line : string = [firstPoint, lastPoint].join(' ');

        let maxDeviationPoint = this.maximumDeviation(trajectory);
        maxDeviationPoint = {x: maxDeviationPoint.x-minX, y:maxDeviationPoint.y-minY};

        return (
            <svg width={width} height={heigth}>
              <polyline points={pointsTrajectoryAdjusted} fill="none" stroke="black" />
              <polyline points={line} fill="none" stroke="red" />
              <circle cx={maxDeviationPoint.x} cy={maxDeviationPoint.y}  r="10" fill="red" />
            </svg>
          );
    }

    maximumDeviation(trajectory : point[]){
        let firstPoint : point = trajectory[0];
        let lastPoint : point = trajectory[trajectory.length-1];

        let distanceX : number = lastPoint.x - firstPoint.x;
        let distanceY : number = lastPoint.y - firstPoint.y;

        let idealTrajectory : point[] = new Array()

        for (let i = 0; i<trajectory.length; i++){
            let x = firstPoint.x + (distanceX/trajectory.length)*i;
            let y = firstPoint.y + (distanceY/trajectory.length)*i;

            idealTrajectory.push({x:x, y:y});
        }

        let maxDeviation : number = 0;
        let maxDeviationIndex : number = 0;

        for (let i = 0; i<trajectory.length; i++){
            let distance = this.euclideanDistance(idealTrajectory[i], trajectory[i]);
            if(distance > maxDeviation){
                maxDeviation = distance;
                maxDeviationIndex = i;
            }
        }

        return trajectory[maxDeviationIndex];
    }

    euclideanDistance(point1: point, point2: point): number {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }

    
    render(){
        return this.drawing(this.props.trajectory);
    }
}