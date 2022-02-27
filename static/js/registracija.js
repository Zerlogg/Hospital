StorageUser = window.localStorage;

let user_data = [];

const atc = document.getElementById('atcelt');
const reg = document.getElementById('registration');

window.addEventListener('load', () => {
    user_data = JSON.parse(localStorage.getItem("user_data") || "[]");
    console.log(user_data)
    render();
});

document.getElementById('registration').addEventListener('click', () => {

    atc.style.display = 'none';
    reg.style.display = 'none';

    let vards = document.getElementById("regKont").innerHTML = ` 
    <input id="ievadietLietotajvardu" type="text"  maxlength="30" placeholder="Vārds un uzvārds" required>
    <input id="ievadietParoli" type="password" maxlength="30" placeholder="Parole" required>
    <input id="atkartojietParoli" type="password" maxlength="30" placeholder="Apstipriniet paroli" required>
    <button id="registreties" onclick="registracija()">Reģistrēties</button>
    <a href="/index2.html"><button id="atpakal">Atpakaļ</button></a>`;

})

function registracija(){
    let data = {ievadietLietotajvardu: ievadietLietotajvardu.value, ievadietParoli: ievadietParoli.value};

    if(ievadietParoli.value === atkartojietParoli.value && ievadietParoli.value != ""){
        user_data.push(data);

        render();

        window.location = "/index2.html";
    }

    ievadietLietotajvardu.value = "";
    ievadietParoli.value = "";
    atkartojietParoli.value = "";



}

function render() {

    localStorage.setItem("user_data", JSON.stringify(user_data))
}