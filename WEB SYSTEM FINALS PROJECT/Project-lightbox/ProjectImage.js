function openModal(imageName) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = "img/" + imageName;
  captionText.innerHTML = "Project " + (imageNames.indexOf(imageName) + 1);
}



var currentImageIndex = 0;
var imageNames = ["Project1.jpg", "Project2.jpg", "Project3.jpg", "Project4.jpg", "Project5.jpg", "Project6.jpg"];

function openModal(imageName) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = "img/" + imageName;
  captionText.innerHTML = "Project " + (imageNames.indexOf(imageName) + 1);
}

document.addEventListener("DOMContentLoaded", function() {
  function changeImage(delta) {
    currentImageIndex += delta;
    if (currentImageIndex < 0) {
      currentImageIndex = imageNames.length - 1;
    } else if (currentImageIndex >= imageNames.length) {
      currentImageIndex = 0;
    }
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");
    modalImg.src = "img/" + imageNames[currentImageIndex];
    captionText.innerHTML = "Project " + (currentImageIndex + 1);
  }

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  var nextButton = document.getElementById("nextButton");
  var prevButton = document.getElementById("prevButton");

  nextButton.onclick = function() {
    changeImage(-1);
  }

  prevButton.onclick = function() {
    changeImage(1);
  }
});


