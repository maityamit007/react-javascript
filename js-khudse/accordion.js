let arrObj = [
    {
        id: 1,
        title: 'Accordion One',
        content: 'Lalitpur is also known as Manigal. It is best known for its rich cultural heritage, particularly its tradition of arts and crafts. It has a multi-ethnic population with a Hindu and Buddhist majority. Religious and cultural festivities form a major part of the lives of people residing in Kathmandu. Tourism is an important part of the city',
        active: true
    },
    {
        id: 2,
        title: 'Accordion Two',
        content: 'Its economy and it is renowned for its festivals and feasts, ancient art, and the making of metallic, wood and stone statues',
        active: false
    },
    {
        id: 3,
        title: 'Accordion Three',
        content: 'One of the most used and typical Newar names of Lalitpur is Yala. It is said that King Yalamber or Yellung Hang named this city after himself, and ever since this ancient city was known as Yala.',
        active: false
    }
]


document.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById('container');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems ='center';
    container.style.gap = '12px';

    function renderAccordion(){
        container.innerHTML = '';
        arrObj.forEach((ele) => {
            let accordionContainer = document.createElement('div');
            let topContainer = document.createElement('div');
            accordionContainer.classList.add('accordion_container');
            accordionContainer.style.padding = '20px';
            let title = document.createElement('div');
            let button = document.createElement('button');
            let content = document.createElement('span');
            title.innerHTML = `${ele.title}`;
            title.style.flex = 1;
            title.style.fontWeight = 'bold';
            title.style.display = 'flex';
            title.style.flexDirection = 'column';
            title.style.gap = '12px';
            button.innerText = !ele?.active ? `➕` : `➖`;
            button.style.cursor = 'pointer';
            button.id = ele.id;
            button.style.outline = 'none';
            button.style.background = 'none';
            button.style.border = 'none';
            content.textContent = ele.content;
            content.hidden = !ele?.active ? true : false;
            content.style.fontWeight = 100;
            content.style.maxWidth = '100vh';
            topContainer.style.display ='flex';
            topContainer.style.width = '100%';
            topContainer.prepend(button);
            topContainer.prepend(title);
            title.appendChild(content);
            accordionContainer.prepend(topContainer);
            container.appendChild(accordionContainer);
        })
    }

    renderAccordion();

    container.addEventListener('click', (event) => {
        if (event.target.tagName  == "BUTTON"){
            arrObj.forEach((ele) => {
                if(ele['id'] ==  event.target.id){
                    ele['active'] = !ele['active'];
                }else{
                    ele['active'] = false;
                }
            });
            renderAccordion();
        }
    })
})