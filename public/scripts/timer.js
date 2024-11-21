let timerStarted;
let timerTime = 0;
let completedTimes = 0;
let completedTime1 = 0;
let completedTime2 = 0;
let completedTime3 = 0;
let completedTime4 = 0;
let completedTime5 = 0;
let lastTime = 0;
let bestTime = 0;
let avarageTime = 0;





setInterval(timerCheck, 10)
function timerClicked() {
    if (timerStarted) {
        // Timer is already running, so stop it
        timerStarted = false;
        avarageTime = (completedTime1+completedTime2+completedTime3+completedTime4+completedTime5)/5;
        document.getElementById("avaragetime").innerHTML = "Avarage Time:" + avarageTime.toFixed(2);
        completedTimesCheck();
        document.getElementById("scramble").innerHTML = "Scramble: " + generateRandomSequence();
    } else {
        // Timer is not running, so start it
        timerStarted = true;
        lastTime = timerTime;
        timerTime = 0;
    }
}
function timerCheck() {
    if (timerStarted) {
        timerTime = timerTime + 0.01;
        document.getElementById("button3").innerHTML = timerTime.toFixed(2);
    }
}
function completedTimesCheck() {
    completedTime5 = completedTime4;
    completedTime4 = completedTime3;
    completedTime3 = completedTime2;
    completedTime2 = completedTime1;
    completedTime1 = timerTime;
    document.getElementById("lasttimes").innerHTML= "Last times: " + completedTime1.toFixed(2) + ", " + completedTime2.toFixed(2) + ", " + completedTime3.toFixed(2) + ", " + completedTime4.toFixed(2) + ", " + completedTime5.toFixed(2);
}
function checkHighscore() {
    if (timerTime < bestTime || bestTime == 0) {
        bestTime = timerTime;
        document.getElementById("besttime").innerHTML = "Best time: " + bestTime.toFixed(2)
    }
}

    // Slider event listener
    document.getElementById('lengthSlider').addEventListener('input', function() {
        document.getElementById('lengthValue').textContent = this.value;
    });

    function generateRandomSequence(length) {
        const letters = ['U', 'U\'', 'R', 'R\'', '2U', '2R'];
        let result = [];
        let lastLetter = null;
        let letterCount = 0;
        let attempts = 0;

        while (result.length < length && attempts < 100) {
            // Kies een willekeurige letter
            let newLetter = letters[Math.floor(Math.random() * letters.length)];

            attempts++;

            // Check op herhalingen en beperkingen
            if (lastLetter) {
                // Na 2U geen U of U' toestaan
                if (lastLetter === '2U' && (newLetter === 'U' || newLetter === 'U\'')) {
                    continue;
                }
                
                // Na 2R geen R of R' toestaan
                if (lastLetter === '2R' && (newLetter === 'R' || newLetter === 'R\'')) {
                    continue;
                }

                // Geen omgekeerde varianten direct na elkaar
                if (
                    (lastLetter === 'R' && newLetter === 'R\'') ||
                    (lastLetter === 'R\'' && newLetter === 'R') ||
                    (lastLetter === 'U' && newLetter === 'U\'') ||
                    (lastLetter === 'U\'' && newLetter === 'U')
                ) {
                    continue;
                }

                if (
                    (newLetter === lastLetter) || 
                    (letterCount >= 2) ||
                    (newLetter[0] === lastLetter[0] && newLetter !== lastLetter && !newLetter.startsWith('2') && !lastLetter.startsWith('2'))
                ) {
                    continue;
                }
            }

            // Reset attempts als een geldige letter wordt gevonden
            attempts = 0;

            result.push(newLetter);
            
            // Update tracking variabelen
            if (lastLetter && newLetter === lastLetter) {
                letterCount++;
            } else {
                letterCount = 1;
            }
            lastLetter = newLetter;
        }

        // Als we niet genoeg tekens hebben gegenereerd, roep de functie opnieuw aan
        if (result.length < length) {
            return generateRandomSequence(length);
        }

        return result.join(' ');
    }

    function generateScramble() {
        const length = document.getElementById('lengthSlider').value;
        const scramble = generateRandomSequence(length);
        document.getElementById('scrambleOutput').textContent = scramble;
    }

    // Genereer eerste scramble bij laden
    generateScramble();