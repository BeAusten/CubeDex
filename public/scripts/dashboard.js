// Function to change the avatar
function changeAvatar(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          document.querySelector('.avatar').style.backgroundImage = `url(${e.target.result})`;
      };
      reader.readAsDataURL(file);
      document.getElementById('avataritext').innerHTML = "";
  }
}

  
  
  
  // Function to set skill progress
  function setProgress(skillId) {
    const progress = prompt(`Enter progress for ${skillId} (0-100):`);
    if (progress !== null && progress >= 0 && progress <= 100) {
      const circle = document.getElementById(skillId);
      circle.style.background = `conic-gradient(#4CAF50 ${progress}%, #ddd ${progress}%)`;
    } else {
      alert("Please enter a valid percentage between 0 and 100.");
    }
  }
  
  // Function to choose the most-used cube
  function chooseCube() {
    const cubeImage = prompt("Enter the URL of your most-used cube image:");
    if (cubeImage) {
      document.querySelector('.most-used-cube').style.backgroundImage = `url(${cubeImage})`;
      document.querySelector('.most-used-cube').style.backgroundSize = 'cover';
    }
  }
  
  // Initialize the input event listeners when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('best-time').addEventListener('change', function() {
      console.log(`Best Time updated to: ${this.value}`);
    });
    document.getElementById('best-average').addEventListener('change', function() {
      console.log(`Best Average updated to: ${this.value}`);
    });
    document.getElementById('last-time').addEventListener('change', function() {
      console.log(`Last Time updated to: ${this.value}`);
    });
    document.getElementById('tier').addEventListener('change', function() {
      console.log(`Tier updated to: ${this.value}`);
    });
  });
  
  


  function openPopup() {
    document.getElementById('popup').style.display = 'block';
  }

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});

document.getElementById('popup-img0').addEventListener('click', function() {
  document.getElementById('main-image').style.backgroundImage = 'none';
  document.getElementById('popup').style.display = 'none';
  document.getElementById('main-image').innerHTML = '☆';
});

document.getElementById('popup-img1').addEventListener('click', function() {
  document.getElementById('main-image').style.backgroundImage = "url('../images/badge1.png')";
  document.getElementById('popup').style.display = 'none';
  document.getElementById('main-image').innerHTML = '';
});

document.getElementById('popup-img2').addEventListener('click', function() {
  document.getElementById('main-image').style.backgroundImage = "url('../images/badge2.png')";
  document.getElementById('popup').style.display = 'none';
  document.getElementById('main-image').innerHTML = '';
});

document.getElementById('popup-img3').addEventListener('click', function() {
  document.getElementById('main-image').style.backgroundImage = "url('../images/badge3.png')";
  document.getElementById('popup').style.display = 'none';
  document.getElementById('main-image').innerHTML = '';
});
// !! niet vergeten om andere badges nog te doen
