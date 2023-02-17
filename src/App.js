import React,{useState} from 'react'
import Search from './component/search/Search';
import Conclusion from './component/conclusion';
import Background from './component/background';

function App() {

  const [weatherabout,weatherconc] = useState({});

  return (
    <div>
      <div className='container bg-dark mt-5 opacity-75 rounded-5'>
        <div className='h2 text-center mt-3 mb-5 text-light'>Weather App</div>
        
        <center><Search weatherconc={weatherconc}/></center>
        <div className='row'>
          <div className='col-md-12 text-light'>
          <Conclusion weathera={weatherabout}/>
          </div>
          <div className='text-center'>
          <Background />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
