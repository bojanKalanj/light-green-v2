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
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {slideIndex = 1} 
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none"; 
//     }
//     x[slideIndex-1].style.display = "block"; 
// }

// console.log(document.querySelectorAll('.left img'));

// document.querySelectorAll('.left img').forEach(function(image){
//     image.style.display = 'none';
// })