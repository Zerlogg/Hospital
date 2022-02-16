const POP_Up = document.getElementById('popUp');
let ieraksti = [];

window.addEventListener('load', () => {
    ieraksti = JSON.parse(localStorage.getItem("ieraksti") || "[]");
    console.log(ieraksti)
    render();
});

const ieraksts = document.querySelector('#saraksts')

ieraksts.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      ieraksti.splice(li, 1);
      localStorage.setItem('ieraksti',JSON.stringify(ieraksti));
    }
});

document.getElementById('jaunsPirkums').addEventListener('click', () => {
    POP_Up.style.display = 'block';
});

document.getElementById('pievienot').addEventListener('click', () => {
    POP_Up.style.display = 'none';

    let pirkums = {nosaukums2: nosaukums2.value, adrese2: adrese2.value};

    nosaukums2.value = "";
    adrese2.value = "";

    ieraksti.push(pirkums);

    render();
 });

 function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < ieraksti.length; i++) {
        let pirkums = `
        <div class="pirkums">
            <p>Prece: ${ieraksti[i].nosaukums2}</p>
            <p>Daudzums: ${ieraksti[i].adrese2}</p>
            <button class="delete">Dzēst</button>
        </div> `

        saraksts.innerHTML += pirkums;
    };

    localStorage.setItem("ieraksti", JSON.stringify(ieraksti))

};