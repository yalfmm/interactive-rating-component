const frontCard = document.querySelector('.front-card');
const backCard = document.querySelector('.back-card');
const submitBtn = document.getElementById('submit');
const rateAgainBtn = document.getElementById('rate-again');
const rating = document.getElementById('rate');
const rates = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', () => {
    backCard.classList.remove('hidden');
    frontCard.style.display = "none";
});

rateAgainBtn.addEventListener('click', () => {
    backCard.classList.add('hidden');
    frontCard.style.display = "block";
});

rates.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
});