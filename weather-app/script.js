const prepareUrl = (location) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=05bee49c56fc4f31a686d443c4b9f830&units=metric`;
};

const prepImageUrl = (id) => {
  return `https://openweathermap.org/img/wn/${id}@4x.png`;
};

const img = document.querySelector("#img");
const query = document.querySelector("#location");
const btn = document.querySelector("#searchBtn");
const weather = document.querySelector("#weather");
const avg_temp = document.querySelector("#temp");
const max = document.querySelector("#max");
const min = document.querySelector("#min");
const resLocation = document.querySelector("#resLocation");

const fetchWeatherData = async (loc) => {
  try {
    const response = await fetch(prepareUrl(loc));
    const data = await response.json();
    displayData(data);
  } catch (err) {
    alert("Location not found!!!");
  }
};

const displayData = (data) => {
  img.src = prepImageUrl(data.weather[0].icon);
  resLocation.innerHTML = data.name;
  weather.innerHTML = data.weather[0].description;
  avg_temp.innerHTML = `Avg Temp : ${data.main.temp} &deg; C`;
  max.innerHTML = `Max Temp : ${data.main.temp_max} &deg; C`;
  min.innerHTML = `Min Temp : ${data.main.temp_min} &deg; C`;
};

btn.onclick = async (e) => {
  e.preventDefault();
  const loc = query.value;
  if (loc) await fetchWeatherData(loc);
  else alert("Please enter some Location");
};
