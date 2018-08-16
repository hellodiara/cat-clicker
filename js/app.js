//Cat One
var catOne = document.getElementById('cat-photo-one');
let clicksOne = 1;

// Counter clicks increment when user clicks on cat image one
catOne.addEventListener('click', function() {
	document.getElementById('clicks-cat-one').innerHTML = clicksOne++;
	console.log('Cat one was cliked');
}, false);

//Cat Two
var catTwo = document.getElementById('cat-photo-two');
let clicksTwo =1;
// Counter clicks increment when user clicks on cat image two
catTwo.addEventListener('click', function() {
	document.getElementById('clicks-cat-two').innerHTML = clicksTwo++;
	console.log('Cat two was cliked');
}, false);
