const countValue = document.querySelector('#counter');

const increment = () => {
    let value = parseInt(countValue.textContent)
    value += 1;
    countValue.textContent = value;
}

const decrement = () => {
    let value = parseInt(countValue.textContent);
    value -= 1;
    countValue.textContent = value;   
}