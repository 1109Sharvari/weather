const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb14c36fd0msh4fefa1512300a39p1ca340jsn17a359581f9f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city)=>{ 
	cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {


		console.log(response)


		cloud_pct.innerHTML = repsonse.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset


	})
	.catch(err => console.error(err));
}

swubmit.addEventListner("clik", ()=>{
	e.preventDefault()
	getweather(city.value)
})

getweather("Delhi")