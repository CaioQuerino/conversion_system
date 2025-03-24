# Conversor de Dólar para Real

Este é um aplicativo web que permite converter valores em dólar para real utilizando a cotação do dia fornecida pelo Banco Central do Brasil.

## Tecnologias Utilizadas
- **React** (com Hooks e memoização para otimização de performance)
- **TypeScript** (para tipagem segura e escalabilidade)
- **SASS** (para estilização modular e reutilizável)

## Funcionalidades
✅ Busca automática da cotação do dólar do dia
✅ Conversão de valores em dólar para real
✅ Estilização responsiva e acessível
✅ Fundo dinâmico com imagens aleatórias trocando automaticamente

## Instalação e Execução

### 1. Clone este repositório
```sh
$ https://github.com/CaioQuerino/conversion_system.git
$ cd conversion_system
```

### 2. Instale as dependências
```sh
$ npm install  # ou yarn install
```

### 3. Execute o projeto
```sh
$ npm run dev  # ou yarn dev
```
O aplicativo estará disponível em `http://localhost:5173/` (ou porta definida pelo Vite).

## Estrutura do Projeto
```
/conversor-dolar-real
│── src
│   ├── components
│   │   ├── ConversorDParaR.tsx  # Componente principal do conversor
│   │   ├── Header.tsx           # Cabeçalho da aplicação
│   ├── sass
│   │   ├── _variables.sass      # Variáveis globais de estilos
│   │   ├── _utilities.sass      # Mixins reutilizáveis
│   │   ├── styles.sass          # Estilos gerais da aplicação
│   ├── App.tsx                  # Componente raiz
│   ├── main.tsx                 # Ponto de entrada
│── package.json
│── README.md
```

## API Utilizada
- Banco Central do Brasil ([PTAX API](https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata))

A API retorna a cotação do dólar para a data especificada, permitindo conversão baseada na taxa de compra.

## Melhorias Futuras
- [ ] Adicionar suporte a outras moedas
- [ ] Melhorar acessibilidade e contraste
- [ ] Criar testes automatizados para validação das conversões

---
Feito com ❤️ por [Caio Querino](https://github.com/CaioQuerino) 🚀


