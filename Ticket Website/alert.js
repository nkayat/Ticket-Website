document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const agreeCheckbox = document.getElementById('agreeCheckbox');
    const agreeButton = document.getElementById('agreeButton');

    agreeCheckbox.addEventListener('change', () => {
        agreeButton.disabled = !agreeCheckbox.click;
    });

    agreeButton.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});
