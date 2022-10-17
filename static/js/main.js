$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    // Animation image on welcome
    $("#mainImage").fadeIn(1000);

    //Select current item on NavMenu
    const sections = document.querySelectorAll("section");
    const navA = document.querySelectorAll("nav .navbar-item");
    window.onscroll = () => {
        var current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");                 
            }
        });

        navA.forEach((a) => {                   
            a.classList.remove("is-active");
            // console.log(current);
            // console.log('ClassList: ' + a.classList);
            if (a.href.includes(current) && a.id != 'logo') {
                a.classList.add("is-active");
            }
        });
    };
  });

  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -27.21202, lng: -49.64387};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    });
}

window.initMap = initMap;

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('E0XiyjL4FZETdLjk0');
})();

window.onload = function() {
    var notification = document.getElementById('notification');
    notification.style.display = "none";

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_j3u9sjf', 'template_8k5qsod', this)
            .then(function() {
                notification.style.display = "block";
            }, function(error) {
                notification.style.display = "block";
            });
    });

    document.getElementById('delete-notification').addEventListener('click', function(event) {
        event.preventDefault();
        notification.style.display = "none";        
    });
    
}

const onloadCallback = function() {
    console.log("reCAPTCHA has loaded!");
    grecaptcha.reset();
};

