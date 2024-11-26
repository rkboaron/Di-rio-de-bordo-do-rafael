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
    'https://cdn.temporadalivre.com/uploads/editor/pictures/8bc9aab356b1/content_Jardim_Bot%C3%A2nico_de_Curitiba_reabre_com_cuidados_red.jpg'
);

criaCartao(
    'Prato Típico', 
    'Conhece o "nome do prato"?', 
    'Explicar sobre o prato, porque o escolheu e o ingrediente principal. Colocar imagem.'
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4AzxER597WtFt5RCA8BoNFObHyB4XasLZw&s'
)
