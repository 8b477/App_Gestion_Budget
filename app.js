//recup input value first part
const loyer = document.getElementById('loyer');
const credits = document.getElementById('credits');
const conso = document.getElementById('conso');
const gsm = document.getElementById('gsm');
const assurance = document.getElementById('assurance');
const assuranceV = document.getElementById('assuranceV');
const mutuelle = document.getElementById('mutuelle');
const garde = document.getElementById('garde');
const impot = document.getElementById('impot');
const impotLocal = document.getElementById('impotLocal');

//recup btn
const btnOne = document.getElementById('btnOne');

//recup span to display result
const totalEurOne = document.getElementById('totalEurOne');

//recup input value second part
const courses = document.getElementById('courses');
const sportCulture = document.getElementById('sportCulture');

//recup btn
const btnTwo = document.getElementById('btnTwo');

//recup span to display result
const totalEurTwo = document.getElementById('totalEurTwo');

//recup input value third part
const sorties = document.getElementById('sorties');

//recup btn
const btnThree = document.getElementById('btnThree');

//recup span to display result
const totalEurThree = document.getElementById('totalEurThree');

//recup input value fourth part
const extra = document.getElementById('extra');

//recup input value fifth  part
const salaire = document.getElementById('salaire');
const aide = document.getElementById('aide');
const rente = document.getElementById('rente');
const autres = document.getElementById('autres');

//recup btn
const btnEnd = document.getElementById('btnEnd');

//recup span to display result
const totalEurEnd = document.getElementById('totalEurEnd');

btnOne.addEventListener('click', function (){
    totalEurOne.innerHTML = parseInt(loyer.value) + parseInt(credits.value) + parseInt(conso.value) + parseInt(gsm.value)
        + parseInt(assurance.value) + parseInt(assuranceV.value) + parseInt(mutuelle.value) + parseInt(garde.value)
        + parseInt(impot.value) + parseInt(impotLocal.value);
})

btnTwo.addEventListener('click',function (){
    totalEurTwo.innerHTML = parseInt(courses.value) + parseInt(sportCulture.value);
})


btnThree.addEventListener('click', function (){
    totalEurThree.innerHTML = parseInt(extra.value);
})

btnEnd.addEventListener('click', function (){
    totalEurEnd.innerHTML = parseInt(salaire.value) + parseInt(aide.value) + parseInt(rente.value) +
        parseInt(autres.value) - parseInt(loyer.value) + parseInt(credits.value) + parseInt(conso.value) + parseInt(gsm.value)
        + parseInt(assurance.value) + parseInt(assuranceV.value) + parseInt(mutuelle.value) + parseInt(garde.value)
       + parseInt(impot.value) + parseInt(impotLocal.value)
})


// function addition(...elements){
//     for (let element of elements){
//         totalEurOne.innerHTML = parseInt(element.value) + parseInt(element.value);
//     }
// }

