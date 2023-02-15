import navbar from './navbar.module.css';
import {TiWeatherPartlySunny} from 'react-icons/ti'

const Navbar = () => {

    return (
        <div className={navbar.mainComponent}>
           <TiWeatherPartlySunny className={navbar.icon}/>
           <h5 className={navbar.heading}>Shoaib Weather App</h5>
        </div>
    )
}
export default Navbar