const taskContainer = document.querySelector(".card-ul");
const addBtn = document.querySelector(".container-form");
/* FORM DATA */
const direction = document.querySelector("#input-dir");
const day = document.querySelector("#select-day");
const time = document.querySelector("#select-time");
const electrodom = document.querySelector("#select-electro");
const obs = document.querySelector("#observations");

let cardsContainer = [];

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
        }).join("")
    };

    const clickAddTask= (e) => {
        e.preventDefault();
        const dir_form = direction.value;
        const day_form = day.value;
        const time_form = time.value;
        const electro_form = electrodom.value;
        const obs_form = obs.value;
        cardsContainer = [
            ...cardsContainer,{
                Direccion: dir_form,
                Dia: day_form,
                Horario: time_form,
                Electrodomestico: electro_form,
                Observaciones: obs_form,
                id: "aca va un id"
            }
        ];
        render();
        console.dir(cardsContainer);
    }
    
    const init = () => {
        document.addEventListener("DOMContentLoaded", render);
        addBtn.addEventListener( "submit", clickAddTask)
    };
    
    init()

