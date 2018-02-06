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

 var images = document.querySelectorAll('.img-wrap img');
 var modal = document.querySelector('.modal-img');
 var modalimg = document.querySelector('.modal-img img');
 var modalClose = document.querySelector('.close');

 var fullscreanBtn = document.querySelectorAll('.on-img-hover');

fullscreanBtn.forEach(function(full){
    full.addEventListener('click', function(){
        modal.style.display = 'block';
        modalimg.src = this.offsetParent.children[0].src
    })
})

modalClose.addEventListener('click', function(){
    modal.style.display = 'none';
})

