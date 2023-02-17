import Rain from '../../images/rain.png'
import Cloud from '../../images/cloud.png'
import Cloudy from '../../images/cloudy.png'
import Snow from '../../images/snow.png'
import Sun from '../../images/sun.png'
import './img.css';
function icon({about}) {
switch (about) {
    case "Rain":
        return <img src={Rain} alt="Rain Weather" className='image '/>
    case "Clear":
        return <img src={Sun} alt="Sun Weather" className='image '/>
    case "Clouds":
        return <img src={Cloud} alt="Sun Weather" className='image '/>
    case "Cloudy":
        return <img src={Cloudy} alt="Sun Weather" className='image '/>
    case "Snow":
        return <img src={Snow} alt="Sun Weather" className='image'/>

    default:
        return<img></img>
       
}
}

export default icon;