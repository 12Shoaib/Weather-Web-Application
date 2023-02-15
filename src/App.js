import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Searchbar  from './Components/Searchbar/Searchbar'
import Card from './Components/Cards/Card'
import {useRecoilState, useRecoilValue } from 'recoil';
import {inputValue , apiDetails} from './Recoil/Atom'


const App = () => {
      const [fetchedDetails , setFetchedDetails] = useRecoilState(apiDetails)
      const input = useRecoilValue(inputValue)
      const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +`${input}`+ '?unitGroup=us&key=S83L853MMYAEJMBJJCL7CJBJQ&contentType=json'
      // console.log(url)

      async function getWeatherReport(){
        const response = await fetch(url)
        const data = await response.json()
        setFetchedDetails(data)
      }

  return (
    <div className='mainComponent'>
      <Navbar />
      <Searchbar onClick={getWeatherReport} />
      <Card/>
    </div>
  )
}

export default App