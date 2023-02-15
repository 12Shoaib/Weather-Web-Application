import searchbar from './searchbar.module.css';
import {BsSearch} from 'react-icons/bs'
import {useRecoilState } from 'recoil';
import {inputValue} from '../../Recoil/Atom'

const Searchbar = (props) => {
    const [inputCapture , setInputCapture] = useRecoilState(inputValue)
    
    const captureValue = (e) => {
        setInputCapture(e.target.value)
    }
    return (
        <div className={searchbar.mainComponent}>
            <input onChange={captureValue} placeholder='Search here...!' className={searchbar.searchbar} type='text' />
            <button onClick={props.onClick} className={searchbar.iconWrapper}><BsSearch className={searchbar.searchIcon}/></button>

        </div>
    )
}
export default Searchbar