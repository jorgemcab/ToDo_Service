const taskContainer = document.querySelector(".card-ul");
const addBtn = document.querySelector(".container-form");
/* FORM DATA */
const direction = document.querySelector("#input-dir");
const day = document.querySelector("#select-day");
const time = document.querySelector("#select-time");
const electrodom = document.querySelector("#select-electro");
const obs = document.querySelector("#observations");
/* BUTTOM DELETE */
const deleteBtn = document.querySelector(".delete-btn")

let cardsContainer = JSON.parse(localStorage.getItem("agenda")) || [];

const saveLocarStorage = () => {
    localStorage.setItem("agenda", JSON.stringify(cardsContainer))
};

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
            <i class="fa-regular fa-trash-can delete-btn" data-id= ${task.id}></i>         
            </ul>
            <span class= "card-observation">${task.Observaciones}</span>  
            </div>

            `
        }).join(" ");
    };
    const upDateUi = () => {
        saveLocarStorage();
        render();
        addBtn.reset();

    }

    function clickAddTask(e) {
    e.preventDefault();

    if( !direction.value.length){
        alert("Ingresar la direccion");
        return
    } else if( day.value == 'vacio'){
        alert("Ingresar el dia");
        return
    } else if( time.value == 'vacio'){
        alert("Ingresar el horario");
        return
    } else if( electrodom.value == 'vacio'){
        alert("Ingresar el electrodomestico");
        return
    } else {
 
        cardsContainer = [
            ...cardsContainer, {
                Direccion: direction.value,
                Dia: day.value,
                Horario: time.value,
                Electrodomestico: electrodom.value,
                Observaciones: obs.value,
                id: Date.now()
            }
        ];
    };

    upDateUi();

    console.dir(cardsContainer)
}
const deleteItem = (e) => {
    if(!e.target.classList.contains("delete-btn")){
        return
    } else {
        const filterId = Number(e.target.dataset.id);
        cardsContainer = cardsContainer.filter((task) => {
            return task.id !== filterId;
        });
        upDateUi();
    }
}
    
    const init = () => {
        document.addEventListener("DOMContentLoaded", render);
        addBtn.addEventListener( "submit", clickAddTask);
        taskContainer.addEventListener("click", deleteItem)
    };
    
    init()

