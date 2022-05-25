import React,{ useState, useEffect } from "react";

export default function Timer(){
  
   const [startTime, setStartTime]= useState();
   const [endTime,setEndTime]= useState(10);
   const [timerId,setTimerId] = useState(startTime);
  const [watch,setWatch] = useState(0);

  
   if(!timerId) {
     let id = setInterval(()=> {
       setWatch((watch)=>watch+1)
     },1000)
     setTimerId(id)
     
     if(timerId == endTime)
     {
      clearInterval(timerId)
      setTimerId(null)
       
     }
   }
   const clear = ()=> {
    clearInterval(timerId)
    setTimerId(0)
    setWatch(0)
   }
  

  return <div>
    Enter Starting Time Here:  <input type="text"
     placeholder="Enter Initial Time to start"
     onChange={(e)=> setStartTime(e.target.value)}
     />  <br/><br/>
     Enter Endin Time Here:  <input type="text"
     placeholder="Enter End Time to Stop"
     onChange={(e)=> setEndTime(e.target.value)}
     />

    <h1> Timer : {watch}</h1>
    
   <button onClick={clear}>Clear</button>
    
    </div>
};