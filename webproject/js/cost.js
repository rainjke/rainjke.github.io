const items = document.querySelectorAll('.item');
let currentItemIndex = 0;

const totalItems = items.length;
let currentSlide = 0;

function showSlide(index) {
    items.forEach(item => {
        item.classList.remove('active');
    });

items[index].classList.add('active');
}
function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalItems) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}
function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalItems - 1;
    }
    showSlide(currentSlide);
}
showSlide(currentSlide);

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.arrow-1').addEventListener('click', (event) => {
        const targetElement = event.target;

        if (targetElement.classList.contains('prev')) {
            prevSlide();
        }


    });
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.arrow-2').addEventListener('click', (event) => {
        const targetElement = event.target;
        if (targetElement.classList.contains('next')) {
            nextSlide();
        }
    });
});