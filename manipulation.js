// JavaScript Document

function change(){
	var bd_r = parseInt(document.getElementById("borderRed").value);
	var bd_g = parseInt(document.getElementById("borderGreen").value);
	var bd_b = parseInt(document.getElementById("borderBlue").value);
	var bd_w = parseInt(document.getElementById("width").value);
	var bg_r = parseInt(document.getElementById("backgroundRed").value);
	var bg_g = parseInt(document.getElementById("backgroundGreen").value);
	var bg_b = parseInt(document.getElementById("backgroundBlue").value);
	var box = document.getElementById("box");
	box.style.backgroundColor = "rgb(" + bg_r + ", " + bg_g + ", " + bg_b + ")";
	box.style.borderColor = "rgb(" + bd_r + ", " + bd_g + ", " + bd_b + ")";
	box.style.borderWidth = bd_w + "px";
}