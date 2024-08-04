
function debounce(fn, delay) {
    let del;
    return function(args) {
        let interv = del != null ? delay - del: delay;
        clearTimeout(del);
        del = setTimeout(() => {
            res = fn.call(this, args);
        }, interv)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('inputField').addEventListener('input', debounce((e) => {
        document.getElementById('inputFieldButton').innerHTML = e.target.value
    }, 1000));
});