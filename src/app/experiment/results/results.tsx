'use client'

import React from "react";
import {ExperimentData} from "../IfcColors";
import DrawTrajectory from "./drawTrajectory";

interface Props {
    experimentData : ExperimentData[]
}

interface State {

}

export default class Results extends React.Component<Props, State>{
    

    
    render(){
        return(
            <>
                <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Combinaison de couleurs</th>
                            <th>Couleur sélectionnée</th>
                            <th>Mouse pattern</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* rows */}
                        {this.props.experimentData.map((item, index) =>
                        <tr>
                            <th>{index+1}</th>
                            <td className="flex flex-row">
                                <svg width="50" height="50" className="mr-5">
                                    <circle cx="25" cy="25" r="24" 
                                    fill={`rgb(${item.colorCombination.left.R}, ${item.colorCombination.left.G}, ${item.colorCombination.left.B})`} 
                                    stroke="black"
                                    />
                                </svg>
                                <svg width="50" height="50">
                                    <circle cx="25" cy="25" r="24" 
                                    fill={`rgb(${item.colorCombination.right.R}, ${item.colorCombination.right.G}, ${item.colorCombination.right.B})`} 
                                    stroke="black"
                                    />
                                </svg>
                            </td>
                            <td>
                                <svg width="50" height="50">
                                    <circle cx="25" cy="25" r="24" 
                                    fill={`rgb(${item.colorSelected.R}, ${item.colorSelected.G}, ${item.colorSelected.B})`} 
                                    stroke="black"
                                    />
                                </svg>
                            </td>
                            <details className="collapse bg-base-200">
                            <summary className="collapse-title font-medium">Clique pour ouvrir/fermer</summary>
                                <div className="collapse-content"> 
                                    <DrawTrajectory trajectory={item.trajectory}/>
                                </div>
                            </details>
                            <td>

                            </td>
                        </tr>
                        )}
                        
                        </tbody>
                    </table>
                    
                    </div>

                    
                    
                </div>
            </>
        )
    }
}