const calendario = document.getElementById("calendario");
const apiCard = document.getElementById("apiCard");
const imagenApi = document.getElementById("imagenApi");
const tituloApi = document.getElementById("tituloApi");
const descripcionApi = document.getElementById("descripcionApi");

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

        // Si es imagen
        if (data.media_type === "image") {
            imagenApi.src = data.url;
            apiCard.classList.replace("d-none", "d-flex");
            
        } else {
            imagenApi.src = "";
            alert("Este día la NASA publicó un video, no una imagen");
        }

        // Título en la card
        tituloApi.textContent = data.title;

        // Descripción en la card
        descripcionApi.textContent = data.explanation;

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
