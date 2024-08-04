function playerOne(){
    return new Promise(function (resolve, reject){
        setTimeout(()=>{
            resolve('Player One Made it');
        }, 1000)
    })
}

function playerTwo(){
    return new Promise(function (resolve, reject){
        setTimeout(()=>{
            resolve('Player Two Made it');
        }, 1000)
    })
}

function playerThree(){
    return new Promise(function (resolve, reject){
        setTimeout(()=>{
            resolve('Player Three make it');
        }, 1000)
    })
}

Promise.all([playerOne(), playerTwo(), playerThree()]).then((resp) => {
    console.log(resp);
});

Promise.race([playerOne(), playerTwo(), playerThree()]).then((resp) => {
    console.log(resp);
});

Promise.allSettled([playerOne(), playerTwo(), playerThree()]).then((resp) => {
    console.log(resp);
});


let resp = fetch('https://api.github.com/users/iliakan').then(response => {
    if (response.status == 200) {
        console.log(response);
        return response.json();
    } else {
        throw new Error(response.status);
    }
});

resp.then((result) => console.log(result));


fetch('https://api.github.com/users/iliakan').then(response => {
    if (response.status == 200) {
        console.log(response);
        return response.json();
    } else {
        throw new Error(response.status);
    }
}).then((resp)=>{
    console.log(resp);
})


async function  loadApi (url) {
    let resp = await fetch(url).then((resp) => resp.json());
    console.log(resp)
}

loadApi('https://api.github.com/users/iliakan');