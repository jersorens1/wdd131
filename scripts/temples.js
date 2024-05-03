// toggles hamburger menu icon to navigation list and displays close icon
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
})

// add get dates and last modified from index.html to temples page
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

var date = document.lastModified;
document.getElementById("lastmodified").innerHTML = "Last modification: " + date;