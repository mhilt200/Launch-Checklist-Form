window.addEventListener("load", function() {
   let form = this.document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Do not leave any field(s) empty.");
   });
   //form.addEventListener("submit", function() {
   //})
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