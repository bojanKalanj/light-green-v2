window.addEventListener('scroll', function(){
    var scroll = window.pageYOffset;
    if(scroll > 90){
        document.querySelector('header').classList.add('header-scrolled');
    }else{
        document.querySelector('header').classList.remove('header-scrolled');
    }
})

var dropdownMenu = document.querySelector('.dropdown-menu');
var menuBtn = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('menu-active');
    dropdownMenu.classList.toggle('dropdown-menu-active');    
});

document.querySelector('.search').addEventListener('click', function(){
    document.querySelector('.search-input').classList.add('search-input-active');    
});

document.querySelector('.search-input .fa-times').addEventListener('click', function(){
    document.querySelector('.search-input').classList.remove('search-input-active');    
});

window.onclick = function(event) {
    if (event.target != menuBtn && event.target != dropdownMenu) {
        console.log('removed')
        menuBtn.classList.remove('menu-active');        
        dropdownMenu.classList.remove('dropdown-menu-active');
    }
}

// --------------MODAL--------------

var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');
var images = document.querySelectorAll('.cont-img-wrap img');
var mainImg = document.querySelector('.main-modal-img img');
var smallModalImgs = document.querySelectorAll('.modal-small-imgs img');

images.forEach(function(imgs){
    imgs.addEventListener('click', function(){
        modal.style.display = 'block';
        mainImg.src = this.src;
    })
})

smallModalImgs.forEach(function(imgs){
    imgs.addEventListener('click', function(){
        modal.style.display = 'block';
        mainImg.src = this.src;
    })
})

closeBtn.addEventListener('click', function(){
    modal.style.display = 'none';
})

var fullscreanBtn = document.querySelectorAll('.on-img-hover');

fullscreanBtn.forEach(function(full){
    full.addEventListener('click', function(){
        modal.style.display = 'block';
        modalimg.src = this.offsetParent.children[0].src
    })
})