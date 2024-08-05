let prices = {
    twoWheeler: 0.2,
    fourWheeler: 0.1,
    taxi: 0.1,
    bus: 0.1,
    fullDay: 0.1
};

let counts = {
    twoWheeler: 0,
    fourWheeler: 0,
    taxi: 0,
    bus: 0,
    fullDay: 0
};

function addVehicle(type) {

    counts[type]++;
    updateSummary();
}
function addVehicle(type) {
    counts[type]--;
    updateSummary();
}

function updateSummary() {
    document.getElementById('twoWheelerCount').innerText = counts.twoWheeler;
    document.getElementById('fourWheelerCount').innerText = counts.fourWheeler;
    document.getElementById('taxiCount').innerText = counts.taxi;
    document.getElementById('busCount').innerText = counts.bus;
    document.getElementById('fullDayCount').innerText = counts.fullDay;

    document.getElementById('twoWheelerCost').innerText = (counts.twoWheeler * prices.twoWheeler).toFixed(2);
    document.getElementById('fourWheelerCost').innerText = (counts.fourWheeler * prices.fourWheeler).toFixed(2);
    document.getElementById('taxiCost').innerText = (counts.taxi * prices.taxi).toFixed(2);
    document.getElementById('busCost').innerText = (counts.bus * prices.bus).toFixed(2);
    document.getElementById('fullDayCost').innerText = (counts.fullDay * prices.fullDay).toFixed(2);

    let totalCost = (counts.twoWheeler * prices.twoWheeler) + 
                    (counts.fourWheeler * prices.fourWheeler) + 
                    (counts.taxi * prices.taxi) + 
                    (counts.bus * prices.bus) + 
                    (counts.fullDay * prices.fullDay);

    document.getElementById('totalCost').innerText = totalCost.toFixed(2);
    document.getElementById('payAmount').innerText = totalCost.toFixed(2);
}

function payNow() {
    alert('Payment of ₹' + document.getElementById('payAmount').innerText + ' successful!');
}