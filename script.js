async function getWeather(){

  let city = document.getElementById('city-input').value;

  let geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);

  let geodata = await geo.json();

  let lat = geodata.results[0].latitude;
  let lon = geodata.results[0].longitude;

  let weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);

  let weatherData = await weather.json();

  let temperature = weatherData.current_weather.temperature;
  let wind = weatherData.current_weather.windspeed;

  document.getElementById('result').innerHTML = `<h2>${city}</h2>
  <p>Temperature : ${temperature}</p>
  <p>wind : ${wind}</p>
  `
}