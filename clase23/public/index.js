const formulario = document.querySelector('.form');
const inputName = document.querySelector('#name');
const inputApellido = document.querySelector('#lastname');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputSubmit = document.querySelector('#submit');
const inputEdad = document.querySelector('#edad')



formulario.addEventListener('submit', (Event)=>{
    const usuario = document.createElement('div')
    usuario.classList.add()
    usuario.innerHTML=
    `<h2>${nombre} ${apellido}<h2/>
    <span>${email} 
    <span/>`
    Event.preventDefault();
    const nombre = inputName.value;
    const apellido = inputApellido.value;
    const email = inputEmail.value;
    const password = inputPassword.value;
    const edad = inputEdad.value;
    alert(`nombre: ${nombre.toLowerCase()}
    Apellido: ${ apellido. toUpperCase()} 
    Email: ${email}
    password: ${password}
    Edad: ${edad > 18 ? "mayor" : "menor"} `)
              
});