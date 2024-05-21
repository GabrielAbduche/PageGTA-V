const botao = document.querySelector('.btn-plataforma');
const elementoPlataforma = document.querySelector('.btn-plataforma .plataformas')
botao.addEventListener('click', () => {
    elementoPlataforma.classList.toggle('ativo');
}); 

/* Ao invés de usar if e else podemos usar a função toggle, se a classe 'ativo' não esá no código ele adiciona, se já estiver ele tira */