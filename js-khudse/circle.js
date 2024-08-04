function createCircle(container) {
    return new Promise(function (resolve) {
        let circle = document.createElement('div');
        circle.style.marginTop = '10px';
        let radius = 100;
        circle.style.width = '0px';
        circle.style.height = '0px';
        circle.style.backgroundColor = 'red';
        circle.style.borderRadius = '50%';
        circle.style.transitionProperty = 'width, height';
        circle.style.transitionDuration = '2s';
        setTimeout(() => {
            circle.style.width = radius * 2 + 'px';
            circle.style.height = radius * 2 + 'px';
            circle.style.backgroundColor = 'red';
            circle.addEventListener('transitionend', function handler() {
                circle.removeEventListener('transitionend', handler);
                resolve(circle);
            });
        }, 0);
        container.appendChild(circle);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    let button = document.createElement('button');
    let container = document.getElementById('circle_container');
    button.innerText = "showCircle(150, 150, 100)"
    container.appendChild(button);
    button.addEventListener('click', () => {
        createCircle(container).then((res) => {
            res.innerText = "Hello World!";
            res.style.textAlign = 'center';
            res.style.lineHeight = '200px';
        }
        );
    })
})