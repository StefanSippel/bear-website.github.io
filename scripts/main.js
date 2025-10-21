const listItems = document.querySelectorAll("li");
// Store a reference to the <h1> in a variable
//const myHeading = document.querySelector("h1");
function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
// Update the text content of the <h1>
//myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/resourcen/teddy-bear-freigestellt.png") {
    myImage.setAttribute("src", "/resourcen/stefan.png");
  } else {
    myImage.setAttribute("src", "/resourcen/teddy-bear-freigestellt.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
//myHeading.textContent = "Bearsite ${localStorage.getItem("name")}}";
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bearsite ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Bearsite loaded, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
