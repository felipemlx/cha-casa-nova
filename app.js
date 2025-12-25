const { useState } = React;

function SvgIcon({ size = 24, className = "", children, fill = "none" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const Heart = ({ size = 24, className = "", fill = "none" }) => (
  <SvgIcon size={size} className={className} fill={fill}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
  </SvgIcon>
);

const ShoppingBag = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M6 2l1.5 2h9L18 2" />
    <path d="M3 6h18l-1.5 14H4.5L3 6z" />
    <path d="M9 10a3 3 0 0 0 6 0" />
  </SvgIcon>
);

const SortAsc = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M11 5h10" />
    <path d="M11 9h7" />
    <path d="M11 13h4" />
    <path d="M6 16l-3 3-3-3" />
    <path d="M3 19V4" />
  </SvgIcon>
);

const Check = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M20 6L9 17l-5-5" />
  </SvgIcon>
);

const Filter = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M22 3H2l8 9v7l4 2v-9l8-9z" />
  </SvgIcon>
);

const MessageCircle = ({ size = 24, className = "" }) => (
  <SvgIcon size={size} className={className}>
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.3 0-2.55-.3-3.66-.83L3 21l1.83-5.84A8.44 8.44 0 0 1 3.5 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
  </SvgIcon>
);

const ATUALIZADO_EM = "25/12/2025"; 
const PIX_QR_SRC = "./pix-qrcode.png";

const PRODUTOS = [
  {
    id: 1,
    nome: "Lava Louças 220v",
    descricao: "Lava Louças 8 Serviços Prata 220V Midea",
    preco: 2310.90,
    imagem:
      "https://m.media-amazon.com/images/I/41uL5YHX9nL._AC_SX679_.jpg",
    link: "https://www.amazon.com.br/Lava-Lou%C3%A7as-Servi%C3%A7os-Prata-Midea/dp/B0937F9TSG/ref=nosim",
    comprado: false,
  },
  {
    id: 2,
    nome: "Micro-ondas 110v",
    descricao: "Micro-ondas MI41S 31L Espelhado Com Painel Integrado e Função Tira Odor Cor Inox Electrolux",
    preco: 756.20,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_737435-MLA99445404918_112025-F.webp",
    link: "https://www.mercadolivre.com.br/micro-ondas-mi41s-31l-espelhado-com-painel-integrado-e-funco-tira-odor-cor-inox-electrolux/p/MLB18363111?product_trigger_id=MLB18363111&attributes=COLOR%3AInox%2CVOLTAGE%3A220V_vpp&picker=true&quantity=1#reviews",
    comprado: true,
  },
  {
    id: 3,
    nome: "Máquina Lava e Seca 110v",
    descricao: "Máquina de Lavar Midea HealthGuard Smart 11kg Titanium MF200W110WB/GK - 110V",
    preco: 2499.00,
    imagem:
      "https://imgs.casasbahia.com.br/1562303218/2xg.jpg?imwidth=500",
    link: "https://www.casasbahia.com.br/maquina-de-lavar-midea-healthguard-smart-11kg-titanium-mf200w110wb-gk/p/1562303218?IdSku=1562303218&idLojista=221778&tipoLojista=3P&&gad_campaignid=22327510536",
    comprado: false,
  },
  {
    id: 4,
    nome: "Geladeira Bivolt ou 220v",
    descricao: "Geladeira/Refrigerador Electrolux Frost Free Inverse Inox Look 400L Efficient IB6S Bivolt",
    preco: 4099.00,
    imagem:
      "https://a-static.mlcdn.com.br/420x420/geladeira-refrigerador-electrolux-frost-free-inverse-inox-look-400l-efficient-ib6s-bivolt/magazineluiza/240441500/42c30db0515ff6841876c4bf70500f06.jpg",
    link: "https://www.magazineluiza.com.br/geladeira-refrigerador-electrolux-frost-free-inverse-inox-look-400l-efficient-ib6s-bivolt/p/240441500/ed/refr/?seller_id=magazineluiza",
    comprado: false,
  },
  {
    id: 5,
    nome: "Forno de Embutir Elétrico 220v",
    descricao: "Forno de Embutir Elétrico Electrolux 80L Efficient com PerfectCook (OE8EL) - 220V",
    preco: 1749.00,
    imagem:
      "https://imgs.casasbahia.com.br/1562458799/2xg.jpg?imwidth=500",
    link: "https://www.casasbahia.com.br/forno-de-embutir-eletrico-electrolux-80l-efficient-com-perfectcook-oe8el/p/1562458799?IdSku=1562458799&idLojista=24506&tipoLojista=3P&&gad_campaignid=22819949204",
    comprado: false,
  },
  {
    id: 6,
    nome: "Depurador de Ar Philco 110v",
    descricao: "Depurador de Ar Philco PDR60I Slim Inox - 60cm - 110V",
    preco: 550.00,
    imagem:
      "https://imgs.casasbahia.com.br/12366301/1xg.jpg?imwidth=500",
    link: "https://www.casasbahia.com.br/depurador-de-ar-philco-pdr60i-slim-inox-60cm-110v/p/12366301",
    comprado: false,
  },
  {
    id: 7,
    nome: "Panela de Pressão Elétrica 110v ou 220v",
    descricao: "Panela de Pressão Elétrica Electrolux Experience por Rita Lobo 6L Inox - PCC20",
    preco: 545.02,
    imagem:
      "https://fastshopbr.vtexassets.com/arquivos/ids/2679023/0_1a03a01d-f15f-4ecd-a2e9-b53e4675c3a5.jpg?v=638991522036600000",
    link: "https://site.fastshop.com.br/panela-de-pressao-eletrica-electrolux-experience-por-rita-lobo-6l-inox---pcc20-expcc20ix_prd/p?idsku=13730&gad_campaignid=22756790833",
    comprado: false,
  },
  {
    id: 8,
    nome: "Cooktop 4 Bocas Bivolt",
    descricao: "Cooktop 4 Bocas Fischer Preto a Gás GLP - 1519",
    preco: 449.00,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/cooktop-4-bocas-fischer-preto-a-gas-glp-1519/magazineluiza/011120200/a3135d13655d4d5ed67a15556c4d4c94.jpg",
    link: "https://www.magazineluiza.com.br/cooktop-4-bocas-fischer-preto-a-gas-glp-1519/p/011120200/ed/ck4b/",
    comprado: true,
  },
  {
    id: 9,
    nome: "Frigideira 4 Ovos",
    descricao: "Frigideira 4 Ovos Fortaleza 26Cm - Preto",
    preco: 59.99,
    imagem:
      "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/f/r/frigideira-4-ovos-fortaleza-26cm_995253_1.webp",
    link: "https://www.havan.com.br/frigideira-4-ovos-fortaleza-26cm-preto/p",
    comprado: false,
  },
  {
    id: 10,
    nome: "Jogo de Panelas Tramontina",
    descricao: "Jogo de Panelas Tramontina Linz em Aluminio com Revestimento Interno e Externo em Antiaderente Starflon Max Preto 05 Peças",
    preco: 249.99,
    imagem:
      "https://m.media-amazon.com/images/I/81maZKD-2XL._AC_SL1500_.jpg",
    link: "https://www.amazon.com.br/dp/B0DF3R5LQ4/ref=cm_cr_arp_d_bdcrb_top?ie=UTF8",
    comprado: false,
  },
  {
    id: 11,
    nome: "Jogo De Talheres 24pcs",
    descricao: "Jogo De Talheres Faqueiro Euro Com 24 Peças Completo De Aço Inox",
    preco: 109.99,
    imagem:
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lsws4ztx0p3h00.webp",
    link: "https://shopee.com.br/product/1046470373/22997389870?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSVRad1VjdUUxNjlzWS9na1lrejBVcktPQm5sSU42ZGdaVWdlbHhpWHozb2lkQzJMNFlTVzVQRHlneHpCdEgweXZlVm1JT0FUaS9FMWFEK3hyaXFnUGdzMExsOW5BQ1ZZVElzc3hYeXlndlJnPT0&gad_campaignid=20828771740",
    comprado: false,
  },
  {
    id: 12,
    nome: "Jogo De Talheres 30pcs",
    descricao: "WOLFF Faqueiro de Aço Inox Berna 30 Peças - Mesa Posta",
    preco: 240.00,
    imagem:
      "https://m.media-amazon.com/images/I/71YJtog8PDL._AC_SL1200_.jpg",
    link: "https://www.amazon.com.br/Faqueiro-Pe%C3%A7as-A%C3%A7o-Inox-Berna/dp/B076PL2ZSP/ref=asc_df_B076PL2ZSP?mcid=2d4795bf688732a5b00e6ad462175cbd&hvadid=709964506220&hvpos=&hvnetw=g&hvrand=9940794270351669298&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-811779203418&language=pt_BR",
    comprado: false,
  },
  {
    id: 13,
    nome: "Jogo De Facas 7pcs",
    descricao: "Jogo De Facas Tramontina Plenus Com Lâminas Em Aço Inox E Cabos De Polipropileno Preto 07 Peças",
    preco: 54.99,
    imagem:
      "https://m.media-amazon.com/images/I/61PPolYwilL._AC_SL1200_.jpg",
    link: "https://www.amazon.com.br/Facas-Tramontina-L%C3%A2minas-Plenus-Modelo/dp/B0BBY9Y6D6/ref=asc_df_B0BBY9Y6D6?mcid=9aab993c84e63356b6caf0c45f9f2578&hvadid=709964506277&hvpos=&hvnetw=g&hvrand=14921459110520029236&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-1890676181680&psc=1&language=pt_BR",
    comprado: false,
  },
  {
    id: 14,
    nome: "Kit 10 Utensílios de Cozinha em Silicione e Aço Inox",
    descricao: "LUMAI Kit 10 Utensílios de Cozinha em Silicone e Aço Inox, Resistentes ao Calor e Antirriscos, Não Arranham Panelas, Conjunto Acessórios de Cozinha Completo com Espátula, Pegador, Concha, Colher Preto",
    preco: 123.37,
    imagem:
      "https://m.media-amazon.com/images/I/71lOtIGbc2L._AC_SL1500_.jpg",
    link: "https://www.amazon.com.br/Conjunto-Utens%C3%ADlios-Cozinha-Silicone-Inox/dp/B0BVSZRH8R/ref=sr_1_15?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-15",
    comprado: false,
  },
  {
    id: 15,
    nome: "Conjunto Espátula para Manteiga",
    descricao: "Conjunto De Espátula Para Manteiga 6 Pç Tramontina Inox",
    preco: 30.43,
    imagem:
      "https://m.media-amazon.com/images/I/41WyeT009lL._AC_SL1000_.jpg",
    link: "https://www.amazon.com.br/Conjunto-Esp%C3%A1tulas-Manteiga-66906241-Tramontina/dp/B076M7RJ3Z/ref=asc_df_B076M7RJ3Z?mcid=ce96cf021dc7393588605c37e368379a&hvadid=709964506283&hvpos=&hvnetw=g&hvrand=11606906230995601264&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-812002844585&psc=1&language=pt_BR",
    comprado: true,
  },
  {
    id: 16,
    nome: "Kit Prato Tramontina",
    descricao: "Kit Prato Raso Tramontina Sophia em Porcelana Decorada 28 cm 06 Peças",
    preco: 184.30,
    imagem:
      "https://m.media-amazon.com/images/I/815I456DAwL._AC_SL1500_.jpg",
    link: "",
    comprado: false,
  },
  {
    id: 17,
    nome: "Aparelho de Jantar 20pcs",
    descricao: "Aparelho De Jantar Ryo Maresia Oxford 20 Pçs - Porcelana",
    preco: 499.90,
    imagem:
      "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/a/p/aparelho-de-jantar-ryo-maresia-oxford-20-pcs_1152123.webp",
    link: "https://www.havan.com.br/aparelho-de-jantar-ryo-maresia-oxford-20-pcs-porcelana/p",
    comprado: false,
  },
  {
    id: 18,
    nome: "Air Fryer 110v",
    descricao: "Fritadeira Sem Óleo Capacidade de 4L, Midea, 1400 W, Aquece Em 10-60 min 80℃ a 200 ℃, Air Fryer Com Fluxo de Ar de 360°, Fritadeira Eletrica, Design Compacto, Preto, 110V, MAF400P0APK",
    preco: 283.54,
    imagem:
      "https://m.media-amazon.com/images/I/519xtj+hWQL._AC_SL1000_.jpg",
    link: "https://www.amazon.com.br/Fritadeira-Capacidade-Midea-Eletrica-MAF400P0APK/dp/B0CZM7944K/ref=asc_df_B0CZM7944K?mcid=9b3fd15c0bec3c96943bbd43ddfa5d61&hvadid=709964506256&hvpos=&hvnetw=g&hvrand=14384936127917328476&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-2309174733069&language=pt_BR",
    comprado: true,
  },
  {
    id: 19,
    nome: "Lixeira Branca ou Preta Banheiro",
    descricao: "Lixeira Inteligente Abertura Automática Média de Banheiro Cozinha Escritório 13 Litros",
    preco: 72.99,
    imagem:
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8nowll6kcr526.webp",
    link: "https://shopee.com.br/product/1049231391/22798407857?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSVRad1VjdUUxNjlzWS9na1lrejBVcnBpd3haNW1pNnhFbXF4ZERGamxKcm5CTVE2Tm5sZEQ1MVhaeEVsVFdwTHRNNU4wNlR2OHY2Tlh6b3B0anNIVW1lUFVlVzRnQVhCYXM1T1ZGZXZ5UmxBPT0&gad_campaignid=20828771740",
    comprado: false,
  },
  {
    id: 20,
    nome: "Kit 2 Toalhas Banho",
    descricao: "Kit 2 Toalhas Banho Yuna Karsten",
    preco: 103.11,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/kit-2-toalhas-banho-yuna-karsten/paschenxovais/571-3968/fa698dccd9988f4b54a27ae220b8285b.jpeg",
    link: "https://www.magazineluiza.com.br/kit-2-toalhas-banho-yuna-karsten/p/jkk88dkh95/cm/joto/?seller_id=paschenxovais",
    comprado: false,
  },
  {
    id: 21,
    nome: "Jogo 4 Toalhas Banhão",
    descricao: "Jogo de toalhas Banhão Gigante Karsten Lumina 4 Peças Fio Penteado",
    preco: 242.92,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/jogo-de-toalhas-banhao-gigante-karsten-lumina-4-pecas-fio-penteado/capricholar/cap-fk-jg-lumina-4/8a729bcf0bf5dbc0543a07d5dee6fdad.jpeg",
    link: "https://www.magazineluiza.com.br/jogo-de-toalhas-banhao-gigante-karsten-lumina-4-pecas-fio-penteado/p/ha9fe8168a/cm/joto/",
    comprado: false,
  },
  {
    id: 22,
    nome: "Jogo De Toalhas 4 Peças - Banho e Rosto",
    descricao: "Jogo De Toalhas 4 Peças - Banho e Rosto Algodão Antipiling Yuna Karsten - Emcompre",
    preco: 189.63,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/jogo-de-toalhas-4-pecas-banho-e-rosto-algodao-antipiling-yuna-karsten-emcompre/emcompre/435402/cb477502373b44c233b901e1c8f93cdb.jpeg",
    link: "https://www.magazineluiza.com.br/jogo-de-toalhas-4-pecas-banho-e-rosto-algodao-antipiling-yuna-karsten-emcompre/p/gha1ah0g2e/cm/joto/",
    comprado: false,
  },
  {
    id: 23,
    nome: "Kit 4x Saleiro e Paliteiro",
    descricao: "Kit Saleiro e Paliteiro em Aço Inox Vidro",
    preco: 36.75,
    imagem:
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mabot4pjzwl214@resize_w450_nl.webp",
    link: "https://shopee.com.br/product/402561296/22296226895?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMlhLNlpHOGNCMm5XdFNSeGxXWGVRNnBFeWErVE1MNFhuNXdCcjdMeWVZcFBma2d6UXZBVDczbXpCaDNtVnNHQUJqVmdhMGpmd1U2dkExR1d1Q3o3VEhRdDB6MXc4azY5eHQwVkxxUVVOMm13PT0&gad_campaignid=20828771740",
    comprado: true,
  },
  {
    id: 24,
    nome: "Colher de Sorvete",
    descricao: "Colher P/ Sorvete Top Pratic 21, 5cm Brinox Aço Inox",
    preco: 26.97,
    imagem:
      "https://m.media-amazon.com/images/I/51Oaa+IR1sL._AC_SX679_.jpg",
    link: "https://www.amazon.com.br/Colher-Sorvete-Brinox-8215-99-90-Prata/dp/B076Z82HV1/ref=sr_1_32?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&sr=8-32",
    comprado: false,
  },
  {
    id: 25,
    nome: "Lixeira 40L",
    descricao: "Lixeira C/ Pedal 40l Preta Eco Nature",
    preco: 59.90,
    imagem:
      "https://m.media-amazon.com/images/I/51R2G9ne7rL._AC_SY879_.jpg",
    link: "https://www.amazon.com.br/Lixeira-Pedal-40l-Preta-Nature/dp/B08SPN6P13/ref=asc_df_B08SPN6P13?mcid=71f9e6df9a0b3b1f9201045a08c0ba80&hvadid=709968341206&hvpos=&hvnetw=g&hvrand=5485595429143151989&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-1177846128866&psc=1&language=pt_BR",
    comprado: false,
  },
  {
    id: 26,
    nome: "Luva Térmica",
    descricao: "Luva Térmica Grafatex Anatomica - Par - Até 350 Graus - 50cm",
    preco: 58.90,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_980002-MLB74061447405_012024-F-luva-termica-grafatex-anatomica-par-ate-350-graus-50cm.webp",
    link: "https://produto.mercadolivre.com.br/MLB-3718615240-luva-termica-grafatex-anatomica-par-ate-350-graus-50cm-_JM?matt_tool=18956390#reviews",
    comprado: false,
  },
  {
    id: 27,
    nome: "Robô Aspirador",
    descricao: "Robô Aspirador e Passa Pano KABUM! smart 900 - 5 Modos de Limpeza, Base 2 em 1, Mapeamento 3D - 127v - Preto - KBSF009",
    preco: 1699.90,
    imagem:
      "https://images8.kabum.com.br/produtos/fotos/366168/robo-aspirador-e-passa-pano-kabum-smart-900-127v-preto-kbsf009_1732795761_gg.jpg",
    link: "https://www.kabum.com.br/produto/366168/robo-aspirador-e-passa-pano-kabum-smart-900-5-modos-de-limpeza-base-2-em-1-mapeamento-3d-127v-preto-kbsf009",
    comprado: false,
  },
  {
    id: 28,
    nome: "Mesa Passadeira Tabua",
    descricao: "Mesa Passadeira Tabua De Passar Roupa Portátil Em Aço Carbono Extra Forte Reforçada Com Porta Ferro",
    preco: 62.99,
    imagem:
      "https://down-br.img.susercontent.com/file/br-11134207-7r98o-md3gq8wzx0ky77@resize_w450_nl.webp",
    link: "https://shopee.com.br/product/317239028/23593167219?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMWtOaFRnRVlWZUc2WjBKUDAvWk5QMVZ5RllRVlpiZFN6UTRWNVcxWFM1akRWbElycE9YVy8rUWU3Q0V3UUxOYm94Z0tzMGVnVFdGTnRWWHV3cE1wdFBWOWJIM0psUWluREpGcmtHaW5WZUhnPT0&gad_campaignid=20828771740",
    comprado: false,
  },
  {
    id: 29,
    nome: "Rodo de Pia",
    descricao: "Sanremo - Rodo de Pia Plástico de 14 cm, Linha Casar",
    preco: 7.30,
    imagem:
      "https://m.media-amazon.com/images/I/41vbRg4q4IL._AC_SX679_.jpg",
    link: "https://www.amazon.com.br/Pl%C3%A1stico-Preta-Linha-Casar-Sanremo/dp/B0C2HZ8FJ2/ref=asc_df_B0C2HZ8FJ2?mcid=b2c269b722d63656989468e05fcbd011&hvadid=709968341005&hvpos=&hvnetw=g&hvrand=6740662713723589633&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-2202104236275&language=pt_BR",
    comprado: true,
  },
  {
    id: 30,
    nome: "Rodo",
    descricao: "Não precisa de modelo específico.",
    preco: 20.00,
    imagem:
      "https://m.media-amazon.com/images/I/513wCOfYuVL._AC_SX679_.jpg",
    link: "https://www.amazon.com.br/Tamanho-M%C3%A9dio-Tiffany-Novi%C3%A7a-Bettanin/dp/B078XPSZSL/ref=asc_df_B078XPSZSL?mcid=a289afea861530bba760d383e7b60fd7&hvadid=709968341005&hvpos=&hvnetw=g&hvrand=16195330138119514777&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-2077793299862&psc=1&language=pt_BR",
    comprado: false,
  },
  {
    id: 31,
    nome: "Kit 3 Peneiras",
    descricao: "Jogo 3 Peneiras Aço Inox Cozinha Doméstica e Profissional Resistentes Telas Finas Antiferrugem Multiuso Ideal para Alimentos Farinhas Chás e Sucos ponte lar utilidades",
    preco: 20.70,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_786486-MLA99351805286_112025-F.webp",
    link: "https://www.mercadolivre.com.br/jogo-3-peneiras-aco-inox-cozinha-domestica-e-profissional-resistentes-telas-finas-antiferrugem-multiuso-ideal-para-alimentos-farinhas-chas-e-sucos-ponte-lar-utilidades/p/MLB26404946#polycard_client=search_best-seller&tracking_id=71a82dce-157f-4d73-b77f-040ecfb394dd&wid=MLB4296253115&sid=search",
    comprado: true,
  },
  {
    id: 32,
    nome: "Ralador",
    descricao: "Ralador Tramontina Easy Preto",
    preco: 29.99,
    imagem:
      "https://m.media-amazon.com/images/I/512hoNqSEqL._AC_SX679_.jpg",
    link: "https://www.amazon.com.br/Ralador-Tramontina-Easy-25106400-Preto/dp/B076MBZ67S/ref=asc_df_B076MBZ67S?mcid=f522711726be30b8bf161dd533fe3976&hvadid=709964506241&hvpos=&hvnetw=g&hvrand=16531330082369595480&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-871739870334&language=pt_BR",
    comprado: false,
  },
  {
    id: 33,
    nome: "Kit Assadeiras de Vidro 2pcs",
    descricao: "Jogo De Assadeiras Retangular Sempre Nadir - 2 Peças",
    preco: 59.99,
    imagem:
      "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/j/o/jogo-de-travessas-retangular-sempre-nadir_1109663.webp",
    link: "https://www.havan.com.br/jogo-de-assadeiras-retangular-sempre-nadir-2-peas/p",
    comprado: false,
  },
  {
    id: 34,
    nome: "Kit Assadeiras Teflon 2pcs",
    descricao: "Jogo de Assadeiras Tramontina Antiaderente Starflon Max Rosa 02 Pçs",
    preco: 88.90,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/jogo-de-assadeiras-tramontina-antiaderente-starflon-max-rosa-02-pcs/homepoint/sh6825/c34475859c9b165067e3af63eab3a640.jpeg",
    link: "https://www.magazineluiza.com.br/jogo-de-assadeiras-tramontina-antiaderente-starflon-max-rosa-02-pcs/p/fg17gb6924/ud/assa/?seller_id=homepoint",
    comprado: false,
  },
  {
    id: 35,
    nome: "Descascador",
    descricao: "Descascador Tramontina Verano com Lâmina em Aço Inox com Fio Liso e Cabo de Polipropileno Vermelho",
    preco: 31.19,
    imagem:
      "https://assets.tramontina.com.br/upload/tramon/imagens/CUT/25585170PDM001G.jpg",
    link: "https://www.tramontina.com.br/descascador-tramontina-verano-com-lamina-em-aco-inox-com-fio-liso-e-cabo-de-polipropileno-vermelho/25585170.html",
    comprado: false,
  },
  {
    id: 36,
    nome: "Escorredor de Macarrão",
    descricao: "Escorredor De Macarrão Massa Inox Brinox Com Alça Cozinha",
    preco: 37.70,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_974224-MLA100074034017_122025-F.webp",
    link: "https://www.mercadolivre.com.br/escorredor-de-macarro-massa-inox-brinox-com-alca-cozinha/p/MLB24325061#polycard_client=search_best-seller&tracking_id=5ce05cb4-eb88-425f-b250-44d179d8fd4d&wid=MLB4279497805&sid=search",
    comprado: true,
  },
  {
    id: 37,
    nome: "Kit Cesto e Balde",
    descricao: "Kit cesto 26L e balde 10L dobrável retrátil prático Powermaid cor branco",
    preco: 62.27,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_614529-MLA99442566842_112025-F.webp",
    link: "https://www.mercadolivre.com.br/kit-cesto-26l-e-balde-10l-dobravel-retratil-pratico-powermaid-cor-branco/p/MLB28131268#polycard_client=search_best-seller&tracking_id=07b302f7-4584-480e-a647-681cefa0e91b&wid=MLB5285240924&sid=search",
    comprado: false,
  },
  {
    id: 38,
    nome: "Kit Dispenser 2pcs",
    descricao: "2x Dispenser Produtos De Limpeza 2,3 Litros Ou Flow Branco",
    preco: 64.95,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_852816-MLA96153647541_102025-F.webp",
    link: "https://www.mercadolivre.com.br/ou-flow-transparente/p/MLB38934892?product_trigger_id=MLB47637228&picker=true&quantity=1",
    comprado: false,
  },
  {
    id: 39,
    nome: "Sanduicheira 110v",
    descricao: "Sanduicheira Grill Britânia BGR27I Press 850W Antiaderente – Inox/Preta - 110V",
    preco: 122.55,
    imagem:
      "https://imgs.casasbahia.com.br/55058800/1g.jpg?imwidth=500",
    link: "https://www.casasbahia.com.br/sanduicheira-grill-britania-bgr27i-press-850w-antiaderente-inox-preta-110v/p/55058800",
    comprado: false,
  },
  {
    id: 40,
    nome: "Kit Tábua Petisqueira",
    descricao: "Kit Tábua Grande Para Queijos E Frios Com Petisqueira Bambu Circular Tabua de 40cm x 29,5cm para Servir e Organizar Mesas Encontro Familiar Amigos e Romantico Cor Marrom",
    preco: 147.00,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_896840-MLA99967101945_112025-F.webp",
    link: "https://www.mercadolivre.com.br/kit-tabua-grande-para-queijos-e-frios-com-petisqueira-bambu-circular-tabua-de-40cm-x-295cm-para-servir-e-organizar-mesas-encontro-familiar-amigos-e-romantico-cor-marrom/p/MLB51230564#reviews",
    comprado: false,
  },
  {
    id: 41,
    nome: "Forma de Pizza",
    descricao: "Forma De Pizza 35 Cm Cor Alumínio",
    preco: 25.96,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_894819-MLA99595837892_122025-F.webp",
    link: "https://www.mercadolivre.com.br/forma-de-pizza-35-cm-cor-aluminio/p/MLB28493230#polycard_client=search_best-seller&tracking_id=07865207-a04e-48d0-a1fd-dcabb0e1dcae&wid=MLB5411674684&sid=search",
    comprado: false,
  },
  {
    id: 42,
    nome: "Cortador de Pizza",
    descricao: "Cortador De Pizza Profissional Inox Massas Pães Bolos Tortas",
    preco: 32.99,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_743111-MLA99624767638_122025-F.webp",
    link: "https://www.mercadolivre.com.br/cortador-de-pizza-profissional-inox-massas-pes-bolos-tortas/p/MLB26341011#polycard_client=search_best-seller&tracking_id=43085f2b-6aae-4fa9-a6c9-d66550a98d1b&wid=MLB4614347314&sid=search",
    comprado: true,
  },
  {
    id: 43,
    nome: "Abridor de Lata",
    descricao: "Abridor De Lata Automático Emborrachado Pratico E Eficiente Cor Prateado",
    preco: 25.15,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_901023-MLA99600306326_122025-F.webp",
    link: "https://www.mercadolivre.com.br/abridor-de-lata-automatico-emborrachado-pratico-e-eficiente-cor-prateado/p/MLB39306028#polycard_client=search_best-seller&tracking_id=47e0c052-ed46-4407-8520-89297014e881&wid=MLB4060144387&sid=search",
    comprado: false,
  },
  {
    id: 44,
    nome: "Liquidificador 110v",
    descricao: "Liquidificador Philco PH900 Preto 1200W com 12 Velocidades - 110V",
    preco: 119.00,
    imagem:
      "https://imgs.casasbahia.com.br/5082530/1xg.jpg?imwidth=500",
    link: "https://www.casasbahia.com.br/liquidificador-philco-ph900-preto-1200w-com-12-velocidades/p/5082530?IdSku=5082530&idLojista=10037&tipoLojista=1P&&gad_campaignid=22439388159",
    comprado: false,
  },
  {
    id: 45,
    nome: "Batedeira 110v",
    descricao: "Batedeira Paris Duo Mixer Turbo 4 Litros 500w Preta Philco Cor Preto Frequência 60",
    preco: 110.53,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_668544-MLA99450648098_112025-F.webp",
    link: "https://www.mercadolivre.com.br/batedeira-paris-duo-mixer-turbo-4-litros-500w-preta-philco-cor-preto-frequncia-60/p/MLB27117836#polycard_client=search_best-seller&tracking_id=28945967-1a1e-4902-afc1-978cd3e88250&wid=MLB3448589113&sid=search",
    comprado: false,
  },
  {
    id: 46,
    nome: "Kit Copo Medidor 2pcs",
    descricao: "We Varejo - Kit 2 Copos Medidores Transparente 500 Ml Medidas Cozinha Copo Plástico Medidor Dosador Líquido Medida Receita Medir Porção Graduado Ingredientes",
    preco: 19.00,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_668716-MLA99633968720_122025-F.webp",
    link: "https://www.mercadolivre.com.br/we-varejo-kit-2-copos-medidores-transparente-500-ml-medidas-cozinha-copo-plastico-medidor-dosador-liquido-medida-receita-medir-porco-graduado-ingredientes/p/MLB53818094#polycard_client=search_best-seller&tracking_id=ba63a0f0-5fbb-4aa6-b442-ad27c917cc37&wid=MLB5656384942&sid=search",
    comprado: true,
  },
  {
    id: 47,
    nome: "Smart TV 50\"",
    descricao: "Smart TV TCL 50 4K QLED UHD 50P7K Google TV 60Hz Processador AiPQ Preta",
    preco: 1899.04,
    imagem:
      "https://imgs.casasbahia.com.br/55069450/1xg.jpg?imwidth=500",
    link: "https://www.casasbahia.com.br/smart-tv-tcl-50-4k-qled-uhd-50p7k-google-tv-60hz-processador-aipq-preta/p/55069450?IdSku=55069450&idLojista=10037&tipoLojista=1P&&gad_campaignid=22434352731",
    comprado: false,
  },
  {
    id: 48,
    nome: "Smart TV 40\"",
    descricao: "Smart TV 40\" TCL Full HD QLED 40S5K Google TV 2 HDMI",
    preco: 1215.05,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/smart-tv-40-tcl-full-hd-qled-40s5k-google-tv-2-hdmi/magazineluiza/240424300/f60a411527c8cfddf5f8ca404ca1fc2e.jpg",
    link: "https://www.magazineluiza.com.br/smart-tv-40-tcl-full-hd-qled-40s5k-google-tv-2-hdmi/p/240424300/et/tves/",
    comprado: false,
  },
  {
    id: 49,
    nome: "Jogo de Taças de Vidro para Sobremesa",
    descricao: "Jogo de Taças de Vidro para Sobremesa Transparente 150ml 6 Peças Haus Concept Lótus",
    preco: 25.12,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/jogo-de-tacas-de-vidro-para-sobremesa-transparente-150ml-6-pecas-haus-concept-lotus/magazineluiza/238303600/78ebab7908e3ac04b5421801e6186f0b.jpg",
    link: "https://www.magazineluiza.com.br/jogo-de-tacas-de-vidro-para-sobremesa-transparente-150ml-6-pecas-haus-concept-lotus/p/238303600/ud/tcsb/?seller_id=magazineluiza",
    comprado: false,
  },
  {
    id: 50,
    nome: "Kit 6x Cumbuca Bowl",
    descricao: "Kit 6x Cumbuca Bowl Porcelana 500ml Caldo Sopa Salgadinho Cor Branco",
    preco: 112.90,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_637039-MLU79070388514_092024-F.webp",
    link: "https://www.mercadolivre.com.br/terramada-liso-branco-kit-6-500-ml/p/MLB24854161?product_trigger_id=MLB24854111&picker=true&quantity=1",
    comprado: false,
  },
  {
    id: 51,
    nome: "Bowl Tigela Bacia Aço Inox",
    descricao: "Bowl Tigela Bacia Aço Inox Escovado Saladeira 22 Cm Mistura Cor Prateado",
    preco: 25.08,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_659845-MLA100084225715_122025-F.webp",
    link: "https://www.mercadolivre.com.br/ke-home-bowl-inox-escovado-prateado-nenhum-unidade-1-2-l/p/MLB28428944?product_trigger_id=MLB28642370&picker=true&quantity=1#reviews",
    comprado: false,
  },
  {
    id: 52,
    nome: "Jogo de Cama Casal 150 fios 100% Algodão",
    descricao: "Jogo de Cama Casal 150 fios 100% Algodão - Mix Grafite - Dui Design",
    preco: 179.90,
    imagem:
      "https://3a36cfaa62ac8ba9.cdn.gocache.net/images/produtos/mix_grafite_jogo_2021_1_20210331__g.jpg",
    link: "https://www.vidaecor.com.br/jogo-cama-casal-150-fios-mix-grafite-dui-design.html#estrelasx",
    comprado: false,
  },
  {
    id: 53,
    nome: "Jogo de Cama Casal 150 fios 100% Algodão ",
    descricao: "Jogo de Cama Casal 150 fios 100% Algodão - Mix Azul - Dui Design",
    preco: 179.90,
    imagem:
      "https://3a36cfaa62ac8ba9.cdn.gocache.net/images/produtos/mix_azul_jogo_2021_1_20210526__g.jpg",
    link: "https://www.vidaecor.com.br/jogo-cama-casal-150-fios-mix-azul-dui-design.html",
    comprado: false,
  },
  {
    id: 54,
    nome: "Jogo de Cama Casal 150 fios 100% Algodão",
    descricao: "Jogo de Cama Casal 150 fios 100% Algodão - Mix Marfim - Dui Design",
    preco: 179.90,
    imagem:
      "https://3a36cfaa62ac8ba9.cdn.gocache.net/images/produtos/mix_marfim_jogo_2021_1_20210525__g.jpg",
    link: "https://www.vidaecor.com.br/jogo-cama-casal-150-fios-mix-marfim-dui-design.html",
    comprado: false,
  },
  {
    id: 55,
    nome: "Jogo de Cama Casal Percal 180 fios - Tokyo Confrei",
    descricao: "Jogo de Cama Casal Percal 180 fios - Tokyo Confrei - Dui Design",
    preco: 194.90,
    imagem:
      "https://3a36cfaa62ac8ba9.cdn.gocache.net/images/produtos/osaka-confrei-1_20251027__g.jpg",
    link: "https://www.vidaecor.com.br/jogo-cama-casal-percal-180-fios-tokyo-confrei-dui-design.html",
    comprado: false,
  },
  {
    id: 56,
    nome: "Ferro de Passar Roupa 110v",
    descricao: "Ferro de Passar Roupa a Vapor e a Seco Electrolux Efficient com Vapor Vertical (ESI10)",
    preco: 89.91,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/ferro-de-passar-roupa-a-vapor-e-a-seco-electrolux-efficient-com-vapor-vertical-esi10/electrolux/310118779/407900378c04dcc6c8ecc901ed37bf26.jpeg",
    link: "https://www.magazineluiza.com.br/ferro-de-passar-roupa-a-vapor-e-a-seco-electrolux-efficient-com-vapor-vertical-esi10/p/kb4738af3d/ep/ferr/",
    comprado: false,
  },
  {
    id: 57,
    nome: "Mesa de Jantar",
    descricao: "Mesa de Jantar Retangular c/ Vidro para 6 Lugares Addar 180 cm - Natural c/ Off White",
    preco: 1849.00,
    imagem:
      "https://homedock.com.br/cdn/shop/files/01_-Mesa_de_Jantar_Addar_180_cm_-_Natural_c__Vidro_Off_White_Perspectiva.webp?v=1753102371&width=990",
    link: "https://homedock.com.br/products/mesa-de-jantar-addar-180-cm-natural-c-vidro-off-white?variant=43193220956381&gad_campaignid=22299741030",
    comprado: false,
  },
  {
    id: 58,
    nome: "Cadeira de Madeira 3unidades",
    descricao: "Cadeira de Madeira Maciça Estofada Saga - Natural c/ Linho Mescla Cru - Palhinha",
    preco: 1437.00,
    imagem:
      "https://homedock.com.br/cdn/shop/files/01_-_Cadeira_com_Palhinha_Saga_-_Natural_c__Linho_Cru_Perspectiva.webp?v=1753101600&width=990",
    link: "https://homedock.com.br/products/cadeira-saga-natural-com-linho-mescla-cru",
    comprado: false,
  },
  {
    id: 59,
    nome: "Conjunto de 10 Potes Herméticos",
    descricao: "Conjunto de 10 Potes Herméticos de Plástico Electrolux",
    preco: 110.39,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/conjunto-de-10-potes-hermeticos-de-plastico-electrolux/hrscmagazine/pote10/5274153cd77e08f8b4e7c4e23c50adee.jpeg",
    link: "https://www.magazineluiza.com.br/conjunto-de-10-potes-hermeticos-de-plastico-electrolux/p/gd8jh1gc70/ud/poud/?seller_id=hrscmagazine",
    comprado: false,
  },
  {
    id: 60,
    nome: "Conjunto Potes Herméticos",
    descricao: "Conjunto Potes Herméticos Organizador Armário Despensa 14 Un Transparente",
    preco: 149.93,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_885643-MLB76221147072_052024-F.webp",
    link: "https://www.mercadolivre.com.br/conjunto-potes-hermeticos-organizador-armario-despensa-14-un/up/MLBU2316375389#polycard_client=search_best-seller&tracking_id=1e14af95-ad97-4d8e-86e6-07df49e1d971&wid=MLB3683286039&sid=search",
    comprado: false,
  },
  {
    id: 61,
    nome: "Jogo 6 Taças",
    descricao: "Jogo 6 Taças Diamante Vidro 330ml Copo Diamond Moderno Luxo Transparente Butter Cream Diamante Lapidado",
    preco: 39.45,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_991009-MLA99577241370_122025-F.webp",
    link: "https://www.mercadolivre.com.br/jogo-6-tacas-diamante-vidro-330ml-copo-diamond-moderno-luxo-transparente-butter-cream-diamante-lapidado/p/MLB56966780#reviews",
    comprado: false,
  },
  {
    id: 62,
    nome: "Pá Articulada com Cabo",
    descricao: "Sem modelo específico",
    preco: 28.99,
    imagem:
      "https://m.media-amazon.com/images/I/61+9aSaZ4jL._AC_SX522_.jpg",
    link: "https://www.amazon.com.br/Articulada-Tiffany-Cereja-Novi%C3%A7a-Bettanin/dp/B0BTJ29C88/ref=asc_df_B0BTJ29C88?mcid=7c949aa2bf393276a9074593796c882c&hvadid=709968341005&hvpos=&hvnetw=g&hvrand=6333301611405438987&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-2292228289649&psc=1&language=pt_BR",
    comprado: false,
  },
  {
    id: 63,
    nome: "Espremedor Elétrico 110v",
    descricao: "Espremedor Premium Mondial 30W E-02",
    preco: 59.90,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_852738-MLA99700511468_122025-F.webp",
    link: "https://www.mercadolivre.com.br/mondial-premium-e-02-125-l-preto-127v/p/MLB19307438?product_trigger_id=MLB19307438&attributes=COLOR%3APreto%2CVOLTAGE%3A127V_vpp&picker=true&quantity=1",
    comprado: false,
  },
  {
    id: 64,
    nome: "Espremedor de limão",
    descricao: "Espremedor de limão laranja manual resistente grande forte preto efigen",
    preco: 24.14,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_738796-MLA95958571990_102025-F.webp",
    link: "https://www.mercadolivre.com.br/espremedor-de-limo-laranja-manual-resistente-grande-forte-preto-efigen/p/MLB47672785#polycard_client=search_best-seller&tracking_id=432fdbdc-b8f5-4237-8179-0cc72710caf4&wid=MLB4026482899&sid=search",
    comprado: false,
  },
  {
    id: 65,
    nome: "Tabua De Corte",
    descricao: "Tabua De Corte Saudável Pp Aço Inox Para Cortar Dupla Face Dupla Face Prateado",
    preco: 52.00,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_977704-MLB84443828399_052025-F.webp",
    link: "https://www.mercadolivre.com.br/tabua-de-corte-saudavel-pp-aco-inox-para-cortar-dupla-face/up/MLBU3118686696#polycard_client=search_best-seller&tracking_id=8093fab1-58db-46ff-9f3b-cc6659d01607&wid=MLB4027938361&sid=search",
    comprado: false,
  },
  {
    id: 66,
    nome: "Açucareiro",
    descricao: "Açucareiro De Cristal Com Colher Pearl - Wolff Perla 10x8x7cm Cor Transparente",
    preco: 19.00,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_730788-MLA99607328406_122025-F.webp",
    link: "https://www.mercadolivre.com.br/acucareiro-de-cristal-com-colher-pearl-wolff-perla-10x8x7cm-cor-transparente/p/MLB24712616#polycard_client=search_best-seller&tracking_id=8e12d32e-13fe-4dcb-9afc-093081250686&wid=MLB3388878513&sid=search",
    comprado: false,
  },
  {
    id: 67,
    nome: "Pegador Em Pinça Para Carnes",
    descricao: "Pegador Em Pinça Para Carnes Pizzas Em Aço Inox",
    preco: 19.00,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_998029-MLA88879775923_072025-F.webp",
    link: "https://www.mercadolivre.com.br/pegador-em-pinca-para-carnes-pizzas-em-aco-inox/p/MLB51296543#polycard_client=search_best-seller&tracking_id=c887ba03-d07d-4077-8ab2-e7f5a09d4c30&wid=MLB4096005539&sid=search",
    comprado: false,
  },
  {
    id: 68,
    nome: "Jogo 10 Peças Inox",
    descricao: "Jogo 10 Peças Inox Pegador De Macarrão Salada Massa Cor Prateado",
    preco: 74.95,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_763399-MLA97684436308_112025-F.webp",
    link: "https://www.mercadolivre.com.br/jogo-10-pecas-inox-pegador-de-macarro-salada-massa-cor-prateado/p/MLB62101311?pdp_filters=item_id:MLB5931161348#is_advertising=true&searchVariation=MLB62101311&backend_model=search-backend&position=1&search_layout=grid&type=pad&tracking_id=a7430321-55f6-4e7f-a4ce-e7a3076aab91&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=YzYzOTdlYmQtN2UyMC00YmVjLTlmZTMtOGZmY2JlOWQ4MDk3",
    comprado: false,
  },
  {
    id: 69,
    nome: "Jogo de Jarras",
    descricao: "Jogo De Jarra 1,5 Litros Com 6 Copos 300ml Em Vidro",
    preco: 78.90,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_863910-MLA96423826271_102025-F.webp",
    link: "https://www.mercadolivre.com.br/jogo-de-jarra-15-litros-com-6-copos-300ml-em-vidro/p/MLB36849579#polycard_client=search_best-seller&tracking_id=9b7735f8-20b5-4eb4-9420-978254c65dd2&wid=MLB4361389389&sid=search",
    comprado: false,
  },
  {
    id: 70,
    nome: "Aparelho De Jantar E Chá",
    descricao: "Aparelho De Jantar E Chá 30 Peças Oxford Unni Tropicano",
    preco: 700.81,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_965298-MLA96870103971_102025-F.webp",
    link: "https://www.mercadolivre.com.br/aparelho-de-jantar-e-cha-30-pecas-oxford-unni-tropicano/p/MLB46210319#polycard_client=search_best-seller&tracking_id=47b9cc21-631a-4be2-8db1-a989caa84455&wid=MLB4150657669&sid=search",
    comprado: false,
  },
  {
    id: 71,
    nome: "Jogo De 6 Xícaras Grandes Liso",
    descricao: "Jogo De 6 Xícaras Grandes 200 Ml Com Pires Unni Brisa Oxford Liso Marrom/Off White",
    preco: 165.30,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_600035-MLU79201224611_092024-F.webp",
    link: "https://www.mercadolivre.com.br/oxford-unni-marromoff-white-lisa-6/p/MLB38622935?product_trigger_id=MLB56612233&picker=true&quantity=1",
    comprado: false,
  },
  {
    id: 72,
    nome: "Saladeira",
    descricao: "Saladeira Conjunto Para Salada 3 Peças",
    preco: 33.90,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_827067-MLB48723680064_012022-F-saladeira-conjunto-para-salada-3-pecas.webp",
    link: "https://produto.mercadolivre.com.br/MLB-2129171684-saladeira-conjunto-para-salada-3-pecas-_JM#polycard_client=search-nordic&search_layout=grid&position=6&type=item&tracking_id=66956002-fb52-4b8a-98d4-fab6c711728e&wid=MLB2129171684&sid=search",
    comprado: false,
  },
  {
    id: 73,
    nome: "Puff",
    descricao: "Puff Banqueta Decorativo Viena Linho Pés Madeira Bege",
    preco: 74.95,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_693691-MLB92363119380_092025-F-puff-banqueta-decorativo-viena-linho-pes-madeira-bege.webp",
    link: "https://produto.mercadolivre.com.br/MLB-3462959545-puff-banqueta-decorativo-viena-linho-pes-madeira-bege-_JM?searchVariation=180116299159#polycard_client=search-nordic&searchVariation=180116299159&search_layout=grid&position=6&type=item&tracking_id=d8f891a3-ddf1-4a8e-9b4b-fe2b28be2aea",
    comprado: false,
  },
  {
    id: 74,
    nome: "Kit Porta Guardanapo + Porta Rolo de Papel Toalha",
    descricao: "Kit Porta Guardanapo + Porta Rolo de Papel Toalha Suporte Para Mesa Altair Matos Prata",
    preco: 20.79,
    imagem:
      "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mhi43l72cxs6ca.webp",
    link: "https://shopee.com.br/product/1325644369/58201040349?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkWHlFU0hvQlZFVENpb1FnT09uNDlDSURjbkI5VWw0Y2NsWjR6cTMyNENvK0k5cmpubWRmWVJxUWlmWFJlYksvLzBnYXBTL2dCNStxTE5zd2FJYThyNTNGb0ZSRlMrRmpIM09xZytDUEdoYWVMU2tBMHRwWlV0aHZMVkVuckcvQnZnPT0&gad_campaignid=20828771740",
    comprado: false,
  },
  {
    id: 75,
    nome: "Ar Condicionado 9000 BTUs 220v",
    descricao: "Ar Condicionado Hi Wall LG Dual Inverter Voice 9.000 Btus Quente e Frio 220v R-32",
    preco: 2279.05,
    imagem:
      "https://m.media-amazon.com/images/I/51B5dWnb5tL._AC_SX522_.jpg",
    link: "https://www.amazon.com.br/Condicionado-LG-Inverter-Voice-Quente/dp/B0CHZ75V3V/ref=asc_df_B0CHZ75V3V?mcid=484ec2781c3135b0968397809a89a3a0&hvadid=709968341215&hvpos=&hvnetw=g&hvrand=1189209080217534962&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-2438512851552&psc=1&language=pt_BR",
    comprado: false,
  },
  {
    id: 76,
    nome: "Ar Condicionado 12000 BTUs 220v",
    descricao: "Ar Condicionado Hi Wall LG Dual Inverter Voice 12.000 Btus Frio 220v R-32",
    preco: 2231.55,
    imagem:
      "https://m.media-amazon.com/images/I/51B5dWnb5tL._AC_SX522_.jpg",
    link: "https://www.amazon.com.br/Condicionado-LG-Inverter-Voice-12-000/dp/B0CHTM5V62/ref=asc_df_B0CHTM5V62?mcid=e08f26d63dc233f199f5af72fd23b17a&hvadid=709968341215&hvpos=&hvnetw=g&hvrand=2893479789121008751&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198625&hvtargid=pla-2245671547199&psc=1&language=pt_BR",
    comprado: false,
  },
  {
    id: 77,
    nome: "Saca Rolhas",
    descricao: "Abridor De Garrafa Saca Rolha Sl0251",
    preco: 19.00,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_867591-MLA99621614304_122025-F.webp",
    link: "https://www.mercadolivre.com.br/abridor-de-garrafa-saca-rolha-sl0251/p/MLB24665401#polycard_client=search-nordic&search_layout=grid&position=15&type=product&tracking_id=f46795fe-c6e3-4c81-928a-34fe8f5e6aa9&wid=MLB4215801911&sid=search",
    comprado: false,
  },
  {
    id: 78,
    nome: "Pipoqueira Elétrica 110v",
    descricao: "Pipoqueira Popflix Mondial Vermelho1200W PP-03",
    preco: 149.00,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_804282-MLA99461759148_112025-F.webp",
    link: "https://www.mercadolivre.com.br/mondial-popflix-pp-03-vermelho-127v/p/MLB13471360?product_trigger_id=MLB14805721&attributes=COLOR%3AVermelho%2CVOLTAGE%3A127V_vpp&picker=true&quantity=1",
    comprado: false,
  },
  {
    id: 79,
    nome: "Jogo De Utensilios Evo C/4",
    descricao: "Jogo De Utensilios Evo C/4 Cores Variadas",
    preco: 25.55,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_894639-MLB83205660871_032025-F.webp",
    link: "https://www.mercadolivre.com.br/jogo-de-utensilios-evo-c4-cores-variadas/up/MLBU3076414955?pdp_filters=item_id:MLB5324041192&matt_tool=92013967&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22603531565&matt_ad_group_id=184689824807&matt_match_type=&matt_network=g&matt_device=c&matt_creative=758138322203&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=584337072&matt_product_id=MLB5324041192&matt_product_partition_id=2425720730334&matt_target_id=pla-2425720730334&cq_src=google_ads&cq_cmp=22603531565&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=22603531565",
    comprado: true,
  },
  {
    id: 80,
    nome: "Kit Confeiteiro",
    descricao: "Kit Confeiteiro C/batedor De Clara + Espátula E Pincel Cinza",
    preco: 41.16,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_743650-MLB85985751257_062025-F.webp",
    link: "https://www.mercadolivre.com.br/kit-confeiteiro-cbatedor-de-clara--espatula-e-pincel-cinza/up/MLBU3236659614?pdp_filters=item_id:MLB5429638834&matt_tool=92013967&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22603531565&matt_ad_group_id=184689824807&matt_match_type=&matt_network=g&matt_device=c&matt_creative=758138322203&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=179924514&matt_product_id=MLB5429638834&matt_product_partition_id=2425720730334&matt_target_id=pla-2425720730334&cq_src=google_ads&cq_cmp=22603531565&cq_net=g&cq_plt=gp&cq_med=pla&gad_campaignid=22603531565",
    comprado: true,
  },
  {
    id: 81,
    nome: "Forma Cupcakes",
    descricao: "Forma Cupcakes 6 Cavidades Antiaderente Teflon 18*26*3 Cm - 123útil",
    preco: 30.99,
    imagem:
      "https://m.magazineluiza.com.br/a-static/420x420/forma-cupcakes-6-cavidades-antiaderente-teflon-18-26-3-cm-123util/casaprimore/10051078831/4a45a4ddbb7234fe42d8c22045c7815f.jpeg",
    link: "https://www.magazineluiza.com.br/forma-cupcakes-6-cavidades-antiaderente-teflon-18-26-3-cm-123util/p/gj47h3a391/ud/facu/?&seller_id=casaprimore&utm_content=&partner_id=83233&gad_campaignid=23350983304",
    comprado: true,
  },
  {
    id: 82,
    nome: "Cesto de Bambu",
    descricao: "Cesto de Bambu Retangular Médio",
    preco: 44.88,
    imagem:
      "https://m.media-amazon.com/images/I/71Ub9IECFYL._AC_SX679_.jpg",
    link: "https://www.amazon.com.br/Cesto-de-Bambu-Retangular-M%C3%A9dio/dp/B0FJMSQG9M",
    comprado: true,
  },
  {
    id: 83,
    nome: "Porta Chaves",
    descricao: "Porta Chaves Com Frase",
    preco: 12.90,
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_2X_933521-MLB71499401909_092023-F.webp",
    link: "https://www.mercadolivre.com.br/porta-chaves-com-frase/up/MLBU1154804596?matt_tool=18956390&pdp_filters=item_id:MLB3712054818",
    comprado: true,
  },
  {
    id: 84,
    nome: "Forma para Pão",
    descricao: "Forma para Pão - 27cm",
    preco: 24.90,
    imagem:
      "https://images.tcdn.com.br/img/img_prod/692716/forma_para_pao_27cm_941_1_bf44d8f0f29a4a44a87460ea8cca465d_20221107155839.jpg",
    link: "https://www.catuaipresentes.com.br/casa-e-cozinha/panelas-e-assadeiras/formas/forma-ppao-30x13cm",
    comprado: true,
  },
  /*
  {
    id: ,
    nome: "",
    descricao: "",
    preco: ,
    imagem:
      "",
    link: "",
    comprado: false,
  },
  */
];

const WHATSAPP = "5534991597928";
const formatBRL = (valor) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

function App() {
  const [ordenacao, setOrdenacao] = useState("padrao");
  const [filtro, setFiltro] = useState("todos"); // 'todos', 'disponiveis', 'comprados'

  const produtosFiltrados = PRODUTOS.filter((produto) => {
    if (filtro === "disponiveis") return !produto.comprado;
    if (filtro === "comprados") return produto.comprado;
    return true;
  });

  const produtosOrdenados = [...produtosFiltrados].sort((a, b) => {
    if (ordenacao === "nome") return a.nome.localeCompare(b.nome);
    if (ordenacao === "preco-menor") return a.preco - b.preco;
    if (ordenacao === "preco-maior") return b.preco - a.preco;
    return b.id - a.id;
  });

  const totalDisponiveis = PRODUTOS.filter((p) => !p.comprado).length;
  const totalComprados = PRODUTOS.filter((p) => p.comprado).length;

  const mensagemWhatsApp = encodeURIComponent(
    "Olá! Acabei de comprar um presente do chá de casa nova de vocês 🎁: "
  );

  return (
    <div className="min-h-screen relative z-0 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50/40 to-purple-50">
      {/* Fundo temático (decorativo) */}
      <div className="pointer-events-none absolute -z-10 -top-32 -left-32 h-96 w-96 rounded-full bg-pink-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 top-40 -right-32 h-96 w-96 rounded-full bg-rose-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 -bottom-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-purple-200/50 blur-3xl" />
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-10 border-b border-pink-100">
        <div className="h-1 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500" />
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="text-pink-500" size={32} fill="currentColor" />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">
                Felipe <span className="text-pink-500">&</span> Bárbara
              </h1>
              <p className="text-gray-600 text-sm">Nosso Chá de Casa Nova</p>
              <p className="text-gray-400 text-xs mt-1">Atualizado em: <span className="font-medium">{ATUALIZADO_EM}</span></p>
            </div>
            <Heart className="text-pink-500" size={32} fill="currentColor" />
          </div>

          {/* Botão WhatsApp Destaque */}
          <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3 text-white">
                <MessageCircle size={32} className="animate-bounce" />
                <div>
                  <p className="font-bold text-lg">Comprou alguma coisa?</p>
                  <p className="text-sm text-green-50">
                    Nos avise para marcarmos como comprado!
                  </p>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${mensagemWhatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Avisar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Controles */}
      <div className="max-w-6xl mx-auto px-4 mt-6 space-y-4">
        {/* Doações via PIX */}
        <div className="bg-white rounded-xl shadow-sm p-4 border border-pink-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Contribuições via PIX 💖</h2>
            <p className="text-gray-600 text-sm mt-1">
              Se quiser contribuir com a nossa casinha, é só escanear o QR Code. Obrigado!
            </p>
          </div>

          <img
            src={PIX_QR_SRC}
            alt="QR Code do PIX"
            className="w-36 h-36 rounded-lg border border-gray-200 bg-white p-2"
            loading="lazy"
          />
        </div>
        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-3xl font-bold text-pink-500">
              {PRODUTOS.length}
            </div>
            <div className="text-gray-600 text-sm">Total de Itens</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <div className="text-3xl font-bold text-green-500">
              {totalComprados}
            </div>
            <div className="text-gray-600 text-sm">Já Comprados</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-blue-500">
              {totalDisponiveis}
            </div>
            <div className="text-gray-600 text-sm">Disponíveis</div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <span className="text-gray-700 font-medium flex items-center gap-2">
              <Filter size={20} />
              Mostrar:
            </span>
            <button
              onClick={() => setFiltro("todos")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filtro === "todos"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Todos ({PRODUTOS.length})
            </button>
            <button
              onClick={() => setFiltro("disponiveis")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filtro === "disponiveis"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Disponíveis ({totalDisponiveis})
            </button>
            <button
              onClick={() => setFiltro("comprados")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filtro === "comprados"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Comprados ({totalComprados})
            </button>
          </div>

          <div className="flex items-center gap-4 flex-wrap border-t pt-4">
            <span className="text-gray-700 font-medium flex items-center gap-2">
              <SortAsc size={20} />
              Ordenar por:
            </span>
            <button
              onClick={() => setOrdenacao("padrao")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                ordenacao === "padrao"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Mais recentes
            </button>
            <button
              onClick={() => setOrdenacao("nome")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                ordenacao === "nome"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Nome A-Z
            </button>
            <button
              onClick={() => setOrdenacao("preco-menor")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                ordenacao === "preco-menor"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Menor Preço
            </button>
            <button
              onClick={() => setOrdenacao("preco-maior")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                ordenacao === "preco-maior"
                  ? "bg-pink-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Maior Preço
            </button>
          </div>
        </div>
      </div>

      {/* Grid de Produtos */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {produtosOrdenados.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">
              Nenhum produto para exibir neste filtro
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosOrdenados.map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
              >
                {/* Imagem com faixa de "Comprado" */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className={`w-full h-full object-cover ${
                      produto.comprado ? "filter grayscale opacity-60" : ""
                    }`}
                    loading="lazy"
                  />
                  {produto.comprado && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-green-500 text-white font-bold py-2 px-16 transform rotate-[-30deg] shadow-lg">
                        <div className="flex items-center gap-2 text-xl">
                          <Check size={24} />
                          JÁ COMPRADO
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {produto.nome}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {produto.descricao}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-pink-600 font-bold text-xl">
                      {formatBRL(produto.preco)}
                    </div>
                    {!produto.comprado ? (
                      <a
                        href={produto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium"
                      >
                        <ShoppingBag size={16} />
                        Ver Produto
                      </a>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                        <Check size={16} />
                        Comprado
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md mt-12 py-8 border-t border-pink-100">
        <div className="h-1 bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 mb-6" />
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Heart className="text-pink-500 mx-auto mb-3" size={32} fill="currentColor" />
          <p className="text-gray-600 text-lg font-medium">
            Com amor, Felipe e Bárbara 💕
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Obrigado por fazer parte deste momento especial!
          </p>
        </div>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);