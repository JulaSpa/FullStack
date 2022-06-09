import './index.css'
import img from './imgs/logo512.png'
import img2 from './imgs/MongoDB_Logo.png'
import img3 from './imgs/Expressjs.png'
function Home (){
return(
    <div className='home'>
        <div className='h1'>
        <h1>Employee management system example</h1>
        </div>
        <div className='p'>
        <p>As the title says, this is an example page for handling the employee's roles and functions. With this simple CRUD, you can add employees, and delete or modify them.
            In the same way, you can do the CRUD functions to the members of a "project". All your actions will change the MongoDB database (In atlas).
        </p>
        </div>
        <div className='img'>
           <img src={img} className='imgin'/>
           <img src={img2} className='imgin2'/>
           <img src={img3} className='imgin3'/>
        </div>
    </div>
)
}
export default Home