async function getWeather(){
    const city = 
    document.getElementById('city').value;
    const apiKey = '8fe73328c80855ada5f6d2fe3d549f69';
    const url=
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const weatherInfo =
    document.getElementById('weather-info');
    try{
        const response = await fetch(url);
        if(!response.ok){
           weatherInfo.innerHTML =`<p>City not found </p>`;
           return; 
        }
        const data=await response.json();
        weatherInfo.innerHTML = `  
        <h2>${data.name},${data.sys.country}</h2>
        <p> Temperature :${data.main.temp}
        °C</p>
        <p>Condition : ${data.weather[0].description}</p>
        <p>Humidity :${data.main.humidity}%<p>
        <p> Wind Speed :${
            data.wind.speed} m/s</p>
            `;
        }catch(error){
            weatherInfo.innerHTML =`<p>Something went wrong </p>`;        }
        }

        
    
