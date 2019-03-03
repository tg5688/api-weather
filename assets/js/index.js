const key = '&appid=ae76d0efed32d9f29c4d54a5738b80ca';
const cityDefault = 'Rybnik'
let forecastArr = [];
const classIconDay = 'wu wu-black wu-64';
const classIconNight = 'wu wu-black wu-night wu-64';
const classIconDayHeader = 'wu wu-white wu-128';
const classIconNightHeader = 'wu wu-white wu-night wu-64';
let count = 0;
const date = new Date();

const replaceAPIData = (id, type, iconApi = '') => {
  let icon = '';
  let iconHeader = '';
  let desc = '';
  let strId = id.toString();
  if (iconApi.charAt(iconApi.length - 1) === 'd') { //day
    if (strId.charAt(0) === '8') {
      if (strId === '800') {
        iconHeader = `<i class="${classIconDayHeader} wu-clear"></i>`;
        icon = `<i class="${classIconDay} wu-clear"></i>`;
        desc = 'bezchmurnie';
      } else if (strId === '801') {
        iconHeader = `<i class="${classIconDayHeader} wu-mostlysunny"></i>`;
        icon = `<i class="${classIconDay} wu-mostlysunny"></i>`;
        desc = 'lekkie zachmurzenie';
      } else if (strId === '802') {
        iconHeader = `<i class="${classIconDayHeader} wu-mostlycloudy"></i>`;
        icon = `<i class="${classIconDay} wu-mostlycloudy"></i>`;
        desc = 'umierkowane zachmurzenie';
      } else if (strId === '803' || strId === '804') {
        iconHeader = `<i class="${classIconDayHeader} wu-cloudy"></i>`;
        icon = `<i class="${classIconDay} wu-cloudy"></i>`;
        desc = 'pochmurno';
      }
    } else {
      if (strId.charAt(0) === '2') {
        iconHeader = `<i class="${classIconDayHeader} wu-tstorms"></i>`;
        icon = `<i class="${classIconDay} wu-tstorms"></i>`;
        desc = 'burze';
      } else if (strId.charAt(0) === '3') {
        iconHeader = `<i class="${classIconDayHeader} wu-chancerain"></i>`;
        icon = `<i class="${classIconDay} wu-chancerain"></i>`;
        desc = 'przelotne opady';
      } else if (strId.charAt(0) === '5') {
        iconHeader = `<i class="${classIconDayHeader} wu-rain"></i>`;
        icon = `<i class="${classIconDay} wu-rain"></i>`;
        desc = 'deszczowo';
      } else if (strId.charAt(0) === '6') {
        iconHeader = `<i class="${classIconDayHeader} wu-snow"></i>`;
        icon = `<i class="${classIconDay} wu-snow"></i>`;
        desc = 'śnieg';
      } else if (strId.charAt(0) === '7') {
        iconHeader = `<i class="${classIconDayHeader} wu-fog"></i>`;
        icon = `<i class="${classIconDay} wu-fog"></i>`;
        desc = 'mgła';
      }
    }
  } else { //night
    if (strId.charAt(0) === '8') {
      if (strId === '800') {
        iconHeader = `<i class="${classIconNightHeader} wu-clear"></i>`;
        icon = `<i class="${classIconNight} wu-clear"></i>`;
        desc = 'bezchmurnie';
      } else if (strId === '801') {
        iconHeader = `<i class="${classIconNightHeader} wu-mostlysunny"></i>`;
        icon = `<i class="${classIconNight} wu-mostlysunny"></i>`;
        desc = 'lekkie zachmurzenie';
      } else if (strId === '802') {
        iconHeader = `<i class="${classIconNightHeader} wu-mostlycloudy"></i>`;
        icon = `<i class="${classIconNight} wu-mostlycloudy"></i>`;
        desc = 'umierkowane zachmurzenie';
      } else if (strId === '803' || strId === '804') {
        iconHeader = `<i class="${classIconNightHeader} wu-cloudy"></i>`;
        icon = `<i class="${classIconNight} wu-cloudy"></i>`;
        desc = 'pochmurno';
      }
    } else {
      if (strId.charAt(0) === '2') {
        iconHeader = `<i class="${classIconNightHeader} wu-tstorms"></i>`;
        icon = `<i class="${classIconNight} wu-tstorms"></i>`;
        desc = 'burze';
      } else if (strId.charAt(0) === '3') {
        iconHeader = `<i class="${classIconNightHeader} wu-chancerain"></i>`;
        icon = `<i class="${classIconNight} wu-chancerain"></i>`;
        desc = 'przelotne opady';
      } else if (strId.charAt(0) === '5') {
        iconHeader = `<i class="${classIconNightHeader} wu-rain"></i>`;
        icon = `<i class="${classIconNight} wu-rain"></i>`;
        desc = 'deszczowo';
      } else if (strId.charAt(0) === '6') {
        iconHeader = `<i class="${classIconNightHeader} wu-snow"></i>`;
        icon = `<i class="${classIconNight} wu-snow"></i>`;
        desc = 'śnieg';
      } else if (strId.charAt(0) === '7') {
        iconHeader = `<i class="${classIconNightHeader} wu-fog"></i>`;
        icon = `<i class="${classIconNight} wu-fog"></i>`;
        desc = 'mgła';
      }
    }
  }

  if (type === "icon") return icon;
  else if (type === "iconHeader") return iconHeader;
  else if (type === 'desc') return desc;
}

const calcCel = kelvin => Math.ceil(kelvin - 272.15);

const calcDate = time => {
  const addZero = i => (i < 10) ? '0' + i : i;
  const t = new Date(time * 1000);
  return addZero(t.getDate()) + "." + addZero(t.getMonth() + 1) + "." + t.getFullYear();
}

const calcHour = time => {
  const addZero = i => (i < 10) ? '0' + i : i;
  const t = new Date(time * 1000);
  return addZero(t.getHours()) + ":" + addZero(t.getMinutes());
}

const base = (forecast) => {
  const timeApi = forecast.dt;
  const idAPI = forecast.weather[0].id;
  const iconAPI = forecast.weather[0].icon;
  const tempAPI = forecast.main.temp;
  const pressureAPI = forecast.main.pressure;
  const humidityAPI = forecast.main.humidity;
  const markup =
    `<ul class="forecast_list">
    <li class="forecast_item">Godzina <span class="hour">${calcHour(timeApi)}</span></li>
    <li class="forecast_item"> ${replaceAPIData(idAPI,"icon",iconAPI)}</li>
    <li class="forecast_item"><span class="description">${replaceAPIData(idAPI,"desc")}</span></li>
    <li class="forecast_item"><span class="temp">${calcCel(tempAPI)} &deg;C</span></li>
    <li class="forecast_item">Ciśnienie: <span class="pressure">${Math.round(pressureAPI)} hPa</span></li>
    <li class="forecast_item">Wilgotność: <span class="humidity">${humidityAPI}%</span></li> 
  </ul>`;
  return markup;
}

const renderForecast0 = forecast => {
  const timeApi = forecast.dt;
  const markup = base(forecast);
  document.querySelector('.date_0').textContent = calcDate(timeApi);
  document.querySelector('.forecast_0').insertAdjacentHTML('beforeend', markup);
}

const renderForecast1 = forecast => {
  const timeApi = forecast.dt;
  const markup = base(forecast);
  document.querySelector('.date_1').textContent = calcDate(timeApi);
  document.querySelector('.forecast_1').insertAdjacentHTML('beforeend', markup);
}

const renderForecast2 = forecast => {
  const timeApi = forecast.dt;
  const markup = base(forecast);
  document.querySelector('.date_2').textContent = calcDate(timeApi);
  document.querySelector('.forecast_2').insertAdjacentHTML('beforeend', markup);
}

const createResults = (items, count) => {
  items.forEach((el, index) => {
    if (index < count) {
      renderForecast0(el);
    } else if (index >= count && index < count + 4) {
      renderForecast1(el);
    } else if (index >= count + 4 && index < count + 8) {
      renderForecast2(el);
    }
  })
}

const headerForecast = (forecastArr) => {
  document.getElementById('now').innerHTML = '';
  document.getElementById('now-temp').innerHTML = '';
  document.getElementById('tomorrow').innerHTML = '';
  document.getElementById('tomorrow-temp').innerHTML = '';

  const idAPI = forecastArr[0].weather[0].id;
  const iconAPI = forecastArr[0].weather[0].icon;
  const tempAPI = forecastArr[0].main.temp;

  const idAPITomorrow = forecastArr[4].weather[0].id;
  const iconAPITomorrow = forecastArr[4].weather[0].icon;
  const tempAPITomorrow = forecastArr[4].main.temp;

  //now
  document.getElementById('now').insertAdjacentHTML('beforeend', replaceAPIData(idAPI, "iconHeader", iconAPI));
  document.getElementById('now-temp').innerHTML = calcCel(tempAPI) + '&#186 C';
  //tomorrow
  document.getElementById('tomorrow').insertAdjacentHTML('beforeend', replaceAPIData(idAPITomorrow, "iconHeader", iconAPITomorrow));
  document.getElementById('tomorrow-temp').innerHTML = calcCel(tempAPITomorrow) + '&#186 C';
}

async function getResults(query) {
  fetch(
      'https://api.openweathermap.org/data/2.5/forecast?q=' +
      query + key
    )
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      if (jsonData.cod === '200') {
        jsonData.list.forEach((el, index) => {
          if (index % 2 === 0)
            forecastArr.push(el);
        });
        forecastArr.forEach(el => {
          const dateApi = new Date(el.dt * 1000);
          if (dateApi.getDate() === date.getDate()) {
            count++
          }
        })
        headerForecast(forecastArr);
        createResults(forecastArr, count);
      } else {
        alert('Nie ma takiej miejscowości w naszej bazie');
      }
    })
    .catch(function (error) {
      console.warn('Nasz error:', error);
    });
}

const clearResults = () => {
  forecastArr = [];
  count = 0;
  document.querySelector('.date_0').innerHTML = '';
  document.querySelector('.date_1').innerHTML = '';
  document.querySelector('.date_2').innerHTML = '';
  document.querySelector('.forecast_0').innerHTML = '';
  document.querySelector('.forecast_1').innerHTML = '';
  document.querySelector('.forecast_2').innerHTML = '';
};

//Miasto z listy na skróty
document.querySelectorAll('.city_item').forEach(item =>
  item.addEventListener('click', function () {
    const city = this.textContent;
    document.getElementById('city-default').textContent = city;
    clearResults();
    getResults(city);
  }));

//Miasto wpisane przez użytkownika
document.querySelector('.form_button').addEventListener('click', function (e) {
  e.preventDefault();
  const input = document.getElementById('city-input');
  if (input.value.trim() !== '') {
    const city = input.value;
    clearResults();
    document.getElementById('city-default').textContent = city;
    getResults(city);
  }
});

//Miasto domyślne
document.getElementById('city-default').textContent = cityDefault;
getResults(cityDefault);