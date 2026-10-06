import { verificarPix, salvarCadastro } from './storage.js';

// Expõe globalmente as funções do formulário para que o HTML gerado via Template String consiga acioná-las via onsubmit/onchange
window.verificarPix = verificarPix;
window.salvarCadastro = salvarCadastro;

const listaProjetos = [
    {
        titulo: "Rede de Apoio Alimentar",
        descricao: "Arrecadação e distribuição regular de cestas de alimentos e itens essenciais para famílias em situação de vulnerabilidade."
    },
    {
        titulo: "Educação Cidadã",
        descricao: "Oficinas educativas, apoio escolar e cursos profissionalizantes voltados para crianças, jovens e adultos."
    },
    {
        titulo: "Ações Comunitárias",
        descricao: "Mutirões de saúde, campanhas de agasalho e eventos de integração social nos bairros atendidos."
    }
];

const rotas = {
    'inicio': `
        <section>
            <h2>Bem-vindo ao Projeto ONG</h2>
            <p>Conectando corações, transformando realidades e construindo um futuro com mais dignidade e oportunidades para todos em Belo Horizonte e região.</p>
            <p>Utilize o menu ao lado para navegar entre as nossas iniciativas, conhecer mais a fundo a nossa história ou fazer o seu cadastro como voluntário ou doador.</p>
        </section>
    `,
    'projetos': `
        <section>
            <h2>Nossos Projetos Sociais</h2>
            <p>Conheça as principais frentes de atuação que desenvolvemos para apoiar a comunidade:</p>
            
            <ul style="margin-left: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; color: var(--text-muted);">
                ${
                    listaProjetos.map(projeto => `
                        <li>
                            <strong>${projeto.titulo}:</strong>${projeto.descricao}
                        </li>
                    `).join('')
                }
            </ul>
        </section>
    `,
    'cadastro': `
        <section>
            <h2>Cadastre-se como Voluntário ou Doador</h2>
            <p>Preencha o formulário abaixo para fazer parte da nossa rede de apoio. Os dados ficam salvos de forma persistente no navegador.</p>

            <form action="#" method="POST" onsubmit="salvarCadastro(event)">
                <label for="nome">Nome Completo:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="telefone">Telefone / WhatsApp:</label>
                <input type="tel" id="telefone" name="telefone" required>

                <label for="interesse">Como deseja ajudar?</label>
                <select id="interesse" name="interesse" onchange="verificarPix(this)">
                    <option value="" disabled selected>Selecione uma opção</option>
                    <option value="voluntario">Trabalho Voluntário</option>
                    <option value="doador">Doador Frequente</option>
                    <option value="ambos">Ambos</option>
                    <option value="Pix">Pix (Doação em Dinheiro)</option>
                </select>

                <div id="campo-valor" style="display: none; flex-direction: column; gap: 6px; width: 100%;">
                    <label for="valorPix">Qual o valor da doação via Pix (R$)?</label>
                    <input type="number" id="valorPix" name="valorPix" step="0.01" min="1" placeholder="Ex: 50.00">
                </div>

                <button type="submit" class="btn-enviar">Enviar e Salvar Cadastro</button>
            </form>
        </section>
    `,
    'sobre': `
        <section>
            <h2>Sobre Nós</h2>
            <p>O <strong>Projeto ONG</strong> nasceu do compromisso coletivo de cidadãos engajados em gerar impacto social positivo na região de Belo Horizonte.</p>
            <p>Nossa missão é promover o desenvolvimento humano e a inclusão social através de frentes de apoio humanitário, educação e fomento à solidariedade, garantindo transparência em cada doação e ação realizada.</p>
        </section>
    `
};

export function carregarSecaoSPA() {
    const hash = window.location.hash.replace('#', '') || 'inicio';
    const containerAlvo = document.getElementById('conteudo-principal');
    
    if (!containerAlvo) return;

    containerAlvo.innerHTML = '';

    const fragmentoHtml = rotas[hash] || `
        <section>
            <h2>Página não encontrada</h2>
            <p>O conteúdo solicitado não foi encontrado.</p>
        </section>
    `;

    containerAlvo.innerHTML = fragmentoHtml;

    document.querySelectorAll('.header-lateral nav a').forEach(link => {
        const linkHash = link.getAttribute('href').replace('#', '');
        if (linkHash === hash) {
            link.classList.add('ativo');
        } else {
            link.classList.remove('ativo');
        }
    });
}