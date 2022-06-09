import OneEmp from "../oneEmp"
const List =({json, del, put})=>{

    return(
        <div>
            {json.map(e=>(<OneEmp key={e._id} e={e} del={del} put={put}/>))}
        </div>
    )

}
export default List