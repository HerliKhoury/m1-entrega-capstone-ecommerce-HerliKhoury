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

    /* Incluir as classe de estilização */
    cardDiv.classList.add("cardContainer");
    categoriaProduto.classList.add("category");
    addCarrinho.classList.add("addCarrinho");

    cardDiv.append(
        imgProduto, 
        categoriaProduto,
        nomeProduto,
        descricaoProduto,
        precoProduto,
        addCarrinho
    );

    return cardDiv;
}

/* let produtoEx ={
    id: 11,
    img: "./img/axes/axe_0.jpeg",
    nameItem: "Machado de caminhada",
    description:
      "Machado de caminhada de Gimli, usado como apoio e como arma.",
    value: 500,
    addCart: "Adicionar ao carrinho",
    tag: ["Machados"]
};

let vitrine = document.querySelector(".vitrine");
console.log(vitrine, "oi");
vitrine.appendChild(createCard(produtoEx)); */

function apresentaTodosItens(axeArr, swordArr, knifeArr){
    let vitrine = document.querySelector(".vitrine");
    
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

apresentaTodosItens(axes, swords, knives);