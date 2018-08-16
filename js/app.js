var cat = document.getElementById('cat-photo-one');
let clicks = 1;

// Counter clicks increment when user clicks on cat image
cat.addEventListener('click', function() {
	document.getElementById('clicks-cat-one').innerHTML = clicks++;
	console.log('Cat was clicked')
}, false);

