// toggles hamburger menu icon to navigation list and displays close icon
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

// select menu buttons
const homeButton = document.querySelector('#home-button');
const modelsButton = document.querySelector('#models-button');
const placesButton = document.querySelector('#places-button');
const contactButton = document.querySelector('#contact-button');

// event listener for hamburger menu button. Toggle on and off for nav menu. 
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('show')
    hamButton.classList.toggle('show')
});

// footer info
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;

let date = document.lastModified;
document.getElementById("lastmodified").innerHTML = "Last modified: " + date;

// Array of vehicles
const vehicles = [
    {
     name: "2023 Can-am Commander Max XT",
     location: "Bluffdale, Utah",
     size: "4 Seats",
     price: "$170/night",
     imageUrl: "https://sharetribe-assets.imgix.net/64e39a9f-a457-4560-b634-ff093d9c3564/raw/f0/ad0bd3a8a16c9229590473837358143830c683?auto=format&fit=clip&h=400&w=400&s=a7dc81bb492e8174e97e2e8d500dd42d"
    },
    {
    name: "RZR Turbo XP 4 EPS",
    location: "Highland, Utah",
    size: "4 Seats",
    price: "$169/night",
    imageUrl: "https://sharetribe-assets.imgix.net/64e39a9f-a457-4560-b634-ff093d9c3564/raw/bd/a65599cced0f4fecc0231c8ef9eb2306f247b9?auto=format&crop=edges&fit=crop&h=225&w=400&s=5c46d3b906bef83f58b1485b2bb495e1"
    },
    {
    name: "2019 Kawasaki Teryx4 LE",
    location: "Cedar Fort/American Fork, Utah",
    size: "4 Seats",
    price: "$150/night",
    imageUrl: "https://sharetribe-assets.imgix.net/64e39a9f-a457-4560-b634-ff093d9c3564/raw/a2/718576614c921d3efc127dcb5a7ea582ee23be?auto=format&crop=edges&fit=crop&h=225&w=400&s=ec1fc3641d187cb1a7dec2830fce7364"
    },
    {
    name: "2018 Polaris General",
    location: "Millcreek, Utah",
    size: "5 Seats",
    price: "$199/night",
    imageUrl: "https://sharetribe-assets.imgix.net/64e39a9f-a457-4560-b634-ff093d9c3564/raw/5f/893d4c9976665d2014608cfeca695dc11e9889?auto=format&crop=edges&fit=crop&h=225&w=400&s=0e2a0ef554c5803390713ba1d9208203"
    },
    {
    name: "Mountain Top Recreation Rentals",
    location: "Riverton, Utah",
    size: "4 Seats",
    price: "$215/night",
    imageUrl: "https://sharetribe-assets.imgix.net/64e39a9f-a457-4560-b634-ff093d9c3564/raw/f8/3b906db16874736c20bc5c13b69129b957e769?auto=format&crop=edges&fit=crop&h=225&w=400&s=81fa75730201a588db7505239d4408c2"
    },
    {
    name: "2022 RZR XP 4 1000",
    location: "Orem, Utah",
    size: "4 Seats",
    price: "$250/night",
    imageUrl: "https://sharetribe-assets.imgix.net/64e39a9f-a457-4560-b634-ff093d9c3564/raw/ed/f865feba650971b7297960996d1ad0792ee2af?auto=format&crop=edges&fit=crop&h=225&w=400&s=ca7c95eb5c12b2d2bf69bc1394d542b4"
    },
    {
    name: "2022 RZR Turbo R 4 Seater",
    location: "Saint George, Utah",
    size: "4 Seats",
    price: "$300/night",
    imageUrl: "https://sharetribe-assets.imgix.net/64e39a9f-a457-4560-b634-ff093d9c3564/raw/53/587ba51804eda240a6bf9f6803d03a4dd824f8?auto=format&crop=edges&fit=crop&h=225&w=400&s=8bc4e667ca50b64de6e6b3c92f30ee62"
    },
    {
    name: "2021 Teryx4 S LE",
    location: "Cedar Fort, Utah",
    size: "4 Seats",
    price: "$150/night",
    imageUrl: "https://sharetribe-assets.imgix.net/64e39a9f-a457-4560-b634-ff093d9c3564/raw/68/de2050abb4809d1b14407f31426ae74c161cd5?auto=format&crop=edges&fit=crop&h=225&w=400&s=aa0a5ab75c6d44b6f37477bc12539684"
    },
];

function displayVehicles() {
    const gallery = document.getElementById('vehicle-gallery');
    vehicles.forEach(vehicle => {
    // Create vehicle card
    const vehicleCard = document.createElement('div');
    vehicleCard.classList.add('vehicle-card');

    // Append vehicle image
    const vehicleImage = document.createElement('img');
    vehicleImage.src = vehicle.imageUrl;
    vehicleImage.alt = vehicle.name;
    vehicleCard.appendChild(vehicleImage);

    // Append vehicle name
    const vehicleName = document.createElement('h2');
    vehicleName.textContent = vehicle.name;
    vehicleCard.appendChild(vehicleName);

    // Append vehicle description
    const vehicleLocation = document.createElement('p');
    vehicleLocation.textContent = vehicle.location;
    vehicleCard.appendChild(vehicleLocation);

    // Append vehicle size
    const vehicleSize = document.createElement('p');
    vehicleSize.textContent = vehicle.size;
    vehicleCard.appendChild(vehicleSize);

    // Append vehicle price
    const vehiclePrice = document.createElement('p');
    vehiclePrice.textContent = vehicle.price;
    vehicleCard.appendChild(vehiclePrice);

    // Append vehicle card to gallery
    gallery.appendChild(vehicleCard);
    });
}

// Call the function to display vehicles when the page loads
document.addEventListener('DOMContentLoaded', displayVehicles);

document.addEventListener('DOMContentLoaded', () => {
    // Get references to the DOM elements
    const visitCountElement = document.getElementById('visit-count');
    const lastVisitElement = document.getElementById('last-visit');

    // Retrieve visit count and last visit from local storage
    let visitCount = localStorage.getItem('visitCount');
    let lastVisit = localStorage.getItem('lastVisit');

    // Update the visit count
    if (visitCount) {
        visitCount = parseInt(visitCount) + 1;
    } else {
        visitCount = 1;
    }
    localStorage.setItem('visitCount', visitCount);

    // Update the last visit date
    const currentVisit = new Date();
    localStorage.setItem('lastVisit', currentVisit);

    // Display the visit count and last visit date
    visitCountElement.textContent = `You have visited this site ${visitCount} time(s).`;
    if (lastVisit) {
        lastVisitElement.textContent = `Your last visit was on ${new Date(lastVisit).toLocaleString()}.`;
    } else {
        lastVisitElement.textContent = `This is your first visit.`;
    }
});