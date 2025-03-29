// Função para mostrar a tela de cadastro
function mostrarCadastro() {
    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('tela-cadastro').style.display = 'flex';
}

// Função para mostrar a tela de login
function mostrarLogin() {
    document.getElementById('tela-cadastro').style.display = 'none';
    document.getElementById('tela-recuperar-senha').style.display = 'none';
    document.getElementById('tela-login').style.display = 'flex';
}

// Função para mostrar a tela de recuperação de senha
function mostrarRecuperarSenha() {
    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('tela-recuperar-senha').style.display = 'flex';
}

// Validação de senha no cadastro
document.getElementById('cadastro-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const senha = document.getElementById('senha-cadastro').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    const mensagemErro = document.getElementById('mensagem-erro');

    if (senha !== confirmarSenha) {
        mensagemErro.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        mensagemErro.style.display = 'none'; // Oculta a mensagem de erro
        alert('Cadastro realizado com sucesso!');
        mostrarLogin(); // Volta para a tela de login após o cadastro
    }
});

// Simulação de envio de email de recuperação
document.getElementById('recuperar-senha-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email-recuperar').value;
    alert(`Um link de recuperação foi enviado para: ${email}`);
    mostrarLogin(); // Volta para a tela de login após o envio
});

// Função para login
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Simulação de login bem-sucedido
    if (email === "teste@gmail.com" && senha === "123") {
        window.location.href = 'main.html'; // Redireciona para a página principal
    } else {
        alert('Email ou senha incorretos!');
    }
});

// Função para logout (na página principal)
function logout() {
    window.location.href = 'index.html'; // Redireciona para a tela de login
}