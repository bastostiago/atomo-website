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