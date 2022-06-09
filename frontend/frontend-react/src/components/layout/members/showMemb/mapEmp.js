import ShowEmp from "./showEmp"
const MapEmp =({json})=>{

    return(
        <div>
            {json.map(e=>(<ShowEmp e={e}/>))}
        </div>
    )

}
export default MapEmp