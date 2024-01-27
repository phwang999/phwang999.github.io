const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/me.jpg") {
    myImage.setAttribute("src", "images/harry.png");
  } else {
    myImage.setAttribute("src", "images/me.jpg");
  }
};

let myButton = document.querySelector("button");
let mySubHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    mySubHeading.textContent = `Welcome to my page, ${myName}!`;
  }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    mySubHeading.textContent = `Welcome to my page, ${storedName}!`;
  }

  myButton.onclick = () => {
    setUserName();
  };