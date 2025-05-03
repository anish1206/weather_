const apikey="4ccc228b8856b52b23591315684faa66";
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
        
   

    async function WeatherData(city){
        const response= await fetch(apiUrl + city + `&appid=${apikey}`);
        let data= await response.json();

        document.querySelector("#city").textContent = data.name;
        document.querySelector("#temp").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector("#humid_val").textContent = data.main.humidity + "%";
        document.querySelector("#wind_val").textContent = data.wind.speed;
    }
    document.querySelector("#search_logo").addEventListener("click",()=>{
        WeatherData(document.querySelector("#input").value);
    });



