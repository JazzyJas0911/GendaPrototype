
var thisDay = new Date();
document.getElementById('calendar').innerHTML = createCalenedar(thisDay);

function createCalenedar(calDate){
  var calendarHTML = "<table id = 'calendar_table'>";
  calendarHTML += calCaption(calDate);
  calendarHTML += calWeekDayRow();
  calendarHTML += calDays(calDate);
  calendarHTML += "</table>";
  return calendarHTML;
}

function calCaption(calDate){
  var monthName = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

  var thisMonth = calDate.getMonth();
  var thisYear = calDate.getFullYear();

  return "<caption>" + monthName[thisMonth] + " " + thisYear +"</caption>";
}

function calWeekDayRow(){
  var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var rowHTML = "<tr>"
  for(var i = 0; i < dayName.length; i++){
    rowHTML += "<th class = 'calendar_weekdays'>" + dayName[i] + "</th>";
  }

  rowHTML += "</tr>";
  return rowHTML;
}

function calDays(calDate){
  //return the starting day of the month
  var day = new Date(calDate.getFullYear(), calDate.getMonth(), 1);
  var weekDay = day.getDay();
  //write blank cells preceding the starting dayName
  var htmlCode = "<tr>";
  for(var i = 0; i < weekDay; i++){
    htmlCode += "<td></td>";
  }
  //write cells for each day of the month
  var totalDays = daysInMonth(calDate);
  var highlightDay = calDate.getDate();
  for (var i = 1; i <= 7; i++) {
    day.setDate(i);
    weekDay = day.getDay();

    if (weekDay === 0) {
      htmlCode += "<tr>";
    }
    if (i === highlightDay) {
        htmlCode += "<td class='calendar_dates' id='calendar_today'>" + i + dayEvent[i] +  "</td>";
    }
    else {
        htmlCode += "<td class='calendar_dates'>" + i + dayEvent[i] + "</td>";
    }
    if (weekDay === 6){
       htmlCode += "</tr>";
    }
  }

  return htmlCode;
}

function daysInMonth(calDate){
  var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
  var thisYear = calDate.getFullYear();
  var thisMonth = calDate.getMonth();

  //if(leapyear is true) dayCount[1] = 29;
  if(thisYear%4 == 0){
    dayCount[1] = 29;
    if((thisYear%4 != 0) || (thisYear %400 ==0)){
        dayCount[1] = 29;
    }
  }

  return dayCount[thisMonth];
}
