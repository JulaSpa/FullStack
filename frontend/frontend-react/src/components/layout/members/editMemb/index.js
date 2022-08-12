import { useState } from "react"
import './index.css'
const EditMember =({put, prevMemb})=>{
    const [members, setMembers]=useState({
        role:'',
        rate:''
    })
    const [err,setErr]=useState('')
    const onChange=(e)=>{
        setMembers({...members, [e.target.name]: e.target.value})
    }
    const onSubmit=async (e)=>{
        e.preventDefault()
        const memberId = prevMemb._id
        const putMember = {
            method: 'PUT',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
                role: members.role==''?prevMemb.role:members.role,
                rate: members.rate==''?prevMemb.rate:members.rate
              })
            };
            try {
                const response = await fetch(
                  `https://full-stack-2895402ts-julaspa.vercel.app/members/${memberId}`,
                  putMember
                );
                const res = await response.json();
                if(response.status==200 || response.status==201){
                    put(res.data)
                    setErr('User Modified')
                }else if(response.status==400 || response.status==401){
                    if(res.error){
                        setErr(res.error)
                    }
                }
              } catch (error) {
                console.error(error);
              }
            
    }


    return(
        <div>
            <form onSubmit={onSubmit} className='formMod'>
                <div className='inputMod'>
                <label>New role:</label>
                <input value={members.role} className="input" name='role' onChange={onChange}></input>
                </div>
                <div className='inputMod'>
                <label>New rate:</label>
                <input value={members.rate} className="input" name='rate' onChange={onChange}></input>
                </div>
                <input type='submit' className='submitMod' value='Modify Member'/>
            </form>
            <h2 className={err=='User modified'?'noErr':'err'}>{err}</h2>
        </div>
    )
}
export default EditMember