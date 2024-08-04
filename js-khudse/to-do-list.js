document.addEventListener('DOMContentLoaded', (event) => {
    let input = document.querySelector('input');
    let button = document.querySelector('button');
    let container = document.getElementById('container');
    let editItem = null;
    button.addEventListener('click', (event) => {
        if(event.target.innerText == "Add"){
            let item = document.createElement('div');
            item.classList.add('item');
            let para = document.createElement('p');
            let bt = document.createElement('button');
            let editBt = document.createElement('button');
            para.textContent = input.value;
            bt.textContent = "Delete";
            editBt.innerText = 'Edit';
            bt.classList.add('delete_button');
            editBt.classList.add('edit_button');
            item.append(para);
            item.append(editBt);
            item.append(bt);
            container.append(item);
            input.value = '';
        }
        if(event.target.innerText == "Edit"){

        }
    });

    container.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains('delete_button')) {
            container.removeChild(event.target.parentElement);
        }
        if (event.target && event.target.classList.contains('edit_button')) {
            button.innerText = 'Edit';
            input.focus();
            let parentTag = event.target.parentElement.firstChild;
            input.value = parentTag.innerText;
            editItem = event.target.parentElement.firstChild;
        }
        if(event.target.innerText == "Edit"){
            event.target.innerText = "Add";
            editItem.innerText = input.value;
        }
    })
})