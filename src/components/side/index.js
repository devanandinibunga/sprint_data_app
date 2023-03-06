// import { useState } from "react";
import "./Side.css";
import {Activesprints} from "../Activesprints/index";
import {CompletedSprints} from "../CompletedSprints/index";
import {Forecast} from "../Forecast/index";
import {Backlogs} from "../Backlogs/index";
import {sprintcontext} from "../DataContext/sprintcontext";

function Side(){
    console.log()
    return(
        <div className='side-container'>
            <sprintcontext.Consumer>{
               ({data})=>{
                return(
                <>
                    <Activesprints data={data.ActiveSprints}/>
                    <CompletedSprints data={data.CompletedSprints}/>
                    <Forecast data={data.SprintForecast}/>
                    <Backlogs data={data.Backlogs}/> 
                </>
               )}}
            </sprintcontext.Consumer>   
        </div>
    )  
}
export default Side;
 /* <div className="card">
                <label>Completed Sprints</label>
                <h1 id="display2">0</h1>
            </div>
            <div className="card">
                <label>Sprints Forecast</label>
                <h1 id="display3">0</h1>
            </div>
            <div className="card">
                <label>Backlogs</label>
                <h1 id="display4">0</h1>
            </div> */