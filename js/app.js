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

  $(function() {
    var options = [];
    for(var restaurante in restaurantes){
      var types = restaurantes[restaurante]['type'];
      options.push(types);
    }
    $("#textFilter" ).autocomplete({
      source: options
    });
  });
  openModal();
});
function printInfo() {
  var inputValue = $('#textFilter').val();
  $( "img" ).each(function( ) {
    if($(this).attr("id") !== inputValue) {
      $(this).fadeOut('slow');
    }else{
      $(this).fadeIn('slow');
      openModalSelected();
    }
    if(inputValue === ""){
      $(this).fadeIn('slow');
    }
  });
  pinsIncrement(inputValue);
}
function getImages(){
  for(var restaurante in restaurantes){
    var img = restaurantes[restaurante]['image'];
    var types = restaurantes[restaurante]['type'];
    var description = restaurantes[restaurante]['description'];
    var tagImg = $('<img>').attr("src", img).attr("id", types).attr("class", "modal-window").attr("alt", description);
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
function openModal(){
  var img = [];
  var span = []; 
  for(var i=0; i <restaurantes.length; i++){
    img[i] = document.getElementsByClassName("modal-window")[i];
    img[i].addEventListener("click", imageModal);
  } 
  for (var i = 0; i <restaurantes.length; i++){
    span[i]= document.getElementsByClassName("close")[0];
    span[i].addEventListener("click", closeModal);
  }
}
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("imagenMostrar");
var captionText = document.getElementById("caption");
function imageModal(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerText = this.alt;
}
function closeModal() {
  modal.style.display = "none";
}
function openModalSelected(image){
  var span = [];
  var img = [];
  image.addEventListener("click", imageModalSelected);
  for (var i = 0; i <restaurantes.length; i++){
    span[i]= document.getElementsByClassName("close")[0];
    span[i].addEventListener("click", closeModalSelected);
  }
}    
function imageModalSelected(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerText = this.alt;
}
function closeModalSelected() {
  modal.style.display = "none";
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