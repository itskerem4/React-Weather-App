import Icon from '../background'
function index({weathera}) {
  return (
    <>
    {typeof weathera.main != "undefined" && (
        <div className='conclusion text-center mt-5 fs-5'>
        <div className='city mt-2'>{weathera.name} , {weathera.sys.country}</div>
        <div className='about mt-2'>{weathera.weather[0].main}<Icon iconconc={weathera.weather && weathera.weather[0].main}/></div>
        <div className='degree mt-2'>{Math.round(weathera.main.temp)}°C</div>

    </div>
    )}
    </>
  )
}

export default index;