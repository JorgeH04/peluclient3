var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 51.048615, lng: -114.070847},
          zoom: 8
    });
}


window.addEventListener('scroll', function(){
    if(window.scrollY > 150){
        document.querySelector('#navBar').style.opacity= 0.9;
    }
    else{
        document.querySelector('#navBar').style.opacity= 1;
    }
});




$('#navBar a, .btn').on('click', function(event){
    
    if(this.hash !==''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
        {
        scrollTop: $(hash).offset().top - 100
        },
    800
    );
    }
});