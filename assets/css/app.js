//DOM load event
window.addEventListener("DOMContentLoaded", () => {

    const spotlight = document.querySelector('.spotlight');

    let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 60px)';

    window.addEventListener('mousemove', e => updateSpotlight(e));

    window.addEventListener('mousedown', e => {

        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 60px)';

        updateSpotlight(e);

    });

    window.addEventListener('mouseup', e => {

        spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 60px)';

        updateSpotlight(e);

    });

    function updateSpotlight(e) {

        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 60}% ${e.pageY / window.innerHeight * 60}%, ${spotlightSize}`;

    }
});