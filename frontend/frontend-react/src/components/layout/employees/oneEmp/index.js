import {FaTimes} from 'react-icons/fa'
import { AiFillSetting } from "react-icons/ai";
import ModEmployee from '../modEmp/modEmp'
import './index.css'
import {useState} from 'react'
const OneEmp=({e, del,put})=>{
    const [mod,setMod] = useState(false)
    
return(
    <div className='listEmployees'>
        <div className='imgs'>
        <AiFillSetting className='mod' onClick={()=>setMod(!mod)}/><FaTimes className='del' onClick={()=>del(e._id)}/>
        </div>
        <ul className='ulEmployee'>
            <li>ID: {e._id}</li>
            <li>First name and Last name: {e.firstName} {e.lastName} </li>
            <li>Phone: {e.phone}</li>
            <li>Email: {e.email}</li>
            <li>Password: {e.password}</li>
            <li>Active: {String(e.active)}</li>
        </ul>
        <div className={mod==false?'employeeModOff':'employeeMod'}>
        <ModEmployee
        key={e._id}
        prevEmp={e}
        editEmp={put}
        />
       </div>
       
     
      
    </div>
)
}
export default OneEmp