function obterUsuario() {
    try { return JSON.parse(sessionStorage.getItem('farmavidaUsuario')); } catch { return null; }
}
const usuario = obterUsuario();
if (!usuario) window.location.href = 'index.html';
else {
    document.getElementById('nomeNav').textContent = usuario.nome;
    document.getElementById('mensagemBoasVindas').textContent =
        `Olá, ${usuario.nome}! Seja muito bem-vindo(a) à Jdm Portal. Aqui você pode encontrar toda e qualquer informação sobre a cultura jdm.`;
}
function sair() { sessionStorage.removeItem('farmavidaUsuario'); }
