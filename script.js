// ================= MENU MOBILE =================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Menutup menu setelah memilih halaman

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// ================= TAHUN OTOMATIS =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= ANIMASI KARTU =================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .about-box"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(40px)";

    card.style.transition =
        "all 0.8s ease";

    observer.observe(card);

});


// ================= BENDA TERBANG =================

const container =
    document.querySelector(".floating-container");


// Jenis benda

const objects = [
    "star",
    "heart",
    "sparkle",
    "bubble"
];


function createFloatingObject() {

    const object =
        document.createElement("div");

    const type =
        objects[
            Math.floor(
                Math.random() * objects.length
            )
        ];


    object.classList.add(
        "floating",
        type
    );


    // Untuk bintang

    if (type === "star") {

        object.innerHTML = "★";

    }


    // Untuk hati

    if (type === "heart") {

        object.innerHTML = "♥";

    }


    // Untuk sparkle

    if (type === "sparkle") {

        object.innerHTML = "✦";

    }


    // Untuk bubble

    if (type === "bubble") {

        const size =
            Math.random() * 50 + 25;

        object.style.width =
            size + "px";

        object.style.height =
            size + "px";

    }


    // Posisi awal

    object.style.left =
        Math.random() * 100 + "%";


    // Kecepatan

    const duration =
        Math.random() * 8 + 8;

    object.style.animationDuration =
        duration + "s";


    // Delay

    object.style.animationDelay =
        Math.random() * 5 + "s";


    container.appendChild(object);


    // Hapus setelah selesai

    setTimeout(function () {

        object.remove();

    }, (duration + 5) * 1000);

}


// Membuat benda baru

setInterval(
    createFloatingObject,
    500
);


// Membuat benda awal

for (let i = 0; i < 15; i++) {

    createFloatingObject();

}