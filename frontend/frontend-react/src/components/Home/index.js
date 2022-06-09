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
        <p>How the title says, this is an example page for handling the employees roles and functions. With this simple CRUD you can add employees, delete or modify them.
            In the same way you can do the CRUD functions to the members of a "project". All the actions you make will be changing the mongoDB database (In atlas).
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