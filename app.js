function criaCartao(categoria, pergunta, resposta, imagem) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

       cartao.innerHTML = `
        <div class="cartao__conteudo">
            <h3>${categoria}</h3>
            <div class="cartao__conteudo__pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao__conteudo__resposta">
                <p>${resposta}</p>
                ${imagem ? `<div class="cartao__imagem"><img src="${imagem}" alt="Imagem do álbum"></div>` : ''}
            </div>
        </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}
criaCartao(
    'Álbum de fotos', 
    'Minhas memórias!', 
    'Aqui está a montagem das suas fotos.',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqvVME05sJ2CAtZK6fpiKE2R8ONtmveZv03pPGB2-5QvbIJyNhd9JaPXvqcARoZEymW1w&usqp=CAU'
);
