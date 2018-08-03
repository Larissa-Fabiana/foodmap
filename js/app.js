// Add your JavaScript
$(document).ready(function() {
  $('.name-foodmap').delay('5000').fadeToggle('slow');
  $('#map').delay('5000').fadeToggle('slow');
  $('.images').delay('5000').fadeToggle('slow');
  getImages();
  var init = "";
  pinsIncrement(init);
  $('.search').click(function(){
    printInfo();
  });
});
function printInfo() {
  var inputValue = $('#textFilter').val();
  $( "img" ).each(function( ) {
    if($(this).attr("alt") !== inputValue) {
      $(this).fadeOut('slow');
    }
    if(inputValue === ""){
      $(this).fadeIn('slow');
    }
  });

  pinsIncrement(inputValue);
}
function getImages(){
  for(var restaurante in restaurantes){
    // console.log(res); esse mostra cada obj restaurante
    var img = restaurantes[restaurante]['image'];
    var types = restaurantes[restaurante]['type'];
      // console.log(img); esse pega cada caminho de imagem
      var tagImg = $('<img>').attr("src", img).attr("alt", types);
      $(".images").append(tagImg);

  }
}
var locations = [];

function pinsIncrement(inputValue){
  for(var restaurante in restaurantes){
    var position = [];
    var name = restaurantes[restaurante]['name'];
    var lat = restaurantes[restaurante]['latitude'];
    var long = restaurantes[restaurante]['longitude'];
    var typeFood = restaurantes[restaurante]['type'];
    if(typeFood === inputValue || inputValue === ""){
      position.push(name, lat, long);
      locations.push(position);
    }
  }
  initMap();
}

function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: new google.maps.LatLng(-23.557337, -46.662460),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
}