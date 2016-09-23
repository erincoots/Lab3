// JavaScript Document
/*
	Author - Erin Coots
	Date - 9/19/16
	Filename - SlideShow.js
	Description - Handles operations of SlideShow.html
*/
var index = 0;

function nextImg(){
	var images = ["images/cliffs.jpg","images/waterfall.jpg","images/beach.jpg","images/palmtree.jpg","images/rocky.jpg"];
	var img = document.getElementById("img");
	switch (index) {
		case 0:
			img.src = images[1];
			index = 1;
			break;
		case 1:
			img.src = images[2];
			index = 2;
			break;
		case 2:
			img.src = images[3];
			index = 3;
			break;
		case 3:
			img.src = images[4];
			index = 4;
			break;
		case 4:
			img.src = images[0];
			index = 0;
			break;
	}
}

function prevImg(){
	var images = ["images/cliffs.jpg","images/waterfall.jpg","images/beach.jpg","images/palmtree.jpg","images/rocky.jpg"];
	var img = document.getElementById("img");
	switch (index) {
		case 0:
			img.src = images[4];
			index = 4;
			break;
		case 1:
			img.src = images[0];
			index = 0;
			break;
		case 2:
			img.src = images[1];
			index = 1;
			break;
		case 3:
			img.src = images[2];
			index = 2;
			break;
		case 4:
			img.src = images[3];
			index = 3;
			break;
	}
}