'use strict';

const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d');

function rendNum(min, max) {
  return Math.random() * (max - min) + min;
}

function integerRandomNumber(min, max) {
  return Math.round(rendNum(min, max));
}

let skyColor = 'rgba(1,1,1,1)';
ctx.fillStyle = skyColor;
ctx.fillRect(0, 0, 800, 400);

function changeSky() {
	ctx.clearRect(0, 0, 800, 400);
	ctx.fillStyle = skyColor;
	ctx.fillRect(0, 0, 800, 400);

	for (let star = 0; star <= integerRandomNumber(200, 400); star++) {
		let color;
		ctx.globalAlpha = rendNum(0.8, 1);
		let size = rendNum(0, 1.1);
		let x = integerRandomNumber(0, 800);
		let y = integerRandomNumber(0, 400);
		switch (integerRandomNumber(0,2)) {
			case 0:
				color = '#ffffff';
			break;
			case 1:
				color = '#ffe9c4';
			break;
			case 2:
				color = '#d4fbff';
			break;	
		}
		ctx.beginPath();
	    ctx.arc(x, y, (size/2), 0, 2 * Math.PI, false);
	    ctx.fillStyle = color;
	    ctx.fill();
	    ctx.lineWidth = 0;
	    ctx.strokeStyle = color;
	    ctx.stroke();
	}
	return;
}

changeSky();
canvas.addEventListener('click', changeSky);