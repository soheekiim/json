var outputText = document.getElementById('outputText');
var contentGrid = document.getElementById('coffeeGrid');
var executeButton = document.getElementById("coffee");
var coffee = ["Laura Rivera", "Nemba", "El Porvenir", "Sitio Sao Niguel", "La Casita"];


let jsonDatabase = [
  {
    "title" : "Laura Rivera",
    "image" : "colombia2.jpeg",
    "color" : "#F8B4B5",
    "notes" : ["stone fruit", "bright tropicals", "sweet"]
  },
  {
    "title" : "Nemba",
    "image" : "burundi1.jpeg",
    "color" : "#DBCCE1",
    "notes" : ["plum", "sweet tea", "lemon"]
  },
  {
    "title" : "El Porvenir",
    "image" : "colombia1.jpeg",
    "color" : "#7F74AC",
    "notes" : ["nectar sweetness", "lively tropicals", "clean finish"]
  },
  {
    "title" : "Sitio Sao Niguel",
    "image" : "brazil1.jpeg",
    "color" : "#FBB76E",
    "notes" : ["lemon oil", "blueberry", "white tea"]
  },
  {
    "title" : "La Casita",
    "image" : "colombia3.jpeg",
    "color" : "#F29381",
    "notes" : ["bright citrus", "orange oil", "jasmine florality"]
  }
];




for (var i = 0; i < jsonDatabase.length; i++) {
  createElementGrid(jsonDatabase[i]);
}

function createElementGrid (incomingJSON) {

  let newGridElement = document.createElement("div");
  newGridElement.style.backgroundColor = incomingJSON['color'];
  newGridElement.classList.add('gridItem');

  let newElementHeading = document.createElement("heading");
  newElementHeading.classList.add('gridTitle');
  newElementHeading.innerText = incomingJSON['title'];
  newGridElement.appendChild(newElementHeading);

  let newNotesList = document.createElement("ul");
  newGridElement.appendChild(newNotesList);

  for (var i = 0; i < incomingJSON['notes'].length; i++) {
    var currentNotesString = incomingJSON['notes'][i];
    var newNotesItem = document.createElement("li");
    newNotesItem.classList.add('notes')
    newNotesItem.innerText = currentNotesString;
    newNotesItem.style.listStyleType = "square";
    newNotesItem.style.listStylePosition = "inside";
    newNotesList.appendChild(newNotesItem);
  }

  let newImage = document.createElement("img");
  newImage.classList.add('gridImage');
  newImage.src = incomingJSON['image'];
  newGridElement.appendChild(newImage);

  contentGrid.appendChild(newGridElement);
}




window.addEventListener('DOMContentLoaded', function() {
  executeButton.addEventListener("click", coffeeSelection);
});

function coffeeSelection () {

  var coffeeIndex = Math.floor(Math.random() * coffee.length);
  var coffeeRec = coffee[coffeeIndex];

  var finalOutput = "a bag of " + coffeeRec + "!";

  outputText.innerHTML = finalOutput;

}
