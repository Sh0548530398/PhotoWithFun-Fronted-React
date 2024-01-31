import { useState } from 'react'
import {Link} from "react-router-dom"
import Busines from '../Busines/Busines';
import ShowServiceAdmin from '../Services/ShowServiceAdmin';
import ShowMeetingAdmin from '../Meeting/ShowMeetingAdmin';


function AdminPage() {
const [isServing,setIsServing]=useState(false);

 const handleService=()=>{
  setIsServing(true);
  }
  const handleMeet=()=>{
   setIsServing(false);
    }
  return (
    <>
     <Busines></Busines>
     <Link to ={"services"}><button onClick={handleService}>שירותי עסק</button> </Link>
     <Link to ={"meetings"}><button onClick={handleMeet}>פגישות</button></Link>
      {isServing? <ShowServiceAdmin></ShowServiceAdmin>:<ShowMeetingAdmin></ShowMeetingAdmin>}
    </>
  )
}

export default AdminPage