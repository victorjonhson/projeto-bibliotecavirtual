function login() {

    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    // Usuário fixo
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {

        // Cria sessão
        localStorage.setItem('logado', 'true');

        // Redireciona
        window.location.href = "index.html";

    } else {

        document.getElementById('mensagem')
            .innerText = "Usuário ou senha incorretos.";

    }

}