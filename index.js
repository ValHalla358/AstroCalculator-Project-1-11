//reverse "rotaluclaC thgieW ortsA" and make the title of the page
var calcTitle = document.getElementById('titleCalculator');

function reverseString(text) {
    // write code here	
    var title = "";
    for (var i = text.length - 1; i >= 0; i--) {
        title += text[i];
    }
    calcTitle.innerHTML = title;
}
reverseString("rotaluclaC thgieW ortsA");

//varable getting element of select menue
var select = document.getElementById('selectPlanet');
var selectedOption = select.selectedIndex;

//array
var planets = [
    { planet: 'Sun', gravity: 27.9 },
    { planet: 'Mercury', gravity: 0.377 },
    { planet: 'Venus', gravity: 0.9032 },
    { planet: 'Earth', gravity: 1 },
    { planet: 'Moon', gravity: 0.1655 },
    { planet: 'Mars', gravity: 0.3895 },
    { planet: 'Jupiter', gravity: 2.640 },
    { planet: 'Saturn', gravity: 1.139 },
    { planet: 'Uranus', gravity: 0.917 },
    { planet: 'Neptune', gravity: 1.148 },
    { planet: 'Pluto', gravity: 0.06 }
];
//for loop to display the planet options
for (var i = 0; i < planets.length; i++) {
    var opt = document.createElement('option'); //creating an option element in html
    opt.innerHTML = planets[i].planet; //adding index of planet array to new html element
    var planetOpt = opt.innerHTML;
    opt.value = planets[i].gravity;
    select.appendChild(opt);
    console.log(selectedOption);
}
//function to calculate the planet weight + entered weight
function planetWeight() {

    var yourWeight = document.getElementById('weightInput').value;
    var selectedWeight = select.options[select.selectedIndex].value;
    var planetaryWeight = selectedWeight * yourWeight;
    var w = Math.round(planetaryWeight);


    var getParagraph = document.getElementById('displayWeight');
    var p = document.getElementById('planets');
    var planetName = select.options[select.selectedIndex].innerHTML;
    console.log(planetName);

    var newHeading = document.createElement('h3');
    getParagraph.appendChild(newHeading);
    var weightMessage = ("On " + planetName + ", you would weigh " + w + " pounds.");

    if (planetName == 'Sun' || planetName == 'Moon') {
        weightMessage = ("On the " + planetName + ", you would weigh " + w + " pounds.");
        newHeading.innerHTML = weightMessage;
    } else {
        newHeading.innerHTML = weightMessage;
    }
}
