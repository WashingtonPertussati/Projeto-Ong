import { carregarSecaoSPA } from './spa.js';
import { iniciarEfeitoCursor } from './animacoes.js';

// Inicialização centralizada dos módulos quando o DOM estiver pronto
window.addEventListener('DOMContentLoaded', () => {
    carregarSecaoSPA();
    iniciarEfeitoCursor();
});

// Ouve as mudanças de rota da SPA
window.addEventListener('hashchange', carregarSecaoSPA);