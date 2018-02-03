window.addEventListener('scroll', function(){
    var scroll = window.pageYOffset;
    console.log('scrolling', scroll);
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

// document.querySelector('.fa-search').addEventListener('click', function(){
//     document.querySelector('.searh-box').classList.toggle('searh-box-active');
// });

// document.querySelector('.fa-times').addEventListener('click', function(){
//     document.querySelector('.searh-box').classList.remove('searh-box-active');
// });

