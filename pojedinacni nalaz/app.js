window.addEventListener('scroll', function(){
    var scroll = window.pageYOffset;
    if(scroll > 90){
        document.querySelector('header').classList.add('header-scrolled');
    }else{
        document.querySelector('header').classList.remove('header-scrolled');
    }
})

document.querySelector('.menu').addEventListener('click', function(){
    document.querySelector('.menu').classList.toggle('menu-active');
    document.querySelector('.dropdown-menu').classList.toggle('dropdown-menu-active');    
});

document.querySelector('.search').addEventListener('click', function(){
    document.querySelector('.search-input').classList.add('search-input-active');    
});

document.querySelector('.search-input .fa-times').addEventListener('click', function(){
    document.querySelector('.search-input').classList.remove('search-input-active');    
});

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