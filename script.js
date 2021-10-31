// Script for demo.html JavaScript
// Script for demo.html JavaScript Objects
// Create an object using keyword new
var x = new Object();
// Create a single value object using an object literal
var y = 10;
// Create a name : value pairs object using an object literal
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  // method
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
  // Accessor getter
  get lang() {
    return this.language;
  },
  // Accessor setter
  set lang(lang) {
    this.language = lang;
  }
}

// Display Objects on webpage will output [object Object], except single value object.
document.getElementById("demo-obj").innerHTML = x + ", " + y + ", " + person;
// Display name:value pairs Object's properties
document.getElementById("demo-obj-prop").innerHTML = "The person's first name is " + 
                                                      person.firstName + 
                                                      ", the last name is " + 
                                                      person.lastName;
// Display data from object using a function
document.getElementById("demo-obj-func").innerHTML= "The person's full name is " + person.fullName();
// Set a property using setter
person.lang = "English";
// Display data from the object using a getter 
document.getElementById("demo-obj-accessor").innerHTML = "This person speaks " + person.language;

// Construtor function for Student objects
function Student(fname, lname, unit) {
  this.fname = fname;
  this.lname = lname;
  this.unit = unit;
}

// Create two Student objects
var stu1 = new Student("Sam", "Smith", "CITS5505");
var stu2 = new Student("John", "Doe", "CITS5505");

// Display Students
document.getElementById("demo-construtor").innerHTML = "Students are " + stu1.fname + " and " + stu2.fname;

// Script for demo.html JavaScript Functions
// Hoisting, calling function before declaration.
var x = myFunction(4, 3);
document.getElementById("demo-func-dec").innerHTML = "Declaration Function result: " + x;
// Function Declarations
function myFunction(a, b) {
  return a * b;
}
// Function Expression, stored in a variable
var y = function (a, b) {return a * b};
// Call Expression Function using variable name
var z = y(2,3);
document.getElementById("demo-func-exp").innerHTML = "Expression Function:  "+ y + 
                                                      "<br> Expression Function result: " + z;
// Self-Invoking function
(function () {
  document.getElementById("demo-func-self").innerHTML = "Self-Invoking Function" ;
})();


var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
// person1 use method from person by using call()
var x = person.fullName.call(person1, "Perth", "Australia");
document.getElementById("demo-func-call").innerHTML = x;
// person2 use method from person by using apply()
var y = person.fullName.apply(person2, ["Melbourne", "Australia"]);
document.getElementById("demo-func-apply").innerHTML = y;


// Script for demo.html JavaScript Dom
// Finding HTML Elements by Id
var a = document.getElementById("dom-get-id");
// Using innerHTML to modify content
document.getElementById("demo-dom-id").innerHTML = "Get element by id: " + a.innerHTML;
// Finding HTML Elements by Class, result will be in a array
var b = document.getElementsByClassName("dom-get-class");
// Choose elements in array
document.getElementById("demo-dom-class").innerHTML = "Get element by class: " + b[0].innerHTML;
// Finding HTML Elements by Tag
var c = document.getElementById("demo4tag");
var d = c.getElementsByTagName("p");
// Choose elements in array
document.getElementById("demo-dom-tag").innerHTML = "Get element by tag: " + d[0].innerHTML;
// Finding HTML Elements by Query Selector
var e = document.querySelectorAll("p.dom-get-class");
document.getElementById("demo-dom-query").innerHTML = "Get element by Query Selector: " + e[1].innerHTML;

// Changing HTML style
document.getElementById("demo-dom-style").style.color = "blue";



// Script for demo.html JavaScript Dom eventlistener
// Define function to change text content and background color for event
function mDown(obj) {
  obj.style.backgroundColor = "skyblue";
  obj.innerHTML = "Release Me";
}

function mUp(obj) {
  obj.style.backgroundColor="tomato";
  obj.innerHTML="Thank You";
}

function mOver(obj) {
  obj.innerHTML = "Thank You";
  obj.style.backgroundColor = "skyblue";
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me";
  obj.style.backgroundColor="tomato";
}

// Using addEventListener() to attach event handler to the specified element
// Use click instead of on click on addEventListener
// Event handler can be a function or a function expression
document.getElementById("event-listener").addEventListener("click", showTxt);
function showTxt() {
  document.getElementById("event-listener").innerHTML = "Event Listener Worked!";
  document.getElementById("event-listener").style.backgroundColor = "skyblue";
}


// Script for demo.html JavaScript Dom node
// Create a new list item
var newLi = document.createElement("li");
// Create the list item's textnode and its text value
var txt = document.createTextNode("This is a list item added by adding node");
// Append the textnode to the list item
newLi.appendChild(txt);
//Get the parent element we want to insert the new list item into
var ul = document.getElementById("demo-node");
ul.appendChild(newLi);

// Create a new paragraph
var newPara = document.createElement("p");
var pTxt = document.createTextNode("This is a paragraph created by insertBefore");
// Append the textnode to the paragraph
newPara.appendChild(pTxt);
//Get the parent element we want to insert the new list item into
var div = document.getElementById("demo-node-div");
div.insertBefore(newPara, ul);

var nli = document.createElement("li");
var nTxt = document.createTextNode("I've been replaced")
nli.appendChild(nTxt);


// Scripts for demo.html AJAX
// Store the node we want to use in a variable
var f1 = document.getElementById('f1');
// A callback function is a function passed as a parameter to another function
const getData = (callback) => {
  // Create an XMLHttpRequest object
  var request = new XMLHttpRequest();

  // Add event listener to check if request success
  request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);
    // If the 4: request finished and response ready && 200:the request status is OK, 
    // parse the response text as json and access the data we want
    // then, use the data to construct html element to build a table of the data
    // Else, return error message.
    if(request.readyState === 4 && request.status === 200) {
      // access the data we want
      var data = JSON.parse(request.responseText);
      var objData = data.MRData.RaceTable.Races[0];
      // construct html table statement
      var txt = "<table border='1' width=100%><caption></caption>2008 F1 Round 5 Results<tr><th>Position</th><th>Driver</th>";
      for (x in objData.Results) {
        txt += "<tr><td>" + objData.Results[x].position + "</td><td>" +
               objData.Results[x].Driver.givenName + " " + objData.Results[x].Driver.familyName + "</td></tr>";
      }
      txt += "</table>";
      // Set html element's text with the statement constructed above.
      f1.innerHTML = txt;
      callback(undefined, data);
    } else if(request.readyState ===4) {
      console.log('could not fetch the data', undefined)
    }
  })

  // Use cors-aynwhere proxy server adds CORS headers to a request
  // To send a request to the server, use the open() and send() methods of the XMLHttpRequest object
  // Use F1 race results(http://ergast.com/mrd/) year 2008 round 5 result
  request.open('GET', 'http://ergast.com/api/f1/2008/5/results.json');
  request.send(); 
};

// Call the function
getData((err, data) => {
  console.log('callback fired');
  if(err) {
    console.log(err);
  } else {
    console.log(data);

  }
})


// For demo.html
// Check is scoll happened, use scrll function
window.onscroll = function() {scrollFunction()};
//if scoll down from top greater 50 px, the second navigation will appear from left
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("secNav").style.left = "0";
  } else {
    document.getElementById("secNav").style.left = "-100px";
  }
}