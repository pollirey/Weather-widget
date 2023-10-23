
const cityInput = document.getElementById('cityInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherData = document.getElementById('weatherData');
const errorMessage = document.getElementById('errorMessage');

getWeatherButton.addEventListener('click', () => {
 
  const location = cityInput.value;
  
  getWeatherData(location);
});

function getWeatherData(location) {
    const apiKey = '7ef4412f5039c395720e693a6dd250f3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    
    function clearError() {
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
      }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
    
        handleWeatherData(data);
      })
      .catch(error => {
    
        displayError('Ошибка при получении данных о погоде.');
      });
  }

  function handleWeatherData(data) {
   
    function clearError() {
        errorMessage.textContent = '';
        errorMessage.classList.add('hidden');
      }

    if (data.cod === 200) {

      weatherData.innerHTML = `
        <p>Город: ${data.name}</p>
        <p>Температура: ${data.main.temp}°C</p>
        <p>Погода: ${data.weather[0].description}</p>
      `;
    } else {

      displayError('Город не найден. Пожалуйста, проверьте правильность написания названия города.');
    }
  }

  function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
  }

  