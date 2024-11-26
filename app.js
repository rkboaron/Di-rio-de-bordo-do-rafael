function criaCartao(categoria, pergunta, resposta){
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `

    let respostaEstaVisivel = false

    function viraCartao(){
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle('active', respostaEstaVisivel)
    }
    cartao.addEventListener('click', viraCartao)
    
    container.appendChild(cartao)
}
function criaCartao(titulo, pergunta, resposta, imagem) {
    const container = document.getElementById('container');
    
    const cartao = document.createElement('article');
    cartao.classList.add('cartao');
    
    cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${titulo}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
            </div>
            ${imagem ? `<div class="cartao__imagem"><img src="${imagem}" alt="Imagem do álbum"></div>` : ''}
        </div>
    `;
    container.appendChild(cartao);
}
criaCartao(
    'Álbum de fotos', 
    'Minhas memórias!', 
    'Colar aqui as montagens das suas fotos.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvVME05sJ2CAtZK6fpiKE2R8ONtmveZv03pPGB2-5QvbIJyNhd9JaPXvqcARoZEymW1w&usqp=CAU'
);
