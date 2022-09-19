// ----- WORKING WITH THE DOM GENERAL ---->
// console.log(document.title);

// console.log(document.body.children[0]);

// console.log(document.body.children[0].textContent);

// console.log((document.body.children[0].textContent = "this was changed"));

// document.body.children[0].style.color = "red"

// ----- SELECTING ELEMENTS FROM THE DOM ---->
// console.log(document.getElementsByTagName("div"));
// goes to the dom and brings back all the elements found with a div tag. Not super practical way to get specific elements.

// console.log(document.getElementsByClassName("different"));

// console.log(document.getElementById("different").textContent);
// Id property MUST be unique and would be the most specific of these to find an element.

// console.log(document.querySelector("div"));
// Will bring back the FIRST appearance of what you're looking for

// console.log(document.querySelectorAll("div"));
// brings back all the divs

// console.log(document.querySelector("#different"));
// use the css notation of the hash element for id

// ----- CREATE, INSERT - DOM ---->
// var parent = document.querySelector(".parent");
// var div = document.createElement("div");
// ^ is in memory, but not yet in the body of the DOM
// div.textContent = "My newly created div element";
// div.style.color = "red";
// div.style.fontSize = "10pt";
// console.log(div);

// putting that div on the body ---->
//parent.appendChild(div); this method is less used
//parent.insertBefore(div, parent.firstChild);

// parent.insertAdjacentElement("afterEnd", div);
/*
four different postitions for this argument ^ 
- beforeBegin
- afterBegin
- beforeEnd
- afterEnd
*/

// parent.insertAdjacentHTML("beforeBegin", "What's up?")
//inserting text

// ----- DELETE FROM DOM ---->
//parent.removeChild(p)

// ----- EVENTS  ---->
//just a sample of what's available. The docs contain reference to more types of events.
// var button = document.querySelector(".myButton");

// function click1() {
//   console.log("Click me!!");
// }
// function click2() {
//   console.log("Click me AGAIN!!");
//   button.removeEventListener("click", click1);
// }
// button.addEventListener("click", click1);
// button.addEventListener("click", click2);
//triggered both events at once ^

// button.onclick = function () {
//   console.log("I was clicked!!");
// };

// button.onmouseover = function () {
//   console.log("Mouse went over me!");
// };

// button.ondblclick = function () {
//   console.log("I was double clicked!");
// };
