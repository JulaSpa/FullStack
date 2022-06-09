import './index.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
const Footer =()=>{
    return(
        <div className='footer'>
            <ul className='ul'>
                <li className='liFoot'><a href='https://www.instagram.com/julianspataro/?hl=es'>Instagram</a><AiOutlineInstagram className='insta'/></li>
                <li className='liFoot'><a href='https://www.linkedin.com/in/julian-spataro/'>Linkedin</a><AiOutlineLinkedin className='insta'/></li>
                <li className='liFoot'><a href='https://github.com/JulaSpa'>Github</a><AiOutlineGithub className='insta'/></li>
            </ul>
        </div>
    )
}
export default Footer