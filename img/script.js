// Script para interatividade do site Agrinho 2026 - Victor Kovaleski

document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Suave para os Links de Navegação
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 2. Animação de Fade-In ao rolar a página (Scroll Animation)
    const cards = document.querySelectorAll('.card');
    
    const checkVisibility = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Configuração inicial dos cards para a animação
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    // Executar ao carregar e ao rolar a página
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});
