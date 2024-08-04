let valueSearch = document.getElementById("search");
let valueDisplay = document.getElementById("display");

valueSearch.addEventListener("input", debounce((e) => {
    console.log(e.target?.value);
    valueDisplay.textContent = e.target?.value
}, 1000));

function debounce(cb, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}
