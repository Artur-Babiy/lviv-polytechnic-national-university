const navToggle = document.querySelector('.nav-toggle');
const headerInner = document.querySelector('.header-inner');

navToggle.addEventListener("click", () => {
    headerInner.classList.toggle('opened')
})
