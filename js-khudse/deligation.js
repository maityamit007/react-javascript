document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('info');
    let container2 = document.getElementById('info2');
    let container3 = document.getElementById('info3');
    for (let li of container2.querySelectorAll('li')) {
        let span = document.createElement('span');
        li.prepend(span);
        span.append(span.nextSibling);
    }
    container.addEventListener('click', (event) => {
        if (event.target.className == 'cross') {
            let crossContianer = event.target.closest('.article');
            crossContianer.remove();
        }
    })

    container2.addEventListener(('click'), (event) => {
        if (event.target.tagName != "SPAN") {
            return;
        }

        let parentNode = event.target.parentNode.querySelector('ul');
        parentNode.hidden = !parentNode.hidden;
    })
    function callBackforSorting (){
        return function (a, b ){
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }
    }
    container3.addEventListener(('click'), (event) => {
        let type = event.target.dataset.type;
        if (event.target.tagName !== "TH") return;
        if (type == "string") {
            let arr = container3.querySelectorAll('td:nth-child(2)');
            let tableDataStr =Array.from(arr,ele => ele.textContent).sort(callBackforSorting());
            arr.forEach((td, index) => {
                if (index < tableDataStr.length) {
                    td.textContent = tableDataStr[index];
                }
            });
        } else {
            let arr = container3.querySelectorAll('td:nth-child(1)');
            let tableDataNum = Array.from(arr, ele => Number(ele.textContent)).sort((a,b) => a-b);
            arr.forEach((td, index) => {
                if (index < tableDataNum.length) {
                    td.textContent = tableDataNum[index];
                }
            });
        }
    })
})