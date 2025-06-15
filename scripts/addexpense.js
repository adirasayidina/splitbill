function saveExpense() {
    const cards = document.querySelectorAll('#cardGrid .card');
    const values = Array.from(cards).map(card => card.textContent.trim());
    localStorage.setItem('expenseList', JSON.stringify(values));
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

    addCard(text);
    input.value = "";
    saveExpense();
}

function addCard(value) {
    const grid = document.getElementById("cardGrid");

    const card = document.createElement("div");
    card.className = "card";
    card.textContent = value;

    card.style.color = "#3629B7";

    card.onclick = () => {
        window.location.hash = `/expensedetail/${value}`;
    };

    grid.appendChild(card);
}

