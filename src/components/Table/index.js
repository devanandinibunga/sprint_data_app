import React from 'react';
import './Table.css';
// import Side from "../Side/index";
import {sprintcontext} from "../DataContext/sprintcontext"

export function Table(){
   
    
    // if (sortdata.length===0){
    //     throw new Error("No data found");
    // }
    
    return(
        
        <div className='table-container'>
            <sprintcontext.Consumer>
                    {({sortdata,ascsort,dscsort,display}) => {
                        return(
            <table id="table">
                <thead className='table-heading
                '>
                    <tr>
                        <th >Sprint Name <br/><button onClick={ascsort}>ASC</button><button onClick={dscsort}>DSC</button></th>   
                        <th >Status</th>
                        <th >Start Date</th>
                        <th >End Date</th>
                        <th >Progress</th>
                    </tr>
                </thead>
                
                <tbody >
                    {sortdata.map((item)=>(
                    <tr onClick={()=>{display(item)}}>
                        <td >{item.name}</td>
                        <td >{item.Status}</td>
                        <td >{item.StartDate}</td>
                        <td >{item.EndDate}</td>
                        <td> <progress value={item.completedinPer} max="100">{item.completedinPer}</progress></td>   
                    </tr>
                    ))}
                </tbody>
                
            </table>
        )}}
        </sprintcontext.Consumer>
        </div>
     
    )
    

}
// export default Table;
// export const myContext=React.createContext(item);