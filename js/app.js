// Add your JavaScript
$(document).ready(function() {
  $('.name-foodmap').delay('5000').fadeToggle('slow');
  $('#map').delay('5000').fadeToggle('slow');
  $('.images').delay('5000').fadeToggle('slow');

  $('.search').click(function () {
    var inputValue = $('#textFilter').val();
    $( "img" ).each(function( ) {
      if($(this).attr("alt") !== inputValue) {
        $(this).fadeOut('slow');
      }
    });
    }
  )
  // $('#textFilter').on('input', function () {
  //   if($(this).val() === "") {
  //     $( "img" ).attr("alt").each(function( ) {
  //       $(this).fadeIn('slow')
  //     });
  //   }
  // })


  
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





// function getImages(){
  // for(var restaurante in restaurantes){
    // console.log(res); esse mostra cada obj restaurante
    // var img = restaurantes[restaurante]['image'];
      // console.log(img); esse pega cada caminho de imagem
      // $(".images").append($('<img></img>').attr("src", img));
  // }
// }


// function imagesIncrement(){
//   for(var restaurante in restaurantes){
//     // console.log(res); esse mostra cada obj restaurante
//     var typeFood = restaurantes[restaurante]['type'];
//     // console.log(typeFood);
//     // if( ===""){
//     //   getImages();
//     // }

//   }
// }

// function filterElements(){
//  var text = $('#textFilter').val;

// }