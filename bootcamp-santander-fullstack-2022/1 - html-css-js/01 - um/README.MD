# Aula 01: Introdução a criação de websites com HTML5 e CSS3

## Estrutura Básica.

- Tag html

A tag html é a raiz do seu documento, todos os elementos HTML devem estar dentro dela. E nela nós informamos ao navegador qual é o idioma desse nosso documento, através do atributo lang, para o português brasileiro usamos pt-BR.

- Tag head

A tag head contém elementos que serão lidos pelo navegador, como os metadados - um exemplo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o CSS através das tags style e link - veremos a diferença quando falarmos sobre CSS - e o título da página com a tag title.

- Tag body

E dentro da tag body colocamos todo o conteúdo visível ao usuário: textos, imagens, vídeos.

## Semântica

Durante muitos anos o elemento padrão no HTML era a div, construíamos nosso conteúdo todo baseado nela.
Mas em 2014 saiu a quinta versão do HTML, e com ela vieram vários mudanças importantes, como performance e acessibilidade, mas nesse curso introdutório vamos focar na semântica. A semântica nos permite descrever mais precisamente o nosso conteúdo, agora um bloco de texto não é apenas uma div, agora é um article e tem mais
significado assim. E temos vários elementos para ressignificar as divs:

* Tag section: 
Representa uma seção genérica de conteúdo quando não houver um elemento mais específico para isso.

* Tag header:
É o cabeçalho da página ou de uma seção da página e normalmente contém logotipos, menus, campos de busca.

* Tag article:
Representa um conteúdo independente e de maior relevância dentro de uma página, como um post de blog, uma notícia em uma barra lateral ou um bloco de comentários. Um article pode conter outros elementos, como header, cabeçalhos, parágrafos e imagens.

* Tag aside:
É uma seção que engloba conteúdos relacionados ao conteúdo principal, como artigos relacionados, biografia do autor e publicidade. Normalmente são representadas como barras laterais.

* Tag footer:
Esse elemento representa o rodapé do conteúdo ou de parte dele, pois ele é aceito dentro de vários elementos, como article e section e até do body. Exemplos de conteúdo de um <footer> são informações de autor e links relacionados.

* Tag h1 à h6:
Eles não foram criados na versão 5 do HTML e nem são específicos para semântica, mas servem para esse propósito. São utilizados para marcar a importância dos títulos, sendo h1 o mais importante e h6 o menos. Uma dica: use apenas um h1 por página, pois ele representa o objetivo da sua página.

## Textos e links

Já falamos anteriormente sobre os elementos h1-h6 e, eles são essenciais para nos indicar visualmente a importância e localização de seções de texto na página, mas para textos maiores e mais densos usamos o elemento p.

* Tag p:
Representa um parágrafo, mas ele não suporta apenas texto, podemos adicionar imagens, código, vídeos e vários outros tipos de conteúdo dentro dele.

* Tag a:
Significa anchor/âncora, ele representa um hyperlink, é ele que interliga vários conteúdos e páginas na web.

O **href** representa o hyperlink para onde sua âncora aponta, pode ser uma página do seu ou de outro site, um e-mail e até mesmo um telefone, os dois últimos precisam dos prefixos mailto: e tel:, respectivamente.

O **target** neste momento vai servir para nos ajudar a abrir nossos links em outra aba do navegador usando o valor _blank.

## Imagens
* Tag img: 
É feita para representar imagens, ele é um daqueles elementos sem tag de fechamento.

O elemento img é bem simples, contendo apenas **2 atributos** próprios, o **src** e o **alt**.

O **src** é obrigatório e guarda o caminho para a imagem que você quer mostrar na página.

O **alt** não é obrigatório mas é altamente recomendado por melhorar a acessibilidade, ele mostra a descrição da imagem caso ela não carregue e leitores de tela usam esse atributo para descrever a imagem para o usuário saber o que ela signific

## Listas
Listas servem para agrupar uma coleção de itens, como uma lista de ingredientes ou, como será no nosso caso, uma lista com contatos.

* Tag ul:
Cria uma lista não ordenada, onde a ordem dos elementos não é importante, e é representada com pontos, círculos ou quadrados.

* Tag ol:
Serve para criar lista ordenadas, nessas a ordem importa, portanto elas são representadas com números, algarismos romanos ou letras.

* Tag li: 
É um item dentro de uma dessas listas. Um **li** pode conter vários tipos de conteúdos, como parágrafos, imagens e até outras listas.
