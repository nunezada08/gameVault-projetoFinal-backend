// O `prisma` é passado pelo `seed.mjs` — não instanciamos aqui para evitar múltiplas conexões.

const famousGames = [
  {
    nome: "Demon's Souls (Remake)",
    desenvolvedor: "FromSoftware/Bluepoint",
    genero: "Soulslike",
    anoLancamento: 2020,
    preco: 329.95,
    descricao: "O pioneiro da série, refeito para a nova geração.",
    imagem: "https://image.api.playstation.com/vulcan/img/rnd/202011/1717/GemRaOZaCMhGxQ9dRhnQQyT5.png"
  },
  {
    nome: "Dark Souls",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2011,
    preco: 164.95,
    descricao: "O RPG de Ação desafiador que popularizou o gênero.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/570940/capsule_616x353.jpg"
  },
  {
    nome: "Bloodborne",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2015,
    preco: 219.95,
    descricao: "Caça gótica Lovecraftiana com foco em combate rápido.",
    imagem: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/Sy5e8DmeKIJVjlAGraPAJYkT.png"
  },
  {
    nome: "Elden Ring",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2022,
    preco: 329.95,
    descricao:"O vasto mundo aberto Soulslike criado por Miyazaki e G.R.R. Martin.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
  },
  {
    nome: "Resident Evil 1 (1996)",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 1996,
    preco: 82.5,
    descricao: "O início do survival horror e da mansão assombrada.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/04/Resident_Evil_capa.png"
  },
  {
    nome: "Resident Evil 2 Remake",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2019,
    preco: 164.95,
    descricao: "O remake aterrorizante da experiência de Raccoon City.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/883710/header.jpg"
  },
  {
    nome: "Resident Evil 3 Remake",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2020,
    preco: 164.95,
    descricao: "Jill Valentine e a perseguição implacável de Nemesis.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/952060/header.jpg"
  },
  {
    nome: "Resident Evil 4 (2004)",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2005,
    preco: 109.95,
    descricao:"O clássico que mudou o survival horror para uma câmera sobre o ombro.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/9/91/Resident_Evil_4_-_North-american_cover.jpg"
  },
  {
    nome: "Resident Evil 5",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2009,
    preco: 54.95,
    descricao: "Foco total na ação cooperativa e na África.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/21690/header.jpg"
  },
  {
    nome: "Resident Evil 6",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2012,
    preco: 54.95,
    descricao: "O jogo mais focado em ação da série, com múltiplas campanhas.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/221040/header.jpg"
  },
  {
    nome: "Resident Evil 7: Biohazard",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2017,
    preco: 109.95,
    descricao: "Retorno às raízes do horror em primeira pessoa.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/418370/header.jpg"
  },
  {
    nome: "Resident Evil Village (8)",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2021,
    preco: 274.95,
    descricao: "A aventura de Ethan Winters na vila sombria.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1196590/header.jpg"
  },
  {
    nome: "Resident Evil 9 (Projetado)",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2025,
    preco: 329.95,
    descricao:
      "O próximo grande título da série, focado no terror de sobrevivência.",
    imagem: "https://egw.news/uploads/news/1/17/1742245448094_1742245448094.webp"
  },
  {
    nome: "God of War (Original 2005)",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2005,
    preco: 54.95,
    descricao: "A fúria de Kratos na Grécia Antiga.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/5/53/God_of_War_2005_capa.png"
  },
  {
    nome: "God of War II",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2007,
    preco: 54.95,
    descricao: "Considerado o ápice da franquia original de Kratos no PS2.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_rHm-wTcyReenjEAhWV4vfVH8Uwnjps5zA&s"
  },
  {
    nome: "God of War III",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2010,
    preco: 109.95,
    descricao: "O final épico da trilogia grega.",
    imagem: "https://cdn.awsli.com.br/800x800/53/53761/produto/13244966/d8b15e12f6.jpg"
  },
  {
    nome: "God of War (2018)",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2018,
    preco: 274.95,
    descricao: "A reinvenção nórdica de Kratos e Atreus.",
    imagem: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg?t=1763059412"
  },
  {
    nome: "God of War: Ragnarok",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2022,
    preco: 329.95,
    descricao: "O épico final da saga nórdica.",
    imagem: "https://m.media-amazon.com/images/I/81gC318-4KL._UF1000,1000_QL80_.jpg"
  },
  {
    nome: "Devil May Cry (2001)",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2001,
    preco: 109.95,
    descricao: "O nascimento do combate estiloso com Dante.",
    imagem: "https://cdn.mobygames.com/b336c098-ab77-11ed-a218-02420a00019e.webp"
  },
  {
    nome: "Devil May Cry 5",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2019,
    preco: 164.95,
    descricao:
      "O ápice da ação 'hack and slash' com três personagens jogáveis.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg"
  },
  {
    nome: "Darksiders",
    desenvolvedor: "Vigil Games",
    genero: "Ação",
    anoLancamento: 2010,
    preco: 109.95,
    descricao: "Guerra, o Cavaleiro do Apocalipse, em sua jornada.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/462780/header.jpg"
  },
  {
    nome: "Darksiders II",
    desenvolvedor: "Vigil Games",
    genero: "Ação",
    anoLancamento: 2012,
    preco: 109.95,
    descricao:
      "Morte, o Cavaleiro do Apocalipse, em uma aventura maior e com elementos RPG.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/388410/header.jpg"
  },
  {
    nome: "Darksiders III",
    desenvolvedor: "Gunfire Games",
    genero: "Ação",
    anoLancamento: 2018,
    preco: 164.95,
    descricao: "Fúria, a Cavaleira, focada em combate ágil e quebra-cabeças.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/606280/header.jpg"
  },
  {
    nome: "Tomb Raider (1996)",
    desenvolvedor: "Core Design",
    genero: "Aventura",
    anoLancamento: 1996,
    preco: 82.5,
    descricao: "A aventura original de Lara Croft.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/5/55/Tomb_Raider_1996_capa.png"
  },
  {
    nome: "Tomb Raider (Reboot 2013)",
    desenvolvedor: "Crystal Dynamics",
    genero: "Aventura",
    anoLancamento: 2013,
    preco: 109.95,
    descricao: "O reboot moderno de Lara Croft, focado em sobrevivência.",
    imagem: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/203160/header.jpg"
  },
  {
    nome: "Pokémon Red/Blue/Yellow",
    desenvolvedor: "Game Freak",
    genero: "RPG",
    anoLancamento: 1996,
    preco: 82.5,
    descricao: "O início da aventura de caça e treinamento de Pokémon.",
    imagem: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/game_boy_4/H2x1_GB_PokemonRed_enGB_image1600w.jpg"
  },
  {
    nome: "Pokémon Scarlet/Violet",
    desenvolvedor: "Game Freak",
    genero: "RPG",
    anoLancamento: 2022,
    preco: 274.95,
    descricao:
      "A primeira experiência de mundo aberto completa da franquia Pokémon.",
    imagem: "https://sm.ign.com/ign_br/game/p/pokemon-sc/pokemon-scarlet_aqh9.png"
  },
  {
    nome: "The Legend of Zelda: Ocarina of Time",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 1998,
    preco: 274.95,
    descricao: "Revolucionou o 3D e o gênero Ação-Aventura.",
    imagem: "https://cdn.mobygames.com/covers/4756691-the-legend-of-zelda-ocarina-of-time-nintendo-64-front-cover.jpg"
  },
  {
    nome: "The Legend of Zelda: Breath of the Wild",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 2017,
    preco: 329.95,
    descricao: "Um mundo aberto massivo que redefiniu a série Zelda.",
    imagem: "https://www.oficinadanet.com.br/imagens/post/18127/capa-zelda.jpg"
  },
  {
    nome: "The Legend of Zelda: Tears of the Kingdom",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 2023,
    preco: 329.95,
    descricao: "Sequência direta de BOTW com foco em criatividade e física.",
    imagem: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co5vmg.jpg"
  },
  //jogo-30
  {
    nome: "Super Mario Bros.",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 1985,
    preco: 109.95,
    descricao: "O jogo que definiu o gênero plataforma 2D.",
    imagem: "super_mario_bros.jpg"
  },
  {
    nome: "Super Mario 64",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 1996,
    preco: 164.95,
    descricao: "Definiu o padrão para jogos de plataforma 3D.",
    imagem: "super_mario_64.jpg"
  },
  {
    nome: "Super Mario Odyssey",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 2017,
    preco: 274.95,
    descricao:
      "Uma aventura criativa em vários mundos abertos com a mecânica Cappy.",
    imagem: "super_mario_odyssey.jpg"
  },
  {
    nome: "Sonic The Hedgehog (1991)",
    desenvolvedor: "Sonic Team",
    genero: "Aventura",
    anoLancamento: 1991,
    preco: 54.95,
    descricao: "O ouriço azul em sua estreia de alta velocidade.",
    imagem: "sonic_the_hedgehog_1991.jpg"
  },
  {
    nome: "Sonic Adventure",
    desenvolvedor: "Sonic Team",
    genero: "Aventura",
    anoLancamento: 1998,
    preco: 109.95,
    descricao:
      "O primeiro grande jogo 3D do Sonic, com foco em aventura e velocidade.",
    imagem: "sonic_adventure.jpg"
  },
  {
    nome: "The Last of Us Part I",
    desenvolvedor: "Naughty Dog",
    genero: "Terror",
    anoLancamento: 2013,
    preco: 219.95,
    descricao: "Uma jornada emocional de sobrevivência em um mundo devastado.",
    imagem: "the_last_of_us_part_i.jpg"
  },
  {
    nome: "Returnal",
    desenvolvedor: "Housemarque",
    genero: "Ação",
    anoLancamento: 2021,
    preco: 274.95,
    descricao: "Ação frenética em terceira pessoa com estrutura roguelike.",
    imagem: "returnal.jpg"
  },
  {
    nome: "Death Stranding 2: On The Beach",
    desenvolvedor: "Kojima Productions",
    genero: "Aventura",
    anoLancamento: 2025,
    preco: 329.95,
    descricao: "O próximo épico de Hideo Kojima sobre conexão.",
    imagem: "death_stranding_2.jpg"
  },
  {
    nome: "Red Dead Redemption 2",
    desenvolvedor: "Rockstar Games",
    genero: "Aventura",
    anoLancamento: 2018,
    preco: 329.95,
    descricao: "Um épico faroeste com detalhes impecáveis e mundo aberto.",
    imagem: "red_dead_redemption_2.jpg"
  },
  {
    nome: "Grand Theft Auto V",
    desenvolvedor: "Rockstar Games",
    genero: "Aventura",
    anoLancamento: 2013,
    preco: 329.95,
    descricao: "O sucesso de vendas em Los Santos.",
    imagem: "gta_v.jpg"
  },
  {
    nome: "Ghost of Tsushima",
    desenvolvedor: "Sucker Punch",
    genero: "Aventura",
    anoLancamento: 2020,
    preco: 274.95,
    descricao: "Épico samurai visualmente deslumbrante em mundo aberto.",
    imagem: "ghost_of_tsushima.jpg"
  },
  {
    nome: "Days Gone",
    desenvolvedor: "Bend Studio",
    genero: "Aventura",
    anoLancamento: 2019,
    preco: 274.95,
    descricao: "Sobrevivência de motoqueiro contra hordas de Freakers.",
    imagem: "days_gone.jpg"
  },
  {
    nome: "Detroit: Become Human",
    desenvolvedor: "Quantic Dream",
    genero: "Aventura",
    anoLancamento: 2018,
    preco: 219.95,
    descricao:
      "Thriller cinemático focado em escolhas sobre a revolução dos andróides.",
    imagem: "detroit_become_human.jpg"
  },
  {
    nome: "Shadow of the Colossus",
    desenvolvedor: "Team Ico",
    genero: "Aventura",
    anoLancamento: 2005,
    preco: 164.95,
    descricao: "Uma jornada artística e melancólica de combate a gigantes.",
    imagem: "shadow_of_the_colossus.jpg"
  },
  {
    nome: "Until Dawn",
    desenvolvedor: "Supermassive Games",
    genero: "Terror",
    anoLancamento: 2015,
    preco: 164.95,
    descricao: "Drama de terror adolescente com muitas escolhas e mortes.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZGBVz1ezIcDfttlSzsWFtshLHnPeDUUT2Q&s"
  },
  {
    nome: "Uncharted 4: A Thief’s End",
    desenvolvedor: "Naughty Dog",
    genero: "Aventura",
    anoLancamento: 2016,
    preco: 274.95,
    descricao: "O final emocionante da saga de Nathan Drake.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0snNlNaY4pMltVnfXr36jQ-QnBWfDB5LmA&s"
  },
  {
    nome: "Metal Gear Solid 3: Snake Eater",
    desenvolvedor: "Konami",
    genero: "Aventura",
    anoLancamento: 2004,
    preco: 164.95,
    descricao: "O mestre do stealth focado em sobrevivência na selva.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/75/Metal_Gear_Solid_3_Subsistence_-_North-american_cover.jpg"
  },
  {
    nome: "Assassin’s Creed II",
    desenvolvedor: "Ubisoft",
    genero: "Aventura",
    anoLancamento: 2009,
    preco: 109.95,
    descricao: "A aventura de Ezio Auditore no Renascimento.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/ac/Assassins_Creed_2_capa.png"
  },
  {
    nome: "Horizon Zero Dawn",
    desenvolvedor: "Guerrilla Games",
    genero: "RPG",
    anoLancamento: 2017,
    preco: 274.95,
    descricao: "Aloy em um mundo pós-apocalíptico com máquinas animais.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFmU7vmHYCcaqaxUEpyxmtj8A6SK-cO0aaA&s"
  },
  {
    nome: "Horizon Forbidden West",
    desenvolvedor: "Guerrilla Games",
    genero: "RPG",
    anoLancamento: 2022,
    preco: 329.95,
    descricao: "A continuação da jornada de Aloy no Oeste Proibido.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e5/Horizon_Forbidden_West.jpg"
  },
  {
    nome: "Fallout 4",
    desenvolvedor: "Bethesda Game Studios",
    genero: "RPG",
    anoLancamento: 2015,
    preco: 164.95,
    descricao: "Sobrevivência e construção no Commonwealth pós-apocalíptico.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/70/Fallout_4_cover_art.jpg"
  },
  {
    nome: "Astrobot Rescue Mission",
    desenvolvedor: "Japan Studio",
    genero: "Realidade virtual",
    anoLancamento: 2018,
    preco: 164.95,
    descricao: "O aclamado jogo de plataforma exclusivo de PS VR.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rVO0lYe_iXtniPexb4wJj2txAcbSlBR_ag&s"
  },
  {
    nome: "Marvel's Spider-Man 2",
    desenvolvedor: "Insomniac Games",
    genero: "Ação",
    anoLancamento: 2023,
    preco: 349.95,
    descricao: "Peter Parker e Miles Morales enfrentam Venom e Kraven.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/6/64/Spider-Man_2_2023_capa.jpg"
  },
  {
    nome: "Marvel's Wolverine",
    desenvolvedor: "Insomniac Games",
    genero: "Ação",
    anoLancamento: 2025,
    preco: 349.95,
    descricao: "O próximo grande jogo de super-heróis da Insomniac Games.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTh6Oj-Do4Vsiatfeco0SI-0RgSveCAfQVQ&s"
  },
  {
    nome: "Stellar Blade",
    desenvolvedor: "Shift Up",
    genero: "Ação",
    anoLancamento: 2024,
    preco: 329.95,
    descricao:
      "Ação intensa focada no combate e na estética de ficção científica.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4kA0xkIYLy9RM6lDBkCq9fkyDFKCOOTnjg&s"
  },
  {
    nome: "Yakuza 6: The Song of Life",
    desenvolvedor: "Ryu Ga Gotoku Studio",
    genero: "Ação",
    anoLancamento: 2016,
    preco: 164.95,
    descricao: "O final da história de Kazuma Kiryu.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNM1pfasYvt458WDSDElam8PVNLemBnRFu3w&s"
  },
  {
    nome: "Gran Turismo 7",
    desenvolvedor: "Polyphony Digital",
    genero: "Ação",
    anoLancamento: 2022,
    preco: 274.95,
    descricao:
      "O simulador de corrida que celebra a história do automobilismo.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_q2zXerc_ClXNmThOS6rImCExJjr5LhuSQ&s"
  },
  {
    nome: "Need for Speed Underground",
    desenvolvedor: "EA Black Box",
    genero: "Ação",
    anoLancamento: 2003,
    preco: 54.95,
    descricao: "Popularizou as corridas de rua e a customização de carros.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/5/52/Need_for_Speed_Underground_cover.jpg"
  },
  {
    nome: "Doom: The Dark Ages",
    desenvolvedor: "id Software",
    genero: "FPS",
    anoLancamento: 2025,
    preco: 329.95,
    descricao: "O prelúdio épico da saga Doom, focado em combate medieval.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CjHB7iZ4vMUMnNy8BP215mVrp5MdTgBqpw&s"
  },
  {
    nome: "Battlefield 6 (2042)",
    desenvolvedor: "DICE",
    genero: "FPS",
    anoLancamento: 2021,
    preco: 274.95,
    descricao:
      "FPS multiplayer de larga escala focado em guerra total e futurista.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiK80Hw7IyGja2DZg7_qvUdazKil7PUsP0jg&s"
  },
  {
    nome: "Call of Duty: Black Ops",
    desenvolvedor: "Treyarch",
    genero: "FPS",
    anoLancamento: 2010,
    preco: 164.95,
    descricao: "FPS com foco em operações secretas da Guerra Fria.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/5/54/Call-of-Duty---Black-Ops---Cover-.jpg"
  },
  {
    nome: "Black",
    desenvolvedor: "Criterion Games",
    genero: "FPS",
    anoLancamento: 2006,
    preco: 82.5,
    descricao:
      "Clássico de FPS para PS2 conhecido por sua ação cinematográfica e destrutiva.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/a/ad/Black_cover_art.jpg"
  },
  {
    nome: "Hollow Knight: Silksong",
    desenvolvedor: "Team Cherry",
    genero: "Indie",
    anoLancamento: 2025,
    preco: 109.95,
    descricao: "A esperada sequência do 'metroidvania' aclamado pela crítica.",
    imagem: "https://pbs.twimg.com/media/GniOTj6WcAA_0O2.jpg"
  },
  {
    nome: "Peak",
    desenvolvedor: "Indie Studio",
    genero: "Indie",
    anoLancamento: 2024,
    preco: 54.95,
    descricao: "Um jogo indie de exploração focado em escalada e narrativa.",
    imagem: "https://assets-prd.ignimgs.com/2025/06/23/peak-1750699534248.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80"
  }
];

export async function seedJogos(prisma) {
  console.log(
    "🌎 Iniciando o seed com 57 jogos consolidados e filtrados (valores em reais)..."
  );

  const dataToInsert = famousGames.map((jogo) => ({
    nome: jogo.nome,
    desenvolvedor: jogo.desenvolvedor,
    genero: jogo.genero,
    anoLancamento: jogo.anoLancamento,
    preco: String(jogo.preco),
    descricao: jogo.descricao ? jogo.descricao.substring(0, 500) : '',
    // Algumas entradas usam `imagem` (string) e outras `imagens` (array).
    // Garantimos um array para o campo `imagens` esperado pelo schema.
    imagens: jogo.imagens
      ? jogo.imagens
      : jogo.imagem
      ? [jogo.imagem]
      : [],
  }));

  const { count } = await prisma.jogo.createMany({
    data: dataToInsert,
    skipDuplicates: true,
  });

  console.log(
    `✅ Seed concluído. ${count} jogos criados/verificados na tabela 'jogo'.`
  );
  return count;
}
