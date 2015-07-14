
document.write("<br><br><mark>MY Individual Practice</mark><br>");

//object-literal//
var person = {
  name: "Adeleke",
  gender: "male",
  speak: function(personStatement) {
    document.write(personStatement + "<br>");
  }
};


document.write(person.name + "<br>");
document.write(person.gender + "<br>");
person.speak("I love to be here now");


for (index in person) {
  document.write(index + " -> " + person[index] + "<br>");
}


//////// Using 'new' keyword //////////
function employee(name, id, department, year) {
  this.name = name;
  this.id = id;
  this.department = department;
  this.year = new Date(year);
}


var employee1 = new employee("Adi", 123, "Development", "10/12/2003");
var employee2 = new employee("Walid", 899, "Finance", "9/11/2008");

document.write("<br> Employee 1: " + employee1.name + ", <u>" + employee1.department + "</u>, " + employee1.year);
document.write("<br> Employee 2: " + employee2.name + ", <u>" + employee2.department + "</u>, " + employee2.year);


//// Nested object-literal ///

var vacation = {
  date: new Date("July 2, 2015"),
  purpose: "Honeymoon",
  destinations: [
    {location: "India", highlight: "Bowling"},
    {location: "USA", highlight: "Swimming, Shopping and Spa"}
  ]
}

document.write("<br><br><b>" + vacation.purpose + "</b>");
document.write("<br>" + vacation.date);
document.write("<br>Destinations: ");

for(i in vacation.destinations) {
  for(index in vacation.destinations[i]) {
    document.write("<br>" + index + " - " + vacation.destinations[i][index]);
  }
}