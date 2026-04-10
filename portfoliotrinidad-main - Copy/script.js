document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".multiple-text");
    const words = ["Framer Designer & Front-End Developerr"];
    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // Faster typing speed

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, letterIndex--);
        } else {
            textElement.textContent = currentWord.substring(0, letterIndex++);
        }

        let speed = isDeleting ? 30 : typingSpeed; // Faster delete speed

        if (!isDeleting && letterIndex === currentWord.length) {
            speed = 400; // Short pause before deleting
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 100; // Shorter delay before typing next word
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check local storage for theme preference
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeToggle.checked = true;
    }

    themeToggle.addEventListener("change", function () {
        if (themeToggle.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const musicPlayers = document.querySelectorAll(".music-player");
    const allAudioElements = document.querySelectorAll(".audio-player"); // Select all audio elements

    musicPlayers.forEach((player) => {
        const audio = player.querySelector(".audio-player");
        const playPauseBtn = player.querySelector(".play-pause-button");
        const rewindBtn = player.querySelector(".rewind-button");
        const forwardBtn = player.querySelector(".forward-button");
        const progressBar = player.querySelector(".progress-bar");

        // Play or Pause the Music
        playPauseBtn.addEventListener("click", function () {
            if (audio.paused) {
                // Pause all other songs before playing the new one
                allAudioElements.forEach((otherAudio) => {
                    if (otherAudio !== audio) {
                        otherAudio.pause();
                        otherAudio.closest(".music-player")
                            .querySelector(".play-pause-button")
                            .classList.replace("bx-pause", "bx-play"); // Reset other buttons
                    }
                });

                audio.play();
                playPauseBtn.classList.replace("bx-play", "bx-pause");
            } else {
                audio.pause();
                playPauseBtn.classList.replace("bx-pause", "bx-play");
            }
        });

        // Rewind Music by 5 seconds
        rewindBtn.addEventListener("click", function () {
            audio.currentTime = Math.max(0, audio.currentTime - 5);
        });

        // Fast Forward Music by 5 seconds
        forwardBtn.addEventListener("click", function () {
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
        });

        // Update Progress Bar
        audio.addEventListener("timeupdate", function () {
            progressBar.value = (audio.currentTime / audio.duration) * 100;
        });

        // Seek Music Position
        progressBar.addEventListener("input", function () {
            audio.currentTime = (progressBar.value / 100) * audio.duration;
        });

        // Reset play button when song ends
        audio.addEventListener("ended", function () {
            playPauseBtn.classList.replace("bx-pause", "bx-play");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Show one slide at a time
        spaceBetween: 10, // Space between slides
        loop: false, // Infinite loop
        autoplay: {
            delay: 30000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay active after interaction
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true, // Clickable pagination dots
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const imageSets = [
        ["Screenshot 2025-03-25 175658.png", "bike2.jpg"], 
        ["gym.jpg", "gym4.jpg", "gym3.jpg"], 
        ["sing.jpg", "sing2.jpg"],
        ["wanwan.jpg", "wanwann.jpg", "wanwannn.jpg"]
    ];

    const slideImages = document.querySelectorAll(".swiper-slide img");

    function changeImages() {
        slideImages.forEach((img, index) => {
            if (imageSets[index]) {
                const randomIndex = Math.floor(Math.random() * imageSets[index].length);
                img.src = imageSets[index][randomIndex];
            }
        });
    }

    setInterval(changeImages, 1000); // Change images every 2 seconds
});

document.addEventListener("DOMContentLoaded", () => {
    const authContainer = document.getElementById("auth-container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    if (registerBtn && loginBtn && authContainer) {
        registerBtn.addEventListener("click", () => {
            authContainer.classList.add("active");
        });

        loginBtn.addEventListener("click", () => {
            authContainer.classList.remove("active");
        });
    } else {
        console.error("One or more elements not found. Check your HTML IDs.");
    }
});




