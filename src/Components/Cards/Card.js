import card from './card.module.css'
import {BsFillSunFill} from 'react-icons/bs'
import {apiDetails , isLoader} from '../../Recoil/Atom'
import { useRecoilValue } from 'recoil'

const Card = () => {
       const apiDetailsRequest = useRecoilValue(apiDetails)
       const loaderStatus = useRecoilValue(isLoader)
    return (
        <div className={card.mainComponent}>
         { loaderStatus && <div className={card.loader}></div>}

       { !loaderStatus && Object.keys(apiDetailsRequest).length >0 ?

        <div className={card.cardContainer}>
            <p className={card.locationName}>{apiDetailsRequest.address.toUpperCase()}</p>           
            <p className={card.value}> <BsFillSunFill className={card.logo} />Temp:{apiDetailsRequest.currentConditions.temp}° </p>
            <p className={card.description}>{apiDetailsRequest.description}</p>           
            <p className={card.subHeading}>Latitude:{apiDetailsRequest.latitude}°  Longitude:{apiDetailsRequest.longitude}°</p>
            <p className={card.resolvedAdress}>{apiDetailsRequest.resolvedAddress}</p>           
        </div>
         : null}

        </div>
    )
}
export default Card