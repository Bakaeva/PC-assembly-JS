const dateOfDeadline = new Date('2025/11/13');

const daysBlock = document.querySelector('.timer__days');
const hoursBlock = document.querySelector('.timer__hours');
const minutesBlock = document.querySelector('.timer__minutes');
const secondsBlock = document.querySelector('.timer__seconds');

const set2digits = (num) => {
    return num < 10 ? '0' + num : num;
};

const numWord = (value, words) => {
    value = Math.abs(value) % 100;
    const lastDigit = value % 10;
    if (lastDigit === 1 && value !== 11)
        return words[0];
    else if (lastDigit === 2 && value !== 12
        || lastDigit === 3 && value !== 13
        || lastDigit === 4 && value !== 14)
        return words[1];
    return words[2];
};

let interval;

const updateTimer = () => {
    const secondsRemaining = (dateOfDeadline - new Date()) / 1000;
    const minutesRemaining = secondsRemaining / 60;
    const hoursRemaining = minutesRemaining / 60;
    const daysRemaining = hoursRemaining / 24;

    daysBlock.textContent = set2digits(Math.floor(daysRemaining));
    daysBlock.nextElementSibling.textContent = numWord(daysBlock.textContent, ['день', 'дня', 'дней']);
    hoursBlock.textContent = set2digits(Math.floor(hoursRemaining % 24));
    hoursBlock.nextElementSibling.textContent = numWord(hoursBlock.textContent, ['час', 'часа', 'часов']);
    minutesBlock.textContent = set2digits(Math.floor(minutesRemaining % 60));
    minutesBlock.nextElementSibling.textContent = numWord(minutesBlock.textContent, ['минута', 'минуты', 'минут']);
    secondsBlock.textContent = set2digits(Math.floor(secondsRemaining % 60));
    secondsBlock.nextElementSibling.textContent = numWord(secondsBlock.textContent, ['секунда', 'секунды', 'секунд']);

    if (secondsRemaining <= 0) {
        clearInterval(interval);
        daysBlock.textContent = '00';
        hoursBlock.textContent = '00';
        minutesBlock.textContent = '00';
        secondsBlock.textContent = '00';

        document.querySelectorAll('.timer__count').forEach((elem) => {
            elem.style.color = 'red';
        });
    };
};

interval = setInterval(updateTimer, 500);