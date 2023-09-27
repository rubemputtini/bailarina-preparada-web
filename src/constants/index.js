import { facebook, instagram, whatsapp, youtube, telegram } from "../assets/icons";
import { depoimento2, depoimento3, depoimento4, depoimentoAndreza, depoimentoLeticia, depoimentoManu, depoimentoNath, cardio, flexibilidade, core, forca, pes, endehors } from "../assets/images";

export const navLinks = [
    { href: "https://hotmart.com/pt-br/club/clube-bailarina-preparada", label: "Área do Aluno"}, 
    { href: "https://wa.me/5561996256658", label: "Está com dúvida?", imgURL: whatsapp},
    { href: "https://pay.hotmart.com/R46545109G?off=tvul0ly3", label: "Hotmart"},
];

export const statistics = [
    { value: '431', label: 'Bailarinas Preparadas' },
    { value: '19', label: 'Módulos de Conteúdo' },
    { value: '130', label: 'Treinos Gravados' },
];


export const services = [
    {
        imgURL: cardio,
        label: "CARDIO",
    },
    {
        imgURL: flexibilidade,
        label: "FLEXIBILIDADE",
    },
    {
        imgURL: forca,
        label: "FORÇA",
    },
    {
        imgURL: pes,
        label: "PÉS",
    },
    {
        imgURL: core,
        label: "CORE",
    },
    {
        imgURL: endehors,
        label: "ENDEHORS",
    },
];

export const feedbacks = [
    { src: depoimento2 },
    { src: depoimento3 },
    { src: depoimento4 },
    { src: depoimentoAndreza },
    { src: depoimentoLeticia },
    { src: depoimentoManu },
    { src: depoimentoNath },
]

export const reviews = [
    {
        
        customerName: 'Letícia Gusso',
        youtubeVideo: "https://www.youtube.com/embed/3jaVNFTSWzs?si=kW7vbPw8YiUXoPaQ",
        feedback: "Indico porque realmente eu senti em mim uma melhora, uma melhora de flexbilidade de força, até de torneamento da musculatura, minhas pernas estão muito mais bonitas e mais fortes, apesar de eu não fazer musculação, ela está super bem definida."
    },
    {
        
        customerName: 'Andrezza Carvalho',
        youtubeVideo: "https://www.youtube.com/embed/9T7PsGisoqo?si=HRPLJdngMIiINF0I",
        feedback: "A minha vida mudou depois que eu comecei a fazer os treinos da Bailarina Preparada, porque lógico que no aspecto físico eu tive ganhos enormes. A minha flexibilidade melhorou muito, minha força, abdômen, colocação, tudo melhorou. Meus professores comentaram, nos 6 primeiros meses e como minhas pernas estavam altas. Vi resultados em todos os aspectos que tinha me proposto a melhorar."
    },
    {
        
        customerName: 'Hortência Ferreira',
        youtubeVideo: "https://www.youtube.com/embed/m1NdYxFnwwU?si=KIGZS4m30sba3r6e",
        feedback: "Eu me sinto mais fortificada, me sinto mais preparada. Preparada para as minhas aulas, preparada para os palcos, para dançar, eu tenho fôlego e tenho força para sustentar a perna."
    },
    {
        
        customerName: 'Anna Giulia',
        youtubeVideo: "https://www.youtube.com/embed/uE2P9J4e4YE?si=yCEE2mj7iSCNbbcp",
        feedback: "Estava sentindo muita dificuldade de estabilidade no tornozelo e ela me mostrou a plataforma dela. No começo tinha dúvidas se daria certo. Mas dá sim, na plataforma tem tudo o que você precisa. Tenho uma rotina muito corrida, apresentações, ensaios e dá super para encaixar."
    },
    {
        
        customerName: 'Fábia Gondim',
        youtubeVideo: "https://www.youtube.com/embed/Riq_Ps3is58?si=5mF_rZTS6Zc6EkyY",
        feedback: "Foi realmente a mudança que eu estava procurando. Porque eu me sentia frustrada nas aulas de não conseguir fazer nada, ver todo mundo ao seu redor fazendo as coisas e só você não conseguindo."
    },
    {
        
        customerName: 'Ana Lia Moreira',
        youtubeVideo: "https://www.youtube.com/embed/533DbE9hld8?si=np42wk153J0RaLwj",
        feedback: "Existe uma bailarina antes do Clube Bailarina Preparada e depois do Clube Bailarina Preparada, são duas pessoas diferentes, não há comparação do antes e do depois."
    },
];


export const questionsFAQ = [
    {
        question: 'Qualquer bailarina pode fazer, mesmo que seja iniciante?',
        answer: 'Sim! Durante as aulas, a Bella sugere adaptações mais fáceis e mais difíceis para atender a todos os níveis!',
    },
    {
        question: 'Quanto tempo duram as aulas?',
        answer: 'As aulas duram em média 20 a 30 minutos, para que qualquer pessoa consiga encaixar na rotina! Caso você tenha mais tempo, a Bella ajuda a selecionar outra aula para fazer de forma combinada!',
    },
    {
        question: 'É preciso ter algum material?',
        answer: 'Não é obrigatório, mas recomendado! Durante os treinos utilizamos elástico de 3 metros, miniband, peso e bola suíça. Caso não tenha, não há problemas! Temos uma aula de como substituir esses materiais até que você possa investir nos equipamentos 💪',
    },
    {
        question: 'Como funciona o suporte exclusivo para dúvidas?',
        answer: 'As dúvidas podem ser tiradas através da própria plataforma onde está hospedado o Clube (Hotmart), pelo grupo do WhatsApp das alunas ou em uma conversa privada com a Bella.',
    },
];

export const socialMedia = [
    {
      id: "instagram",
      icon: instagram,
      link: "https://instagram.com/bailarinapreparada",
    },
    {
      id: "facebook",
      icon: facebook,
      link: "https://www.facebook.com/bailarinapreparada",
    },
    {
      id: "youtube",
      icon: youtube,
      link: "https://www.youtube.com/channel/UCmH9ztPknVvt0hkjJCfiChw?sub_confirmation=1",
    },
    {
      id: "telegram",
      icon: telegram,
      link: "https://t.me/+OIEsb8rayHg2YzI0",
    },
  ];

  export const pages = [
    {
        id: "privacidade",
        link: "https://bailarinapreparada.com.br/politica-de-privacidade",
    },
  ]