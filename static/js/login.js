StorageUser = window.localStorage;

let user_data = [];

const login = document.getElementById('login');

const reg = document.getElementById('registration');

window.addEventListener('load', () => {
    user_data = JSON.parse(localStorage.getItem("user_data") || "[]");
    console.log(user_data)
    render();
});

document.getElementById('registration').addEventListener('click', () => {

    login.style.display = 'none';
    reg.style.display = 'none';

    let vards = document.getElementById("logKont").innerHTML = ` 
    <input id="ievadietLietotajvardu" type="text"  maxlength="15" placeholder="Vārds Uzvārds" required>
    <input id="ievadietParoli" type="password" maxlength="15" placeholder="Parole" required>
    <input id="atkartojietParoli" type="password" maxlength="15" placeholder="Apstipriniet paroli" required>
    <button id="registreties" onclick="registracija()">Reģistrācija</button>
    <a href="/"><button id="atpakal" style = "top: 270px;">Atpakaļ</button></a>`;

})

document.getElementById('login').addEventListener('click', () => {

    login.style.display = 'none';
    reg.style.display = 'none';

    let vards = document.getElementById("logKont").innerHTML = `      
    <input id="ievadietLietotajvardu" type="text"  maxlength="15" placeholder="Vārds Uzvārds" required>
    <input id="ievadietParoli" type="password" maxlength="15" placeholder="Parole" required>
    <button id="Login" onclick="Login()">Login</button>
    <a href="/"><button id="atpakal" style = "top: 290px;">Atpakaļ</button></a>`;

})

function Login(){
    
    for(let i = 0; i < user_data.length; i++) {
        login_name = document.getElementById('ievadietLietotajvardu').value;

        login_pass = document.getElementById('ievadietParoli').value;

        console.log(login_name)
        console.log(login_pass)
        

        if(login_name === user_data[i].ievadietLietotajvardu && login_pass == user_data[i].ievadietParoli){

            window.location = "/index.html";
            let current_user_name = localStorage.setItem("Current User Name", login_name)
        }

        if(login_name === "admin" && login_pass == "admin"){

            window.location = "/administratora_lapa.html";
        }


    }

    ievadietLietotajvardu.value = "";
    ievadietParoli.value = "";

}

function registracija(){
    let data = {ievadietLietotajvardu: ievadietLietotajvardu.value, ievadietParoli: ievadietParoli.value};

    if(ievadietParoli.value === atkartojietParoli.value && ievadietParoli.value != ""){
        user_data.push(data);

        render();

        window.location = "/";
    }

    ievadietLietotajvardu.value = "";
    ievadietParoli.value = "";
    atkartojietParoli.value = "";



}

function render() {

    localStorage.setItem("user_data", JSON.stringify(user_data))
}