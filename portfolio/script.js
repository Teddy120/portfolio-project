// Wait for the page to fully load
window.addEventListener('load', function() {
    // Hide the preloader and show the content
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');

    setTimeout(function() {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 2000); // Hide preloader after 2 seconds
});

// Simulate progress and update the progress text
const progressText = document.querySelector('.progress-text');

let progress = 0;
const interval = setInterval(function() {
    if (progress >= 100) {
        clearInterval(interval);
        progressText.textContent = '100%';
    } else {
        progress += 1;
        progressText.textContent = progress + '%';
    }
}, 20); // Decreased interval for smoother animation

const galleryContainer = document.querySelector(".gallery");
const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
const indicator = document.querySelector(".indicator");

const defaultItemFlex = "0 1 20px";
const hoverItemFlex = "1 1 400px";

const updateGalleryItems = () => {
    galleryItems.forEach((item) => {
        let flex = defaultItemFlex;

        if (item.isHovered) {
            flex = hoverItemFlex;
        }

        item.style.flex = flex;
    });
};

galleryItems[0].isHovered = true;
updateGalleryItems();

galleryItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        galleryItems.forEach((otherItem) => {
            otherItem.isHovered = otherItem === item;
        });

        updateGalleryItems();
    });
});

galleryContainer.addEventListener("mousemove", (e) => {
    indicator.style.left = `${e.clientX - galleryContainer.getBoundingClientRect().left}px`;
});

