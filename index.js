const imagesFolder = 'images/';
const imageFiles = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

const randomIndex = Math.floor(Math.random() * imageFiles.length);
const randomImage = imageFiles[randomIndex];
const imagePath = imagesFolder + randomImage;

const imgElement = document.createElement('img');
imgElement.src = imagePath;
imgElement.alt = "Random Image";

const imageContainer = document.getElementById('imageContainer');
imageContainer.appendChild(imgElement);
