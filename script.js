// script.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const message = form.querySelector('textarea').value.trim();
  
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Simulate form submission
      alert('Thank you for contacting EliteFit! We will get back to you shortly.');
      form.reset();
    });
  
    // Smooth scroll to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          buttonClickEffect(this);
        }
      });
    });
  
    // Add visual feedback to all buttons
    document.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', () => {
        buttonClickEffect(button);
      });
    });
  
    function buttonClickEffect(element) {
      element.classList.add('clicked');
      setTimeout(() => {
        element.classList.remove('clicked');
      }, 200);
    }
  });