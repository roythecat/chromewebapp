const API_KEY = "035ed9decc6b8d5412c3dad12c0227da";
const COORDS = 'coords';
const locationDOM = document.querySelector("#location"),
degreeDOM = document.querySelector("#degree");

function getweather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const placeInfo = json.name;
        console.log(json)
        locationDOM.innerHTML = `<i class="xi-maker"></i> ${placeInfo}`;
        degreeDOM.innerHTML = `${temperature}°`;
    })
}

function handleGeoError(){
    console.log("Failed to load your location")
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getweather(latitude,longitude)
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){
        askForCoords();
    }else{ 
        const parsedCoords = JSON.parse(loadedCoords);
        getweather(parsedCoords.latitude,parsedCoords.longitude)
    }
}

function init(){
 loadCoords();
}

init();