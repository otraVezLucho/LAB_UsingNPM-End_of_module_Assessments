const calendario = document.getElementById("calendario");

for (let i = 1; i <= 30; i++){
    const dia = document.createElement("div");
    dia.classList.add("day");
    dia.textContent = i;
    calendario.appendChild(dia)
} 