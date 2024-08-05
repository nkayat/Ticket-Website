// JavaScript to handle increment and decrement of vehicle counts and update the summary
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });



document.querySelectorAll('.vehicle-card').forEach(card => {
    const countElement = card.querySelector('.count span');
    const incrementButton = card.querySelector('.count button:last-child');
    const decrementButton = card.querySelector('.count button:first-child');
    
    incrementButton.addEventListener('click', () => {
        countElement.textContent = parseInt(countElement.textContent) + 1;
        updateSummary();
    });
    
    decrementButton.addEventListener('click', () => {
        if (parseInt(countElement.textContent) > 0) {
            countElement.textContent = parseInt(countElement.textContent) - 1;
            updateSummary();
        }
    });
});

function updateSummary() {
    const summaryItems = document.querySelectorAll('.summary ul li span');
    let total = 0;
    
    document.querySelectorAll('.vehicle-card').forEach((card, index) => {
        const count = parseInt(card.querySelector('.count span').textContent);
        let price = 0;
        
        switch (index) {
            case 0: price = 0.2; break;
            case 1: price = 0.1; break;
            case 2: price = 0.1; break;
            case 3: price = 0.1; break;
        }
        
        const cost = (count * price).toFixed(2);
        summaryItems[price * 2].textContent = count;
        summaryItems[price * 2 + 1].textContent = '₹' + total;
        total += parseFloat(cost);
    });
    
    document.querySelector('.total span').textContent = 'Total: ₹' + total.toFixed(2);
    document.querySelector('.total button').textContent = 'Pay ₹' + total.toFixed(2);
}

updateSummary();