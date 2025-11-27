const calendario = document.getElementById("calendario");
const imagenApi = document.getElementById("imagenApi");

for (let i = 1; i <= 30; i++) {
    const dia = document.createElement("div");
    dia.classList.add("day");
    dia.textContent = i;

    dia.addEventListener("click", () => {
        fetch(`https://picsum.photos/600?random=${i}`)
            .then(response => {
                imagenApi.src = response.url;})
            .catch(error => console.log(error));
    });

    calendario.appendChild(dia);
}
