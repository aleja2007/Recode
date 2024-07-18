const formulario = document.querySelector('.aggUsuario');


const agregaLocalStorage = (usuario) => {
    try {
        if (!localStorage.getItem('usuario')) {
            localStorage.setItem('usuario', JSON.stringify([usuario]));
            return;
        }
        const usuarios = obtenerLocalStorage();
        usuarios.push(usuario);
        localStorage.setItem('usuario', JSON.stringify(usuarios));
    } catch (error) {
        console.error(error.message);
    }
}

const obtenerLocalStorage = () => {
    try {
        return [...JSON.parse(localStorage.getItem('usuario'))];
    } catch (error) {
        console.error(error.message);
    }
}

const Usuarios = () => {
    return {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        url: '',
        button :'',

        Usuario: (nombre, apellido, email, password, url, button, ) => {
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
            this.password = password;
            this.url = url;
            this.button = button;
       
    
        },

        getNombre: () => {
            return this.nombre;
        },

        jsonToHtml: (estilos=null) => {
            const tarjeta = document.createElement('div');
            const img = document.createElement('img');
            const h5 = document.createElement('h5');
            const p = document.createElement('p');
            const button = document.createElement('button');
            const button1 = document.createElement('button');
           
            

           

            if(estilos){
                tarjeta.className = estilos;
            }

            if(this.url == '' ){
                img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTGVnbpOOjFmSSVVujeGD5z859GlOnWz0Pg&';
            } else {
                img.src = this.url;
            }

            h5.textContent = `${this.nombre} ${this.apellido}`;
            p.textContent = this.email;
            button.textContent = "editar"
            button1.textContent = "eliminar"


            tarjeta.appendChild(img)
            tarjeta.appendChild(h5)
            tarjeta.appendChild(p)
            tarjeta.appendChild(button)
            tarjeta.appendChild(button1)

            return tarjeta;
        },

        getUsuario: () => {
            return {
                nombre: this.nombre,
                apellido: this.apellido,
                email: this.email,
                password: this.password,
                url: this.url,
                button: this.button
             
            }

        },
    }
}



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuario = Usuarios();
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const img = document.querySelector('#img').value;


    const section = document.querySelector('.usuarios');

    usuario.Usuario(
        nombre,
        apellido,
        email,
        password,
        img
    );
    section.appendChild(usuario.jsonToHtml())
    
    }
);