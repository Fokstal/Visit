window.addEventListener('scroll', function () {

    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition !== 0) {
        this.document.querySelector("header").classList.add("header-b");
        return;
    }

    this.document.querySelector("header").classList.remove("header-b");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});