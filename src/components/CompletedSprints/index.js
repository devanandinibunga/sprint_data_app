import "./sideCard2.css";

export const CompletedSprints=({data})=>{
    return(
    <div className="card">
        <label>Completed Sprints</label>
        <h1 id="display2">{data}</h1>
    </div>
    )
}
// export default sideCard2;