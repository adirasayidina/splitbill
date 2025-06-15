function loadExpenseDetail(name) {
    document.getElementById("expenseTitle").textContent = name;
}

const totalInput = document.getElementById("totalInput");

totalInput.addEventListener("input", function () {
    let rawValue = this.value.replace(/\D/g, '');
    this.value = formatWithDots(rawValue);
});

function formatWithDots(value) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


const expenseTotalInput = document.getElementById("expenseTotal");

expenseTotalInput.addEventListener("input", function () {
    const raw = this.value.replace(/\D/g, '');
    this.value = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});

function addPaidBy(name = "", amount = "") {
    const container = document.getElementById("paidByList");

    const item = document.createElement("div");
    item.className = "list-item";

    const inputBox = document.createElement("div");
    inputBox.className = "input-box";

    const nameSelect = document.createElement("select");
    nameSelect.className = "name-select";

    const storedList = JSON.parse(localStorage.getItem("inputList")) || [];

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Name --";
    nameSelect.appendChild(defaultOption);

    storedList.forEach(person => {
        const option = document.createElement("option");
        option.value = person;
        option.textContent = person;
        if (person === name) option.selected = true;
        nameSelect.appendChild(option);
    });    
    
    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.placeholder = "Amount";
    amountInput.value = amount;
    
    inputBox.appendChild(nameSelect);
    inputBox.appendChild(amountInput);

    const minusBtn = document.createElement('img');
    minusBtn.src = 'assets/Button/minus-button.png';
    minusBtn.className = 'minus-btn-paid';
    minusBtn.alt = 'Remove';
    minusBtn.onclick = () => item.remove();

    item.appendChild(inputBox);
    item.appendChild(minusBtn);

    container.appendChild(item);
}

function addSplit(name = "", amount = "") {
    const container = document.getElementById("splitList");

    const item = document.createElement("div");
    item.className = "list-item";

    const inputBox = document.createElement("div");
    inputBox.className = "input-box";

    const nameSelect = document.createElement("select");
    nameSelect.className = "name-select";

    const storedList = JSON.parse(localStorage.getItem("inputList")) || [];

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "-- Select Name --";
    nameSelect.appendChild(defaultOption);

    storedList.forEach(person => {
        const option = document.createElement("option");
        option.value = person;
        option.textContent = person;
        if (person === name) option.selected = true;
        nameSelect.appendChild(option);
    });    
    
    const amountInput = document.createElement("input");
    amountInput.type = "number";
    amountInput.placeholder = "Amount";
    amountInput.value = amount;
    
    inputBox.appendChild(nameSelect);
    inputBox.appendChild(amountInput);

    const minusBtn = document.createElement('img');
    minusBtn.src = 'assets/Button/minus-button.png';
    minusBtn.className = 'minus-btn-paid';
    minusBtn.alt = 'Remove';
    minusBtn.onclick = () => item.remove();

    item.appendChild(inputBox);
    item.appendChild(minusBtn);

    container.appendChild(item);
}

