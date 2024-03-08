let olhoFechado = document.querySelector('.olho-img1');
let olhoAberto = document.querySelector('.olho-img2');
let senha = document.getElementById('password');
let alerta = window.location.href.split('?');

if (alerta[1] === 'alert') {
    alert('O redirecionamento está funcionando, clique em "Register here!"')
}

function passwordOlho(a) {
    if (a === 1) {
        olhoFechado.classList.add('d-none');
        olhoAberto.classList.remove('d-none');
        senha.setAttribute("type", "text")
    }else {
        olhoAberto.classList.add('d-none'); 
        olhoFechado.classList.remove('d-none');
        senha.setAttribute("type", "password")
    }
}

