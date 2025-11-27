const calendario = document.getElementById("calendario");
const imagenApi = document.getElementById("imagenApi");
const resultados = document.getElementById("resultados");

const API_KEY = "T6CAk2ihXSby9Qo8rxkd4m4O66fZXQ1EZBXPjiwi";

for (let i = 1; i <= 30; i++) {
    const dia = document.createElement("div");
    dia.classList.add("day");
    dia.textContent = i;

    dia.addEventListener("click", () => {
        const fecha = `2024-01-${String(i).padStart(2, "0")}`;
        cargarImagenNASA(fecha);
    });

    calendario.appendChild(dia);
}

async function cargarImagenNASA(fecha) {
    try {
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${fecha}`
        );

        const data = await response.json();

        imagenApi.src = data.url;

        resultados.innerHTML = `
            <h3>${data.title}</h3>
            <img src="${data.url}" class="img-fluid mt-2">
            <p class="mt-2">${data.explanation}</p>
        `;
    } catch (error) {
        console.log(error);
    }
}

window.buscarImg = function () {
    const fecha = document.getElementById("fechaInput").value;
    if (!fecha) {
        alert("Selecciona una fecha primero");
        return;
    }
    cargarImagenNASA(fecha);
};

window.buscarHoy = function () {
    const hoy = new Date().toISOString().split("T")[0];
    cargarImagenNASA(hoy);
};

















//API NASA Image and Video Library

async function videoNasa() {

    const response = await  fetch("https://images-api.nasa.gov/captions/jsc2025m000033_Chris Williams Astronaut Moments_AVAIL");
    //console.log(response);
    const data = await response.json();

    console.log(data);    
    
    
}

videoNasa();
