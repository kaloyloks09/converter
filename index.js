function convert() {
    const poundsInput = document.getElementById('pounds');
    const result = document.getElementById('result');

    const pounds = parseFloat(poundsInput.value);

    if (isNaN(pounds)) {
        result.textContent = 'Please enter a valid number.';
    } else {
        const kilograms = pounds * 0.45359237;
        result.textContent = `Kilograms: ${kilograms.toFixed(2)}`;
    }
}
