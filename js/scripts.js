function Travel(){
  this.destinations = []
}

Travel.prototype.addDestination = function(destination) {
  this.destinations.push(destination);
}




//Business Logic for individual destinations
function Destination(location, landmarks, time, notes){
  this.location = location,
  this.landmarks = landmarks,
  this.time = time,
  this.notes = notes
}

var peru = new Destination('Peru', 'Macchu Picchu', '2017', 'Super Awesome');
var thailand = new Destination('Thailand', 'Wat Po', '2001', 'Such good food!');
var kansas = new Destination ('Kansas', 'The first Pizza Hut', '2018', 'Not much to see, but really good if you want to watch a movie for cheap');





//user interface Logic
$(document).ready(function (){
  $('form#form').submit(function(event){
    event.preventDefault();
    var locationInput = $('input#locationInput').val();
    var landmarkInput = $('input#landmarkInput').val();
    var timeInput = $('input#timeInput').val();
    var notesInput = $('input#notesInput').val();

    console.log(locationInput, landmarkInput, timeInput, notesInput);

    var myTravel = new Travel();
    var destination1 = new Destination(locationInput, landmarkInput, timeInput, notesInput);

    console.log(destination1);

    myTravel.addDestination(destination1);
    console.log(myTravel);
    $('ul').append(myTravel)
    $(".clickable").click(function(event){
      $('#peru').text(myTravel).toggle();

      // event.preventDefault();
    });
  });



});
