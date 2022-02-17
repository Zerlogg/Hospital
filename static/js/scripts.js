const POP_UP = document.getElementById('fields');
let gramatas = [];

window.addEventListener('load', () => {
    gramatas = JSON.parse(localStorage.getItem("gramatas") || "[]");
    console.log(gramatas)
    render();
});

document.getElementById('pievienot').addEventListener('click', () => {
    POP_UP.style.display = 'block';
})

document.getElementById('pievienotGramatu').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let gramata = {nosaukums2: nosaukums2.value, adrese2: adrese2.value};

    nosaukums2.value = "";
    adrese2.value = "";

    gramatas.push(gramata);

    render();
})

function render() {
    let biblioteka = document.getElementById('saraksts');
    biblioteka.innerHTML = "";

    for(let i = 0; i < gramatas.length; i++) {
        let gramata = `
        <div class="gramata">
            <h3>Virsraksts: ${gramatas[i].nosaukums2}</h3>
            <h4>Autors: ${gramatas[i].adrese2}</h4>
        </div>`;

        biblioteka.innerHTML += gramata;
    }

    localStorage.setItem("gramatas", JSON.stringify(gramatas))
}