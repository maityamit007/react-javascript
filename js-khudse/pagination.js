async function loadApiData() {
    return await fetch(`https://dummyjson.com/products?limit=100`).then((resp) => resp.json());
}

async function prepareTable(container, page) {
    let resp = await loadApiData();
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
    container.append(table);
    prepareButons(container);
}

function handlePageClick(page) {
    let container = document.getElementById('container');
    container.innerHTML = ''
    prepareTable(container, page);
}

function prepareButons (container) {
    let paginationButtons = document.createElement('pagination-buttons');

    paginationButtons.innerHTML = `<div class="button-container">
    ${Array.from({ length: 10 }, (_, i) => i + 1).map((ele) =>
        `
    <button class="pagination-button" onClick={handlePageClick(${ele})}>${ele}</button>
    `
    ).join('')
        }
    </div>`
    container.append(paginationButtons);
}

document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('container');
    prepareTable(container, 1);
})

