'use client'

import React from "react";
import {Orientation} from './IfcColors';

interface Props {
    orientation : Orientation,
    display : boolean,
    color : string,
    onClick : (e : any, orientation : Orientation) => void,
}

interface State {

}

export default class ColoredCorner extends React.Component<Props, State>{
    render(){
        if (this.props.orientation === "left" && this.props.display === true){
            return (<div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100">
                            <path d="M50 0 A50 50 0 0 1 0 50 L0 0 Z" fill={this.props.color} stroke="black" onClick={(e) => this.props.onClick(e, "left")}/>
                        </svg>
                    </div>)
        }
        else if(this.props.orientation === "right" && this.props.display === true){
            return(
            <div className="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 100 100" >
                    <path d="M100 50 A50 50 0 0 1 50 0 L100 0 Z" fill={this.props.color} stroke="black"  onClick={(e) => this.props.onClick(e, "right")}/>
                </svg>
            </div>)
        }
    }
}