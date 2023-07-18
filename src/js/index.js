/*
    O que precisamos fazer? - quando clicarmos no botão troca de tema temos que alterar a cor do tema da página para as cores do tema ou do tema escuro.

    - Objetivo 1 - Quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua.
        - passo 1 - Pegar no JS o elemento HTML correspondente ao botão de troca de tema.
        - passo 2 - Dar um jeito de pegar no JS o elemento HTML corresponde ao body.
        - passo 3 - Dar um jeito de identificar o clique do usuário no botão de troca de tema.
        - passo 4 - Adicionar a classe modo-escuro no body.
        - passo 5 - Trocar a imagem do botão de alterar tema para lua.

    - Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro e mudar a imagem para o sol.
        - passo 6 - Verificar se o body já tem a classe modo-escuro.        
        - passo 7 - Remover a classe do modo-escuro do body.
        - passo 8 - trocar a imagem do botão de alterar tema para o sol.
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/sun.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/moon.png")
    }
})

