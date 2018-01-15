document.querySelector('header li .fa-search').addEventListener('click', function(){
    document.querySelector('.search-box').classList.add('search-box-active');
})

document.querySelector('header .fa-times').addEventListener('click', function(){
    document.querySelector('.search-box').classList.remove('search-box-active');
})

document.querySelector('header .fa-bars').addEventListener('click', function(){
    document.querySelector('.dropdown-menu').classList.toggle('dropdown-menu-active');
})

window.addEventListener('scroll', function(){
    var scroll = window.pageYOffset;
    console.log('scrolling', scroll);
    if(scroll > 90){
        document.querySelector('header').classList.add('header-scrolled');
    }else{
        document.querySelector('header').classList.remove('header-scrolled');
    }
})