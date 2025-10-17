import { useContext, useState } from 'react';
import {NotificationContext} from '../context/notificationcontext';
const Notification = () => {
  const {message,setmessage} = useContext(NotificationContext);
  if(message){
    setTimeout(()=>{
      setmessage("");
    },3000);
  }
 return (
   <>
     {message && (
       <div className="notification-container bg-black absolute xs:left-[105px] sm:top-[77px] sm:left-[135px] md:top-[80px]  md:left-[150px] xs:top-[70px] lg:left-[43%] flex justify-center items-center rounded-3xl z-100 lg:top-[100px] xl:top-[110px] 2xl:top-[120px] animate-slide-down  xs:px-2.5 xs:py-2 md:px-3.5">
         <div className="notification">
           <p className='text-white'>{message}</p>
         </div>
       </div>
     )}
   </>
 );
} 
export default Notification;