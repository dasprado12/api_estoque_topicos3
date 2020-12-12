
# Estoque API

API responsável por gerenciar estoques de produtos

  

## Requisitos

  

[mongo](https://www.mongodb.com/)
[node](https://nodejs.org/en/)
[yarn](https://classic.yarnpkg.com/en/docs)

  

## Como rodar

service mongod start
yarn install
yarn start
 

## Endpoints

|  | Usuários|Produtos | Tipos|
|--|--|--|--|
|GET   | ✔|✔ |✔ |
| POST | ✔|✔ |✔ | 
|PATCH|| ✔| |
|DELETE| |✔ |✔ |

### Usuários
Estes devem se cadastar na API enviando as seguintes credenciais: 

    {
	    nome: "Daniel Prado"
	    email: "danielsprado12@gmail.com"
	    senha: "12345"
    }
  
 Já para Login, apenas o email e senha são necessários

    /login (post)
    /cadastro (post)

### Produtos

Após logado na plataforma, o usuário pode cadastrar um produto enviando os seguintes campos:

    {
	    nome: "Biscoito Trakinas"
	    quantidade: 10
	    descricao: "Produto de origem brasileira"
	    tipo: Biscoito
	    preço: 4
    }
  
  É possível editar o produto após seu cadastro, assim como sua remoção

    /produtos (get)
    /produtos/:id (get)
    /produtos/:id (get)
    /produtos (post)
    /produtos/:id (patch)
    /produtos/:id (delete)

### Tipos
O usuário pode cadastrar tipos de produtos - como categorias - para facilitar a sua pesquisa em uma lista gigante de produtos. Para cadastro, basta enviar o seguinte campo:

    {
	    nome: "Alcoolico"
    }

Seus endpoints são:

    /tipos (get)
    /tipos (post)
    /tipos/:id (delete)
