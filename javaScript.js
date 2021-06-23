let botonUsers=document.querySelector('#botonUsers');
let  divUsers=document.querySelector('#divUsers');


botonUsers.addEventListener('click', () => {
    let getUsers=fetch('https://jsonplaceholder.typicode.com/users');

    getUsers
           .then(resp => resp.json())
           .then(data => {
               data.forEach(user => {
                   let parr = document.createElement('p');
                   parr.textContent= user.name;
                   divUsers.appendChild(parr);
               });
           }).catch(e => console.log(e));
})


/*
botonUsers.addEventListener('click',displayData);

async function  displayData(){
    let getUsers=await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(getUsers.ok);


    let data =await getUsers.json();
    data.forEach(user => {
        let parr=document.createElement('p');
        parr.textContent=user.name;
        divUsers.appendChild(parr);
        
    });
    console.log(data);
}*/