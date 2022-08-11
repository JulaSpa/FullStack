import {useState, useEffect} from 'react'
import List from './employeeList/index'
import AddEmployee from './addEmployee/index'
import './index.css'
import { AiOutlinePlus } from "react-icons/ai";


function Employees() {
  const [employees, setEmployees]=useState([])
  const url=`https://jula-express-react.herokuapp.com`;

  useEffect(() => {
    try {
      fetch(`${url}/employees`)
        .then((response) => response.json())
        .then((response) => {
          setEmployees(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  },[]);
  //POST METHOD
   const add =async(emp)=>{
    setEmployees([...employees, emp])
   }
   //DELETE METHOD
   const del =async(id)=>{
    await fetch(`${url}/${id}`,{
      method: 'DELETE'
      }
      )
      setEmployees(employees.filter(e=>e._id!==id))
     
   }
   
   //PUT METHOD
  const put = async(body)=>{
    const employeesUpdated = employees.map((employee) => {
      if (employee._id === body._id) {
        return body;
      } else {
        return employee;
      }
    });
    setEmployees(employeesUpdated);
  };   
    return (
      <div>
        <h1>Employees list</h1>
        <div className='allEmps'>
            <div className='listMarg'>
            {employees.length>0?(<List json={employees} del={del} put={put} add={add}/>):('no employees to show')}
            </div>
            <div className='add'>
            <AddEmployee add={add}/>
            </div>
        </div>
      </div>

    );
  }
  
  export default Employees;
  