import navbar from './navbar.module.css';
import {BsFillCloudSunFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'

const Navbar = () => {

    return (
        <div className={navbar.mainComponent}>
           <BsFillCloudSunFill className={navbar.icon}/>
           <BsFillSunFill className={navbar.sunLogo} />
           <h5 className={navbar.heading}>Shoaib Weather App</h5>
        </div>
    )
}
export default Navbar