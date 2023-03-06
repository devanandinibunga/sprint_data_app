import "./sideCard3.css";

export const Forecast=({data})=>{
    return(
    <div className="card">
        <label>Sprints Forecast</label>
        <h1 id="display4">{data}</h1>
    </div>
    )
}
// export default sideCard3;