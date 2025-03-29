const inputBtnEl = document.querySelector('.inputBox')
const searchBtnEl = document.querySelector('.searchBtn')
const weatherContentDetails = document.querySelector('.weather-content-details')

const fetchWeatherDetails = async (cityName) => {
  weatherContentDetails.style.display = 'block'
  console.log(cityName)
  let api_key = '1269b6afe2731a2d777cc5f7777e5018'
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`

  const response = await fetch(url)
  const data = await response.json()
  const iconCode = data.weather[0].icon
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`


  weatherContentDetails.innerHTML = `
    
    <img src="${iconUrl}" alt="" />
            <div class="temperature">${Math.round(
              data.main.temp - 273.5
            )}°C</div>
            <div class="cityName">${data.name}</div>
            <div class="weather-details">
                <div class="humidity-content">
                <i class="ri-water-percent-line"></i>
                <div class="humidity-items">
                    <p>${data.main.humidity}%</p>
                    <p>humidity</p>
                </div>
                </div>

                <div class="wind-content">
                <i class="fa-solid fa-wind"></i>
                <div class="humidity-items">
                    <p>${data.wind.speed}Km/h</p>
                    <p>wind speed</p>
                </div>
                </div>
            </div>
        `
}

searchBtnEl.addEventListener('click', () => {
  const inputText = inputBtnEl.value.trim()
  if (inputText.length != 0) {
    fetchWeatherDetails(inputText)
  } else {
    alert('Please Enter a city name')
  }
})
