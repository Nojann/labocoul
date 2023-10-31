'use client'

import React from "react";
import ColoredCorner from "./coloredCorner";
import getColorsCombination from "./colorsCombination";
import {colorPalette, colorRGB, ColorCombination, Orientation, ExperimentData, point} from './IfcColors';

interface State{
    choiceTaskReady : boolean,
    colorLeft : colorRGB,
    colorRight : colorRGB,
    combinationIndex: number,
    combinations: ColorCombination[],
    data : ExperimentData[],
    trajectory : point[]
}

interface Props{
    isActive : () => void,
    setExperimentData: (data : ExperimentData[]) => void,
}

export default class ChoiceTask extends React.Component<Props, State>{
    
    state : State = {
        choiceTaskReady: false,
        combinationIndex: 0,
        combinations: getColorsCombination(),
        colorLeft : {R:150, G:150, B:150},
        colorRight : {R:150, G:150, B:150},
        data: new Array(),
        trajectory : new Array()
    }

    constructor(props : any){
        super(props);

        this.handleChoiceTask = this.handleChoiceTask.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    //Initialization of colorLeft and colorRight
    componentDidMount() {
        this.setState({
            colorLeft: this.state.combinations[0].left,
            colorRight: this.state.combinations[0].right,
        });
    }

    //Handle the color selected on task and generate color to the next task
    handleColor(e : any, orientation : Orientation){

        if(orientation === "right"){
            this.state.data.push({
                colorCombination : this.state.combinations[this.state.combinationIndex],
                colorSelected : this.state.colorRight,
                trajectory : this.state.trajectory,
            });

            this.setState({
                trajectory: new Array(),
            })
        }
        else{
            this.state.data.push({
                colorCombination : this.state.combinations[this.state.combinationIndex],
                colorSelected : this.state.colorLeft,
                trajectory : this.state.trajectory,
            });

            this.setState({
                trajectory: new Array(),
            })
        }

        let index = this.state.combinationIndex+1;

        //Next state of color combination
        if(index < 2 /*this.state.combinations.length*/){
            this.setState({
                choiceTaskReady: false,
                colorLeft: this.state.combinations[index].left,
                colorRight: this.state.combinations[index].right,
                combinationIndex: index,
            })
        }
        //End of the experiment
        else{
            this.props.setExperimentData(this.state.data);
            this.props.isActive();
        }
    }

    //Handle the display task state
    handleChoiceTask(){
        this.setState({
            choiceTaskReady: true
          });
    }

    handleMouseMove(event : React.MouseEvent<Element, MouseEvent>) : void{

        if(this.state.choiceTaskReady){
            let point = {x:event.clientX, y:event.clientY};
            this.state.trajectory.push(point);
        }
    }

    _getKeyByValue(object : any, value : any) {
        return Object.keys(object).find(key => object[key] === value);
      }

    render(): React.ReactNode {
        let colorLeft = `rgb(${this.state.colorLeft.R}, ${this.state.colorLeft.G}, ${this.state.colorLeft.B})`;
        let colorRight = `rgb(${this.state.colorRight.R}, ${this.state.colorRight.G}, ${this.state.colorRight.B})`;
        
        return(
            <>
            <main className="h-screen w-screen flex items-center justify-center">
                <div className="border-2 border-black w-3/4 h-3/4 grid grid-rows-2" onMouseMove={this.handleMouseMove}>
                    <div className="grid grid-cols-2">
                        <ColoredCorner 
                        orientation="left"
                        display={this.state.choiceTaskReady} 
                        color={colorLeft}
                        onClick={this.handleColor}/>
                        <ColoredCorner 
                        orientation="right"
                        display={this.state.choiceTaskReady}  
                        color={colorRight}
                        onClick={this.handleColor}/>
                    </div>
                    <div className="flex items-end justify-center" >
                        <div className="flex flex-col items-center mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100" onClick={this.handleChoiceTask}>
                                <circle cx="50" cy="50" r="50" fill="#333" />
                                <polygon points="35,30 35,70 75,50" fill="#fff" />
                            </svg>
                            <p>Quelle couleur représente le plus la joie ? </p>
                            <p>(Appuie sur play pour démarrer) </p>
                        </div>
                    </div>
                </div>
            </main>
            </>    
        )
    }
}

