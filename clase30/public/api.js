async function getUsers() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const users = await response.json();
        console.log('Users:', users);
        console.log('Users:', users.species);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
    
}
function cardPikachu () {
    divRes=document.querySelector("#Resultado");
    divRes.innerHTML=""
    data.results.map item=>{
        divItem=document.createElement('div');
        divRes.appendChild(divItem);
        divItem.innerHTML=`
            <div class="card">
                <img src="${item.image}" alt="Imagen de ejemplo" class="card-img">
                <div class="card-content">
                    <h2 class="card-title">${item.name}</h2>
            
                    <button class="btn" 
                        data-name="${item.name}" 
                      
                        data-image="${item.image}" 
                        onClick='guardarCard(event)'>Guardar</button>
                </div>
            </div>
    }
    
    }

    

getUsers ()