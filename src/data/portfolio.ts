export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  year: string;
  role: string;
  summary: string;
  liveUrl: string;
  liveDisplayUrl: string;
  githubUrl: string;
  col1Images: [string, string];
  col2Image: string;
}

export const GITHUB_PROFILE_URL = 'https://github.com/JuniorDev-Prog';

export const HERO_PORTRAIT_URL = '/assets/junior_3d_hero_v2_cutout.png';

export const MARQUEE_IMAGES: string[] = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const ABOUT_DECORATIVE_IMAGES = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  object:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

export const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Modelagem 3D',
    description:
      'Criação de objetos, personagens ou ambientes detalhados sob medida para cada cliente, ideais para jogos, produtos e visualizações.',
  },
  {
    number: '02',
    name: 'Renderização',
    description:
      'Renders fotorrealistas de alta qualidade que destacam projetos com iluminação, texturas e materiais personalizados para dar vida às ideias.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Animações dinâmicas e motion graphics que trazem energia e narrativa visual para marcas, produtos e experiências digitais.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Construção de identidades visuais coesas -- de logotipos a sistemas completos de marca -- que comunicam presença clara e memorável.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Criação de sites limpos, modernos e focados em conversão, com atenção especial a layout, tipografia e experiência do usuário.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'porsche-sales-intelligence',
    number: '01',
    name: 'Porsche Sales Intelligence',
    category: 'GitHub · Dashboard Web',
    year: '2026',
    role: 'HTML5 · CSS3 · JavaScript · Chart.js',
    summary:
      'Dashboard interativa de inteligência comercial da Porsche desenvolvida no GitHub com indicadores de faturamento em USD, preço médio, modelos líderes e gráficos dinâmicos.',
    liveUrl: '/demos/porsche-sales.html',
    liveDisplayUrl: 'juniordev-prog / Dashboard-porscher-sales',
    githubUrl: 'https://github.com/JuniorDev-Prog/Dashboard-porscher-sales',
    col1Images: [
      '/src/assets/images/porsche_dashboard_kpi_1795381607394.jpg',
      '/src/assets/images/porsche_studio_render_1795381605296.jpg',
    ],
    col2Image: '/src/assets/images/porsche_dashboard_kpi_1795381607394.jpg',
  },
  {
    id: 'projeto-food',
    number: '02',
    name: 'Projeto Food',
    category: 'GitHub · Site ao Vivo',
    year: '2024',
    role: 'HTML5 · CSS3 · JavaScript · Responsivo',
    summary:
      'Landing page responsiva para restaurante e gastronomia construída do zero com HTML5, CSS3 e JavaScript, publicada ao vivo no GitHub Pages.',
    liveUrl: 'https://juniordev-prog.github.io/PROJETO-FOOD/',
    liveDisplayUrl: 'juniordev-prog.github.io/PROJETO-FOOD',
    githubUrl: 'https://github.com/JuniorDev-Prog/PROJETO-FOOD',
    col1Images: [
      'https://raw.githubusercontent.com/JuniorDev-Prog/PROJETO-FOOD/main/src/images/Captura%20de%20tela%202024-08-10%20152723.png',
      '/src/assets/images/projeto_food_editorial_1795381607430.jpg',
    ],
    col2Image:
      'https://raw.githubusercontent.com/JuniorDev-Prog/PROJETO-FOOD/main/src/images/Captura%20de%20tela%202024-08-10%20152723.png',
  },
  {
    id: 'devlinks',
    number: '03',
    name: 'DevLinks',
    category: 'GitHub · Site ao Vivo',
    year: '2024',
    role: 'HTML5 · CSS3 · JavaScript · Tema Claro/Escuro',
    summary:
      'Agregador de links pessoais personalizado com a foto de Junior, alternância suave entre modo escuro e claro e layout mobile-first.',
    liveUrl: '/demos/devlinks/index.html',
    liveDisplayUrl: 'juniordev-prog.github.io/devlinks',
    githubUrl: 'https://github.com/JuniorDev-Prog/devlinks',
    col1Images: [
      '/demos/devlinks/assets/preview-junior.jpg',
      '/demos/devlinks/assets/bg-desktop-light.jpg',
    ],
    col2Image: '/demos/devlinks/assets/preview-junior.jpg',
  },
];
