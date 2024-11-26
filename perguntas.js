criaCartao(
    'Diário de Bordo', 
    'Qual foi o destino?', 
    'Informar o destino da viagem.', 
)

criaCartao(
    'Custo da Viagem', 
    'Qual foi o custo total dessa viagem por pessoa e qual a modalidade de aquisição?', 
    'Informar o valor na moeda original do local e o valor convertido para R$. Informar se a aquisição foi via agência de viagens ou aquisição de forma independente '
)

criaCartao(
    'Fato Curioso', 
    'Uma curiosidade sobre cidade/ponto turístico/país cisitado!', 
    'Informar através de um breve texto uma curiosidade.'
)

criaCartao(
    'Passeios', 
    'Onde passear?', 
    'Informar os locais, breve resumo do que são, e imagens.'
)

criaCartao(
    'Prato Típico', 
    'Conhece o "nome do prato"?', 
    'Explicar sobre o prato, porque o escolheu e o ingrediente principal. Colocar imagem.'
)

criaCartao(
    'Álbum de fotos', 
    'Minhas memórias!', 
    'Colar aqui as montagens das suas fotos.'
)

criaCartao(
    'Álbum de fotos', 
    'Minhas memórias!', 
    'Colar aqui as montagens das suas fotos.'
)

criaCartao(
    'Ponto de Vista', 
    'O que eu achei da viagem para ...?', 
    'Informar através de um breve texto sobre o que achou da viagem, o que faria de diferente e por quê.'
)

// Função de criação de cartão com imagem
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
