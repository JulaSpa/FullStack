import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from '../Home';
import Employees from './employees/index';
import Members from './members/index';
import Header from '../Home/header';
import Footer from '../Home/footer/footer';
import { Link } from 'react-router-dom';

const App=()=> {

  return (
    <div>
      <div className='app'>
        <Link to={'/'} style={{ textDecoration: 'none' ,color:'white'}}><h1 className='title'>Trackgenix SA</h1></Link> 
      </div>
          <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/employees' element={<Employees/>}/>
      <Route path='/members' element={<Members/>}/>
      </Routes>
      <Footer/>
    </div>
    
   );
}

export default App;
