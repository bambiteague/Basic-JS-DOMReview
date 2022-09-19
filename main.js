// WORKING WITH THE DOM

console.log(document.title);

console.log(document.body.children[0]);

console.log(document.body.children[0].textContent);

console.log((document.body.children[0].textContent = "this was changed"));

document.body.children[0].style.color = "red"