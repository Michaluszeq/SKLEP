const dataStartu = new Date('2024-01-01T00:00:00Z');

function aktualizujTimer() {
    const teraz = new Date();
    const roznicaCzasu = dataStartu - teraz;

    const dni = Math.floor(roznicaCzasu / (1000 * 60 * 60 * 24));
    const godziny = Math.floor((roznicaCzasu % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuty = Math.floor((roznicaCzasu % (1000 * 60 * 60)) / (1000 * 60));
    const sekundy = Math.floor((roznicaCzasu % (1000 * 60)) / 1000);

    const timerElement = document.getElementById('timer');
    timerElement.innerHTML = `${dni}  ${godziny}  ${minuty}  ${sekundy}`;

    const daysElement = document.getElementById('days');
    daysElement.innerHTML = `${dni}`;

    const hoursElement = document.getElementById('hours');
    hoursElement.innerHTML = `${godziny}`;

    const minutesElement = document.getElementById('minutes');
    minutesElement.innerHTML = `${minuty}`;

    const secondsElement = document.getElementById('seconds');
    secondsElement.innerHTML = `${sekundy}`;
}

setInterval(aktualizujTimer, 1000);

window.onload = aktualizujTimer;
