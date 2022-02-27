const POP_UP = document.getElementById("popUp");
let input = [];

window.addEventListener('load', () => {
    input = JSON.parse(localStorage.getItem("input") || "[]");
    console.log(input)
    render();
});

document.getElementById("jaunaPoga").addEventListener("click", () => {
    POP_UP.style.display = "block";
})

document.getElementById("pievienot").addEventListener("click", () => {
    POP_UP.style.display = "block";

    let loads = {nosaukums2: nosaukums2.value, adrese2: adrese2.value};

    nosaukums2.value = "";
    adrese2.value = "";

    input.push(loads);

    render();
})

function render() {
    let info = document.getElementById("info");
    info.innerHTML = "";

    for(let i = 0; i < input.length; i++){
        let loads = `
        <div class="loads">
            <h3>Nosaukums: ${input[i].nosaukums2}</h3>
            <h3>Adrese: ${input[i].adrese2}</h3>
            <button id="dzest" onclick='dzest("${input[i].nosaukums2}")'>Dzēst</button>
        </div>`;
        
        info.innerHTML += loads;
    }

    localStorage.setItem("input", JSON.stringify(input))
}

function dzest(loads){
    for(let i = 0; i < input.length; i++) {
        if(loads === input[i].nosaukums2){
            delete input[i];
            break;
        }
    }

    input = input.filter(function (e) {return e != null;});

    localStorage.setItem("input", JSON.stringify(input))
    render();
}