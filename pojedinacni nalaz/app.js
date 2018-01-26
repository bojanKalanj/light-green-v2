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
    if(scroll > 90){
        document.querySelector('header').classList.add('header-scrolled');
    }else{
        document.querySelector('header').classList.remove('header-scrolled');
    }
})

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll('.myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.forEach(function(image){
   image.addEventListener('click', function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
   }) 
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var smallImgs = document.querySelectorAll('.modal-img');

smallImgs.forEach(function(image){
    image.addEventListener('click', function(){
     modalImg.src = this.src;
     captionText.innerHTML = this.alt;
    }) 
 }) 