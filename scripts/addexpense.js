function saveExpense() {
    const cards = document.querySelectorAll('#cardGrid .card');
    const values = Array.from(cards).map(card => card.textContent.trim());
    localStorage.setItem('expenseList', JSON.stringify(values));
}

function saveCardDetail(name) {
    if (!name) return alert('Expense name is empty');

    const existingData = JSON.parse(localStorage.getItem('expenseDetails') || '{}');

    var paidBy = {};
    var split = {};

    if (existingData[name]) {
        paidBy = existingData[name]["paidBy"];
        split = existingData[name]["split"];
    }

    existingData[name] = {
        paidBy,
        split
    };

    localStorage.setItem('expenseDetails', JSON.stringify(existingData));

    console.log('Saved expense details:', existingData);
}

function loadExpense() {
    const stored = localStorage.getItem('expenseList');
    const values = stored ? JSON.parse(stored) : [];

    values.forEach(value => addCard(value));
}

function addCardUI() {
    const input = document.getElementById("cardInput");
    const text = input.value.trim();
    if (!text) return;

    input.value = "";

    if (isDup(text)) {
        //TODO: add error message
        return;
    }

    addCard(text);
    saveExpense();
}

function addCard(value) {
    const grid = document.getElementById("cardGrid");

    const card = document.createElement("div");
    card.className = "card";
    card.textContent = value;

    saveCardDetail(value);

    card.style.color = "#3629B7";

    card.onclick = () => {
        window.location.hash = `/expensedetail/${value}`;
    };

    //TODO: add minus-btn

    const minusBtn = document.createElement('img');
    minusBtn.src = 'assets/Button/minus-button.png';
    minusBtn.className = 'minus-btn-card';
    minusBtn.alt = 'Remove';
    minusBtn.onclick = () => {
        card.remove();
    };

    // card.appendChild(minusBtn);
    grid.appendChild(card);
}

function isDup(value) {
    const existingData = JSON.parse(localStorage.getItem('expenseDetails') || '{}');

    console.log
    if (existingData[value]) {
        console.log("dup")
        return true;
    }
    
    return false;
}

