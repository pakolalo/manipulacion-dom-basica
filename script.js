//const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('.parrafito');
//const pid = document.getElementById('pid');
//const input = document.querySelector('input');

//console.log(input.value);

//console.log({
   // h1,
   // p,
   // parrafito,
    //pid,
    //input
//});

//h1.innerHTML = 'patito <br> es feo';//inserta todo html
//h1.innerText = 'patito <br> es feo';//inserta texto
//console.log(h1.getAttribute('class')); 
//h1.setAttribute('class' , 'rojo');

//h1.classList.add('rojo');//agrega clase a la etiqueta
//h1.classList.remove('verde'); //remueve la clase a la etiqueta

//input.value = "456"

//const img = document.createElement('img');
//img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
//console.log(img);

//pid.append(img);//append agregar el elemento sin quitar el otro

const h1 =document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

//btn.addEventListener('click', btnOnClick);

//function btnOnClick () {
    //const sumaInputs = input1.value + input2.value;
    //pResult.innerText = "Resultado: " + sumaInputs;
//}

form.addEventListener('submit', sumarInputValues);

function sumarInputValues (event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}