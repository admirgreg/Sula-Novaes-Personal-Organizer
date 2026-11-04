<div align="center">

# 🧺 Sula Novaes | Personal Organizer

**Site institucional em HTML, CSS e JavaScript puros, com visual inspirado na identidade da marca.**

![HTML5](https://img.shields.io/badge/HTML5-9E7D5E?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-7A5C41?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-3B2C21?style=flat-square&logo=javascript&logoColor=white)
![Responsivo](https://img.shields.io/badge/Responsivo-sim-CBB59C?style=flat-square)

</div>

---

## ✨ Sobre o projeto

Site de apresentação de uma personal organizer, feito para mostrar os serviços, exibir trabalhos em formato de antes e depois e facilitar o pedido de orçamento. Não usa frameworks nem etapa de build: abriu a pasta, abriu o site.

## 🧩 O que tem no site

- **Abertura** com a logo da marca e chamadas para orçamento e Instagram
- **Serviços** organizados por ambiente
- **Antes e depois** com os projetos em cartões
- **Depoimentos** em carrossel automático, que pausa ao passar o mouse ou tocar
- **Formulário de orçamento** que monta a mensagem e abre a conversa no WhatsApp
- **Botão flutuante de WhatsApp** disponível em toda a página
- **Pré-visualização de link** (Open Graph) para compartilhamento em redes e apps de mensagem
- **Modo escuro** automático, conforme a preferência do aparelho
- **Layout responsivo**, pensado primeiro para o celular

## 🗂️ Estrutura

```
site-sula/
├── index.html          # textos e estrutura da página
├── css/
│   └── style.css       # visual (cores da marca no :root)
├── js/
│   └── main.js         # antes e depois, carrossel e formulário
├── assets/
│   ├── logo.png        # logo em bege, fundo transparente
│   ├── favicon.ico     # ícone da aba
│   ├── favicon.png
│   ├── apple-touch-icon.png
│   ├── og-image.png    # imagem da pré-visualização do link
│   └── feedbacks/      # prints dos depoimentos
└── README.md
```

## 🎨 Identidade visual

| Cor | Uso | Código |
|---|---|---|
| Marrom | cor principal da marca | `#9E7D5E` |
| Marrom escuro | detalhes e hover | `#7A5C41` |
| Bege | textos sobre fundo marrom | `#EFE9E4` |
| Cacau | textos e botão flutuante | `#3B2C21` |

**Tipografia:** [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) nos títulos e [Jost](https://fonts.google.com/specimen/Jost) no texto corrido, ambas via Google Fonts.

## 🚀 Como rodar no computador

1. Baixe ou clone o repositório
2. Abra a pasta no [VS Code](https://code.visualstudio.com/)
3. Instale a extensão **Live Server** e clique em **Go Live**

Também funciona abrindo o `index.html` direto no navegador.

## ✏️ Como editar

| Quero mudar... | Onde mexer |
|---|---|
| Textos e seções | `index.html` |
| Cores e espaçamentos | `css/style.css` (variáveis no início do arquivo) |
| Projetos do antes e depois | `js/main.js`, no array `cases` |
| Depoimentos | `assets/feedbacks/` e a seção `depoimentos` do `index.html` |
| Dados de contato | `index.html` e `js/main.js` |

## 🌐 Publicação

O site é estático e roda no **GitHub Pages**:

1. Em **Settings → Pages**, escolha **Deploy from a branch**
2. Selecione a branch `main` e a pasta `/ (root)`
3. Salve e aguarde o endereço ser gerado

> Dica: depois de publicar, atualize o endereço do site nas tags `og:image` e `og:url` do `index.html` para a pré-visualização do link funcionar.

---

<div align="center">

Feito com carinho e muita organização 🤎

</div>
