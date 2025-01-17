import React from "react";
import { useAddTodoMutation } from "../../services/scheduleApi";
import "./Statusschedule.css"
function StatusSchedule({todolist,type}){
    var [ubdateScheduleFn]=useAddTodoMutation();
    console.log(todolist)
    function handleDragStar(ev,tid){
       ev.dataTransfer.setData("abc",JSON.stringify({id:ev.target.id,"tid":tid}))
    }
    function handleDrop(ev,tid){
        var {id,tid}=JSON.parse(ev.dataTransfer.getData('abc'));
        console.log(tid)
        ev.target.appendChild(document.getElementById(id));
        console.dir(todolist)
        var temp=JSON.parse(JSON.stringify(todolist))
        var todos =temp.todos.map((todo)=>{
                if(todo.id==tid){
                   todo.status=type;
                }
                    return todo;
        })
        temp.todos=todos
        ubdateScheduleFn(temp).then(()=>{})
        if(ev.target.tagName =='LI'){
            ev.target.parentElement.appendChild(document.getElementById(id));
        }
        else
        {
          ev.target.appendChild(document.getElementById(id));
        }
    }
    return(
        <div className="border w-25 m-2">
            <h3 style={{textAlign:'center',background:'#608BC1'}}>{type.toUpperCase()}</h3>
            <ul onDragOver={(ev)=>{ev.preventDefault()}} onDrop={(ev)=>{handleDrop(ev)}} className="p-0 h-100">
            {
                todolist?.todos?.filter(todo=>todo.status==type).map((t,i)=>{
                    return <li id={`${t.task}${i}`} draggable='true' onDragStart={(event)=>{handleDragStar(event,t.id)}} className=" rounded p-2 m-2" style={{listStyle:'none',background:"#006A67",color:'white'}}>{t.task}
                    </li>
                })
            }
            </ul>
        </div>
    )
}
export default StatusSchedule;