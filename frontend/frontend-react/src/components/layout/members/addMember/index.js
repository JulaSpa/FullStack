import {useState} from 'react'
import './index.css'
const AddMember=({add})=>{
    const [employee, setEmployeeId]=useState([])
    const [rate, setRate]=useState('')
    const [role, setRole]=useState('')
    const [err,setErr]=useState('')
    const onSubmit=async(e)=>{
        e.preventDefault()
        const postMember = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
                employee,
                rate,
                role,
            })
          };
          try {
            const response = await fetch(
              `/members/`,
              postMember
            );
           
            const res = await response.json();
            
            if(response.status==200 || response.status==201){
                add(res.data)//ACÁ HAY Q PASARLE SI O SI EL RES.DATA.
                setErr('User added')
            }else if(response.status==400){
                if(res.error){
                    setErr(res.error)
                }else if(res.msg=="Email already exist"){
                    setErr(res.msg)
                }
            }
            
          } catch (error) {
            console.log(error)
          }
        }
    return(
        <div>
            <form onSubmit={onSubmit} className='form'>
                <div className='formChild'>
                    <label>Employee ID</label>
                    <input type='text'  className="input" value={employee} onChange={e=>setEmployeeId(e.target.value)}></input>
                </div>
                <div className='formChild'>
                    <label>rate</label>
                    <input type='number'  className="input" value={rate} onChange={e=>setRate(e.target.value)}></input>
                </div>
                <div className='formChild'>
                    <label>Role</label>
                    <input type='text'  className="input" value={role} onChange={e=>setRole(e.target.value)}></input>
                </div>
                <input type='submit' className='submit' value='Add member to the "project"'></input>
            </form>
            <h2 className={err=='User added'?'noErr':'err'}>{err}</h2>
        </div>
    )
}



export default AddMember