# Junior — Portfólio Criador 3D & Desenvolvedor Web

Landing page de portfólio pessoal desenvolvida para **Junior (`JuniorDev-Prog`)**, combinando estética escura minimalista (`#0C0C0C`), tipografia expressiva (**Kanit**), animações fluidas guiadas por rolagem (**Framer Motion**) e integração de projetos web reais do GitHub rodando ao vivo dentro dos cards.

> **Aviso:** Este projeto é um portfólio pessoal independente desenvolvido por **Junior (`JuniorDev-Prog`)** — **não é um projeto MATI**.

---

## Principais Recursos

- **Barra de Progresso de Scroll**: Indicador fino e animado fixado no topo da tela que acompanha suavemente a posição de leitura da página.
- **Seção Hero**:
  - Navegação superior responsiva (**Sobre**, **Preços**, **Projetos**, **Contato**) com rolagem suave.
  - Tipografia de impacto (`OI, SOU JUNIOR`) com efeito de gradiente metálico.
  - Retrato 3D estilizado de Junior com recorte transparente, iluminação cinematográfica de estúdio e efeito magnético interativo (`Magnet`) que acompanha o cursor.
- **Marquee Guiado por Scroll**: Duas fileiras horizontais de prévias visuais em movimento que se deslocam em direções opostas conforme a rolagem da página.
- **Seção Sobre Mim**:
  - Quatro elementos 3D decorativos nos cantos com entradas suaves (`FadeIn`).
  - Texto animado caractere por caractere (`AnimatedText`) cuja opacidade evolui de acordo com o progresso do scroll.
- **Seção Serviços**: Superfície branca contrastante com cantos arredondados apresentando os 5 serviços (**Modelagem 3D**, **Renderização**, **Motion Design**, **Branding** e **Web Design**) com tipografia fluida (`clamp()`).
- **Seção Projetos com Sticky Stacking e Sites ao Vivo**:
  - Cards empilháveis que reduzem levemente de escala ao rolar a página.
  - Prévia ao vivo dos sites diretamente no card + modal interativo em tela cheia com abas **Site ao Vivo** e **Galeria**:
    1. **01 — Porsche Sales Intelligence** ([Repositório](https://github.com/JuniorDev-Prog/Dashboard-porscher-sales))
    2. **02 — Projeto Food** ([Site ao Vivo](https://juniordev-prog.github.io/PROJETO-FOOD/) · [Repositório](https://github.com/JuniorDev-Prog/PROJETO-FOOD))
    3. **03 — DevLinks** ([Repositório](https://github.com/JuniorDev-Prog/devlinks)) — personalizado com a foto de Junior e alternância entre modo escuro e claro.
- **Modal de Contato**: Formulário de briefing com seleção de serviço, feedback de envio e cópia rápida de e-mail.

---

## Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lucide React**
- **Google Fonts — Kanit** (pesos 300 a 900)

---

## Estrutura do Projeto

```text
├── index.html
├── public/
│   ├── assets/                 # Retrato 3D recortado e assets estáticos
│   └── demos/                  # Versões interativas locais (Porsche Dashboard e DevLinks)
└── src/
    ├── App.tsx                 # Layout principal, barra de scroll e controle dos modais
    ├── index.css               # Tema global (#0C0C0C), gradientes e máscaras
    ├── data/
    │   └── portfolio.ts        # Dados de serviços, marquee e projetos do GitHub
    └── components/
        ├── HeroSection.tsx
        ├── MarqueeSection.tsx
        ├── AboutSection.tsx
        ├── ServicesSection.tsx
        ├── ProjectsSection.tsx
        ├── ProjectLightboxModal.tsx
        ├── ContactModal.tsx
        ├── AnimatedText.tsx
        ├── Magnet.tsx
        ├── FadeIn.tsx
        ├── ContactButton.tsx
        ├── LiveProjectButton.tsx
        └── ResilientImage.tsx
```

---

## Como Executar Localmente

### Pré-requisitos
- **Node.js** 18+ e **npm**

### Passos

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento (porta 3000)
npm run dev

# 3. Verificar tipagem TypeScript
npm run lint

# 4. Gerar build de produção
npm run build
```

---

## Autor

**Junior (`JuniorDev-Prog`)**
- GitHub: [github.com/JuniorDev-Prog](https://github.com/JuniorDev-Prog)
- LinkedIn: [linkedin.com/in/junior-dev](https://www.linkedin.com/in/junior-dev/)
- Links: [bento.me/junior-dev](https://bento.me/junior-dev)

---

## Licença

Este projeto é distribuído sob a licença **MIT**. Projeto pessoal e independente — **não é um projeto MATI**.
