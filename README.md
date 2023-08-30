# Cardápio-API

Bem-vindo à documentação da sua aplicação de gerenciamento de cardápio! Esta aplicação permite que você gerencie categorias, produtos e menus de forma eficiente.

## Configuração

Certifique-se de seguir estas etapas antes de executar a aplicação:

1. Instale as dependências utilizando o comando:

```
npm install
```

2. Configure o arquivo `.env` com as variáveis de ambiente necessárias, como `MONGODB_URI`.

### Executando a Aplicação

Para executar a aplicação, utilize o seguinte comando:
```
npm run start
```

Isso iniciará o servidor e você poderá acessar a API através das URLs correspondentes.
Ao iniciar a aplicação, automaticamente serão criados dois menus: um para o turno do dia e outro para o turno da noite. Esses menus serão criados apenas se ainda não existirem na base de dados.

### Endpoints Disponíveis

Aqui estão alguns dos principais endpoints disponíveis na sua aplicação:

- **Categorias**:
  - `GET /categories`: Obtém todas as categorias cadastradas.
  - `GET /categories/:id`: Obtém os detalhes de uma categoria específica.
  - `GET /categories/:id/details`: Obtém os produtos de uma categoria específica.
  - `POST /categories`: Cria uma nova categoria.
  - `PUT /categories/:id`: Atualiza os dados de uma categoria.
  - `DELETE /categories/:id`: Remove uma categoria.
  

- **Produtos**:
  - `GET /products`: Obtém todos os produtos cadastrados.
  - `GET /products/:id`: Obtém os detalhes de um produto específico.
  - `POST /products`: Cria um novo produto.
  - `PUT /products/:id`: Atualiza os dados de um produto.
  - `DELETE /products/:id`: Remove um produto.

- **Menus**:
  - `GET /menus`: Obtém todos os menus disponíveis.
  - `GET /menus/current`: Obtém o menu atual com base no horário.

### Como Adicionar uma Nova Categoria e um Novo Produto

#### Adicionar uma Nova Categoria

1. Abra o seu cliente HTTP (por exemplo, Insomnia ou Postman).

2. Crie uma requisição do tipo **POST** e configure o endpoint para `http://localhost:3000/categories` (ou o URL correspondente da sua aplicação).

3. No corpo da requisição, insira um objeto JSON com o nome da nova categoria. Exemplo:
   ```json
   {
     "name": "Bebidas"
   }
   ```
4. Envie a requisição. Você deverá receber uma resposta indicando se a categoria foi criada com sucesso ou não.

#### Adicionar um Novo Produto

1. Abra o seu cliente HTTP (por exemplo, Insomnia ou Postman).

2. Crie uma requisição do tipo **POST** e configure o endpoint para `http://localhost:3000/products` (ou o URL correspondente da sua aplicação).

3. No corpo da requisição, insira um objeto JSON com os detalhes do novo produto, incluindo o nome, preço, imagem, descrição, o ID da categoria à qual o produto pertence e o ID do menu ao qual o produto está associado. Exemplo:
 ```json
   {
  "name": "Coca-Cola",
  "price": 2.5,
  "image": "coca-cola.jpg",
  "description": "Refrigerante sabor cola",
  "categoryId": "64ef916a6c8c1d3462df3aec",
  "menuId": "64ef59f470b55741471fbcb8"
}

   ```

4. Envie a requisição. Você deverá receber uma resposta indicando se o produto foi criado com sucesso ou não.

Certifique-se de substituir os valores dos IDs de categoria e menu pelos IDs válidos da sua própria base de dados.

Lembre-se de que as URLs e os endpoints podem variar com base na configuração da sua aplicação. Certifique-se de usar as URLs corretas de acordo com o ambiente em que você está executando a aplicação (por exemplo, localhost ou um servidor de produção).