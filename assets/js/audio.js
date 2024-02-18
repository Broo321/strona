// Poczekaj 2 sekundy po załadowaniu strony
setTimeout(function() {
    // Pobierz element audio
    var audio = document.getElementById('audiosrc');
    
    // Zresetuj odtwarzanie audio
    audio.currentTime = 0;
    
    // Uruchom odtwarzanie
    audio.play();
}, 1000);