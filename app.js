var search = document.querySelector('#search');
var city = document.querySelector('#city');
var country = document.querySelector('#country');
var TEMP = document.querySelector('#TEMP');
var weatherr = document.querySelector('#weatherr');
var visibility = document.querySelector('#visibility');
var wind = document.querySelector('#wind');
var sunRain = document.querySelector('#sun-rain');
var datetime = document.querySelector('#date-time');
var content = document.querySelector('#content2');
var body = document.querySelector('body');

async function changeWeatherUi(){
    let  capitalSearch = search.value.trim()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=5640631f37b5d4c0dc1063c8e559d104`;

        let data = await fetch(apiUrl).then(res=> res.json());

        if(data.cod == 200){
            console.log(data);
            content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + ` (mm)`
        wind.innerText = data.wind.speed + ` (m/s)`
        sunRain.innerText = data.main.humidity + ` (%)`
        TEMP.innerText = Math.round(data.main.temp - 273.15) + ` °C`
        weatherr.innerText = data.weather[0] ? data.weather[0].main : ''
        datetime.innerText = new Date().toLocaleString('vi')
        let tem = Math.round(data.main.temp - 273.15)
            if(tem > 5 && tem <= 15) {
                body.setAttribute('class', 'spring');
                }else if(tem > 25){
                    body.setAttribute('class', 'summer');
                }else if(tem > 15 && tem <= 25){
                    body.setAttribute('class', 'autumn');
                }else if(tem <= 5){
                    body.setAttribute('class', 'winter');
                }else{
                    console.log('có lỗi !!!')
                }
        }else{
            content.classList.add('hide');
            alert(`Not Found !!!`);
        }
}

search.addEventListener('keypress', function(e){
    if(e.code ==='Enter'){
        changeWeatherUi()
    }
})