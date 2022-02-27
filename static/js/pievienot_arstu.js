const POP_UP = document.getElementById("popUp2");
let input2 = [];

window.addEventListener('load', () => {
    input2 = JSON.parse(localStorage.getItem("input2") || "[]");
    console.log(input2)
    render();
});

document.getElementById("jaunaPoga2").addEventListener("click", () => {
    POP_UP.style.display = "block";
})

document.getElementById("pievienot2").addEventListener("click", () => {
    POP_UP.style.display = "block";

    let loads2 = {vards_uzvards_ievade: vards_uzvards_ievade.value, darba_laiks_ievade: darba_laiks_ievade.value, darbibas_joma_ievade: darbibas_joma_ievade.value, slimnica_ievade: slimnica_ievade.value};

    vards_uzvards_ievade.value = "";
    darba_laiks_ievade.value = "";
    darbibas_joma_ievade.value = "";
    slimnica_ievade.value = "";

    input2.push(loads2);

    render();
})

function render() {
    let info2 = document.getElementById("info2");
    info2.innerHTML = "";

    for(let i = 0; i < input2.length; i++){
        let loads2 = `
        <div class="loads2">
            <h3>Vārds, uzvārds: ${input2[i].vards_uzvards_ievade}</h3>
            <h3>Darba laiks: ${input2[i].darba_laiks_ievade}</h3>
            <h3>Darbības joma: ${input2[i].darbibas_joma_ievade}</h3>
            <h3>Slimnīca: ${input2[i].slimnica_ievade}</h3>
            <button id="dzest2" onclick='dzest2("${input2[i].vards_uzvards_ievade}")'>Dzēst</button>
        </div>`;
        
        info2.innerHTML += loads2;
    }

    localStorage.setItem("input2", JSON.stringify(input2))
}

function dzest2(loads2){
    for(let i = 0; i < input2.length; i++) {
        if(loads2 === input2[i].vards_uzvards_ievade){
            delete input2[i];
            break;
        }
    }

    input2 = input2.filter(function (e) {return e != null;});

    localStorage.setItem("input2", JSON.stringify(input2))
    render();
}