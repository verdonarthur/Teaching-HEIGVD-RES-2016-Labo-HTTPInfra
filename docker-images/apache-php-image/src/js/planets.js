$(function() {
  console.log("Loading planets");

  function loadJsonPlanets() {
    $.getJSON("/api/planets", function(planets) {
      console.log(planets);
      var msg = "";
      if(planets.length > 0) {
        msg = "<h1>"+planets[0].name +"</h1>"+
		"<h2> Min temperature : " + planets[0].minTemperature + " °C "
		+ "<br> Max temperature : " + planets[0].maxTemperature + " °C </h2>";
      }
      $("#planets").html(msg);
    });
  };

  loadJsonPlanets();
  setInterval(loadJsonPlanets, 2000);
});
