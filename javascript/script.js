conaddst pesquisa = document.getElementById('pesquisa');

pesquisa.addEventListener('keyup', () => {

    let texto = pesquisa.value.toLowerCase();

    let livros = document.querySelectorAll('.livro');

    livros.forEach(livro => {

        let titulo = livro
            .querySelector('.card-title')
            .textContent
            .toLowerCase();

        if (titulo.includes(texto)) {
            livro.style.display = 'block';
        } else {
            livro.style.display = 'none';
        }

    });

});