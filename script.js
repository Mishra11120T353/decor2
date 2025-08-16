document.getElementById('lightingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const eventType = document.getElementById('eventType').value;
    let suggestion = '';

    switch(eventType) {
        case 'wedding':
            suggestion = 'Soft golden lights with floral arrangements.';
            break;
        case 'birthday':
            suggestion = 'Colorful LED string lights with balloons.';
            break;
        case 'concert':
            suggestion = 'Dynamic moving lights with stage effects.';
            break;
        case 'corporate':
            suggestion = 'Elegant white lighting with minimal decorations.';
            break;
    }

    document.getElementById('suggestion').innerText = suggestion;
});
