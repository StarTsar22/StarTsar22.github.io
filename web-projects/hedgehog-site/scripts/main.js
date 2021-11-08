let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hedgehog-in-the-grass.jpeg') {
      myImage.setAttribute('src','images/hedgehog.jpeg');
    } else {
      myImage.setAttribute('src','images/hedgehog-in-the-grass.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Hi! What is your name?');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ' Loves Hedgehogs!';
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' Loves Hedgehogs!';
  }

  myButton.onclick = function() {
    setUserName();
  }