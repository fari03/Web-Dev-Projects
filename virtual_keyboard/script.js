document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input-field');
    const fontSelect = document.getElementById('font-select');

    // Add change event listener to font select
    fontSelect.addEventListener('change', () => {
        const selectedFont = fontSelect.value;
        inputField.style.fontFamily = selectedFont;
    });

    const keyboardContainer = document.createElement('div');
    const keyboardKeys = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        [' ', '-', '_', '.', ',', 'Backspace', 'Enter']
    ];

    const createKey = (keyValue, keyText) => {
        const keyElement = document.createElement('button');
        keyElement.classList.add('keyboard__key');
        keyElement.textContent = keyText;

        keyElement.addEventListener('click', () => {
            if (keyValue === 'Backspace') {
                inputField.value = inputField.value.slice(0, -1);
            } else if (keyValue === 'Enter') {
                inputField.value += '\n';
            } else {
                inputField.value += keyValue;
            }
        });

        return keyElement;
    };

    const renderKeyboard = () => {
        keyboardKeys.forEach(row => {
            const rowContainer = document.createElement('div');
            rowContainer.classList.add('keyboard__row');

            row.forEach(key => {
                rowContainer.appendChild(createKey(key, key));
            });

            keyboardContainer.appendChild(rowContainer);
        });

        keyboardContainer.classList.add('keyboard');
        document.body.appendChild(keyboardContainer);
    };
    fontIncreaseBtn.addEventListener('click', () => {
        const currentFontSize = parseInt(window.getComputedStyle(inputField).fontSize);
        const newFontSize = currentFontSize + 2;
        inputField.style.fontSize = newFontSize + 'px';
    });

    // Add event listener to decrease font size button
    fontDecreaseBtn.addEventListener('click', () => {
        const currentFontSize = parseInt(window.getComputedStyle(inputField).fontSize);
        const newFontSize = currentFontSize - 2;
        inputField.style.fontSize = new FontSize + 'px';
    });

    renderKeyboard();
});
