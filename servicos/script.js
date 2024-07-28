document.addEventListener('DOMContentLoaded', () => {
    // Esconde todas as categorias, exceto a primeira
    const categories = document.querySelectorAll('.product-category');
    categories.forEach((category, index) => {
        if (index !== 0) {
            category.style.display = 'none';
        }
    });

    // Adiciona evento de clique para cada link do submenu
    const links = document.querySelectorAll('.product-link');
    links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Esconde todas as categorias
            categories.forEach(category => {
                category.style.display = 'none';
            });

            // Mostra a categoria correspondente ao link clicado
            const target = link.getAttribute('href').substring(1);
            document.getElementById(target).style.display = 'block';
        });
    });
});

// Variáveis globais para controle das imagens
var imagens = [];
var indiceAtual = 0;

// Função para abrir o modal com a imagem clicada
function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");

    // Encontra a categoria da imagem clicada
    var categoria = image.closest('.product-category');

    // Preencher o array de imagens da categoria correspondente
    imagens = Array.from(categoria.querySelectorAll('.product-image'));

    // Encontrar o índice da imagem clicada
    indiceAtual = imagens.findIndex(function(imagem) {
        return imagem.src === image.src;
    });

    modal.style.display = "block";
    modalImg.src = image.src;
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Função para mudar a imagem exibida no modal
function mudarImagem(direcao) {
    var modalImg = document.getElementById("modalImage");

    // Calcular o próximo índice
    indiceAtual = (indiceAtual + direcao + imagens.length) % imagens.length;
    modalImg.src = imagens[indiceAtual].src;
}
