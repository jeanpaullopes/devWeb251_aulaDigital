const users = 
[  ];

function criarDivUser(usr) {
    const div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = `Nome: ${usr.name}`;
    // as linhas abaixo fazerm a mesma coisa que a linha acima
    //p.innerHTML = "Nome: "+usr.name;
    //p.innerHTML = 'Nome: '+usr.name;
    div.appendChild(p);

    p = document.createElement('p');
    p.innerHTML = `Email: ${usr.email}`;
    div.appendChild(p);

    div.appendChild(criarDivAddress(usr.address));
    div.classList.add('card');
    return div;
}

function criaCardVeiculoIndexPage(veiculo) {
    const div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = `Modelo: ${veiculo.Modelo}`;
    div.appendChild(p);
    p = document.createElement('p');
    p.innerHTML = `Ano: ${veiculo.Ano}`;
    div.appendChild(p);
    const img = document.createElement('img');
    img.src = veiculo.foto;
    img.style.width = '180px';
    div.appendChild(img);
    return div;

}

function criarDivAddress(addr) {
    const div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = `Rua: ${addr.street}`;
    div.appendChild(p);

    p = document.createElement('p');
    p.innerHTML = `No.: ${addr.suite}`;
    div.appendChild(p);

    p = document.createElement('p');
    p.innerHTML = `Cidade: ${addr.city}`;
    div.appendChild(p);
    
    p = document.createElement('p');
    p.innerHTML = `CEP: ${addr.zipcode}`;
    div.appendChild(p);
    
    div.classList.add('card');
    return div;
}

function criaListaUsers(usrs) {
    for (let i = 0; i < usrs.length; i++) {
        document.getElementById('cleiton').appendChild( criarDivUser(users[i]) );
    }
}


//aqui faz a chamada do recurso URI
//fetch('https://jsonplaceholder.typicode.com/users')
fetch('http://localhost:3000/pessoas')
//quando a resposta chegar, o then é chamado
.then( (response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        //vai chamar a promise de buscar o json da resposta
        response.json()
        //quando o json estiver pronto, o then é chamado
        .then((dados) =>{
            dados.forEach(element => {
                users.push(element);
            });
           criaListaUsers(users);
        })
        .catch((error) => {
            console.log('Error parsing JSON:', error);
        });
    
   
    })
.catch(
    function (error) {
        console.log(error);
    }
)

criaListaUsers(users);

document.getElementById('cleiton').appendChild (
    criaCardVeiculoIndexPage(
        {
            "id": 1,
             "Marca": "Cherry",
             "Modelo" : "Cherry",
            "Versao": "Tiggo7 Sport",
            "Ano": 2025,
            "Quilometragem": 9.145,
            "Combustível": "Flex",
            "Motor": 1.5,
            "Cor": "Cinza",
            "foto": "https://www.rispoli.com.br/carros/RTZ2D6101.JPG",
            "Opcionais": [
              "ABS",
              "Air bag duplo",
              "Ar condicionado",
              "Bancos em couro",
              "Câmbio automático",
              "Computador de bordo",
              "Direção hidráulica",
              "Rodas de liga",
              "Travas elétricas",
              "Vidros elétricos"
            ]
          }
    )
)
