export interface Product {
  id: number;
  code: string;
  title: string;
  category: string;
  image: string;
  description: string;
  banho: string;
  consultMessage: string;
}

export const OFFICIAL_LINKS = {
  whatsappPhone: "5511989153882",
  whatsappBase: "https://wa.me/5511989153882",
  instagram: "https://www.instagram.com/pantajoias?dlrf=d2FraXRyZDE3dnBv",
  instagramHandle: "@pantajoias",
  logo: "https://i.postimg.cc/7LFQVtFQ/7ecb6415-c846-43c7-9d50-83aa918cad7b-removebg-preview.png",
  logoCropped: "/logo-panta.png",
  heroImage: "https://i.postimg.cc/D0HhdPcy/Retrato-Luxuoso-com-Corrente-Dourada.png",
  brandSupportImage: "https://i.postimg.cc/XqJNgJS7/Corrente-Dourada-no-Corte-Degrade.png",
  lifestyleImage: "https://i.postimg.cc/FF8X6G0g/Retrato-Costeiro-ao-Por-do-Sol.png",
  defaultWhatsAppMessage: "Olá! Conheci a PANTA JOIAS pelo site e gostaria de conhecer os modelos disponíveis.",
};

export const getWhatsAppLink = (customMessage?: string): string => {
  const message = customMessage || OFFICIAL_LINKS.defaultWhatsAppMessage;
  return `${OFFICIAL_LINKS.whatsappBase}?text=${encodeURIComponent(message)}`;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    code: "PJ-01",
    title: "PULSEIRA E ANEL MASCULINO",
    category: "Combinação Dourada",
    image: "https://i.postimg.cc/1zqqpvc5/Mao-tatuada-com-joias-douradas.png",
    description: "Detalhes que fazem a diferença. Uma combinação de acessórios dourados para destacar o estilo masculino com personalidade.",
    banho: "Banho de Ouro 18K",
    consultMessage: "Olá! Gostaria de consultar a disponibilidade e o valor da Pulseira e Anel Masculino da PANTA JOIAS.",
  },
  {
    id: 2,
    code: "PJ-02",
    title: "CORRENTE MASCULINA",
    category: "Correntes & Elos",
    image: "https://i.postimg.cc/XqJNgJS7/Corrente-Dourada-no-Corte-Degrade.png",
    description: "Presença em cada detalhe. Correntes masculinas que valorizam o visual e complementam diferentes estilos.",
    banho: "Banho de Ouro 18K",
    consultMessage: "Olá! Gostaria de consultar a disponibilidade e o valor da Corrente Masculina da PANTA JOIAS.",
  },
  {
    id: 3,
    code: "PJ-03",
    title: "PULSEIRAS DOURADAS",
    category: "Pulseiras Masculinas",
    image: "https://i.postimg.cc/CL9MjSvM/Maos-tatuadas-e-pulseiras-douradas.png",
    description: "Elegância no pulso. Acessórios que combinam personalidade, sofisticação e presença.",
    banho: "Banho de Ouro 18K",
    consultMessage: "Olá! Gostaria de consultar a disponibilidade e o valor das Pulseiras Douradas da PANTA JOIAS.",
  },
  {
    id: 4,
    code: "PJ-04",
    title: "COLAR COM PINGENTE",
    category: "Colares Exclusivos",
    image: "https://i.postimg.cc/3RLYWT4d/Colar-Dourado-com-Pingente-Inspirador.png",
    description: "Mais do que um acessório, um detalhe que representa sua personalidade e seu estilo.",
    banho: "Banho de Ouro 18K",
    consultMessage: "Olá! Gostaria de consultar a disponibilidade e o valor do Colar com Pingente da PANTA JOIAS.",
  },
  {
    id: 5,
    code: "PJ-05",
    title: "ESTILO MASCULINO PANTA",
    category: "Composição & Presença",
    image: "https://i.postimg.cc/D0HhdPcy/Retrato-Luxuoso-com-Corrente-Dourada.png",
    description: "Uma composição que traduz a essência PANTA JOIAS: atitude, presença e elegância.",
    banho: "Banho de Ouro 18K",
    consultMessage: "Olá! Gostaria de consultar a disponibilidade e o valor da composição Estilo Masculino PANTA.",
  },
  {
    id: 6,
    code: "PJ-06",
    title: "COLAR COM MEDALHÃO MEDUSA",
    category: "Medalhões & Pingentes",
    image: "https://i.postimg.cc/y8qBDndk/Colar-dourado-com-medalhao-Medusa.png",
    description: "Um visual marcante para quem gosta de acessórios com personalidade e presença.",
    banho: "Banho de Ouro 18K",
    consultMessage: "Olá! Gostaria de consultar a disponibilidade e o valor do Colar com Medalhão Medusa da PANTA JOIAS.",
  },
];

export const DIFFERENTIALS = [
  {
    id: 1,
    title: "IDENTIDADE MASCULINA",
    description: "Peças e composições pensadas para valorizar o estilo masculino.",
    tag: "Design Exclusivo",
  },
  {
    id: 2,
    title: "BANHO DE OURO 18K",
    description: "Semijoias com banho de ouro 18K, conforme a proposta comercial da marca.",
    tag: "Padrão Nobre",
  },
  {
    id: 3,
    title: "DESDE 2021",
    description: "Uma marca com presença no segmento desde 2021.",
    tag: "Tradição & Presença",
  },
  {
    id: 4,
    title: "ENVIO PARA TODO O BRASIL",
    description: "A PANTA JOIAS leva sua coleção até você, com envios para todo o território nacional.",
    tag: "Nacional",
  },
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: 1,
    image: "https://i.postimg.cc/1zqqpvc5/Mao-tatuada-com-joias-douradas.png",
    label: "Acessórios & Anéis",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/XqJNgJS7/Corrente-Dourada-no-Corte-Degrade.png",
    label: "Correntes 18K",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/D0HhdPcy/Retrato-Luxuoso-com-Corrente-Dourada.png",
    label: "Editorial Masculino",
  },
  {
    id: 4,
    image: "https://i.postimg.cc/3RLYWT4d/Colar-Dourado-com-Pingente-Inspirador.png",
    label: "Pingentes Exclusivos",
  },
  {
    id: 5,
    image: "https://i.postimg.cc/y8qBDndk/Colar-dourado-com-medalhao-Medusa.png",
    label: "Medalhão Medusa",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/FF8X6G0g/Retrato-Costeiro-ao-Por-do-Sol.png",
    label: "Lifestyle Panta",
  },
];
