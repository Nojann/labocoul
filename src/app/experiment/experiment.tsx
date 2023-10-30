'use client'

import React from "react";
import ChoiceTask from "./choiceTask";
import Result from './results/results';
import {colorPalette, colorRGB, ColorCombination, ColorSelectedCount, ExperimentData} from './IfcColors';

interface StateExperiment {
    experimentStep : boolean,
    colorsSelected : ColorSelectedCount[],
    experimentData : ExperimentData[],
}

interface Props {}

export default class Experiment extends React.Component<Props, StateExperiment>{

    state : StateExperiment = {
        //An object array which count the number of a color is clicked on the task
        experimentStep : true,
        colorsSelected : this._initializeColorsSelected(),
        experimentData : new Array(),
    }

    constructor(props : any){
        super(props);

        this.setExperimentStep = this.setExperimentStep.bind(this);
        this.setExperimentData = this.setExperimentData.bind(this);
    }

    setExperimentStep(){
        this.setState({
            experimentStep: !this.state.experimentStep,
        })
    }

    _initializeColorsSelected() : ColorSelectedCount[]{
        let array : ColorSelectedCount[] = new Array();
        var keys = Object.keys(colorPalette);

        keys.forEach((element : string) => {
            array.push({
                colorId: element,
                colorRGB: colorPalette[element],
                count:0,
            })
        })

        return array;
    }

    setExperimentData(data : ExperimentData[]){
        this.setState({
            experimentData : data,
        })

        console.log(this.state.experimentData);
    }

    render(){
        return(
            <>
            {this.state.experimentStep ? 
                <ChoiceTask
                    isActive={this.setExperimentStep}
                    setExperimentData={this.setExperimentData}/> 
                : <Result
                    experimentData={this.state.experimentData}
                />
            }
            </>
        )
    }
}