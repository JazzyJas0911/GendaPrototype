"use strict";

//should account for leap year

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentDay = today.getDay();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let selectDay = document.getElementById("day");
let currSunday = new Date();
let currSaturday = new Date();

let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let days = ["", "Sunday, Oct. 13", "Monday, Oct. 14", "Tuesday, Oct. 15", "Wednesday, Oct. 16", "Thursday, Oct. 17", "Friday, Oct. 18", "Saturday, Oct. 19"];
let days = ["", "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
let times = ["", "00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];




// showCalendar(currentMonth, currentYear);
generate_table();

function next() {
    var curr = new Date();
    var nextSunday = new Date(currSunday.getFullYear(), currSunday.getMonth(), currSunday.getDate()+7);
    var nextSaturday = new Date(currSaturday.getFullYear(), currSaturday.getMonth(), currSaturday.getDate()+7); 
    currSunday = nextSunday;
    currSaturday = nextSaturday;
    //change date of week
    var weekDate = document.getElementById("weeklyDate");
    weekDate.innerHTML = nextSunday.toDateString() + " - " + nextSaturday.toDateString() ;
    // currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    // currentMonth = (currentMonth + 1) % 12;
    
    
    // generate_table();
    // showCalendar(currentMonth, currentYear);
    tableHead();
}

function previous() {
  var curr = new Date();
  var nextSunday = new Date(currSunday.getFullYear(), currSunday.getMonth(), currSunday.getDate()-7);
  var nextSaturday = new Date(currSaturday.getFullYear(), currSaturday.getMonth(), currSaturday.getDate()-7); 
  currSunday = nextSunday;
  currSaturday = nextSaturday;
  //change date of week
  var weekDate = document.getElementById("weeklyDate");
  weekDate.innerHTML = nextSunday.toDateString() + " - " + nextSaturday.toDateString() ;
  // currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
  // currentMonth = (currentMonth + 1) % 12;
  console.log("about to enter generate table in func next()");
  // generate_table();
  // showCalendar(currentMonth, currentYear);
  tableHead();
}



function generate_table() {
  //set range of dates for week
  var curr = new Date();
  var first = curr.getDate() - curr.getDay();
  var last = first + 6 ;

  currSunday = new Date(curr.setDate(first)); //first day of week (sun)
  currSaturday = new Date(curr.setDate(last)); //last day (sat)

  //change date of week
  var weekDate = document.getElementById("weeklyDate");
  weekDate.innerHTML = currSunday.toDateString() + " - " + currSaturday.toDateString() ;


  // get the reference for the body
  // var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.getElementById("calendar");

  // DEEAAAAAD CODE
  // var col = document.createElement("col");
  // col.setAttribute("width", "50");
  // col.setAttribute("width", "200");

  var tblHead = document.getElementById("calendar-head"); //table head
  var tblBody = document.getElementById("calendar-body"); //table body
  
  var incDays = currSunday.getDate() //incrementing days

  // creating all cells
  for (var i = 0; i < 26; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 8; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      cell.setAttribute("class", "cell");
      var cellText;

      if(i == 0){ // DAYS OF THE WEEK
          if(j == 0){
            cellText = document.createTextNode(" ");
          }
          else{
            cellText = document.createTextNode(days[j] + ", " + months[currSunday.getMonth()] + " " + incDays );
            incDays++;
          }

        cell.appendChild(cellText);
        row.appendChild(cell);
        
      }
      else if (j == 0) // TIME OF DAY
          cellText = document.createTextNode(times[i]);
      else if (i == 14 && j == 2)
          cellText = document.createTextNode("Audrey: Work");
      else if (i == 19 && j == 3)
          cellText = document.createTextNode("Jasmin: Make Dinner");
      else if (i == 10 && j == 4)
          cellText = document.createTextNode("Ryan: Take Kids to School");
      else if (i == 16 && j == 5)
          cellText = document.createTextNode("Jordan: Walk Dogs");
      else if (i == 11 && j == 6)
          cellText = document.createTextNode("Jasmin: Phone Interview");
      else // ELSE IF THERE IS AN EVENT
          cellText = document.createTextNode("");
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    
    if(i == 0){
      tblHead.appendChild(row);
    }
    else{
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }

  }

  // put the <tbody> in the <table>
  // tbl.appendChild(tblBody);
  // appends <table> into <body>
  // body.appendChild(tbl);
}

/**
 * used to update row with days and dates
 */
function tableHead(){
  

  var tblHead = document.getElementById("calendar-head");
  var tblBody = document.getElementById("calendar-body");
  tblHead.innerHTML = '';
  // tblHead.removeChild(tblHead.childNodes[1]);
  // tblBody.removeChild(tblBody.childNodes[0]);

  var row = document.createElement("tr");

  var incDays = currSunday.getDate(); //incrementing days
  var incMonths = currSunday.getMonth(); //incrementing month
  var incYears = currSunday.getFullYear(); //incrementing year


  for(var i = 0; i < 25; i++){
    for (var j = 0; j < 8; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      cell.setAttribute("class", "cell");
      var cellText;
  
      if(i == 0){ // DAYS OF THE WEEK
        if(incDays == 32){
          incDays = 1;
          incMonths++;
        }
        if(incMonths == 12){
          incMonths = 0;
        }
        console.log("incDays: ", incDays);
        console.log("incMonths: ", incMonths);

        if(j == 0){
          cellText = document.createTextNode(" ");
        }
        else{
          //new days
          cellText = document.createTextNode(days[j] + ", " + months[incMonths] + " " + incDays );
          incDays++;
            
        }
  
        cell.appendChild(cellText);
        row.appendChild(cell);
        
      }

    }
  
    // tblHead.appendChild(row);
    // add the row to the end of the table body
    
    // tblBody.appendChild(row);
    tblHead.insertBefore(row, tblHead.firstChild);
  }
  
}


  // Get the modal
var modal = document.getElementById("myModal1");
var modal = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");
var btn = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}