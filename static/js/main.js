$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

    $(".navbar-item").click(function() {
        
        if ($(".navbar-burger").hasClass("is-active")) {
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        }        
  
    });

    $("section").click(function() {
        
        if ($(".navbar-burger").hasClass("is-active")) {
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        }        
  
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
            if (a.hasAttribute('href') && a.href.includes(current) && a.id != 'logo') {
                a.classList.add("is-active");
            }
        });
    };

    //Slider Logo
    $('.logo-slider').slick({
        //dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        rows: 2
    });

  });

  // Initialize and add the map
  function initMap() {
    // The location of Uluru
    const uluru = { lat: -27.19571, lng: -49.61709};
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
    var notification_message = document.getElementById('notification-message');
    notification.style.display = "none";        

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementsByName('from_name')[0];
        var email = document.getElementsByName('reply_to')[0];
        var text_message = document.getElementsByName('message')[0];
        var error = false;
        var message = '';
    
        if (!text_message.value) {
            message = 'Mensagem deve ser informada.'
            error = true;
        }

        if (!email.value) {
            message = 'Email deve ser informado.'
            error = true;
        }

        if (!name.value) {
            message = 'Nome deve ser informado.'
            error = true;
        }

        if (!error) {
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.sendForm('service_j3u9sjf', 'template_8k5qsod', this)
                .then(function() {     
                    message = 'Enviado com Sucesso!';
                    notification.className = 'notification is-success';
                    notification_message.textContent = message;
                    notification.style.display = "block";
                }, function(error) {                                        
                    if (!message) {
                        message = 'Não foi possível enviar. Revise os campos.';
                    }                                
                    notification.className = 'notification is-danger';
                    notification_message.textContent = message;
                    notification.style.display = "block";
                });
        } else {
            notification.className = 'notification is-danger';
            notification_message.textContent = message;
            notification.style.display = "block";
        }
        
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

document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });