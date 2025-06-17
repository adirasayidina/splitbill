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

function addPaidBy(name = "", amount = "") {
    addRow("paidByList", name, amount)
}

function checkDup() {

}

function addRow(elementId, name, amount) {
    const container = document.getElementById(elementId);

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
    amountInput.type = "text";
    amountInput.placeholder = "Amount";
    amountInput.value = amount;
    amountInput.disabled = true;
    amountInput.style.backgroundColor = "#f0f0f0";
    amountInput.style.color = "#a0a0a0";
    amountInput.style.cursor = "not-allowed";
    amountInput.addEventListener("input", function () {
        let rawValue = this.value.replace(/\D/g, '');
        console.log(rawValue);
        this.value = formatWithDots(rawValue);
    });

    nameSelect.addEventListener('change', function () {
        if (this.value !== "") {
            amountInput.disabled = false;
            amountInput.style.backgroundColor = "";
            amountInput.style.color = "";
            amountInput.style.cursor = "";
        } else {
            amountInput.disabled = true;
            amountInput.value = "";
            amountInput.style.backgroundColor = "#f0f0f0";
            amountInput.style.color = "#a0a0a0";
            amountInput.style.cursor = "not-allowed";
        }
    });

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
    addRow("splitList", name, amount)
}

