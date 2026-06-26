// ads.js
document.addEventListener('click', function() {
    if (!localStorage.getItem('ad_shown')) {
        window.open('https://www.effectivecpmnetwork.com/cdtzbhi2rm?key=ab97b4527f155e794eabafc6f63ce7e8', '_blank');
        localStorage.setItem('ad_shown', 'true');
    }
}, { once: true });

