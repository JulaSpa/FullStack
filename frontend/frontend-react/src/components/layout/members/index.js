import {useState, useEffect} from 'react'
import ListMembers from './membList/membList';
import AddMember from './addMember';
import './index.css'
function Members() {
  const [members, setMembers]=useState([])
  useEffect(() => {
    try {
      fetch(`members`)
        .then((response) => response.json())
        .then((response) => {
          setMembers(response.data);
        });
    } catch (error) {
      console.error(error);
    }
  },);
   ///POST METHOD
   const add =async(memb)=>{
    setMembers([...members, memb])
   } 
   //DELETE METHOD
   const del =async(id)=>{
    await fetch(`https://full-stack-2895402ts-julaspa.vercel.app/members/${id}`,{
      method: 'DELETE'
      }
      )
      setMembers(members.filter(e=>e._id!==id))
     
   }
   
  //PUT METHOD
  const put = async(body)=>{
    setMembers(body);
  };  
    return (
      <div>
        <h1>Members list</h1>
        <div className='allMembs'>
            <div className='listMarg'>
            {members.length>0?(<ListMembers json={members} del={del} put={put}/>):('no members to show')}
            </div>
            <div className='add'>
            <AddMember add={add}/>
            </div>
        </div>
      </div>

    );
  }
  
  export default Members;
  