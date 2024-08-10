let resp = [];
let limit = 100;
let selected = '';

async function loadApiData() {
    return await fetch(`https://dummyjson.com/products?limit=${limit}`).then((resp) => resp.json());
}

function prepareTable(container, page) {
    let table = document.createElement('table');
    table.innerHTML = !([undefined, null, ''].includes(resp)) ?
        `<table>
        <thead>
        <tr>
            <th>Image</th>
            <th>Description</th>
        </tr>
       </thead>
        <tbody>
        ${resp.products.slice(page * 10 - 10, page * 10).map((ele) =>
            `<tr>
                <td><image src="${ele.thumbnail}" width="30" height= "30" /></td>
                <td>${ele.description}</td>
            </tr>`
        ).join('')}
        </tbody></table>` : `<h2>Loading...</h2>`
    container.prepend(table);
}

function handlePageClick(page) {
    let table = document.querySelector('table');
    let buttonList = document.querySelectorAll('button');
    for(let btn of buttonList){
        if(btn.id == page){
            btn.classList.add('selected');
        }else{
            btn.classList.remove('selected');
        }
    }
    table.innerHTML = '';
    selected = page;
    prepareTable(container, page);
}

function prepareButons(container) {
    let paginationButtons = document.createElement('pagination-buttons');

    paginationButtons.innerHTML = `<div class="button-container">
    ${Array.from({ length: limit / 10 }, (_, i) => i + 1).map((ele) =>
        `
    <button id=${ele} class="pagination-button ${selected == ele ? 'selected' : ''}" onClick={handlePageClick(${ele})}>${ele}</button>
    `
    ).join('')
        }
    </div>`
    container.append(paginationButtons);
}

document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('container');
    loadApiData().then((el) => {
        resp = el;
        prepareTable(container, 1);
        prepareButons(container);
    });
})

