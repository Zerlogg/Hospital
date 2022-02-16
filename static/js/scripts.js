let ieraksti = [];

window.addEventListener('load', () => {
    ieraksti = JSON.parse(localStorage.getItem("ieraksti") || "[]");
    console.log(ieraksti)
    render();
});

const ieraksts = document.querySelector('#saraksts')

ieraksts.addEventListener('click', (e) => {
    if(e.target.className == 'dzest'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
      ieraksti.splice(li, 1);
      localStorage.setItem('ieraksti',JSON.stringify(ieraksti));
    }
});

    let slimnicas = {nosaukums2: nosaukums2.value, daudzums: daudzums.value};

    nosaukums2.value = "";
    daudzums.value = "";

    ieraksti.push(slimnicas);

    render();

 function render() {
    let saraksts = document.getElementById('saraksts');
    saraksts.innerHTML = "";

    for(let i = 0; i < ieraksti.length; i++) {
        let slimnicas = `
        <div class="slimnicas">
            <h3>Prece: ${ieraksti[i].precesNosaukums}</h3>
            <h4>Daudzums: ${ieraksti[i].daudzums}</h4>
            <button class="dzest">Dzēst</button>
        </div>`;

        saraksts.innerHTML += slimnicas;
    };

    localStorage.setItem("ieraksti", JSON.stringify(ieraksti))

};