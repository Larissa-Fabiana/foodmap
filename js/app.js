// Add your JavaScript
// $(document).ready(function() {
//   $('.name-foodmap').delay('5000').fadeToggle('slow')
// });
$(document).ready(function() {
  $('.name-foodmap').delay('5000').fadeToggle('slow');
  $('#map').delay('5000').fadeToggle('slow');
  getImages();
});

function initMap() {
  // The location of locationMap
var uluru = {lat: -25.344, lng: 131.036};
// The map, centered at Uluru
var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: uluru});
// The marker, positioned at Uluru
var marker = new google.maps.Marker({position: uluru, map: map});

}

function getImages(){
  for(var restaurante in restaurantes){
    // console.log(res);
    var img = restaurantes[restaurante]['image'];
      console.log(img);
    
  }
}