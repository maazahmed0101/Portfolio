gsap.from('li', {
    y: '-100',
    duration: 2,
    delay: 1,
    stagger: 0.95
})
// gsap.from('.github', {
//     y: 100,
//     opacity: 0,
//     duration: 1,
//     ease: "power3.out"
//     // stagger: 0.95
// })
// gsap.set(".github", {
//   opacity: 0,
//   y: 50
// });
// gsap.to('.Floating-img', {
//   y: 30,
//   duration: 2.4,
//   repeat: -1,
//   yoyo: true,
//   ease: "power1.inOut"
// });
gsap.to(".github", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 7.5,
    ease: "power3.out"
});
gsap.to(".linkDin", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 7.5,
    ease: "power3.out"
});
gsap.to(".headerBtn", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 6.7,
    ease: "power3.out"
});
gsap.from('.reveal-Left', {
    x: '-600',
    duration: 4,
    delay: 2.7
})
gsap.from('.headerH21', {
    y: '-90',
    duration: 0.8,
    delay: 1
})
gsap.from('.reveal-Right', {
    x: '890',
    duration: 1.7,
    delay: 6
})
const words = ['Web Developer', 'Frontend Developer', 'Freelancer']
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let vh = window.innerHeight;
document.documentElement.style.setProperty('--fixed-vh', `${vh}px`)
function type() {
    const currendWord = words[wordIndex]
    const displayElement = document.querySelector('#typing-text')
    if (isDeleting) {
        displayElement.textContent = currendWord.substring(0, charIndex - 1)
        charIndex--
    } else {
        displayElement.textContent = currendWord.substring(0, charIndex + 1)
        charIndex++
    }
    let typeSpeed = isDeleting ? 50 : 150;
    if (!isDeleting && charIndex === currendWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500
    }
    setTimeout(type, typeSpeed)
}
type()
const btns = document.getElementById('menuBtn');
btns.addEventListener('click', () => {
    btns.classList.toggle('active');
});
(function () {
    emailjs.init("TyHmMX8WhakS1cBwa");
})();
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_2o12paq", "template_8oyy2zb", this)
        .then(function () {
            alert("✅ Message Sent Successfully!");
        }, function (error) {
            alert("❌ Failed: " + error);
        });
});
const form = document.getElementById("contact-form");
const btn = document.getElementById("sendBtn");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    btn.innerText = "Sending...";
    btn.disabled = true;
    emailjs.sendForm("service_2o12paq", "template_8oyy2zb", this)
        .then(function () {
            Swal.fire({
                title: "Message Sent!",
                text: "Your message has been delivered successfully 🚀",
                icon: "success",
                confirmButtonColor: "#0ef"
            });
            form.reset();
            btn.innerText = "Send Message";
            btn.disabled = false;
        }, function (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong 😢",
                icon: "error"
            });
            btn.innerText = "Send Message";
            btn.disabled = false;
        });
});
btn = document.getElementById('menuBtn');
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
});
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_2o12paq", "template_8oyy2zb", this)
        .then(function () {
            alert("✅ Message Sent Successfully!");
        }, function (error) {
            alert("❌ Failed: " + error);
        });
});

