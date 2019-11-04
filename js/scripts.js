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

    myTravel.addDestination(destination1);
    $('.addResult').append('<li>' + myTravel.destinations[0].location + '</li>' + '<li>' + myTravel.destinations[0].landmarks + '</li>');
    $(".output").show();

    console.log(destination1);

    console.log(myTravel);


  });
});
