# 🎧 WavesMusic - Plataforma de E-commerce Musical

![Badge de Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Badge de Licença](https://img.shields.io/badge/license-MIT-green)

## 🎵 Sobre o Projeto

O **WavesMusic** é um projeto de e-commerce full-stack focado em produtos relacionados à música. A plataforma foi idealizada para ser uma experiência completa de compra online, desde o cadastro de usuários até a finalização do pagamento, com um diferencial: a integração com a API do Spotify para buscar e exibir produtos de artistas.

Este repositório representa a **versão 2.0** do projeto, que está sendo reescrito do zero com tecnologias modernas como Node.js e React, com o objetivo de aprofundar conhecimentos em desenvolvimento full-stack e aplicar as melhores práticas do mercado.

---

## 🚀 Tecnologias Utilizadas

Este projeto é construído com as seguintes tecnologias:

#### **Backend**
* **Node.js:** Ambiente de execução do JavaScript no lado do servidor.
* **Express.js:** Framework para a construção da API RESTful.
* **MongoDB Atlas:** Banco de dados NoSQL na nuvem para armazenar os dados da aplicação.
* **Mongoose:** Biblioteca para modelagem dos dados do MongoDB.
* **Dotenv:** Para gestão de variáveis de ambiente de forma segura.
* **CORS:** Para permitir a comunicação entre o frontend e o backend.

#### **Frontend (Planejado)**
* **React:** Biblioteca para a construção da interface de usuário.
* **Axios:** Para realizar as requisições HTTP para o backend.

---

## ✨ Funcionalidades

- [x] Estrutura inicial do backend com Node.js e Express.
- [x] Conexão com a base de dados MongoDB Atlas.
- [ ] Sistema de Cadastro e Autenticação de Usuários (JWT).
- [ ] CRUD completo para Produtos.
- [ ] Integração com a API do Spotify para popular o catálogo de produtos.
- [ ] Funcionalidade de Carrinho de Compras.
- [ ] Simulação de Checkout e Processamento de Pagamentos.
- [ ] Interface reativa e moderna com React.

---

## 🏁 Começando

Para executar o backend do projeto localmente, siga os passos abaixo.

### **Pré-requisitos**

Você vai precisar ter o [Node.js](https://nodejs.org/en/) (versão LTS recomendada) e o [Git](https://git-scm.com/) instalados na sua máquina.

### **Instalação**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/ericakathlen/WavesMusic.git](https://github.com/ericakathlen/WavesMusic.git)
    ```

2.  **Navegue para a pasta do backend:**
    ```bash
    cd WavesMusic/backend
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    * Crie um ficheiro `.env` na raiz da pasta `backend`.
    * Copie o conteúdo do exemplo abaixo e cole no seu ficheiro `.env`, substituindo os valores pelas suas próprias credenciais.
    ```.env
    # Porta do servidor
    PORT=3001

    # Sua string de conexão do MongoDB Atlas
    MONGO_URI=mongodb+srv://seu_usuario:sua_senha@cluster.mongodb.net/waves-music
    ```

5.  **Inicie o servidor:**
    ```bash
    node index.js
    ```
    O servidor estará rodando em `http://localhost:3001`.

---

## 🗺️ Roadmap do Projeto

* [ ] **Q4 2025:** Finalizar a API de Usuários (Autenticação e Perfil).
* [ ] **Q4 2025:** Desenvolver a API de Produtos e a integração com o Spotify.
* [ ] **Q1 2026:** Iniciar o desenvolvimento da interface com React.
* [ ] **Q1 2026:** Implementar o Carrinho de Compras e o Checkout.

---

## 👤 Autora

Feito com ❤️ por **Erica Kathlen**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/SEU_LINKEDIN_AQUI/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ericakathlen)
