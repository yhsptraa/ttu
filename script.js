// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// after click

document.querySelector('#cake-menu').onclick = () =>{

    navbarNav.classList.toggle('active');

};

// toggle active class for search form

const searchForm = document.querySelector('.search-form');

const searchBox = document.querySelector('#search-box');


document.querySelector('#search-button').onclick = (event) => {
    searchForm.classList.toggle('active');

    searchBox.focus();

    event.preventDefault();
}

// Toggle Shopping Card

const shoppingCart = document.querySelector('.shopping-card');

document.querySelector('#shopping-cart-button').onclick = (e) => {

    shoppingCart.classList.toggle('active');

    e.preventDefault
}


// click out of sidebar 

const Cake = document.querySelector('#cake-menu');

const searchButton = document.querySelector('#search-button');

const shoppingCartButton = document.querySelector('#shopping-cart-button');


document.addEventListener('click', function(e){
    if(!Cake.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
}

if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {

    searchForm.classList.remove('active')

}

if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {

    shoppingCart.classList.remove('active')

}

})

// Modal Box

const itemDetailModal = document.querySelector('#item-detail-modal')

const itemDetailButtons = document.querySelectorAll('.item-detail-button')

itemDetailButtons.forEach ((btn) => {

    btn.onclick = (e) => {

        itemDetailModal.style.display = 'flex';
    
        e.preventDefault();
    
    };
})




// close button

document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
}


const modal = document.querySelector('#item-detail-modal');

window.onclick = (e) => {
    if (e.target === modal) {
        modal.stye.display ='none';
    }
}
