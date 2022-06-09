import ShowMemb from "../showMemb/showMemb"
const ListMembers =({json, del, put})=>{

    return(
        <div>
            {json.map(e=>(<ShowMemb key={e._id} e={e} del={del} put={put}/>))}
        </div>
    )

}
export default ListMembers