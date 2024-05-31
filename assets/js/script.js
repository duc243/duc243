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
console.log(totalPages);

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.addEventListener('click', () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 100);
    });
});

//opening animation
const coverRight = document.querySelector('.cover.cover-right');

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100);

//opening animation (page left or profile page animation)
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500);
    }, (index + 1) * 200 + 2100);
});

//opening animation (all page right animation)
setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2600);