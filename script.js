window.addEventListener("load", function() {
   // this.alert("Welcome to Thunderdome!")
   let pilotInput = document.getElementById("pilotName");
   let copilotInput = document.getElementById("copilotName");
   let fuelLevelInput = document.getElementById("fuelLevel");
   let cargoMassInput = document.getElementById("cargoMass");

   let itemStatusNode = document.getElementById("itemStatus");
   let pilotStatusNode = document.getElementById("pilotStatus");
   let copilotStatusNode = document.getElementById("copilotStatus");
   let fuelStatusNode = document.getElementById("fuelStatus");
   let launchStatusNode = document.getElementById("launchStatus");
   let cargoStatusNode = document.getElementById("cargoStatus");

   let formNode = document.getElementById("launchForm");

   formNode.addEventListener("submit", function(event) {
      
      event.preventDefault();

      if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("Do not leave any field(s) empty.");
         event.preventDefault();
      } 
      
      if ((!isNaN(pilotInput.value)) || (!isNaN(copilotInput.value))){
         alert("Both pilots names must only contain letters.");
         event.preventDefault();
      } 
      
      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Both Fuel Level and Cargo Mass must only contain numbers.");
         event.preventDefault();
      } else {
      
         if (fuelLevelInput.value < 10000) {
            itemStatusNode.style.visibility = 'visible';
            fuelStatusNode.innerHTML = `Not enough fuel for journey! Must be more than 10,000 liters.`;
            launchStatusNode.innerHTML = `Shuttle not ready for launch`;
            launchStatusNode.style.color = "red"
            event.preventDefault();
         } 

         if (cargoMassInput.value > 10000) {
            itemStatusNode.style.visibility = 'visible';
            cargoStatusNode.innerHTML = `Too much mass for takeoff! Must be less than 10,000 kilograms.`;
            launchStatusNode.innerHTML = `Shuttle not ready for launch`;
            launchStatusNode.style.color = "red"
            event.preventDefault();
         } 
         
         if (fuelLevelInput.value >= 10000 && cargoMassInput.value <= 10000) {
            itemStatusNode.style.visibility = 'visible';
            launchStatusNode.innerHTML = `Shuttle is ready for launch`;
            launchStatusNode.style.color = "green";
            pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value}`;
            copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value}`;
            fuelStatusNode.innerHTML = `Fuel level check passed`;
            cargoStatusNode.innerHTML = `Cargo mass check passed`;
         }
      }
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