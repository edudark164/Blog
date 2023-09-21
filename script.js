const postagensEsportes = [
    { titulo: "Noticias atuais Futebol", conteudo: "Delegação do Flamengo volta para Rio de Janeiro com segurança reforçada após derrota A delegação do Flamengo retornou após a partida desta quarta-feira contra o Goiás, em Goiânia, ao Rio de Janeiro. Por conta do clima de tensão, a segurança foi reforçada no aeroporto." },
    { titulo: "Noticias atuais Basquete", conteudo: "Dona do Lakers deixa LeBron e Jokic de lado e elege melhor jogador da última temporada da NBA. A última temporada da NBA terminou com o título inédito do Denver Nuggets em cima do Miami Heat pelo placar de 4×1. Nikola Jokic foi eleito o MVP das finais e por muitos, ele foi considerado o melhor jogador de toda a temporada passada. No entanto, nem todo mundo pensa assim. Jeanie Buss, empresária americana e dona do Los Angeles Lakers, elegeu um outro atleta como o melhor jogador da última temporada. Mas ela não escolheu LeBron James, super astro de 38 anos da equipe e que é um dos melhores jogadores de todos os tempos da NBA. Ao invés disso, ela elegeu o ala-pivô Anthony Davis." },
    { titulo: "Noticias atuais Vôlei", conteudo: "Alunos de medicina fazem “punhetaço” em jogo de vôlei feminino  Estudantes de medicina da Universidade Santo Amaro realizaram ato de masturbação coletiva durante partida de vôlei feminino válida por um torneio universitário, em São Carlos, no interior de São Paulo. O episódio, apelidado pelos alunos de “punhetaço”, ocorreu em maio deste ano, durante a Copa Calo, mas os vídeos viralizaram só no último fim de semana. A situação provocou revolta nas redes sociais." }
];

function criarPostagemEsportes(postagem) {
    const divPostagem = document.createElement("div");
    divPostagem.classList.add("postagem");

    const titulo = document.createElement("h2");
    titulo.textContent = postagem.titulo;

    const conteudo = document.createElement("p");
    conteudo.textContent = postagem.conteudo;

    divPostagem.appendChild(titulo);
    divPostagem.appendChild(conteudo);

    return divPostagem;
}

function exibirPostagens() {
    const postagensContainer = document.getElementById("postagens");

    postagensEsportes.forEach(postagem => {
        const divPostagem = criarPostagemEsportes(postagem);
        postagensContainer.appendChild(divPostagem);
    });
}

window.addEventListener("load", exibirPostagens);