import "./sideCard1.css";

export const Activesprints=({data})=>{
    return(
    <>
    <div className="card">
        <label>Active Sprints</label>
        <h1 id="display1">{data}</h1>
    </div>
    </>
    )
}
