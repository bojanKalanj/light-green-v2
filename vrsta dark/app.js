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
        menuBtn.classList.remove('menu-active');        
        dropdownMenu.classList.remove('dropdown-menu-active');
    }
}

// --------------MODAL--------------

var images = document.querySelectorAll('.on-hover');
var modal = document.querySelector('.modal-img');
var modalMainImg = document.querySelector('.main-modal-img img');

var modalClose = document.querySelector('.modal-img .close');


images.forEach(function(img){
    img.addEventListener('click', function(){
        modal.style.display = 'block';
        console.log(img.parentElement.childNodes[1].src)
        modalMainImg.src = this.parentElement.childNodes[1].src;
    })
});

modalClose.addEventListener('click', function(){
    modal.style.display = 'none';
})

// ------------------MAP-------------------

function initMap() {

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
        [
            {elementType: 'labels.text.fill', stylers: [{color: '#333333'}]},
            
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "333333"
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#99cc33"
                        },
                        {
                            "saturation": 33.4
                        },
                        {
                            "lightness": -25.4
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#53FF00"
                        },
                        {
                            "saturation": -73
                        },
                        {
                            "lightness": 40
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#FBFF00"
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#00FFFD"
                        },
                        {
                            "lightness": 30
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#032856"
                        },
                        {
                            "saturation": 0
                        },
                        {
                            "lightness": 0
                        },
                        {
                            "gamma": 0
                        }
                    ]
                }
            
        ],
        {name: 'Styled Map'});

    // Create a map object, and include the MapTypeId to add
    // to the map type control.
    var map = new google.maps.Map(document.querySelector('.map-wrap'), {
      center: {lat: 44.016, lng: 21.005},
      zoom: 7,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
      }
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
  }
// var modal = document.querySelector('.modal');
// var closeBtn = document.querySelector('.close');
// var images = document.querySelectorAll('.cont-img-wrap img');
// var mainImg = document.querySelector('.main-modal-img img');
// var smallModalImgs = document.querySelectorAll('.modal-small-imgs img');

// images.forEach(function(imgs){
//     imgs.addEventListener('click', function(){
//         modal.style.display = 'block';
//         mainImg.src = this.src;
//     })
// })

// smallModalImgs.forEach(function(imgs){
//     imgs.addEventListener('click', function(){
//         modal.style.display = 'block';
//         mainImg.src = this.src;
//     })
// })

// closeBtn.addEventListener('click', function(){
//     modal.style.display = 'none';
// })

// var fullscreanBtn = document.querySelectorAll('.on-img-hover');

// fullscreanBtn.forEach(function(full){
//     full.addEventListener('click', function(){
//         modal.style.display = 'block';
//         modalimg.src = this.offsetParent.children[0].src
//     })
// })