// CAIXA DE LOGIN
const botaologin = document.getElementById('loginbutton');
const caixalogin = document.getElementById('loginbox');
const botaofechar = document.getElementById('closebutton')
const backtransp = document.getElementById('bglg')

// mostrar caixa de login
function entrar(){
    if (caixalogin.style.display == 'none'){
        caixalogin.style.display = 'block'
        backtransp.style.display = 'block'
        
    } else{
        caixalogin.style.display = 'none'
        backtransp.style.display = 'none'
    }
}

// fechar a caixa de login
function fechar(){
    if (caixalogin.style.display = 'block'){
        caixalogin.style.display = 'none'
        backtransp.style.display = 'none'
    }
}

// CAIXA DE COMENTÁRIOS

const commentName = document.getElementById('coment-name');
const commentWrite = document.getElementById('coment-caixa');
const EnvComent = document.getElementById('comentEnviar');
const ExibirComent = document.getElementById('comentarioExibir');

EnvComent.addEventListener('click', enviarComent);

function enviarComent() {
    if (commentName.value !== '' && commentWrite.value !== '') {
        const novoComentario = document.createElement('div');
        novoComentario.innerHTML = `<p><strong>${commentName.value}:</strong> ${commentWrite.value}</p>`;
        ExibirComent.appendChild(novoComentario);

        commentName.value = '';
        commentWrite.value = '';

        ExibirComent.style.display = 'block';
    }
}






