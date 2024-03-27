const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Call showNextImage() periodically (e.g., every 3 seconds)
setInterval(showNextImage, 3000); // Adjust the interval as desired