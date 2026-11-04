# Rebranding local — 2026-09-19

Implementação sobre o repositório existente, sem commit, push, PR ou deploy.

## Direção

Colagem tecnológica com pixel art, papel claro, grafite e azul cobalto. A marca usa letras recortadas em CSS; navegação e controles usam SVGs em pixel. A ilustração do hero é uma imagem decorativa separada: textos, links, conteúdo e controles continuam em HTML.

- Mantidas as rotas `/`, `/posts`, `/posts/:slug`, `/projects`, `/talks` e `/about`.
- Preservados os quatro projetos, URLs e tecnologias, a palestra e os arquivos Markdown dos posts.
- Sumário do post transferido da navegação principal para uma coluna do artigo; em telas menores, aparece acima do texto. Lista de posts recentes continua disponível.
- Player no rodapé do documento, com play/stop e volume acessível por teclado e toque. Ajustar volume não recria mais o sintetizador.
- Tema claro/escuro e idioma continuam persistidos. Português do navegador é reconhecido; `lang` acompanha o idioma.
- Conteúdo de Sobre mantido nos dois idiomas; link de email corrigido para `mailto:`.
- Datas de posts usam UTC para não retroceder um dia por causa do fuso local.
- Estados de carregamento, vazio e post inexistente preservados. Animações respeitam `prefers-reduced-motion`.

## Ilustração

Arquivo: `src/assets/pixel-collage.webp` (1254 × 1254, alpha, aproximadamente 314 KiB).
Gerada com a ferramenta integrada de imagegen a partir do conceito aprovado, e convertida para WebP com `cwebp -q 88`. Sem serviço de geração no runtime do site.

Prompt final:

> Generate a production website illustration asset based on ONLY the hero collage artwork in the right side of this reference. The reference is style/composition input, not an image to reproduce in full. Output a single tightly composed square illustration on a genuinely transparent background, no website text, navigation, headings, project cards or page layout. Subject: sophisticated whimsical creative-computing collage. An isometric retro desktop computer in finely crafted crisp pixel art, cobalt blue, charcoal and ivory with limited dither shading; dark monitor with tiny lime command prompt >_ and no other text. Behind computer on the upper right a small paper browser window with three tiny square controls and a cobalt pixel-art ringed planet partly escaping the frame. Behind these two objects a torn off-white graph-paper scrap with sparse thin blue grid and a tiny node diagram, a torn black halftone paper patch and two small translucent tape pieces. Add one cobalt pixel spark, a tiny lime pixel cursor and one blue floppy disk near the computer, a winding blue cable. Objects balanced diagonally, mostly computer lower left and orbital window upper right, enough transparent negative space around silhouette. A tactile printed-paper collage of crisp pixel artwork, intentional torn edges, subtle contact shadows. Pixel art should have deliberate sharp square clusters, not blurry voxel rendering. No pink, flowers, cute mascots, sentimental quotes, hands, desk surface, background rectangle, white border, logos or watermarks. No text other than >_. Palette must closely match #2145f5 cobalt, #16171c charcoal, #f5f4ef paper, #c5ec37 lime. This is a foreground decorative hero asset that will be displayed at 560px wide on both light and dark backgrounds.

## Validação

- `npm run build`: TypeScript + build de produção aprovados.
- `npm run lint`: sem erros; aviso existente de Fast Refresh em `themeContext.tsx`.
- Navegador local: rotas, quatro projetos e seus links, palestra e thumbnail, artigo PT/EN e destinos do sumário.
- Play, alteração do volume durante reprodução, continuidade ao trocar página e stop.
- Persistência de idioma/tema após recarregar; recuperação de post inexistente.
- Larguras de 320, 390 e 1440 px; corrigido overflow da arte ASCII no arquivo de projetos a 320 px.
- Sem erros no console durante a verificação final.

O build mantém o aviso de bundle principal acima de 500 kB, principalmente pela biblioteca de áudio e pelo renderizador Markdown já existentes. Otimização de carregamento não faz parte desta mudança visual. Os avisos do audit das dependências existentes não foram tratados neste rebranding.

## Executar

```sh
npm ci
npm run dev -- --host 127.0.0.1
```

## Refinamento dos posts — 2026-09-19

A pedido da Anna, os posts mantêm a estética de diretório do site original: `~/posts/`, arquivos `.md` e ramificações. A mesma listagem aparece na home e no arquivo de posts. Dentro do artigo, a pasta contém o arquivo atual e seus tópicos aninhados por nível de heading. A árvore mantém links nativos e um disclosure HTML acionável pelo teclado, sem simular controles de um editor.

Validados os destinos das âncoras em PT/EN, seleção do arquivo atual, abrir/fechar a pasta com Enter e ausência de overflow a 320 e 1280 px. Conteúdo Markdown preservado.

## Direção ASCII — 2026-10-22

A interface passa de colagem para uma composição de texto, fundo liso e azul, com marca entre colchetes, desenhos ASCII dos projetos e uma companhia animada na home. Conteúdo, rotas e diretório de posts preservados.

Três cenas de patos em rotação: o patinho original nadando, uma família de patos e outro patinho se movimentando pela água. Filmagens de Nicky Pe (2021) e Grisha Grishkoff (2022), Pexels. Anna escolheu patos pela associação pessoal com curiosidade e aprendizado. Legenda: “um pouco de tudo, sempre aprendendo”.

Somente **Dither**, inspirado no [ASCII Magic](https://www.ascii-magic.com/): matriz Bayer 8×8, azul e marfim. Sem seletor de filtro, troca manual ou botão de pausa, conforme pedido. Uma nova carga avança para a próxima das três cenas; a navegação interna mantém a cena. A primeira visita começa com o patinho original. Sem armazenamento, continua funcionando com o original.

Clipes locais em `public/media/`, sem áudio, 8–10 segundos, 640 px e 24 fps; apenas a cena escolhida é carregada. Autoria/licença em `public/media/CREDITS.txt`. Nenhuma dependência nova ou requisição externa para a animação. Mantidos movimento reduzido, suspensão fora da tela/aba oculta e mensagens de carregamento/falha em PT/EN.

Seções e diretório de posts preservados. Validação: rotação das três cenas e animação no navegador, lint e build; avisos anteriores de Fast Refresh e bundle permanecem. Evidências em `~/Documents/work/pr-evidence/ANAKAN-ASCII-2026-10-22/`. Tudo somente local.

A carinha original (`src/assets/smiling-face.svg`) foi restaurada no perfil da página Sobre e na assinatura do rodapé, preservando o arquivo original, conforme pedido da Anna.

## Contador do GitHub — 2026-10-22
O contador da home consulta `https://api.github.com/users/annaluizando` e usa `public_repos`. Rótulo: “Repositórios públicos” / “Public repositories”, com link para a lista no GitHub. É a métrica pública do perfil, incluindo forks; não representa somente repositórios com licença open-source nem os quatro projetos escolhidos para destaque.

Sem token ou segredo no cliente. Cache local e em memória por uma hora; requisições simultâneas compartilham a mesma consulta. Timeout de 8 segundos, validação de resposta, suporte a armazenamento bloqueado. Falha com cache mantém o último valor e o identifica no tooltip/leitor de tela; sem valor anterior, mostra “—”, nunca o número de projetos destacados como se viesse do GitHub.

Validação: API pública retornou 19; mesmo total observado no navegador. Testados cache válido/expirado, requisição compartilhada, 403, offline, payload inválido, armazenamento bloqueado e zero repositórios. Build aprovado; lint sem erros e com o aviso preexistente de Fast Refresh.
