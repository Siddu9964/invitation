// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('August 3, 2025 09:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
    if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
    if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        const countdownSection = document.querySelector('.countdown-section');
        if (countdownSection) {
            countdownSection.innerHTML = '<h3 class="countdown-title">🎉 The Engagement Day Has Arrived! 🎉</h3>';
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Engagement invitation loaded successfully!');
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add some subtle animations
    const card = document.querySelector('.card');
    if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    }

    // Start countdown timer
    updateCountdown();
    setInterval(updateCountdown, 1000);
}); 