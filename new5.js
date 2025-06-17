//HTML:
// <input type="text" id="nameInput" placeholder="Enter your name" />
// <button id="btn">Submit</button>
// JS:
document.getElementById("btn").addEventListener("click", function() {
 let name =
 document.getElementById("nameInput").value;
 alert("Hello, " + name + "!");
});