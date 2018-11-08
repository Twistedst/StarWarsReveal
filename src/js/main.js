// Sets the number of stars we wish to display
const numStars = 1000;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
  let star        = document.createElement('div');
  star.className  = 'star';
  star.id         = 'star' + i;
  var xy          = getRandomPosition();
  star.style.top  = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
  setInterval(function () {
    flashtext('star' + i, 'yellow');
  }, (1000 % i) * 2);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
  var y       = window.innerWidth;
  var x       = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [
    randomX,
    randomY
  ];
}

function flashtext(ele, col) {
  var tmpColCheck = document.getElementById(ele).style.backgroundColor;

  if (tmpColCheck === 'white') {
    document.getElementById(ele).style.backgroundColor = col;
  } else {
    document.getElementById(ele).style.backgroundColor = 'white';
  }
}
