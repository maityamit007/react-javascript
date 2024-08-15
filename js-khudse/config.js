let buttonList = [
    {
        color: 'red', width: '33%'
    },
    {
        color: 'brown', width: '33%'
    },
    {
        color: 'orange', width: '33%'
    },
    {
        color: 'black', width: '33%'
    },
    {
        color: 'pink', width: '33%'
    },
    {
        color: 'blue', width: '33%'
    },
    {
        color: 'yellow', width: '33%'
    }
]

document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('container');
    function createButtons() {
        buttonList.map((ele, ixx) => {
            let button = document.createElement('button');
            button.style.backgroundColor = ele.color;
            button.id = ele.color + '_' + (ixx+1);
            button.style.width = ele.width;
            button.style.padding = '60px';
            button.style.margin = '5px';
            container.append(button);
        })
    }
    createButtons();

    container.addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON') {
            alert(`color: ` + e.target.id.split('_')[0] + ',' + 'box: box' + e.target.id.split('_')[1])
        }
    })
})