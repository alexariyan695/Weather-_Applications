const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;


const searchTemprature = ()=>{
const city=document.getElementById("city-name").value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
 fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

}

const setInnerText=(id, text)=>{
     document.getElementById(id).innerText = text;
}

const displayTemperature=temperature=>{
     console.log(temperature);
      setInnerText('temp',temperature.main.temp);
    
   
    setInnerText('weather',temperature.weather[0].main);
    setInnerText('city',temperature.name);

    const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const image=document.getElementById("image-icon");
    image.setAttribute('src', url);
}