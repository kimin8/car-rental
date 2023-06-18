let logo = document.querySelector(".logo-name");
logo.onclick = () => {
    window.location.href = "/main.html";
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

let audia1 = document.querySelector('#vehicle-models > div > div:nth-child(4) > div.col-md-3 > div > button:nth-child(1)');
let vw1 = document.querySelector('#vehicle-models > div > div:nth-child(4) > div.col-md-3 > div > button:nth-child(2)');
let toyota = document.querySelector('#vehicle-models > div > div:nth-child(4) > div.col-md-3 > div > button:nth-child(3)');
let bmw = document.querySelector('#vehicle-models > div > div:nth-child(4) > div.col-md-3 > div > button:nth-child(4)');
let mercedes = document.querySelector('#vehicle-models > div > div:nth-child(4) > div.col-md-3 > div > button:nth-child(5)');
let vw2 = document.querySelector('#vehicle-models > div > div:nth-child(4) > div.col-md-3 > div > button:nth-child(6)');

audia1.addEventListener("click", () => {
  carPicture.src = "images/audia1.jpg";
  price.textContent = "$45";
  brandField.textContent = "Audi";
  modelField.textContent = "A1";
  yearField.textContent = "2012";
  doorsField.textContent = "4/5";
  wheelField.textContent = "Left";
  transmissionField.textContent = "Manual";
  fuelField.textContent = "Gasoline";
});

vw1.addEventListener("click", () => {
  carPicture.src = "images/golf1.jpg";
  price.textContent = "$37";
  brandField.textContent = "Volkswagen";
  modelField.textContent = "Golf 6";
  yearField.textContent = "2008";
  doorsField.textContent = "4/5";
  wheelField.textContent = "Right";
  transmissionField.textContent = "Manual";
  fuelField.textContent = "Diesel";
});

toyota.addEventListener("click", () => {
  carPicture.src = "images/toyotacamry.jpg";
  price.textContent = "$30";
  brandField.textContent = "Toyota";
  modelField.textContent = "Camry";
  yearField.textContent = "2006";
  doorsField.textContent = "4/5";
  wheelField.textContent = "Left";
  transmissionField.textContent = "Automatic";
  fuelField.textContent = "Hybrid";
});

bmw.addEventListener("click", () => {
  carPicture.src = "images/bmw320.jpg";
  price.textContent = "$35";
  brandField.textContent = "BMW";
  modelField.textContent = "320";
  yearField.textContent = "2012";
  doorsField.textContent = "4/5";
  wheelField.textContent = "Left";
  transmissionField.textContent = "Manual";
  fuelField.textContent = "Diesel";
});

mercedes.addEventListener("click", () => {
  carPicture.src = "images/mercedes-benz.jpg";
  price.textContent = "$50";
  brandField.textContent = "Mercedes";
  modelField.textContent = "Benz GLK";
  yearField.textContent = "2006";
  doorsField.textContent = "4/5";
  wheelField.textContent = "Right";
  transmissionField.textContent = "Manual";
  fuelField.textContent = "Diesel";
});

vw2.addEventListener("click", (e) => {
  carPicture.src = "images/golf2.jpg";
  price.textContent = "$25";
  brandField.textContent = "Volkswagen";
  modelField.textContent = "Passat CC";
  yearField.textContent = "2008";
  doorsField.textContent = "4/5";
  wheelField.textContent = "Right";
  transmissionField.textContent = "Automatic";
  fuelField.textContent = "Gasoline";
});