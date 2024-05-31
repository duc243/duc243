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
    });
});

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.addEventListener('click', () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            reverseIndex();
            page.classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                page.style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
});

//opening animation
//opening animation (cover right animation)
//opening animation (page left or profile page animation)
//opening animation (all page right animation)