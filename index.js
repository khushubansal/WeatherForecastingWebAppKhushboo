const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d4b085a22mshd3ec2cda5f647b3p131fe9jsn2b5f7c42c2d2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
 
const getWeather = (city)=>{
    cityName.innerHTML = city
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    // cloud_pct.innerHTML = response.cloud_pct;
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    humidity2.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

let city2;

const getLucknowWeather = (city2)=>{
  
fetch(
"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city2,
options
)
.then((response) => response.json())
.then((response) => {
  console.log(response);

  lcloud_pct.innerHTML = response.cloud_pct;
  ltemp.innerHTML = response.temp;
  lfeels_like.innerHTML = response.feels_like;
  lhumidity.innerHTML = response.humidity;
  lmin_temp.innerHTML = response.min_temp;
  lmax_temp.innerHTML = response.max_temp;
  lwind_speed.innerHTML = response.wind_speed;
  lwind_degrees.innerHTML = response.wind_degrees;
  lsunrise.innerHTML = response.sunrise;
  lsunset.innerHTML = response.sunset;
})
.catch((err) => console.error(err));
}

getLucknowWeather("Lucknow");

let city3;

const getAhmedabadWeather = (city3)=>{
  
  fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city3,
  options
  )
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  
    acloud_pct.innerHTML = response.cloud_pct;
    atemp.innerHTML = response.temp;
    afeels_like.innerHTML = response.feels_like;
    ahumidity.innerHTML = response.humidity;
    amin_temp.innerHTML = response.min_temp;
    amax_temp.innerHTML = response.max_temp;
    awind_speed.innerHTML = response.wind_speed;
    awind_degrees.innerHTML = response.wind_degrees;
    asunrise.innerHTML = response.sunrise;
    asunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
  }
  
  getAhmedabadWeather("Ahmedabad");
let city4;

const getDehradunWeather = (city4)=>{
  
  fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city4,
  options
  )
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  
    dcloud_pct.innerHTML = response.cloud_pct;
    dtemp.innerHTML = response.temp;
    dfeels_like.innerHTML = response.feels_like;
    dhumidity.innerHTML = response.humidity;
    dmin_temp.innerHTML = response.min_temp;
    dmax_temp.innerHTML = response.max_temp;
    dwind_speed.innerHTML = response.wind_speed;
    dwind_degrees.innerHTML = response.wind_degrees;
    dsunrise.innerHTML = response.sunrise;
    dsunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
  }
  
  getDehradunWeather("Dehradun");
let city5;

const getKanpurWeather = (city5)=>{
  
  fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city5,
  options
  )
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  
    kcloud_pct.innerHTML = response.cloud_pct;
    ktemp.innerHTML = response.temp;
    kfeels_like.innerHTML = response.feels_like;
    khumidity.innerHTML = response.humidity;
    kmin_temp.innerHTML = response.min_temp;
    kmax_temp.innerHTML = response.max_temp;
    kwind_speed.innerHTML = response.wind_speed;
    kwind_degrees.innerHTML = response.wind_degrees;
    ksunrise.innerHTML = response.sunrise;
    ksunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
  }
  
  getKanpurWeather("Kanpur");
let city6;

const getPatnaWeather = (city6)=>{
  
  fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city6,
  options
  )
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  
    pcloud_pct.innerHTML = response.cloud_pct;
    ptemp.innerHTML = response.temp;
    pfeels_like.innerHTML = response.feels_like;
    phumidity.innerHTML = response.humidity;
    pmin_temp.innerHTML = response.min_temp;
    pmax_temp.innerHTML = response.max_temp;
    pwind_speed.innerHTML = response.wind_speed;
    pwind_degrees.innerHTML = response.wind_degrees;
    psunrise.innerHTML = response.sunrise;
    psunset.innerHTML = response.sunset;
  })
  .catch((err) => console.error(err));
  }
  
  getPatnaWeather("Patna");

