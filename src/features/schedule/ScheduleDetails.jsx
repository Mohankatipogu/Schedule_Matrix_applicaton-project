import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAddTodoMutation, useGetSheduleListByIdQuery, useLazyGetSheduleListByIdQuery } from '../../services/scheduleApi';
import StatusSchedule from './StatusSchedule';

function ScheduleDetails(){
    var {id}=useParams()
    console.log(id)
   var {isLoading,data}= useGetSheduleListByIdQuery(id)
    console.log(isLoading,data)
    let [newschedule,setNewschedule]=useState('')
    var [addTodoFn]=useAddTodoMutation()
    var [scheduleFn]=useLazyGetSheduleListByIdQuery()
   async function AddTodo(){
         var temp=JSON.parse(JSON.stringify(data))
         console.log(temp)
         temp.todos.push({task:newschedule,status:'todo',id:`t${data?.todos?.length+1}`});
         console.log(newschedule)
        //  addTodoFn(temp).then(()=>{
        //      scheduleFn(id)
        //  })//Async operations in event handlers.
      await addTodoFn(temp)
      scheduleFn(id);
    }
     async function deleteFn(i){
        var temp=JSON.parse(JSON.stringify(data))
        temp.todos.splice(i,1)
       await addTodoFn(temp)
        scheduleFn(id);
    }
    return(
        <div>
            <h1 style={{marginLeft:'35%'}}>{!isLoading && data.title} Details</h1>
            {
                isLoading && <div class="d-flex justify-content-center">
                <div className="spinner-border">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
            <input type="text" onChange={(e)=>{setNewschedule(e.target.value)}}  style={{width:'60%',height:"50px",borderRadius:"10px",marginLeft:"20%"}}/>
            <button className='m-3' onClick={()=>{AddTodo()}} style={{background:"#006BFF", borderRadius:"10px",height:"50px" }}>Add Shedule</button>
            <div className='d-flex justify-content-center mb-5'>
                            <StatusSchedule todolist={data} type="todo"></StatusSchedule>
                            <StatusSchedule todolist={data} type="done"></StatusSchedule>
                            <StatusSchedule todolist={data} type="doing"></StatusSchedule>
                           
            </div>     
        </div>
    )
}
export default ScheduleDetails;