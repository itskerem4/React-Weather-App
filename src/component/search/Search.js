import React,{useState} from 'react'

function Search({weatherconc}) {
    const api ={
        key: "943bf58f9967371174a256d2c150eb12",
        base:"https://api.openweathermap.org/data/2.5/weather",
    };
   
    const [searchvalue,searchfns] = useState("");
    const searc = (e) =>{
      if (e.key === "Enter") {
        fetch(`${api.base}?q=${searchvalue}&units=metric&lang=en&appid=${api.key}`)
        .then((data)=> data.json())
        .then((conc) => {
          searchfns("");
          weatherconc(conc);
         
        })
      }
    }
  return (
    <div>
        <input 
        type='search' 
        className='col-form-label w-50 rounded-4' 
        placeholder='Please To Input City' 
        onChange={(e)=> searchfns(e.target.value)}
        value={searchvalue}
        onKeyPress={searc}
        />
    </div>
  )
}

export default Search;