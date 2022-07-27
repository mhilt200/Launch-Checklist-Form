window.addEventListener("load", function() {

   let pilotNode = document.querySelector("input[name=pilotName]");
   let copilotNode = document.querySelector("input[name=copilotName]");
   let fuelLevelNode = document.querySelector("input[name=fuelLevel]");
   let cargoMassNode = document.querySelector("input[name=cargoMass]");

   let form = document.querySelector("form");

   form.addEventListener("submit", function(event) {

      if (pilotNode.value === "" || copilotNode.value === "" || fuelLevelNode.value === "" || cargoMassNode.value === ""){
         alert("Do not leave any field(s) empty.");
         event.preventDefault();
      };
      
      if (isNaN(pilotNode.value) || isNaN(copilotNode.value)){
         //alert("Both pilots are ready."); 
      } else {
         alert("Both pilots names must only contain letters.");
         event.preventDefault();
      };

      if (isNaN(fuelLevelNode.value) || isNaN(cargoMassNode.value)){
         alert("Both Fuel Level and Cargo Mass must only contain numbers.");
         event.preventDefault();
      };

   });

})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/