# 💡 Projeto Motivarte

Aplicação web criada como experimento pra testar Node.js e Express, com foco em interatividade e positividade. O usuário pode gerar frases motivacionais aleatórias, desenhar livremente na tela e (originalmente) deixar comentários.

## 🚀 Funcionalidades

*   🎲 Geração de frases motivacionais aleatórias ao clicar no botão.
*   🎨 Área de desenho livre.
*   💬 Campo de comentários (sem funcionalidade ativa no momento).

## 🛠️ Tecnologias Usadas

*   **Frontend**: HTML, CSS, JavaScript puro
*   **Backend**: Node.js + Express
*   **Hospedagem**: [Vercel](https://vercel.com)

## 🔧 Como rodar localmente

### 1\. Clone o repositório

Baixe o código na sua máquina com o comando:

```bash
git clone https://github.com/devrayssa/aleatorio.git 
```

### 2\. Acesse a pasta do projeto

Entre na pasta recém-clonada:

```bash 
cd Motivarte
```   

### 3\. Instale as dependências

Garanta que o projeto tenha tudo o que precisa pra funcionar:

```bash
npm install 
```   

Esse comando vai ler o `package.json` e instalar os pacotes necessários (como o Express).

### 4\. Inicie o servidor

Suba a aplicação localmente:

```bash
node server.js
```   

### 5\. Acesse no navegador

Abra seu navegador preferido e vá até:

`http://localhost:3000` 

Você vai ver a interface com o canvas de desenho, botão de mensagens motivacionais e o campo de comentários.


## ⚠️ Observações

*   Projeto criado como teste/prática.
*   O banco de dados que armazenava comentários não está mais funcional.
*   Está hospedado em: aleatorio-pi.vercel.app
