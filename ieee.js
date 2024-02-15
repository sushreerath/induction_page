document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('.content, .form-section');
    const contactSection = document.getElementById('contact');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY + navbar.offsetHeight;

        sections.forEach(section => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
               
                const links = document.querySelectorAll('.navbar ul li a');
                links.forEach(link => link.classList.remove('selected'));

                const correspondingLink = document.querySelector(`.navbar ul li a[href="#${section.id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('selected');
                }
            }
        });

        
        if (
            scrollPosition >= contactSection.offsetTop &&
            scrollPosition < contactSection.offsetTop + contactSection.offsetHeight
        ) {
           
            const links = document.querySelectorAll('.navbar ul li a');
            links.forEach(link => link.classList.remove('selected'));

            const correspondingLink = document.querySelector('.navbar ul li a[href="#contact"]');
            if (correspondingLink) {
                correspondingLink.classList.add('selected');
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.card1, .card2, .card3, .card4');
  
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const url = button.dataset.url;
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  });
  