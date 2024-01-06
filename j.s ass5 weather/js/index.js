
  const successCallBack = (position)=>{
    console.log(position);
    getweather(position.coords.latitude)
  }
  const errorCallBack = (error)=>{
    console.error(error);
  }
  navigator.geolocation.getCurrentPosition(successCallBack,errorCallBack,{
    enableHighAccuracy: true
  })


let date = new Date()

let day=[
'Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'

]

 document.querySelector('.day')
.innerHTML=day[date.getDay()+1]
 document.querySelector('.day-2')
.innerHTML=day[date.getDay()+2]
 document.querySelector('.day-3')
.innerHTML=day[date.getDay()+3]


let month=[
  'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
]
 document.querySelector('.month')
.innerHTML=month[date.getMonth()]

let de =document.querySelector('.month')
de.innerHTML= date.getDate()+month[date.getMonth()]


function getLocation(){
  var position = document.querySelector('.input-find')
  position=position.value
console.log(position);
getweather(position)

}



  async function getweather(position){
    var weather = []
    var response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4c000f38b9cb453982f93750233012&q=${position}&days=3`)
    response = await response.json()
    weather = response
  console.log(response);

cols=''

  for (let i = 0; i <1; i++) {
    cols+=`<div class="col-md-4 date-today-bg">
    <div class="date-today"> 
      <div class=" d-inline-block day fs-6 ">${day[date.getDay()+1]}</div>
    <div class=" d-inline-block month  float-start  float-end fs-6 ">${date.getDate()} ${month[date.getMonth()]}</div>
  </div>
   
    
    <div class="location mt-4">${weather.location.name}</div>
    <div class="main-degree fw-bold text-white">${weather.current.temp_c}<sup>o</sup>C</div>
    <div><img src="http://${weather.current.condition.icon}" alt=""></div>
    <div class="text-info fs-6 m-3">${weather.current.condition.text}</div>
    <div class="d-flex justify-content-start   ">
      <div class="me-3 "><img src="img/icon-umberella.png" class="me-1" alt="">20%</div> 
      <div class="me-3 mb-4" ><img src="img/icon-wind.png" class="me-1" alt="">${weather.current.wind_kph}km/h</div>
       <div class="me-3 " ><img src="img/icon-compass.png" class="me-1" alt="">${weather.current.wind_dir}</div>
    </div>
  </div>
   <div class="col-md-4 date-today-bg2 text-center">
  <div class=" fs-6 text-center date-today day-2">  ${day[date.getDay()+2]}</div>
  <div class="text-center mt-5 mb-3"><img src="http://${weather.forecast.forecastday[1].day.condition.icon}" alt=""></div>
  <div class=" text-white two-day-degree">${weather.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div> 
  <div>${weather.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></div> 
  <div class="text-info mt-4">${weather.forecast.forecastday[1].day.condition.text}</div>
</div>
<div class="col-md-4 date-today-bg3 text-center">
  <div class=" fs-6 text-center date-today day-3">  ${day[date.getDay()+3]}</div>
  <div class="text-center mt-5 mb-3"><img src="http://${weather.forecast.forecastday[2].day.condition.icon}" alt=""></div>
  <div class=" text-white two-day-degree">${weather.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div> 
  <div>${weather.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div> 
  <div class="text-info mt-4">${weather.forecast.forecastday[2].day.condition.text}</div>
</div>`
    
  }
document.querySelector('.ROW-ALL').innerHTML=cols
}





