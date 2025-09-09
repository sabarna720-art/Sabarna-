// Smooth scrolling to section when clicking nav links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', e => {

        e.preventDefault();

        const targetId = anchor.getAttribute('href').substring(1);

        const targetElement = document.getElementById(targetId);

        if (targetElement) {

            targetElement.scrollIntoView({ behavior: 'smooth' });

        }

    });

});