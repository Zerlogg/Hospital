const POP_UP = document.getElementById('popUp');
let darbi = []

window.addEventListener('load', () => {
    darbi = JSON.parse(localStorage.getItem("darbi") || "[]");
    render();
});

document.getElementById('pievienot').addEventListener('click', () => {
    POP_UP.style.display = 'block'

})

document.getElementById('adrese').addEventListener('click', () => {
    POP_UP.style.display = 'none'

    let uzdevumi = {uzdevums: uzdevums.value, termins: termins.value};

    uzdevums.value = "";
    termins.value = "";

    darbi.push(uzdevumi);

    render();
})

function render() {
    let biblioteka = document.getElementById('biblioteka');
    biblioteka.innerHTML = ""

    for(let i = 0; i < darbi.length; i++){
        let uzdevumi = ` 
        <div class='uzdevumi'>
            <h3>Uzdevums: ${darbi[i].uzdevums}</h3>
            <h4>Termiņš: ${darbi[i].termins}</h4>
            <button id="dzēst">Dzēst</button>
        </div>`
        biblioteka.innerHTML += uzdevumi;
    }


    localStorage.setItem("darbi", JSON.stringify(darbi))
}