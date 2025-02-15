// document.addEventListener("DOMContentLoaded", () => {
//     const images = document.querySelectorAll(".image-container img");
//     let currentIndex = 0;

//     function showNextImage() {
//         images[currentIndex].classList.remove("active"); // Hide current image
//         currentIndex = (currentIndex + 1) % images.length; // Move to next image
//         images[currentIndex].classList.add("active"); // Show new image
//     }

//     // Initially show the first image
//     images[currentIndex].classList.add("active");

//     // Change image every 5 seconds
//     setInterval(showNextImage, 5000);
// });

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-container .image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
});

const initialDate = new Date('2024-01-21T00:00:00');

        function updateCountdown() {
            const now = new Date();
            const diff = now - initialDate;
            
            const diffInMs = now - initialDate;
            const diffDate = new Date(diffInMs);
            
            const years = diffDate.getUTCFullYear() - 1970;
            const months = diffDate.getUTCMonth();
            const days = diffDate.getUTCDate() - 1;
            const hours = diffDate.getUTCHours();
            const minutes = diffDate.getUTCMinutes();
            const seconds = diffDate.getUTCSeconds();

            document.getElementById('year').textContent = String(years).padStart(2, '0');
            document.getElementById('month').textContent = String(months).padStart(2, '0');
            document.getElementById('day').textContent = String(days).padStart(2, '0');
            document.getElementById('hour').textContent = String(hours).padStart(2, '0');
            document.getElementById('minute').textContent = String(minutes).padStart(2, '0');
            document.getElementById('second').textContent = String(seconds).padStart(2, '0');
        }

        setInterval(updateCountdown, 1000); // Update every second