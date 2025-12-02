// Initialize Lucide icons
lucide.createIcons();

// FAQ Accordion Logic
document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        // Toggle current
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.classList.add('rotate-180');
        } else {
            content.classList.add('hidden');
            icon.classList.remove('rotate-180');
        }
        
        // Optional: Close others
        // document.querySelectorAll('.accordion-content').forEach(c => {
        //     if (c !== content) c.classList.add('hidden');
        // });
    });
});

// Scroll to Pricing
function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

// Sales Popup Logic
const buyers = [
    { name: "Patricia Rocha", location: "Fortaleza", time: "há 4 minutos" },
    { name: "Ana Clara", location: "São Paulo", time: "há 12 minutos" },
    { name: "Fernanda Lima", location: "Rio de Janeiro", time: "há 25 minutos" },
    { name: "Juliana Costa", location: "Salvador", time: "há 40 minutos" },
];

let buyerIndex = 0;
const popup = document.getElementById('sales-popup');
const popupText = document.getElementById('popup-text');
const popupTime = document.getElementById('popup-time');

function showPopup() {
    const buyer = buyers[buyerIndex];
    popupText.textContent = `${buyer.name} de ${buyer.location}`;
    popupTime.textContent = buyer.time;
    
    // Show
    popup.classList.remove('translate-x-[-200%]', 'opacity-0');
    
    // Hide after 5s
    setTimeout(() => {
        popup.classList.add('translate-x-[-200%]', 'opacity-0');
        
        // Next buyer
        buyerIndex = (buyerIndex + 1) % buyers.length;
        
        // Schedule next show
        setTimeout(showPopup, 15000);
    }, 5000);
}

function closePopup() {
    popup.classList.add('translate-x-[-200%]', 'opacity-0');
}

// Start popup loop after initial delay
setTimeout(showPopup, 5000);

// Floating CTA Logic
const floatingCta = document.getElementById('floating-cta');
const heroSection = document.querySelector('section');

window.addEventListener('scroll', () => {
    if (heroSection && window.scrollY > heroSection.offsetHeight) {
        floatingCta.classList.remove('translate-y-[200%]', 'opacity-0');
    } else {
        floatingCta.classList.add('translate-y-[200%]', 'opacity-0');
    }
});
