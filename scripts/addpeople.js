function saveInputList() {
    //TODO: handle duplicate and empty string

    const inputs = document.querySelectorAll('.input-row input');
    const values = Array.from(inputs).map(input => input.value);
    localStorage.setItem('inputList', JSON.stringify(values));
}

function loadInputList() {
    const stored = localStorage.getItem('inputList');
    const values = stored ? JSON.parse(stored) : [];

    values.forEach(value => addInputRow(value));
}

function addInputRow(value = '') {
    const inputList = document.getElementById('inputList');

    const row = document.createElement('div');
    row.className = 'input-row';

    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    let submitted = false;

    input.addEventListener('keydown', (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            saveInputList();
            submitted = true;
            input.blur();
        }
    });

    input.addEventListener('blur', () => {
        if (!submitted) {
            saveInputList();
        }
        submitted = false;
    });

    const minusBtn = document.createElement('img');
    minusBtn.src = 'assets/Button/minus-button.png';
    minusBtn.className = 'minus-btn';
    minusBtn.alt = 'Remove';
    minusBtn.onclick = () => {
        row.remove();
        saveInputList();
    };

    row.appendChild(input);
    row.appendChild(minusBtn);
    inputList.appendChild(row);
    saveInputList();
}
