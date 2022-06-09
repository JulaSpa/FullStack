
const ShowEmp=({e})=>{      
return(
    <div>
        <ul>
            <li>Employee ID: {e._id}</li>
            <li>Name: {e.firstName}, {e.lastName}</li>
        </ul>
    </div>
)
}
export default ShowEmp