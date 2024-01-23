"use client";
import React, { useState } from "react";

const page = () => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const [mainTask, setMainTask] = useState([]);

    const submitHandler = (e)=>{
        e.preventDefault();
        setMainTask([...mainTask, { title, desc }]);
        settitle("");
        setdesc("");
    }

    const deleteHandler = (i) => {

        let copyTask = [...mainTask]
        copyTask.splice(i,1)
        setMainTask(copyTask)
    }

    let renderTask = <h2>No task Available</h2>;
    
    
    if(mainTask.length>0){
        renderTask = mainTask.map((t, i) => {
            return(
               <li key={i} className="flex items-center justify-between mb-6"> 
                <div className="flex items-center justify-between mb-5 w-1/2">
                    <h6 className="text-lg font-medium">{t.title}</h6>
                    <h6 className="text-lg font-medium">{t.desc}</h6>
                </div>
               <button onClick={()=>{
                    deleteHandler(i)
               }}
                className="bg-red-600 text-white px-4 py-2 rounded font-bold">Delete</button>
               </li> 
            );
        });
    }
    return(
        <>
            <h1 className='bg-black text-white p-5 text-5x1 font-bold text-center'>Nitin's Todo List </h1>
        
        <form onSubmit={submitHandler} className='TodoForm'>
            <input type="text" className="text-2x1
             border-zinc-800 border-2 m-5 px-4 py-2" 
              placeholder="Enter Task here"
              value={title}
              onChange={(e)=>{
                settitle(e.target.value)
              }}  
             />

        <input type="text" className="text-2x1
             border-zinc-800 border-2 m-5 px-4 py-2" 
              placeholder="Enter Description here"  
              value={desc}
              onChange={(e)=>{
                setdesc(e.target.value)
              }}  

             />

         <button className="bg-black text-white px-3 py-3 text-2x1 font-bold rounded m-5">Add Task</button>    
        </form>

           {/* <table width='97%' className='bg-black text-white m-5 p-2 text-2x1 font-bold rounded '>
              
                <>
                    <th width='10%'>Main Task&emsp;</th>
                    <th width='80%'>Description&emsp;&emsp;</th>
                    <th width='1%'>Operation&emsp;</th>

                </>
              

           </table>   

 */}
        <div className=" m-5 p-4 bg-slate-200">
            <ul>
                {renderTask}
            </ul>
        </div>
        </>
    )
}

export default page 