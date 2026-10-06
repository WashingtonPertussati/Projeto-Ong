# Projeto ONG - Site Institucional

Este projeto foi desenvolvido como parte de uma solicitação acadêmica da faculdade. O objetivo principal foi criar um site institucional completo para uma Organização Não Governamental (ONG), aplicando conceitos práticos de desenvolvimento web front-end.

## 🚀 Tecnologias Utilizadas
- **HTML5:** Para a construção e organização de toda a estrutura estrutural das páginas.
- **CSS3:** Para a estilização, definição de cores, layout responsivo e identidade visual do site.
- **JavaScript:** Para trazer interatividade ao usuário, aplicando lógica dinâmica diretamente no navegador.

## 🛠️ Processo de Desenvolvimento

### 1. Estruturação com HTML
O desenvolvimento começou do zero pela organização das tags estruturais do HTML. Foram criadas seções essenciais para o site da ONG, incluindo:
- Um cabeçalho (`<header>`) com menu de navegação claro.
- Uma seção principal (`<main>`) detalhando a missão, visão e os valores da organização.
- Áreas específicas para fotos, formulários de contato e um rodapé (`<footer>`) com redes sociais.

### 2. Estilização com CSS
Com a estrutura pronta, o CSS foi utilizado para transformar o visual do site:
- Aplicação de paletas de cores que transmitem a identidade acolhedora da ONG.
- Ajustes de margens, espaçamentos e alinhamentos para garantir uma leitura confortável.
- Configuração de tipografia (fontes) e efeitos visuais nos botões ao passar o mouse.

### 3. Interatividade com JavaScript (Mensagem Seguindo o Mouse)
Para dar um destaque especial e interativo ao projeto, desenvolvemos uma funcionalidade dinâmica usando JavaScript. Conseguimos criar o efeito de uma **mensagem flutuante que segue o ponteiro do mouse** através da seguinte lógica:
- Capturamos os movimentos do usuário na tela através do evento de escuta `mousemove`.
- Esse evento nos fornece, em tempo real, as coordenadas exatas (`X` e `Y`) de onde o mouse está passando.
- Com esses dados, manipulamos o estilo CSS de uma caixinha de texto (uma `<div>`), atualizando as propriedades `top` e `left` dela instantaneamente para as mesmas posições do mouse.

## 💻 Como rodar o projeto localmente
1. Faça o download ou clone este repositório.
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em qualquer navegador web (Chrome, Edge, Firefox).