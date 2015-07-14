////////////// Object Literal ////////////
var batwing = {
  status: "Ready",
  rescueBatman: function() {
    document.write("Locating his transponder ... initiating launch...");
  }
}


if (batwing.status === "Ready") {
 batwing.rescueBatman();
}




var utilities = {
   printAllMembers: function(targetObject) {
     for (i in targetObject) {
       document.write("<br>" + targetObject[i]);
     }
   }
}

utilities.printAllMembers(batwing);



/////////// Nested Object Literals ///////////////
var avatar = {
  id: 32,
  name: "Eric",
  powers: {
    id: 3,
    name: "Invidi",
    notification: function() {
      document.write("<br>\'Invidi\' alliance ... unite!");
    }
  },
  cities: [ // An array of literals
    { locationId: 13, name: "New York" },
    { locationId: 15, name: "Gotham" },
    { locationId: 17, name: "Alabama" }
  ]
}

avatar.powers.notification();

document.write("<br><br>Avatar: <b>" + avatar.name + "</b>");

for (i in avatar.cities) {
  document.write("<br>" + avatar.cities[i].name);
}


/////////// Adding additional object literal////////////
if (typeof (avatar.defense) === "undefined") {
  avatar.defense = "Ion Canon";
}

document.write("<br><br>" + avatar.defense + "<br>");



for (index in avatar) {
  document.write("<br>" + index + "==>" + avatar[index]);
}



/////// Using the new keyword /////////////
function car (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = new car("Toyota", "Corolla", 1987);
var mumCar = new car("Dodge", "Dart", 1971);

alert(myCar.model);
alert(mumCar.model);