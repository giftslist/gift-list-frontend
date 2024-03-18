# 🎁 Gift's List - Special Occasion Gift List 🎉

Imagine a situation where a couple is about to get married and wants to create an online gift list to make it easier for guests. They decide to use your software, which offers an intuitive and practical way to manage this list.

[🇧🇷 Versão em Português](README_pt-BR.md)

## 📝 Storytelling

### Event Registration

1. The couple starts by creating an event, whether it's a wedding, kitchen tea, baby shower, etc.
2. They enter the event's name, beneficiary (the couple's name, for example), and the address for gift delivery.
3. Then, they begin adding desired gifts to the list, specifying details such as gift name, desired quantity, and a brief description.

### Sharing the Link

1. After creating the list, the system generates a unique link for the event, which can be shared with guests.
2. Guests access the link and are directed to the login/signup page.

### Guest Registration

1. Guests register by filling in their name, email, phone number with area code, and creating a password.
2. After registration, they are redirected to the event's gift list.

### Choosing Gifts

1. Guests view the available gift list, select desired items, and indicate the desired quantity.
2. Upon clicking "select", a summary screen appears, showing the chosen gifts and allowing for corrections.

### Confirmation of Choice

1. Guests confirm their selection, and a feedback message is displayed, encouraging them to review the chosen gifts.
2. They can go back to correct or confirm the selection.

### Final Feedback

1. After final confirmation, a feedback screen thanks the guest and provides information on sending the gifts to the address registered for the event.

## 🛠️ Technologies Used

- **Next.js**: React framework for production-grade applications. [Learn more](https://nextjs.org/)
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs. [Learn more](https://tailwindcss.com/)
- **React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation. [Learn more](https://react-hook-form.com/)
- **TypeScript**: JavaScript with syntax for types. [Learn more](https://www.typescriptlang.org/)

## 🎉 Getting Started

To start the development server, simply run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 🚀 Deploy on Vercel

Deploy your Next.js app easily using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For detailed instructions, see [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## 🎈 Contributing

Contributions are welcome! Feel free to open an issue to discuss new features, bugs, or submit a pull request.

🌟 Let's make gift-giving easier and more delightful together! 🌟

# Insomnia Export README

Este arquivo README descreve as partes essenciais do arquivo de exportação do Insomnia.

## Detalhes de Exportação

- **Formato de Exportação**: Versão 4
- **Data de Exportação**: 13 de março de 2024, 23:48:48 UTC
- **Fonte de Exportação**: Insomnia Desktop App, versão v2023.2.2

## Recursos Principais

### 1. Documentação

- **Método**: GET
- **URL**: {{ _.base_url }}/api
- **Descrição**: Documentação da API

### 2. Grupo de Solicitações: Usuário

Este grupo contém solicitações relacionadas aos usuários da aplicação.

#### 2.1. Login

- **Método**: POST
- **URL**: {{ _.base_url }}/users/login
- **Descrição**: Endpoint para login de usuários
- **Corpo da Solicitação**:
  ```json
  {
  	"email": "teste2@gmail.com",
  	"password": "12345678"
  }
  ```
- **Cabeçalhos**:
  ```json
  [{ "name": "Content-Type", "value": "application/json" }]
  ```

#### 2.2. Cadastro

- **Método**: POST
- **URL**: {{ _.base_url }}/users
- **Descrição**: Endpoint para cadastro de novos usuários
- **Corpo da Solicitação**:
  ```json
  {
  	"email": "teste2@gmail.com",
  	"name": "teste",
  	"password": "12345678"
  }
  ```
- **Cabeçalhos**:
  ```json
  [{ "name": "Content-Type", "value": "application/json" }]
  ```

## Ambientes

### Ambiente Base

- **Nome**: Base Environment
- **URL Base**: http://localhost:4000

### Ambiente de Desenvolvimento

- **Nome**: dev
- **URL Base**: http://localhost:4444
