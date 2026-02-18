---
title: "o que desenvolvimento guiado por IA significa para desenvolvedores"
description: "Como o papel do desenvolvedor está mudando na perspectiva do mercado"
date: "2026-02-16"
slug: "ai-driven-development"
---
# o que desenvolvimento guiado por IA significa para desenvolvedores

## Introdução

Se você não mora numa caverna e especialmente se você usa LinkedIn, já deve ter ouvido como o papel do desenvolvedor de software está mudando na perspectiva do mercado...Primeiro os lay-offs estimulados pela IA (dizendo que IA substituiria desenvolvedores), e agora, uma mudança de visão sobre qual é o papel do desenvolvedor de software no desenvolvimento de aplicações, ou melhor, no desenvolvimento de produtos.

## Disclaimer

Sei que isso não é nada disruptivo ou novo, na realidade é algo que tem sido muito debatido nas redes sociais, especialmente no LinkedIn, mas quis compartilhar minha visão pessoal mesmo assim porque, programando por hobby mas especialmente trabalhando diariamente com desenvolvimento de software, comecei a perceber na prática cada vez mais o que todos aqueles posts e palestras sobre desenvolvimento x IA significam para um engenheiro de software.

## o blá-blá-blá que você já sabe

Como alguém que começou a estudar e trabalhar com desenvolvimento de software há cerca de 3 anos, tenho a sensação de que vivenciei a virada do uso da inteligência artificial no desenvolvimento de software: os primeiros modelos do ChatGPT estavam sendo lançados e era o tema quente em alta, ganhando cada vez mais visibilidade. Comecei a programar vendo videoaulas, fazendo projetos acompanhando tutoriais em vídeo e nas aulas da faculdade; depois de alguns meses, passei a usar o ChatGPT como auxiliar nos meus projetos de iniciante, programando e fazendo perguntas pontuais, depois enviando trechos de código, colando a resposta no VSCode. Dois anos depois me formei, comecei a trabalhar e, após muito ceticismo em relação a IA que entende código e ferramentas de IA integradas ao código, comecei a usar uma dessas ferramentas.

Claro que ajudou muito a entregar em menos tempo, a fazer coisas e funcionalidades que eu não tinha ideia de como fazer e a fazer em muito menos tempo do que levaria sozinha, mas também me deixou cada vez mais desconfortável com a sensação de estar perdendo o domínio do meu código/projeto e com a velocidade com que isso crescia.

E é isso que acontece quando se faz código muito assistido por IA. Sei que muita gente diz coisas diferentes; já ouvi muito que "o código que sua IA gera reflete a qualidade do seu prompt e de como você pergunta", mas não concordo com isso... Posso não ter tanto tempo de estrada em desenvolvimento de software, mas minha opinião é que sempre foi algo complexo — não no sentido de ser difícil de fazer ou aprender, mas no sentido de haver muitos fatores aos quais você tem que estar sempre atento ao fazer um projeto ou produto, e está sempre sujeito a erros e falhas. Então, quando colocamos a IA no jogo, ou seja, quando aceleramos esse processo, deixamos tudo mais bagunçado e perigoso.

/Fatores a levar em conta:
- A IA baseia a geração de código no seu codebase atual;
- A IA é treinada com outros códigos, o que significa código ruim, de várias formas;
- Seus prompts precisam ser bons;
- Você precisa saber o que está fazendo;
- Você precisa saber o que quer fazer;
- Velocidade ≠ bons resultados;

## A geração de código é baseada na sua codebase atual

Se você for usar o agente de IA em um codebase que já existe, é bem provável que seja um codebase grande e estabelecido, o que no mundo real geralmente significa cheio de erros, más práticas e código replicado. A questão é que, quando a IA vai gerar código novo com base no seu prompt, ela olha o seu código atual em busca de padrões e do que precisa seguir para manter o novo código no mesmo padrão do que já existe — e, ao fazer isso, pode replicar os maus padrões que você já tem, e é o que costuma acontecer.

O melhor cenário aqui é aquele em que seu código está bem documentado e tem muitos testes automatizados, além de regras para IA, tudo para servir de base ao novo código gerado: a IA recebe o prompt, olha o projeto, encontra documentação e testes automatizados, encontra código de boa qualidade, gera código novo e um engenheiro de software revisa.

Mesmo com tudo isso, erros podem acontecer; mas pela minha experiência, esse parece ser o melhor cenário para o uso de IA.

## A IA é treinada com muitos códigos, o que significa código ruim

Algo sempre muito debatido na área de tech é qualidade de código, código limpo e boas práticas. Se esse debate existe, é sinal de que a maior parte do código é ruim, não é limpa e precisa de muita melhoria. Por outro lado, para ser treinada, a IA precisou do máximo de dados possível — trechos de código, casos e codebases existentes — para ter fundamentos para gerar e reproduzir código novo, o que significa código com muitas práticas de programação, em boa parte com arquiteturas e abordagens não tão limpas. Ou seja, os novos códigos gerados tendem a multiplicar más práticas, especialmente se não forem revisados por alguém que sabe o que está fazendo e o que são boas práticas.

E quando falo em código ruim não falo só de código limpo, repetição e boas práticas, mas também de práticas inseguras, que já vêm sendo outro tema muito discutido com a ascensão do chamado "desenvolvimento guiado por IA".

## Seus prompts precisam ser bons; você precisa saber o que está fazendo; você precisa saber o que quer fazer

Como já foi dito, a IA é treinada com muitos tipos de dados; até seu próprio codebase pode ser bagunçado ou ruim, e você precisa saber gerenciar o código novo para evitar todo tipo de resultado indesejado. Código ruim, repetição, regras de negócio erradas — você precisa ter bom conhecimento não só de boas práticas de código, mas também das regras de negócio do seu produto e dos resultados que quer obter com o código novo. Fique sempre atento se a IA está alucinando: por exemplo, ao pedir que ela gere traduções, ela pode alucinar e criar traduções erradas ou literais demais. Fique atento também se está criando regras de negócio que você não pediu, se está repetindo código à toa, se está usando a melhor abordagem ou complicando demais, gerando código difícil de ler e entender.

E nunca, jamais, ache que "vibe coding" é uma boa solução. Entregar código puramente gerado por IA sem revisar é uma das piores escolhas que se pode fazer a longo prazo. Se mesmo quando entregamos código com bons prompts, revisões etc. ainda podemos ter muitos problemas como bugs, código espaguete, repetição e vulnerabilidades, imagine o que pode acontecer sem tudo isso.

Por isso, ao programar com IA, use-a como ferramenta de apoio, sempre com revisão, sempre sabendo qual resultado você quer e fazendo prompts claros.

## Velocidade ≠ bons resultados

O desenvolvimento guiado por IA não só mudou a forma como engenheiros de software desenvolvem código, mas também mudou as expectativas de entrega, que já eram irreais e muito exigentes. Agora os prazos são mais curtos; o tempo para novas funcionalidades é de no máximo um dia. O mercado sempre vai querer mais lucro e as abordagens mais lucrativas; com a IA como desculpa para fazer novas funcionalidades mais rápido, vem o aumento de lucro, mais exploração dos trabalhadores — melhor para eles. Então o que acontece é o que se propaga: a IA é a nova sensação que deixa o desenvolvimento de software mais rápido e, de quebra, faz com que você precise de menos desenvolvedores (ou nenhum, como dizem que agora dá para "vibe codar" apps inteiros). A expectativa em cima do engenheiro de software é entregar muitas funcionalidades no menor tempo possível, pressionando o desenvolvedor, o que gera a tendência de não revisar o código gerado pela IA e não pensar em boas práticas.

(claro que sempre existe a parte/responsabilidade da pessoa nesse processo, mas, de forma geral)

## O que tudo isso significa para desenvolvedores?

Com todos esses fatores em mente, fica mais claro para mim que os engenheiros de software estão passando a ser vistos pelo mercado mais como uma mistura de QA + Product Owners + engenheiros de prompt, em vez de alguém que escreve código, toma decisões de arquitetura e articula com outras equipes.

Claro que isso depende muito da cultura da empresa e da forma de pensar em relação ao time de tech e à liderança, mas, em geral, é essa a virada que tenho visto nas posições de engenharia de software: mais pressão para testar a fundo, entender profundamente o produto e mostrar nosso trabalho de forma mais visível.

Na maioria dos casos hoje, ser tecnicamente bom não é mais suficiente — mais do que nunca.
