const mapboxgl = require('mapbox-gl')
const activity = 'url(http://i.imgur.com/WbMOfMl.png)'
const hotel = 'url(http://i.imgur.com/D9574Cu.png)'
const restaurant = 'url(http://i.imgur.com/cqR6pUI.png)'


const marker = (activityType, coordinates) => {
  let img
  if (activityType === 'activity') img = activity
  if (activityType === 'hotel') img = hotel
  if (activityType === 'restaurant') img = restaurant
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = img;

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = marker
