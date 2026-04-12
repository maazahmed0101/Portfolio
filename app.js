const words = ['Web Developer','Frontend Developer', 'Freelancer']
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

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


(function(){
    emailjs.init("TyHmMX8WhakS1cBwa");
})();

const form = document.getElementById("contact-form");
const btn = document.getElementById("sendBtn");

form.addEventListener("submit", function(e){
    e.preventDefault();

    // 🔥 Loading state
    btn.innerText = "Sending...";
    btn.disabled = true;

    emailjs.sendForm("service_2o12paq", "template_8oyy2zb", this)
    .then(function(){
        // ✅ Success popup
        Swal.fire({
            title: "Message Sent!",
            text: "Your message has been delivered successfully 🚀",
            icon: "success",
            confirmButtonColor: "#0ef"
        });

        form.reset();

        btn.innerText = "Send Message";
        btn.disabled = false;

    }, function(error){
        // ❌ Error popup
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