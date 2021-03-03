// Foursquare API Info
const clientId = 'SAB5Z01Z2VBTRYCKAOXA5XBAUDZQDI5OENYDI0XGNEAZUNC1';
const clientSecret = '5M50H30W1H0EW5AE2MPZ1EBWQV1ZRVLTEWXRJ0T3YG3KVU3D';
const url = `https://api.foursquare.com/v2/venues/explore?near=`;

// OpenWeather Info
const openWeatherKey = 'e0e72e781b6c936a95405f5c64ca1517';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

//Date
const today = new Date();
const YYYYMMDD = String(today.getFullYear()) + String(today.getMonth()+1).padStart(2,"0") + String(today.getDate()).padStart(2,"0");

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${YYYYMMDD}`;
   
   try{
      const response = await fetch(urlToFetch);
      if(response.ok){
        const jsonResponse = await response.json();
        const venues = jsonResponse.response.groups[0].items.map(el => el.venue);
        return venues
      }else{
        throw new Error('error');
      }
   }catch(error){
     console.log(error);
   }
}

const getForecast = async () => {
  try{
    const city = $input.val();
    const urlToFetch = `${weatherUrl}?q=${city}&appid=${openWeatherKey}&units=metric`;
    const response = await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    }
  }catch(error){
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
    let venueContent = `<h2>${venue.name}</h2>
    <img class="venueimage" src="${venueImgSrc}"/>
    <h3>Address:</h3>
    <p>${venue.location.address}</p>
    <p>${venue.location.city}}</p>
    <p>${venue.location.country}</p>`;
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues().then(venues => renderVenues(venues));
  getForecast()
  return false;
}

$submit.click(executeSearch)