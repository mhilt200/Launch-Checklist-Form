window.addEventListener("load", function() {

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

         if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {
            if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
               itemStatusNode.style.visibility = 'visible';
               launchStatusNode.innerHTML = `Shuttle not ready for launch`;
               launchStatusNode.style.color = "red"
               pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`;
               copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`;
               fuelStatusNode.innerHTML = `Not enough fuel for journey! Must be more than 10,000 liters`;
               cargoStatusNode.innerHTML = `Too much mass for takeoff! Must be less than 10,000 kilograms`;
               event.preventDefault();
            } else if (fuelLevelInput.value < 10000 && cargoMassInput.value <= 10000) {
               itemStatusNode.style.visibility = 'visible';
               launchStatusNode.innerHTML = `Shuttle not ready for launch`;
               launchStatusNode.style.color = "red"
               pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`;
               copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`;
               fuelStatusNode.innerHTML = `Not enough fuel for journey! Must be more than 10,000 liters`;
               cargoStatusNode.innerHTML = `Cargo mass check passed`;
               event.preventDefault();
            } else if (fuelLevelInput.value >= 10000 && cargoMassInput.value > 10000) {
               itemStatusNode.style.visibility = 'visible';
               launchStatusNode.innerHTML = `Shuttle not ready for launch`;
               launchStatusNode.style.color = "red"
               pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`;
               copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`;
               fuelStatusNode.innerHTML = `Fuel Level check passed`;
               cargoStatusNode.innerHTML = `Too much mass for takeoff! Must be less than 10,000 kilograms`;
               event.preventDefault();
            }
         } else {
            itemStatusNode.style.visibility = 'visible';
            launchStatusNode.innerHTML = `Shuttle is ready for launch`;
            launchStatusNode.style.color = "green";
            pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`;
            copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`;
            fuelStatusNode.innerHTML = `Fuel Level check passed`;
            cargoStatusNode.innerHTML = `Cargo mass check passed`;
         };
      };
   })


   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let missionTargetNode = document.getElementById("missionTarget");
         let randomDestination = Math.floor(Math.random() * json.length);
         
         missionTargetNode.innerHTML = `<h2>Mission Destination</h2>
         <ul>
         <li>Name: ${json[randomDestination].name}</li>
         <li>Diameter: ${json[randomDestination].diameter}</li>
         <li>Star: ${json[randomDestination].star}</li>
         <li>Distance from Earth: ${json[randomDestination].distance}</li>
         <li>Number of Moons: ${json[randomDestination].moons}</li>
         </ul>
         <img src="${json[randomDestination].image}">`;

      })
   })
})

// if (fuelLevelInput.value < 10000) {
//    if (cargoMassInput.value > 10000) {
//    itemStatusNode.style.visibility = 'visible';
//    launchStatusNode.innerHTML = `Shuttle not ready for launch`;
//    launchStatusNode.style.color = "red"
//    pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`;
//    copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`;
//    fuelStatusNode.innerHTML = `Not enough fuel for journey! Must be more than 10,000 liters`;
//    cargoStatusNode.innerHTML = `Too much mass for takeoff! Must be less than 10,000 kilograms`;
//    event.preventDefault();
//    } else if (cargoMassInput.value <= 10000) {
//       itemStatusNode.style.visibility = 'visible';
//       launchStatusNode.innerHTML = `Shuttle not ready for launch`;
//       launchStatusNode.style.color = "red"
//       pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`;
//       copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`;
//       fuelStatusNode.innerHTML = `Not enough fuel for journey! Must be more than 10,000 liters`;
//       cargoStatusNode.innerHTML = `Cargo mass check passed`;
//       event.preventDefault();
//    };
   // // We're not reaching this conditional ?!?
   // if (fuelLevelInput.value >= 10000) { 
   //       if (cargoMassInput.value > 10000) {
   //       itemStatusNode.style.visibility = 'visible';
   //       launchStatusNode.innerHTML = `Shuttle not ready for launch`;
   //       launchStatusNode.style.color = "red";
   //       pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`;
   //       copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`;
   //       fuelStatusNode.innerHTML = `Fuel Level check passed`;
   //       cargoStatusNode.innerHTML = `Too much mass for takeoff! Must be less than 10,000 kilograms`;
   //    } else if (cargoMassInput.value <= 10000) {
   //       itemStatusNode.style.visibility = 'visible';
   //       launchStatusNode.innerHTML = `Shuttle is ready for launch`;
   //       launchStatusNode.style.color = "green";
   //       pilotStatusNode.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`;
   //       copilotStatusNode.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`;
   //       fuelStatusNode.innerHTML = `Fuel Level check passed`;
   //       cargoStatusNode.innerHTML = `Cargo mass check passed`;
   //    }
   // }
