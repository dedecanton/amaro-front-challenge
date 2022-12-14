# Amaro front-end challenge

## Explicação do projeto

Essa aplicação foi feita com o objetivo de praticar os conhecimentos de ReactJS e seu ecossistema, o desafio foi selecionado do repositório [frontend-challenges](https://github.com/felipefialho/frontend-challenges) do [Felipe Fialho](https://github.com/felipefialho).

O projeto consiste em uma site de catálogo para alguns produtos da AMARO que foram disponibilizados em um json.

### Página Inicial:

Inicialmente todos os produtos são mostrados, contendo:

- Imagem
- Nome
- Preço
- Se está em promoção (porcentagem, antigo valor e valor atual)
- Tamanhos disponíveis
- Selo para mostrar se está à venda.

É possível adicionar produto por tamanho no carrinho (somente produtos à venda, e tamanhos disponíveis) .

Além de mostrar os itens, há opção (checkbox) de mostrar apenas os produtos à venda, como também de procurar algum item pelo nome na barra de pesquisa.

![pagina inicial](https://user-images.githubusercontent.com/67431433/184987127-e718a03f-6170-4b6d-9672-a92075bcfd79.png)


### Página do carrinho:

- É possível visualizar todos os items adicionados no carrinho, sendo mostrado nome, imagem, preço e quantidade
- Pode incrementar e/ou diminuir a quantidade do item
- É possível excluir o item
- Exibição do valor total
- **Os items do carrinho são persistidos mesmo com reloads.**
![cart](https://user-images.githubusercontent.com/67431433/184987236-761adb25-3ddb-43c9-80c3-0f588c2ff109.png)

## Demonstração da aplicação

- Deploy na vercel: [https://amaro-front-challenge.vercel.app/](https://amaro-front-challenge.vercel.app/)

https://user-images.githubusercontent.com/67431433/184988338-873dc850-31a7-4163-8eee-0eedc61eac30.mp4

## Tecnologias/bibliotecas utilizadas

- ReactJS
- Typescript
- Sass (SCSS)
- React Router
- Redux
- Redux Toolkit
- Redux Persist

## Como rodar o projeto

1. Clonar repositório (git clone [https://github.com/dedecanton/amaro-front-challenge](https://github.com/dedecanton/amaro-front-challenge))
2. Entrar na pasta do projeto
3. Instalar as dependências ( rodar *yarn* *no terminal do projeto* )
4. Para rodar em ambiente de desenvolvimento, rode o script yarn *start*
5. Para fazer build da aplicação, rode o script yarn *build*
