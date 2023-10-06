window.addEventListener('scroll', function () {

    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition !== 0) {
        this.document.querySelector("header").classList.add("header-b");
        return;
    }
    
    this.document.querySelector("header").classList.remove("header-b");


});