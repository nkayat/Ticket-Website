const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];
const dates = ["3 AUG", "4 AUG", "5 AUG", "6 AUG", "7 AUG", "8 AUG"];

function swapDate(index) {
    const dayElement = document.getElementById(`day${index}`);
    const dateElement = document.getElementById(`date${index}`);
    
    const dayText = dayElement.innerText;
    const dateText = dateElement.innerText;
    
    dayElement.innerText = dateText;
    dateElement.innerText = dayText;
}
