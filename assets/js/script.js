//turn pages when click next or prev button
const pagesTurnBtn = document.querySelectorAll('.nextprev-btn');
pagesTurnBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
        const pageTurnId = element.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500);
        } else {
            pageTurn.classList.add('turn');    
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + index;
            }, 500);        
        }
    });
});

//contact me button when click
const pages = document.querySelectorAll('.book-page.book-right');
const contactBtn = document.querySelector('.btn.contact-me');

contactBtn.addEventListener('click', () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    })
    
})

//create reverse index function

//back profile button when click

//opening animation
//opening animation (cover right animation)
//opening animation (page left or profile page animation)
//opening animation (all page right animation)