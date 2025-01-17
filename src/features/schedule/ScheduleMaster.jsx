import React, { useEffect } from 'react';
import { useAddTodoMutation, useGetAllSheduleListQuery, useGetTodoQuery, useLazyGetAllSheduleListQuery } from "../../services/scheduleApi";
import ScheduleCards from "./Schedulecards";
import Header from './Header';
function ScheduleMaster(){
    var {isLoading,data,error}=useGetAllSheduleListQuery();
     var[getAllScheduleListFn]=useLazyGetAllSheduleListQuery();
     useEffect(()=>{
        getAllScheduleListFn();
     })
    if(error){
        <p>Error Loading</p>
    }
    return(
        <div>
        <div>
            <div className="d-flex">
           
         {
            isLoading && <div class="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            </div> 
         }
         <div className='d-flex flex-wrap justify-content-evenly'>

         {
             !isLoading && data?.map((cards)=>{
                 return(
                    <div>

                        <ScheduleCards key={cards.id} cards={cards}></ScheduleCards>
                    </div>
                    )
                })
            }
            </div>
         </div>
        </div>
        </div>
    )
}
export default ScheduleMaster;