//business logic
function places(location, yearTime, landmark, notes){
  this.location=name;
  this.yearTime=time;
  this.landmark=state;
  this.notes=write;
}

places.prototype.description=function(){
  return this.location + " " + this.time + " " + this.state +" " + this.write;
}

//user interface
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();

    var firstName = $("input#visit-Place").val();
    var firstYear = $("input#visit-Year").val();
    var firstLandmark = $("input#place-Landmark").val();
    var firstDescription = $("input#place-Description").val();
