let itensCarrinhoArr = [];

function createCard(produto){
    let cardDiv = document.createElement("div");
    let imgProduto = document.createElement("img");
    let categoriaProduto = document.createElement("span");
    let nomeProduto = document.createElement("strong");
    let descricaoProduto = document.createElement("span");
    let precoProduto = document.createElement("span");
    let addCarrinho = document.createElement("span");

    imgProduto.src = produto.img;
    imgProduto.alt = produto.nameItem;
    categoriaProduto.innerText = produto.tag[0];
    nomeProduto.innerText = produto.nameItem;
    descricaoProduto.innerText = produto.description;
    precoProduto.innerText = `R$ ${produto.value.toFixed(2)}`;
    addCarrinho.innerText = produto.addCart;

   
    cardDiv.classList.add("cardContainer");
    categoriaProduto.classList.add("category");
    addCarrinho.classList.add("addCarrinho");
    addCarrinho.setAttribute("id", produto.id);
    precoProduto.classList.add("boldPurple");

    categoriaProduto.addEventListener("click", function(e){
        apresentaPorSecao(produto.tag[0].toLowerCase());
    })

    addCarrinho.addEventListener('click', function(e){
        let elemento = e.target;
        let elementoId = Number(elemento.id);
        let produto = procuraProdutoId(elementoId, axes, swords, knives);

        carrinhoUsado(produto, itensCarrinhoArr);
        criaEndDiv(itensCarrinhoArr); 
    })

    cardDiv.append(
        imgProduto, 
        categoriaProduto,
        nomeProduto,
        descricaoProduto,
        precoProduto,
        addCarrinho
    );

    categoriaProduto.addEventListener

    return cardDiv;
}

function apresentaTodosItens(axeArr, swordArr, knifeArr){
    let vitrine = document.querySelector(".vitrine");
    vitrine.innerHTML = "";
    
    for(let i = 0; i < axeArr.length; i++){
        vitrine.appendChild(createCard(axeArr[i]));
    } 
    for(let j = 0; j < swordArr.length; j++){
        vitrine.appendChild(createCard(swordArr[j]));
    }
    for(let k = 0; k < knifeArr.length; k++){
        vitrine.appendChild(createCard(knifeArr[k]));
    }
}

function apresentaPorSecao(nomeSecao){
    let vitrine = document.querySelector(".vitrine");
    vitrine.innerHTML = "";
    if(nomeSecao === "machados"){
        for(let i = 0; i < axes.length; i++){
            vitrine.appendChild(createCard(axes[i]));
        } 
    }else if(nomeSecao === "espadas"){
        for(let j = 0; j < swords.length; j++){
            vitrine.appendChild(createCard(swords[j]));
        }
    }else if(nomeSecao === "facas"){
        for(let k = 0; k < knives.length; k++){
            vitrine.appendChild(createCard(knives[k]));
        }
    }  
}

function carrinhoInicial(){
    let carrinhoDiv = document.querySelector("#carrinhoToggle");
    let carrinhoVazio = document.createElement("div");

    carrinhoVazio.classList.add("vazio");

    carrinhoVazio.innerHTML = "<h3>Carrinho vazio</h3><span>Adicione itens</span>";

    carrinhoDiv.appendChild(carrinhoVazio);
}

apresentaTodosItens(axes, swords, knives);
carrinhoInicial();

function procuraProdutoId(id, axesList, swordsList, knivesList){
    let produto;

    for(let x = 0; x < axesList.length; x++){
        if(id === axesList[x].id){
            produto = axesList[x];
        }
    }
    for(let j = 0; j < swordsList.length; j++){
        if(id === swordsList[j].id){
            produto = swordsList[j];
        }
    }
    for(let k = 0; k < knivesList.length; k++){
        if(id === knivesList[k].id){
            produto = knivesList[k];
        }
    }
    return produto;
}

function procuraProdutoNome(nome, axesList, swordsList, knivesList){
    let encontrados = [];

    for(let x = 0; x < axesList.length; x++){
        if(axesList[x].nameItem.toLowerCase().includes(nome.toLowerCase())){
            encontrados.push(axesList[x]);
        }
    }
    for(let j = 0; j < swordsList.length; j++){
        if(swordsList[j].nameItem.toLowerCase().includes(nome.toLowerCase())){
            encontrados.push(swordsList[j]);
        }
    }
    for(let k = 0; k < knivesList.length; k++){
        if(knivesList[k].nameItem.toLowerCase().includes(nome.toLowerCase())){
            encontrados.push(knivesList[k]);
        }
    }
    return encontrados;
}


function criaEndDiv(itensCarrinhoArr){
    let divQtd = document.createElement("div");
    let divTotal = document.createElement("div");
    let divEnd = document.querySelector(".endDiv");

    divQtd.innerHTML = `<span style="font-weight: bold;">Quantidade:</span><span>${itensCarrinhoArr.length}</span>`;
    divTotal.innerHTML = `<span style="font-weight: bold;">Total:</span><span>R$ ${calculaTotalCar()}</span>`;
    divEnd.innerHTML = ""; 

    divEnd.append(divQtd, divTotal);  
}

function carrinhoUsado(produtoAdicionado, itensCarrinho){
    let apresentaItens = document.createElement("div");
    let carrinhoDiv = document.querySelector("#carrinhoToggle");
   
    if(itensCarrinho.length === 0){
        carrinhoDiv.innerHTML = "";
    }

    itensCarrinho.push(produtoAdicionado);
    let itemCarrinho = criaCardCarrinho(produtoAdicionado);
    
    apresentaItens.append(itemCarrinho);
    carrinhoDiv.append(apresentaItens);
}

function criaCardCarrinho(produto){
    let cardCarrinhoDiv = document.createElement("div");
    let fotoProduto = document.createElement("img");
    let infoDiv = document.createElement("div");
    let nomeProduto = document.createElement("strong");
    let precoProduto = document.createElement("span");
    let removeProduto = document.createElement("span");

    cardCarrinhoDiv.classList.add("cardCarrinho");
    nomeProduto.classList.add("infoCarrinho");
    precoProduto.classList.add("infoCarrinho", "boldPurple");
    removeProduto.classList.add("infoCarrinho","remove");
    infoDiv.classList.add("infoDiv");
    removeProduto.setAttribute("id", produto.id);

    fotoProduto.src = produto.img;
    fotoProduto.alt = produto.nameItem;
    nomeProduto.innerText = produto.nameItem;
    precoProduto.innerText = `R$ ${produto.value.toFixed(2)}`;
    removeProduto.innerText = "Remover produto";

    infoDiv.append(nomeProduto, precoProduto, removeProduto);
    cardCarrinhoDiv.append(fotoProduto, infoDiv); 

    removeProduto.addEventListener('click',function(e){
        let elemento = e.path[2];
        elemento.remove();
        
        atualizaCarrinho(e.target.id); 
    });

    return cardCarrinhoDiv;
}

function calculaTotalCar(){
    let total = 0;

    for(let i = 0; i < itensCarrinhoArr.length; i++){
        total += itensCarrinhoArr[i].value;
    }

    return total.toFixed(2);
}

function atualizaCarrinho(removedId){
    for(let i = 0; i < itensCarrinhoArr.length; i++){
        if(Number(removedId) === itensCarrinhoArr[i].id){
            itensCarrinhoArr.splice(i, 1);
        }
    }

    if(itensCarrinhoArr.length === 0){
        criaEndDiv(itensCarrinhoArr);
        let endDiv = document.querySelector(".endDiv");
        endDiv.innerHTML = "";
        carrinhoInicial();
    } else {
        criaEndDiv(itensCarrinhoArr);
    }  
}

function pesquisar(nomeProdutoProcurado){
    let encontrados = procuraProdutoNome(nomeProdutoProcurado, axes, swords, knives);
    
    let vitrine = document.querySelector(".vitrine");
    vitrine.innerHTML = "";
    
    for(let i = 0; i < encontrados.length; i++){
        vitrine.appendChild(createCard(encontrados[i]));
    } 
}

let inputPesquisar = document.getElementById("pesquisar").getElementsByTagName("input")[0];
let botaoPesquisar = document.getElementById("pesquisar").getElementsByTagName("button")[0];

botaoPesquisar.addEventListener("click", function(e){
    pesquisar(inputPesquisar.value);
    e.preventDefault();
})

let navTodos = document.getElementById("todos");
let navEspadas = document.getElementById("espadas");
let navMachados = document.getElementById("machados");
let navFacas = document.getElementById("facas");

navTodos.addEventListener('click', function(e){
    apresentaTodosItens(axes, swords, knives);
})

navMachados.addEventListener('click', function(e){
    apresentaPorSecao(navMachados.id);
})

navEspadas.addEventListener('click', function(e){
    apresentaPorSecao(navEspadas.id);
})

navFacas.addEventListener('click', function(e){
    apresentaPorSecao(navFacas.id);
})
