document.addEventListener('DOMContentLoaded', () => {
        let container = document.getElementById('container');
        let displayContainer = document.getElementById('display-container');
        let tabContainer = document.getElementsByClassName('tab-container');
        displayContainer.textContent = "One";
        displayContainer.style.padding = '20px';
        displayContainer.style.justifyContent = 'center';
        container.addEventListener('click', (event) => {
            let dataset = event.target.dataset.tab;
            for(let tab of tabContainer){
                for(let bab of tab.children){
                    bab.classList.remove('selected');
                }
            }
            if(dataset == 'one'){
                displayContainer.textContent = "One";
                event.target.classList.add('selected');
            }else if(dataset == 'two'){
                displayContainer.textContent = "Two";
                event.target.classList.add('selected');
            } else {
                displayContainer.textContent = "Three"
                event.target.classList.add('selected');
            }
        })
}) 