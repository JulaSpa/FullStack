import {FaTimes} from 'react-icons/fa'
import { AiFillSetting } from "react-icons/ai";
import MapEmp from "./mapEmp"
import EditEmp from '../editMemb'
import './showMemb.css'
import {useState} from 'react'
const ShowMemb=({e, del, put})=>{    
    const [mod,setMod] = useState(false)  
    
return(
    <div className='list'>
        <div className='imgs'>
        <AiFillSetting className='mod' onClick={()=>setMod(!mod)}/><FaTimes className='del' onClick={()=>del(e._id)}/>
        </div>
        <ul className='ulMembers'>
            <li>Member ID: {e._id}</li>
            <li>Rate: {e.rate}</li>
            <li>Role: {e.role}</li>
            <li>Employee: <MapEmp json={e.employee}/></li>
        </ul>
        <div className={mod==false?'employeeModOff':'employeeMod'}>
        <EditEmp prevMemb={e} put={put}/>
        </div>
    </div>
)
}
export default ShowMemb