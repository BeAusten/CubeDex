var currentImage = 1;
var timePassed = 0;
setInterval(changeLoading, 70);
setInterval(redirect, 1000);


function changeLoading() {
  if (currentImage < 12) {
    currentImage++;
  } else {
    currentImage = 1;
  }
  document.getElementById('loadingimage').src = `../images/loading/loading${currentImage}.png`;
}

function redirect() {
  if (timePassed > 5) {
    window.location.href = "../dashboard";
  } else {
    timePassed++
  }
}