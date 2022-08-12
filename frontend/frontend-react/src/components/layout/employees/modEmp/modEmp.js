import {useState} from 'react'
import './index.css'
const ModEmployee=({editEmp, prevEmp})=>{
    const[userInput, setUserInput] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        active: false
      });
      const [err,setErr]=useState('')
      
     
      const onChange = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value});
      } 
      const onClick=()=>{
        setUserInput({ ...userInput, active:!userInput.active})
      }
      const onSubmit = async (e) => {
        e.preventDefault();
        const EmployeeId = prevEmp._id;
    
        const putEmployee = {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            firstName: userInput.firstName==''?prevEmp.firstName:userInput.firstName,
            lastName: userInput.lastName==''?prevEmp.lastName:userInput.lastName,
            phone: userInput.phone==''?prevEmp.phone:userInput.phone,
            email: userInput.email==''?prevEmp.email:userInput.email,
            password: userInput.password==''?prevEmp.password:userInput.password,
            active: userInput.active
          })
        };
        try {
            const response = await fetch(
              `full-stack-nu-one.vercel.app/employees/${EmployeeId}`,
              putEmployee
            );
            const res = await response.json();
            editEmp(res.data)

            if(res.error){
                setErr(res.error)
            }else if(res.msg=="Email already exist"){
                setErr(res.msg)
            }else{
                setErr('User modified')
            }
          } catch (error) {
            console.error(error);
          }
        };
    
    return(
        <div>
            <form onSubmit={onSubmit} className='formMod'>
                <div className='inputMod'>
                    <label>New First Name</label>
                    <input type='text' className="input" value={userInput.firstName} name="firstName" onChange={onChange}></input>
                </div>
                <div className='inputMod'>
                    <label>New Last Name</label>
                    <input type='text' className="input" value={userInput.lastName} name="lastName" onChange={onChange}></input>
                </div>
                <div className='inputMod'> 
                    <label>New Phone</label>
                    <input type='number' className="input" value={userInput.phone} name="phone" onChange={onChange}></input>
                </div>
                <div className='inputMod'>
                    <label>New Email</label>
                    <input type='email' className="input" value={userInput.email} name="email" onChange={onChange}></input>
                </div>
                <div className='inputMod'>
                    <label>New Password</label>
                    <input type='password' className="input" value={userInput.password}  name="password" onChange={onChange}></input>
                </div>
                <div className='inputMod'>
                    <label>New Active</label>
                    <input type='checkbox' className="input2" value={userInput.active} name="active" onClick={onClick}></input>
                </div>
                <input type='submit' className='submitMod' value='Modify Employee'></input>
            </form>
            <h2 className={err=='User modified'?'noErr':'err'}>{err}</h2>
        </div>
    )
}
export default ModEmployee