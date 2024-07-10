let randomNumber1 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;
let randomNumber2 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;
let randomNumber3 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;
let randomNumber4 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;
let randomNumber5 = Math.floor(Math.random() * (7000 - 1000 + 1)) + 1000;

console.log(randomNumber1)
console.log(randomNumber2)
console.log(randomNumber3)
console.log(randomNumber4)
console.log(randomNumber5)

function initializing() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let paragraph = document.createElement("p");
      paragraph.textContent = "Initializing hacking....";
      document.body.appendChild(paragraph);
      resolve(200);
    }, randomNumber1);
  });
}

function Reading() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let paragraph2 = document.createElement("p");
      paragraph2.textContent = "Reading your Files....";
      document.body.appendChild(paragraph2);
      resolve(200);
    }, randomNumber2);
  });
}

function pass() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let paragraph3 = document.createElement("p");
      paragraph3.textContent = "Password File Detected....";
      document.body.appendChild(paragraph3);
      resolve(200);
    }, randomNumber3);
  });
}

function send() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let paragraph4 = document.createElement("p");
      paragraph4.textContent =
        "Sending all files and password to the server....";
      document.body.appendChild(paragraph4);
      resolve(200);
    }, randomNumber4);
  });
}
function clean() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let paragraph5 = document.createElement("p");
      paragraph5.textContent = "cleaning up....";
      document.body.appendChild(paragraph5);
      resolve(200);
    }, randomNumber5);
  });
}

async function main() {
  await initializing();
  await Reading();
  await pass();
  await send();
  await clean();
}
main();
