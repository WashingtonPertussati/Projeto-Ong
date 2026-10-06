export function verificarPix(selectEl) {
    const campoValor = document.getElementById('campo-valor');
    if (selectEl && selectEl.value === 'Pix') {
        campoValor.style.display = 'flex';
        const valorPix = document.getElementById('valorPix');
        if (valorPix) valorPix.setAttribute('required', 'true');
    } else if (campoValor) {
        campoValor.style.display = 'none';
        const valorPix = document.getElementById('valorPix');
        if (valorPix) valorPix.removeAttribute('required');
    }
}

export function salvarCadastro(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const interesse = document.getElementById('interesse').value;
    const valorPix = document.getElementById('valorPix') ? document.getElementById('valorPix').value : '';

    const novoCadastro = {
        nome,
        email,
        telefone,
        interesse,
        valorPix: interesse === 'Pix' ? valorPix : 'Não aplicável',
        data: new Date().toLocaleDateString('pt-BR')
    };

    let cadastrosSalvos = JSON.parse(localStorage.getItem('cadastrosONG')) || [];
    cadastrosSalvos.push(novoCadastro);
    localStorage.setItem('cadastrosONG', JSON.stringify(cadastrosSalvos));

    alert('Cadastro realizado e salvo com sucesso! Obrigado por contribuir com o Projeto ONG.');
    
    event.target.reset();
    if (document.getElementById('campo-valor')) {
        document.getElementById('campo-valor').style.display = 'none';
    }
}