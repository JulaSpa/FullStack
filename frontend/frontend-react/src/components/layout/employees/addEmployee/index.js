import {useState} from 'react'
import './index.css'
const AddEmployee=({add})=>{
    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [phone, setPhone]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [active, setActive]=useState(false)
    const [err,setErr]=useState('')
    const onSubmit=async(e)=>{
        e.preventDefault()
        const postEmployee = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                phone,
                email,
                password,
                active
            })
          };
          try {
            const response = await fetch(
              `https://jula-express-react.herokuapp.com/employees/`,
              postEmployee
            );
            console.log(response.status)
            const res = await response.json();
            if(response.status==200 || response.status==201){
                add(res.data)
                console.log(res)
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
                    <label>First Name</label>
                    <input type='text' className="input" value={firstName} onChange={e=>setFirstName(e.target.value)}></input>
                </div>
                <div className='formChild'>
                    <label>Last Name</label>
                    <input type='text' className="input" value={lastName} onChange={e=>setLastName(e.target.value)}></input>
                </div>
                <div className='formChild'>
                    <label>Phone</label>
                    <input type='number' className="input" value={phone} onChange={e=>setPhone(e.target.value)}></input>
                </div>
                <div className='formChild'>
                    <label>Email</label>
                    <input type='email' className="input" value={email} onChange={e=>setEmail(e.target.value)}></input>
                </div>
                <div className='formChild'>
                    <label>Password</label>
                    <input type='password' className="input" value={password} onChange={e=>setPassword(e.target.value)}></input>
                </div>
                <div className='formChild'>
                    <label>Active</label>
                    <input type='checkbox' className="input2" value={active} onClick={e=>setActive(!active)}></input>
                </div>
                <input type='submit' className='submit' value='Add employee'></input>
            </form>
            <h2 className={err=='User added'?'noErr':'err'}>{err}</h2>
        </div>
    )
}



export default AddEmployee