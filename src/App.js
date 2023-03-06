import React,{useState} from 'react';
import './App.css';
import {Table}  from './components/Table';
import Side from './components/side';
import {sprintcontext,sprintData} from "./components/DataContext/sprintcontext"
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  
  const [sortdata, setSortdata] = useState(sprintData);
  const[status,setStatus] = useState(false);
  const [data,setData]=useState(sortdata[0]);
  function SetDefaultValue() {
    setData(sortdata[0]);
  }   
    function ascsort ()  {
        var updated_data = sprintData.sort((a, b) =>a.name > b.name ? 1 : -1,)
        setSortdata(updated_data)
        setStatus(!status) 
        SetDefaultValue();
    };
    function dscsort  ()  {
        var updated_data =sprintData.sort((a, b) =>a.name > b.name ? -1 : 1,)
        setSortdata(updated_data)
        setStatus(!status)
        SetDefaultValue();
    }
    
 
function display(item) {
  setData(item); 
   
}
  
  return (
    <div className="App">
      <div className="main-container">
      <ErrorBoundary>
       <sprintcontext.Provider value={{sortdata,ascsort,dscsort,display,data}}>
          <Table />
          <Side /> 
        </sprintcontext.Provider>
      </ErrorBoundary>
      </div>
    </div>
  );

}
export default App;