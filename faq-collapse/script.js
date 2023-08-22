const toggles = document.querySelectorAll('.faq-toggle')

// access the parentNode classlist and toggle the active class
toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
});