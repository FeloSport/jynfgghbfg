function showForm(formId) {
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));
    document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.remove('active'));
    document.getElementById(`${formId}-form`).classList.add('active');
    event.target.classList.add('active');
}

// Función para mostrar términos y condiciones
function showTerms() {
    alert('Términos y Condiciones de FELOSPORT\n\n' +
          '1. Todos los productos están sujetos a disponibilidad.\n' +
          '2. Los precios pueden variar sin previo aviso.\n' +
          '3. Las devoluciones se aceptan dentro de los 7 días de la compra.\n' +
          '4. Los datos personales serán tratados según nuestra política de privacidad.\n' +
          '5. El envío se realiza en un plazo de 24-48 horas hábiles.');
}

//Fuciones de inicio
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-nav__dot');
    const prevButton = document.querySelector('.slider-button--prev');
    const nextButton = document.querySelector('.slider-button--next');
    let currentSlide = 0;
    
    function goToSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        slides[n].classList.add('active');
        dots[n].classList.add('active');
        
        // Reiniciar las animaciones
        const content = slides[n].querySelector('.slide__content');
        content.style.animation = 'none';
        content.offsetHeight; 
        content.style.animation = null;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            goToSlide(currentSlide);
        });
    });
    
    let slideInterval = setInterval(nextSlide, 3000);
    
    // Pausar autoplay cuando el mouse está sobre el slider
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 3000);
    });
});