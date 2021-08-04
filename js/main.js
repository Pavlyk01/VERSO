$(function() {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
    AOS.init();


})
$(function() {
    var scrollEventHandler = function() {
        window.scroll(0, window.pageYOffset)
    }

    window.addEventListener("scroll", scrollEventHandler, false);

})