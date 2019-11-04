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
    // Could add forEach loop to add index id.
    myTravel.addDestination(destination1);
    $('.addResult').append('<li>' + myTravel.destinations[0].location+ '</li>');
    $(".output").show();

    console.log(destination1);
    console.log(myTravel);
    // Look at .parent(), .children() to find a better way to output results
    $('li').click(function(){
      $('.addResult').append('<li>' + "Landmark: " + myTravel.destinations[0].landmarks + '</li>' + '<li>' + myTravel.destinations[0].time + '</li>');
    });


  });
});
