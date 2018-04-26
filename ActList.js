// var ActList = [
//     {Name:"Walking"},
//     {Name:"Weight Training"},
//     {Name:"App Dev"},
//     {Name:"Computer Science"},
//     {Name:"Foreign Language"},
//     {Name:"Development"},
//     {Name:"User Support"},
//     {Name:"READ a Book"}, 
//     {Name:"Sleep"},
//     {Name:"Rest"},
//     {Name:"Go to work"},
//     {Name:"Back home"}
// ];

//module.exports = ActList;

var Observable = require('FuseJS/Observable');
var ActList=Observable();
ActList.add("Walking");
ActList.add("Weight Training");
ActList.add("App Dev");
ActList.add("Computer Science");
ActList.add("Foreign Language");
ActList.add("Development");
ActList.add("User Support");
ActList.add("READ a Book");
ActList.add("Sleep");
ActList.add("Rest");
ActList.add("Go to work");
ActList.add("Back home");

module.exports = ActList;