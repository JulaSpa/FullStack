import { Link } from "react-router-dom"
import './index.css'
const Header =()=>{
    return(
        <div className="header">
            <div className="header1">
            <Link to={'/members'} style={{ textDecoration: 'none' ,color:'black'}}>Members page</Link>
            </div>
            <div className="header2">
            <Link to={'/employees'} style={{ textDecoration: 'none' ,color:'black'}}>Employees page</Link>
            </div>
        </div>
    )
}
export default Header