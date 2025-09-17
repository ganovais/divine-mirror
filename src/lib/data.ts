// Dados das estações para "O Espelho Divino"
// Observação: preencha o campo `text` com o texto dos versículos na tradução que preferir
// (idealmente uma tradução de domínio público ou com permissão de uso no seu projeto).

export interface Verse {
  reference: string; // Ex: "2 Coríntios 12:9"
  text: string;
}

export interface Station {
  id: string; // Ex: "fraqueza-e-incapacidade"
  title: string; // Ex: "Quando você se sente Fraco e Incapaz"
  icon?: string; // Nome de um ícone da biblioteca lucide-react
  verses: Verse[]; // Exatamente 4 versículos por estação
  questions?: string[]; // Perguntas para reflexão
}

// Lista de estações (preenchida com referências e textos em branco como placeholders).
// Dica: use ícones de https://lucide.dev/icons
export const stations = [
  {
    id: "fraqueza-e-incapacidade",
    title: "Quando você se sente Fraco e Incapaz",
    icon: "dumbbell",
    verses: [
      {
        reference: "2 Coríntios 12,9",
        text: "Mas ele me disse: “Basta-te minha graça, porque é na fraqueza que se revela totalmente a minha força”. Portanto, prefiro gloriar-me das minhas fraquezas, para que habite em mim a força de Cristo.",
      },
      { reference: "Filipenses 4,13", text: "Tudo posso naquele que me conforta." },
      { reference: "Isaías 40,29-31", text: "29 Dá forças ao homem acabrunhado, redobra o vigor do fraco. 30 Até os adolescentes podem esgotar-se, e jovens robustos podem cambalear, 31 mas aqueles que contam com o Senhor renovam suas forças; ele dá-lhes asas de águia. Correm sem se cansar, vão para a frente sem se fatigar." },
      { reference: "Salmos 72,26", text: "Meu coração e minha carne podem já desfalecer, a rocha de meu coração e minha herança eterna é Deus." },
    ],
    questions: [
      "Em quais áreas você se sente mais fraco hoje?",
      "Como depender mais da graça de Deus nessas áreas concretamente nesta semana?",
    ],
  },
  {
    id: "ansiedade-e-preocupacao",
    title: "Quando a Ansiedade e a Preocupação apertam o coração",
    icon: "cloud-rain",
    verses: [
      { reference: "Mateus 6,25-34", text: "25 Portanto, eis que vos digo: não vos preo­cupeis por vossa vida, pelo que comereis, nem por vosso corpo, pelo que vestireis. A vida não é mais do que o alimento e o corpo não é mais que as vestes? 26 Olhai as aves do céu: não semeiam nem ceifam, nem recolhem nos celeiros e vosso Pai celeste as alimenta. Não valeis vós muito mais que elas? 27 Qual de vós, por mais que se esforce, pode acrescentar um só côvado à duração de sua vida?* 28 E por que vos inquietais com as vestes? Considerai como crescem os lírios do campo; não trabalham nem fiam. 29 Entretanto, eu vos digo que o próprio Salomão no auge de sua glória não se vestiu como um deles. 30 Se Deus veste assim a erva dos campos, que hoje cresce e amanhã será lançada ao fogo, quanto mais a vós, homens de pouca fé? 31 Não vos aflijais, nem digais: Que comeremos? Que beberemos? Com que nos vestiremos? 32 São os pagãos que se preocupam com tudo isso. Ora, vosso Pai celeste sabe que necessitais de tudo isso. 33 Buscai em primeiro lugar o Reino de Deus e a sua justiça e todas estas coisas vos serão dadas em acréscimo. 34 Não vos preocupeis, pois, com o dia de amanhã: o dia de amanhã terá as suas preocupações próprias. A cada dia basta o seu cuidado.”" },
  { reference: "1 Pedro 5,7", text: "Confiai-lhe todas as vossas preocupações, porque ele tem cuidado de vós." },
  { reference: "Filipenses 4,6-7", text: "6 Não vos inquieteis com nada! Em todas as circunstâncias apresentai a Deus as vossas preocupações, mediante a oração, as súplicas e a ação de graças. 7 E a paz de Deus, que excede toda a inteligência, haverá de guardar vossos corações e vossos pensamentos, em Cristo Jesus." },
  { reference: "Salmos 54,23", text: "Depõe no Senhor os teus cuidados, porque ele será teu sustentáculo; não permitirá jamais que vacile o justo." },
    ],
    questions: [
      "O que tem tirado sua paz ultimamente?",
      "O que você pode entregar em oração a Deus agora mesmo?",
    ],
  },
  {
    id: "medo-e-inseguranca",
    title: "Quando o Medo e a Insegurança te visitam",
    icon: "shield",
    verses: [
  { reference: "Josué 1,9", text: "Isto é uma ordem: sê firme e corajoso. Não te atemorizes, não tenhas medo, porque o Senhor está contigo em qualquer parte para onde fores." },
  { reference: "Isaías 41,10", text: "Nada temas, porque estou contigo, não lances olhares desesperados, pois eu sou teu Deus; eu te fortaleço e venho em teu socorro, eu te amparo com minha destra vitoriosa." },
  { reference: "Salmos 33,5", text: "Procurei o Senhor e ele me atendeu, livrou-me de todos os temores." },
  { reference: "2 Timóteo 1,7", text: "Pois Deus não nos deu um espírito de timidez, mas de fortaleza, de amor e de sabedoria." },
    ],
    questions: [
      "Que medo específico você gostaria que Deus te ajudasse a enfrentar hoje?",
      "Quem poderia caminhar com você nessa área para fortalecer sua fé?",
    ],
  },
  {
    id: "tristeza-e-luto",
    title: "Quando a Tristeza e o Luto pesam",
    icon: "moon",
    verses: [
  { reference: "Salmos 33,19", text: "O Senhor está perto dos contritos de coração, e salva os que têm o espírito abatido." },
  { reference: "Apocalipse 21,4", text: "Enxugará toda lágrima de seus olhos e já não haverá morte, nem luto, nem grito, nem dor, porque passou a primeira condição." },
  { reference: "João 16,33", text: "“Referi-vos essas coisas para que tenhais a paz em mim. No mundo haveis de ter aflições. Coragem! Eu venci o mundo.”" },
  { reference: "Salmos 29,6", text: "Porque a sua indignação dura apenas um momento, enquanto sua benevolência é para toda a vida. Pela tarde, vem o pranto, mas, de manhã, volta a alegria." },
    ],
    questions: [
      "O que sua alma precisa expressar a Deus neste momento de dor?",
      "Qual pequeno passo de consolo e esperança você pode dar hoje?",
    ],
  },
  {
    id: "culpa-e-culpabilidade",
    title: "Quando a Culpa te acusa",
    icon: "scale",
    verses: [
  { reference: "1 João 1,9", text: "Se reconhecemos os nossos pecados, (Deus aí está) fiel e justo para nos perdoar os pecados e para nos purificar de toda iniquidade." },
  { reference: "Salmos 50,12", text: "Ó meu Deus, criai em mim um coração puro, e renovai-me o espírito de firmeza." },
  { reference: "Romanos 8,1", text: "De agora em diante, pois, já não há nenhuma condenação para aqueles que estão em Jesus Cristo." },
  { reference: "Miquéias 7,18-19", text: "18 Qual é o Deus que, como vós, apaga a iniquidade e perdoa o pecado do resto de seu povo, que não se ira para sempre porque prefere a misericórdia? 19 Uma vez mais, tende piedade de nós! Esquecei as nossas faltas e jogai nossos pecados nas profundezas do mar!" },
    ],
    questions: [
      "Há algo que você precisa confessar a Deus hoje?",
      "Como você pode receber o perdão e caminhar na liberdade que Ele oferece?",
    ],
  },
  {
    id: "solidao-e-rejeicao",
    title: "Quando a Solidão e a Rejeição doem",
    icon: "user-x",
    verses: [
  { reference: "Deuteronômio 31,6", text: "Coragem! E sede fortes. Nada vos atemorize, e não os temais, porque é o Senhor, vosso Deus, que marcha à vossa frente: ele não vos deixará nem vos abandonará." },
  { reference: "Isaías 43,1-2", text: "1 E agora, eis o que diz o Senhor, aquele que te criou, Jacó, e te formou, Israel: “Nada temas, pois eu te resgato, eu te chamo pelo nome, és meu. 2 Se tiveres de atravessar a água, estarei contigo. E os rios não te submergirão; se caminhares pelo fogo, não te queimarás, e a chama não te consumirá." },
  { reference: "Salmos 26,10", text: "Se meu pai e minha mãe me abandonarem, o Senhor me acolherá." },
  { reference: "João 14,18", text: "Não vos deixarei órfãos. Voltarei a vós." },
    ],
    questions: [
      "De que forma você pode perceber a presença de Deus com você hoje?",
      "Quem você pode procurar para receber apoio e comunhão?",
    ],
  },
  {
    id: "raiva-e-amargura",
    title: "Quando a Raiva e a Amargura te consomem",
    icon: "flame",
    verses: [
  { reference: "Efésios 4,31-32", text: "31 Toda amargura, ira, indigna­ção, gritaria e calúnia sejam desterradas do meio de vós, bem como toda malícia. 32 Antes, sede uns com os outros bondosos e compassivos. Perdoai-vos uns aos outros, como também Deus vos perdoou, em Cristo." },
  { reference: "Tiago 1,19-20", text: "19 Já o sabeis, meus diletíssimos irmãos: todo homem deve ser pronto para ouvir, porém tardo para falar e tardo para se irar; 20 porque a ira do homem não cumpre a justiça de Deus." },
  { reference: "Provérbios 15,1", text: "Uma resposta branda aplaca o furor, uma palavra dura excita a cólera." },
  { reference: "Romanos 12,17-19", text: "17 Não pagueis a ninguém o mal com o mal. Aplicai-vos a fazer o bem diante de todos os homens. 18 Se for possível, quanto depender de vós, vivei em paz com todos os homens. 19 Não vos vingueis uns dos outros, caríssimos, mas deixai agir a ira de Deus, porque está escrito: A mim a vingança; a mim exercer a justiça, diz o Senhor." },
    ],
    questions: [
      "Que ferida precisa ser entregue a Deus para cura?",
      "Qual seria um próximo passo concreto em direção ao perdão?",
    ],
  },
  {
    id: "duvida-e-falta-de-fe",
    title: "Quando a Dúvida abala sua Fé",
    icon: "help-circle",
    verses: [
  { reference: "Marcos 9,24", text: "Imediatamente exclamou o pai do menino: “Creio! Vem em socorro à minha falta de fé!”." },
  { reference: "Tiago 1,5-6", text: "5 Se alguém de vós necessita de sabedoria, peça-a a Deus – que a todos dá liberalmente, com simplicidade e sem recriminação – e lhe será dada. 6 Mas peça-a com fé, sem nenhuma vacilação, porque o homem que vacila assemelha-se à onda do mar, levantada pelo vento e agitada de um lado para o outro." },
  { reference: "Hebreus 11,1", text: "A fé é o fundamento da esperança, é uma certeza a respeito do que não se vê" },
  { reference: "Romanos 10,17", text: "Logo, a fé provém da pregação e a pregação se exerce em razão da palavra de Cristo." },
    ],
    questions: [
      "Qual é a principal dúvida que você deseja apresentar a Deus?",
      "Que prática pode fortalecer sua fé nesta semana (oração, leitura, comunhão)?",
    ],
  },
  {
    id: "esperanca-e-futuro",
    title: "Quando você precisa de Esperança para o Futuro",
    icon: "sprout",
    verses: [
  { reference: "Jeremias 29,11", text: "Bem conheço os desígnios que mantenho para convosco – oráculo do Senhor –, desígnios de prosperidade e não de calamidade, de vos garantir um futuro e uma esperança." },
  { reference: "Romanos 15,13", text: "O Deus da esperança vos en­cha de toda a alegria e de toda a paz na vossa fé, para que pela virtude do Espírito Santo transbordeis de esperança!" },
  { reference: "Salmos 41,12", text: "Por que te deprimes, ó minha alma, e te inquietas dentro de mim? Espera em Deus, porque ainda hei de louvá-lo: ele é minha salvação e meu Deus." },
  { reference: "Lamentações 3,22-23", text: "22 É graças ao Senhor que não fomos aniquilados, porque não se esgotou sua piedade. 23 Cada manhã ele se manifesta e grande é sua fidelidade." },
    ],
    questions: [
      "Qual promessa de Deus você pode segurar hoje?",
      "Que passo de esperança você pode dar para o futuro, ainda que pequeno?",
    ],
  },
  {
    id: "perdao-e-reconciliacao",
    title: "Quando o Perdão e a Reconciliação são necessários",
    icon: "handshake",
    verses: [
  { reference: "Colossenses 3,13", text: "Suportai-vos uns aos outros e perdoai-vos mutuamente, toda vez que tiverdes queixa contra outrem. Como o Senhor vos perdoou, assim perdoai também vós." },
  { reference: "Mateus 6,14-15", text: "14 Porque, se perdoardes aos homens as suas ofensas, vosso Pai celeste também vos perdoará. 15 Mas, se não perdoardes aos homens, tampouco vosso Pai vos perdoará." },
  { reference: "Efésios 4,32", text: "Antes, sede uns com os outros bondosos e compassivos. Perdoai-vos uns aos outros, como também Deus vos perdoou, em Cristo." },
  { reference: "Mateus 18,21-22", text: "21.Então, Pedro se aproximou dele e disse: “Senhor, quantas vezes devo per­doar a meu irmão, quando ele pecar contra mim? Até sete vezes?” 22 Respondeu Jesus: “Não te digo até sete vezes, mas até setenta vezes sete”." },
    ],
    questions: [
      "Quem Deus está te convidando a perdoar?",
      "Como você pode buscar reconciliação com sabedoria e amor?",
    ],
  },
  {
    id: "alegria-e-gratidao",
    title: "Quando o coração transborda de Alegria e Gratidão",
    icon: "sun",
    verses: [
  { reference: "Filipenses 4,4", text: "Alegrai-vos sempre no Senhor. Repito: alegrai-vos!" },
  { reference: "Salmos 99,4", text: "Entrai cantando sob seus pórticos, vinde aos seus átrios com cânticos; glorificai-o e bendizei o seu nome." },
  { reference: "1 Tessalonicenses 5,16-18", text: "16 Vivei sempre contentes. 17 Orai sem cessar. 18 Em todas as circunstâncias, dai graças, porque esta é a vosso respeito a vontade de Deus em Jesus Cristo." },
  { reference: "Salmos 117,24", text: "Este é o dia que o Senhor fez: seja para nós dia de alegria e de felicidade." },
    ],
    questions: [
      "Pelo que, especificamente, seu coração é grato hoje?",
      "Como você pode expressar essa gratidão?",
    ],
  },
  {
    id: "proposito-e-direcao",
    title: "Quando você busca Propósito e Direção",
    icon: "compass",
    verses: [
  { reference: "Provérbios 3,5-6", text: "5 Que teu coração deposite toda a sua confiança no Senhor! Não te firmes em tua própria sabedoria! 6 Sejam quais forem os teus caminhos, pensa nele, e ele aplainará tuas sendas." },
  { reference: "Salmos 31,8-9", text: "8 “Vou te ensinar – dizeis –, vou te mostrar o caminho que deves seguir; vou te instruir, fitando em ti os meus olhos: 9 não queiras ser sem inteligência como o cavalo, como o muar, que só ao freio e à rédea submetem seus ímpetos; de outro modo não se chegam a ti.”" },
  { reference: "Tiago 4,13-15", text: "13 Agora dizeis: “Hoje ou ama­nhã iremos à tal cidade, ficaremos ali um ano, comerciaremos e tiraremos o nosso lucro”. 14 E, entretanto, não sabeis o que acontecerá amanhã! Pois que é a vossa vida? Sois um vapor que aparece por um instante e depois se desvanece. 15 Em vez de dizerdes: “Se Deus quiser, viveremos e faremos esta ou aquela coisa”." },
  { reference: "Salmos 36,5", text: "Confia ao Senhor a tua sorte, espera nele, e ele agirá." },
    ],
    questions: [
      "Em que área você precisa da direção de Deus agora?",
      "Qual passo de obediência você pode dar hoje, confiando no Senhor?",
    ],
  },
] as const satisfies readonly Station[];

export function getStationById(id: string): Station | undefined {
  return stations.find((s) => s.id === id);
}
