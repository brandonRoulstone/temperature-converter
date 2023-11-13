let Cels = document.querySelector('[data-cels]')
let Fars = document.querySelector('[data-far]')

function CelsToFars(){
    let result = (parseFloat(Cels.value) * 9/5) + 32;
    Fars.value = parseFloat(result.toFixed(2))
}
function FarsToCels(){
    let result = (parseFloat(Fars.value) -32) * 5/9;
    Cels.value = parseFloat(result.toFixed(2))
}

Cels.addEventListener("input", CelsToFars);

Fars.addEventListener("input", FarsToCels);