const taskContainer = document.querySelector(".card-ul");

let cardsContainer = [
    {
        Direccion: "cesar dias 3530",
        Dia: 33,
        Horario: "12hs",
        Electrodomestico: "lavarropas",
        Observaciones: "texto",
        id: "aca va un id"
    }
];

const render = () => {
    taskContainer.innerHTML = cardsContainer.map( (task) => {
        return `
            <div class= "card-container">
            <ul class= "clientDatos">
                <li>${task.Direccion}</li>
                <li>${task.Dia}</li>
                <li>${task.Horario}</li>
            </ul>
            <ul class= "clientElectro">
                <li>${task.Electrodomestico}</li>
            </ul>
            <div class= "obsContainer">
                ${task.Observaciones}  
                <i class="fa-regular fa-trash-can delete-btn" data-id= "${task.id}"></i>         
            </div>
           `
    })
}

const init = () => {
document.addEventListener("DOMContentLoaded", render)
};


init()