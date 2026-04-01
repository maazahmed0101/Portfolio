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
