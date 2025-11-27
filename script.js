
















//API NASA Image and Video Library

async function videoNasa() {

    const response = await  fetch("https://images-api.nasa.gov/captions/jsc2025m000033_Chris Williams Astronaut Moments_AVAIL");
    console.log(response);
    const data = await response.json();

    console.log(data);
    
    
}

videoNasa();