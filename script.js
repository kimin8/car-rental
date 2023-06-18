let logo = document.querySelector(".logo-name");
logo.onclick = () => {
  window.location.href = "/index.html";
}


// Kato zaredi te prashta do tam ama ne trqbva
window.onload = () => {
  document.querySelector('#carousel > div > button:nth-child(1)').focus();
}

let price = document.querySelector('#car-info > tbody > tr:nth-child(1) > th > span');
let carPicture = document.getElementById('car-image');
let brandField = document.getElementById('brand');
let modelField = document.getElementById('model');
let yearField = document.getElementById('year');
let doorsField = document.getElementById('doors');
let wheelField = document.getElementById('wheel');
let transmissionField = document.getElementById('transmission');
let fuelField = document.getElementById('fuel');

const buttons = Array.from(document.querySelector('#carousel > div').children);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    fetch('https://car-rental-eeeb6-default-rtdb.europe-west1.firebasedatabase.app/.json')
      .then(response => response.json())
      .then(carInfo => {
        const carInfoArray = Object.values(carInfo);
        carPicture.src = carInfoArray[i].image;
        price.textContent = carInfoArray[i].price;
        brandField.textContent = carInfoArray[i].brand;
        modelField.textContent = carInfoArray[i].model;
        yearField.textContent = carInfoArray[i].year;
        doorsField.textContent = carInfoArray[i].doors;
        wheelField.textContent = carInfoArray[i].wheel;
        transmissionField.textContent = carInfoArray[i].transmission;
        fuelField.textContent = carInfoArray[i].fuel;
      });
  })
}