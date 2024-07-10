async function getfacts() {
  const url = "https://cat-fact.herokuapp.com/facts";
  //   let promise = await fetch(url);
  let response = await fetch(url);
  let data = await response.json();

  console.log(response.status);
  console.log(data[0].text);
  p.innerText=data[0].text;
}
let p=document.body.querySelector("#data");
let btn=document.body.querySelector("#btn");
btn.addEventListener("click",getfacts);
