  // toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


// Scroll section active link 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply( links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id +']').classList.add('active');
            });
        };
    });


    // sticky navbar 
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove togglr icon and navbar
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// scroll reveal 
ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });

ScrollReveal().reveal('.home-image, .services-container, .portfolio-box, .contact form ', { origin: 'bottom' });

ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



// typed js 
const typed = new Typed('.multiple-text',{
    strings: ['Web Developer','UI Designer','React Developer','MERN Developer','REST API Designer','Full Stack Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay: 1000,
    loop: true,
});


// Email js 
// Initialize EmailJS with your User ID
// emailjs.init("rvOEnxwZdJjLfJRMW");

var serviceId ="service_22ohywb";
var templateId = "template_33z2jls";

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        
        const formData = new FormData(form);
        
        // Create an object to hold the form data
        const emailData = {
            from_name: formData.get('full-name'),
            from_email: formData.get('email-address'),
            mobile_number: formData.get('mobile-number'),
            email_subject: formData.get('email-subject'),
            message: formData.get('message')
        };

        // Send email using EmailJS
        emailjs.send('serviceId', 'templateId', emailData)
            .then(response => {
                console.log('Email sent successfully:', response);
                alert('Thank you, '+ emailData['from_name']+'! Your message has been sent successfully!')
            })
            .catch(error => {
                console.error('Error sending email:', error);
                alert('There was an error sending your message. Please try again.');
            });
    });
});
