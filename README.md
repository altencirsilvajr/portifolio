# Portfólio de Altencir Junior

[![Deploy static content to Pages](https://github.com/altencirsilvajr/portifolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/altencirsilvajr/portifolio/actions/workflows/deploy.yml)

> Um portfólio moderno, responsivo e de alta performance, desenvolvido com React e Vite para destacar experiências, habilidades e projetos com foco em desenvolvimento Full Stack .NET e Integrações com IA.

## 🚀 Tecnologias e Arquitetura

Este portfólio foi arquitetado com as melhores práticas de Clean Code, priorizando um carregamento rápido e uma navegação ultra-fluida.

- **Frontend**: React.js (via Vite)
- **Estilização**: CSS Puro Moderno (Variáveis CSS, CSS Grid/Flexbox)
- **Ícones**: React Icons (Feather)
- **Design System**: Tema Escuro Premium ("Dark Mode"), foco em contrastes de acessibilidade, tipografia moderna (Inter e Outfit) e eliminação de gargalos de renderização na GPU (GPU-friendly styling).
- **Hospedagem & CI/CD**: GitHub Pages, com deploy contínuo (CD) através de GitHub Actions.

## ⚡ Otimizações de Performance Aplicadas

Como parte do aprimoramento contínuo:
- **Redução de Paint/Layout Shifts**: Efeitos de "backdrop-filter" complexos e "blur" massivos que exerciam forte uso de hardware durante o scroll foram substituídos por cores de background otimizadas, garantindo que o portfólio rode sempre a **60 fps** até mesmo em dispositivos de baixo desempenho.
- **Build Otimizado**: Configurações de `base path` e separação de chunks ativas pelo Vite.

## 💻 Rodando Localmente

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/altencirsilvajr/portifolio.git
   ```

2. **Acesse o diretório:**
   ```bash
   cd portifolio
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   > Acesse `http://localhost:5173` no seu navegador.

## 📫 Como Entrar em Contato

- **Email**: altencirsilvajr@gmail.com
- **LinkedIn**: [altencir-junior](https://www.linkedin.com/in/altencir-junior)
- **GitHub**: [altencirsilvajr](https://github.com/altencirsilvajr)

---
*© Altencir Junior. Construído com foco em qualidade, código limpo e modernidade.*
