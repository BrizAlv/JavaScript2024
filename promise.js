//Estados de una promesa: pending(pendiente), fullfield(resuelto: bien o mal), rejected (no resuelto: cualquier rezon),
//callbacks de una promesaresolve(resuelto: satisfactoriamente), reject(no se puede resolver) 

//metodos de una promesa
//then() se ejecuta cuando la promesa se resuelve satisfactoriamente, fullfilled y resolve
//catch(error) se ejecuta cuando la promesa no se resuelve, rejected y reject
/*1. **Callbacks**: Funciones que se llaman cuando una tarea termina.

2. **Promesas**: Un recibo de que algo va a llegar, pero no puedes usarlo hasta que llega.

3. **Async/Await**: Una forma fácil de esperar a que las promesas se resuelvan.

4. **Error Handling**: Manejar lo que pasa cuando las cosas no salen como esperabas.*/

/*Ejemplos*/ 

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let operationSuccessful = true;
    
//     if(operationSuccessful){
//         resolve('Operation was successful');
//     }else{
//         reject('Operation failed');
//     }
//     }, 2000);
// })

// promise
// .then((message) => {        
//     console.log(message);
// })
// .catch((error) =>{
//     console.log(error);
// })

// async and await, devuelve una promesa
// function fetchData(){
//     fetch("https://rickandmortyapi.com/api/character")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error('Error:', error));
// }
async function fetchData(){
    try {
        let response =await fetch ("https://rickandmortyapi.com/api/character")
        let data = await response.json();
        console.log(data);
    }catch (error){
        console.error('Error:', error);
    }
}

// for await of
const urls =[
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode"
];
async function fetchNewData(){
    try {
        for await (let url of urls){
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    }catch (error){
        console.error('Error:', error);
    }
}