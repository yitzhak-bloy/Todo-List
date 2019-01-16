var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li")
var buttonInLi = document.getElementsByClassName("buttonInLi")

function addDelete(buttonLiName, ilName) {
	buttonLiName.addEventListener("click", function() {
		ilName.innerHTML = "";
	}
)}

function addToggle(ilName) {
	ilName.addEventListener("click", function() {
		ilName.classList.toggle("done");
	}
)}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li1 = document.createElement("li");
	var btn = document.createElement("BUTTON");        // Create a <button> element
	var t = document.createTextNode("delete");       // Create a text node
	btn.appendChild(t);   
	li1.appendChild(btn);       
	li1.appendChild(document.createTextNode("     " + input.value));
	addToggle(li1)
	addDelete(btn, li1)
	ul.appendChild(li1);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


// Done when there is a start list

// for (var i = 0; i < buttonInLi.length; i++) {
// 	for (var i = 0; i < li.length; i++) {
// 		ilName = li[i];
// 		buttonLiName = buttonInLi[i];
// 		addDelete(buttonLiName, ilName)
// 	}
// };

// for (i = 0; i < li.length; i++) {
// 	ilName = li[i];
// 	addToggle(ilName)
// };