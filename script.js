function buscarImg() {
    const fechaInput = document.getElementById("fechaInput");
    let fecha = fechaInput.value;

    if (fecha === "") {
        alert("Por favor selecciona una fecha");
        return;
    }

    const apiKey = 'T6CAk2ihXSby9Qo8rxkd4m4O66fZXQ1EZBXPjiwi';
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${fecha}`;

    document.getElementById("resultados").innerHTML = "

    fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error('algo salio mal, no se pudo cargar la imagen');
            }
            return respuesta.json();
        })
        .then(function (datos) {
            mostrarImg(datos);
        })
        .catch(function (error) {
            alert("Error: " + error.message);
            document.getElementById("resultados").innerHTML = "";
        });
}

function buscarHoy() {
    const apiKey = 'T6CAk2ihXSby9Qo8rxkd4m4O66fZXQ1EZBXPjiwi';
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    document.getElementById("resultados").innerHTML = "
    fetch(url)
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error('algo salio mal, no se pudo cargar');
            }
            return respuesta.json();
        })
        .then(function (datos) {
            mostrarImg(datos);
            document.getElementById("fechaInput").value = datos.date;
        })
        .catch(function (error) {
            alert("Error: " + error.message);
            document.getElementById("resultados").innerHTML = "";
        });
}

function mostrarImg(datos) {
    let contenidoHTML = `
                <h2>${datos.title}</h2>
                <p><strong>Fecha:</strong> ${datos.date}</p>
            `;

    if (datos.media_type === "image") {
        contenidoHTML += `<img src="${datos.url}" alt="${datos.title}">`;
    } else {
        document.getElementById("resultados").innerHTML = `
            <p>No hay una imagen disponible para este dia intenta otra fecha</p>
            }
                `;
    }
    document.getElementById("resultados").innerHTML = contenidoHTML;
}

document.getElementById("fechaInput").max = new Date().toISOString().split("T")[0];

