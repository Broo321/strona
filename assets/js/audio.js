document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audiosrc");
    var isAudioPlaying = false;
    var button = document.getElementById("myButton");

    function clickButton() {
        button.click();
    }

    // Kliknij przycisk po załadowaniu strony
    clickButton();

    // Kliknij przycisk ponownie po 2 sekundach
    setTimeout(function() {
        clickButton();
    }, 100);

    function checkAndPlayAudio() {
        if (audio.paused) {
            audio.play().then(function() {
                isAudioPlaying = true;
            }).catch(function(error) {
                console.error("Błąd podczas próby odtworzenia dźwięku:", error);
            });
        } else {
            isAudioPlaying = true;
        }
    }

    function resetAudio() {
        audio.currentTime = 0; // Zresetuj czas odtwarzania do zera
    }

    // Sprawdź i uruchom audio co sekundę
    setInterval(checkAndPlayAudio, 1000);

    // Automatyczne odtwarzanie audio po załadowaniu strony
    window.onload = function() {
        resetAudio(); // Zresetuj audio
        checkAndPlayAudio();
    };

    // Dodaj nasłuchiwanie na zdarzenie kliknięcia dla uruchomienia audio, jeśli nie było wcześniej odtwarzane
    document.addEventListener("click", function() {
        if (!isAudioPlaying) {
            resetAudio(); // Zresetuj audio
            checkAndPlayAudio();
        }
    });

    // Dodaj nasłuchiwanie zdarzenia odświeżenia strony
    window.onbeforeunload = function() {
        resetAudio(); // Zresetuj audio
        alert("Strona zostanie odświeżona!");
        checkAndPlayAudio();
    };
});