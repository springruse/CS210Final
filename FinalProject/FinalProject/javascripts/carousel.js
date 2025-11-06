const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;

function moveSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // loop back
    }

    const containerWidth = track.parentElement.offsetWidth; // width of carousel-container
    track.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
}

setInterval(moveSlide, 3000); // slide every 3 seconds
