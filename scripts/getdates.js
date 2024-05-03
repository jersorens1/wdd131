let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

var date = document.lastModified;
document.getElementById("lastmodified").innerHTML = "Last modification: " + date;