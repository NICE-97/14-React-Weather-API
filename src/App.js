import {useEffect, useState} from "react"
import './App.css';

function App() {
  const name = "Bangkok"
  const apiKey = "504c591be3339b820390dac973bd28dc"
  const [city,setCity] = useState({});
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`
    fetch(url)
    .then(res=>res.json()) // return pomit chang to data
    .then(data=>{
      setCity(data);
      setIsLoading(true)
    })

  },[name])

  const convertTemp =(k)=>{
    return (k-273).toFixed()
  }

  return (
    (isLoading && <div className="App">
      <section>
          <div className="location">
              <h1 className="city">{city.name}</h1>
              <h2 className="state">{city.sys.country}</h2>
          </div>
          <div className="card">
              <div className="weather">
                  <h1>{convertTemp(city.main.temp)}&deg;C</h1>
                  <small>temp-max: ${convertTemp(city.main.temp_max)}&deg;C | temp-min: {convertTemp(city.main.temp_min)}&deg;C</small>
              </div>
              <div className="info">
                  <div className="status">weather: {city.weather[0].main}</div>
                  <div className="humidity">humidity: {city.main.humidity}</div>
                  <div className="wind">wind-speed: {city.wind.speed}</div>
              </div>
          </div>
      </section>
  </div>)
  );
}

export default App;
