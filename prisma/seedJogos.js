// O `prisma` é passado pelo `seed.mjs` — não instanciamos aqui para evitar múltiplas conexões.

const famousGames = [
  {
    nome: "Demon's Souls (Remake)",
    desenvolvedor: "FromSoftware/Bluepoint",
    genero: "Soulslike",
    anoLancamento: 2020,
    preco: 329.95,
    descricao: "O pioneiro da série, refeito para a nova geração.",
    imagem: "https://images6.alphacoders.com/489/489662.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Dark Souls",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2011,
    preco: 164.95,
    descricao: "O RPG de Ação desafiador que popularizou o gênero.",
    imagem: "https://cdn.wallpapersafari.com/47/72/Sl8unL.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Bloodborne",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2015,
    preco: 219.95,
    descricao: "Caça gótica Lovecraftiana com foco em combate rápido.",
    imagem: "https://t2.tudocdn.net/593327?w=1920",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Elden Ring",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2022,
    preco: 329.95,
    descricao:"O vasto mundo aberto Soulslike criado por Miyazaki e G.R.R. Martin.",
    imagem: "https://preview.redd.it/znxzjlws0i471.jpg?width=1920&format=pjpg&auto=webp&s=2514f6dd7c16a0ed3aa0c93cd80b134cd8853178",
    plataforma: ["PlayStation", "Xbox", "PC"]
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
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZxPlqR8F_VrvILKygK1cfHt_RBzIDtmGOg&s"
  },
  {
    nome: "Resident Evil 3 Remake",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2020,
    preco: 164.95,
    descricao: "Jill Valentine e a perseguição implacável de Nemesis.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0YYUF_c2t9gzvLAVAcrdpEfz-KfpBIxAkQ&s"
  },
  {
    nome: "Resident Evil 4",
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
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcI1IHTDyATH7gaE3g6V0hptj4EqI8YldA4g&s"
  },
  {
    nome: "Resident Evil 6",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2012,
    preco: 54.95,
    descricao: "O jogo mais focado em ação da série, com múltiplas campanhas.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/73/Resident_evil_6.jpg"
  },
  {
    nome: "Resident Evil 7: Biohazard",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2017,
    preco: 109.95,
    descricao: "Retorno às raízes do horror em primeira pessoa.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tAmNF8GByl-jAhJL23YiCD59ELR_axdMNg&s"
  },
  {
    nome: "Resident Evil Village",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2021,
    preco: 274.95,
    descricao: "A aventura de Ethan Winters na vila sombria.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBkJY9wY8UHr-_S-cZFuEwKbVdzZsYiWh-Q&s"
  },
  {
    nome: "Resident Evil requiem",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2025,
    preco: 329.95,
    descricao:
      "O próximo grande título da série, focado no terror de sobrevivência.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Jqi5z1KdRrCGDj_f9UiclrEU5bhIZVg0pQ&s"
  },
  {
    nome: "God of War",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2005,
    preco: 54.95,
    descricao: "A fúria de Kratos na Grécia Antiga.",
    imagem: "https://wallpaper.forfun.com/fetch/5a/5a20056e28b854eae6be9fe790d4ea39.jpeg",
    plataforma: ["PlayStation"]
  },
  {
    nome: "God of War II",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2007,
    preco: 54.95,
    descricao: "Considerado o ápice da franquia original de Kratos no PS2.",
    imagem: "https://images2.alphacoders.com/827/thumb-1920-82742.jpg",
    plataforma: ["PlayStation"]
  },
  {
    nome: "God of War III",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2010,
    preco: 109.95,
    descricao: "O final épico da trilogia grega.",
    imagem: "https://wallpapers.com/images/hd/god-of-war-3-wallpaper-u138nlh3irkmsdcm.jpg",
    plataforma: ["PlayStation"]
  },
  {
    nome: "God of War (2018)",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2018,
    preco: 274.95,
    descricao: "A reinvenção nórdica de Kratos e Atreus.",
    imagem: "https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2021/10/20132551/god-of-war.jpg?fit=1920%2C1080&ssl=1",
    plataforma: ["PlayStation"]
  },
  {
    nome: "God of War: Ragnarok",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2022,
    preco: 329.95,
    descricao: "O épico final da saga nórdica.",
    imagem: "https://images3.alphacoders.com/128/thumb-1920-1287842.jpg",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Devil May Cry (2001)",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2001,
    preco: 109.95,
    descricao: "O nascimento do combate estiloso com Dante.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1jKSD4TwozVrP4cAzKDJ7ontcwcMmQrl8A&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Devil May Cry 5",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2019,
    preco: 164.95,
    descricao:
      "O ápice da ação 'hack and slash' com três personagens jogáveis.",
    imagem: "https://wallpapers.com/images/featured/devil-may-cry-5-df0md7tksqp8wi0g.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Darksiders",
    desenvolvedor: "Vigil Games",
    genero: "Ação",
    anoLancamento: 2010,
    preco: 109.95,
    descricao: "Guerra, o Cavaleiro do Apocalipse, em sua jornada.",
    imagem: "https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fdarksiders%2Fhome%2FHeroeCarousel-1920x1080-33c0176573f7d7248a1784009ed22bf7566feb72.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Darksiders II",
    desenvolvedor: "Vigil Games",
    genero: "Ação",
    anoLancamento: 2012,
    preco: 109.95,
    descricao:
      "Morte, o Cavaleiro do Apocalipse, em uma aventura maior e com elementos RPG.",
    imagem: "https://img.goodfon.com/original/1920x1080/1/b7/badfon-darksiders-2-darksiders-ii-1525.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Darksiders III",
    desenvolvedor: "Gunfire Games",
    genero: "Ação",
    anoLancamento: 2018,
    preco: 164.95,
    descricao: "Fúria, a Cavaleira, focada em combate ágil e quebra-cabeças.",
    imagem: "https://images2.alphacoders.com/973/thumb-1920-973133.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Tomb Raider (1996)",
    desenvolvedor: "Core Design",
    genero: "Aventura",
    anoLancamento: 1996,
    preco: 82.5,
    descricao: "A aventura original de Lara Croft.",
    imagem: "https://i.pinimg.com/736x/48/79/d0/4879d0204101ef565d87e06d38130230.jpg",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Tomb Raider (Reboot 2013)",
    desenvolvedor: "Crystal Dynamics",
    genero: "Aventura",
    anoLancamento: 2013,
    preco: 109.95,
    descricao: "O reboot moderno de Lara Croft, focado em sobrevivência.",
    imagem: "https://i.pinimg.com/1200x/9d/15/fd/9d15fdc0d0580a3aba708690a99ac7c2.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Pokémon Red/Blue/Yellow",
    desenvolvedor: "Game Freak",
    genero: "RPG",
    anoLancamento: 1996,
    preco: 82.5,
    descricao: "O início da aventura de caça e treinamento de Pokémon.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zJNgcbySMVfBycuYDDGeunR7IvWUp8i28w&s"
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
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/17/The_Legend_of_Zelda_Ocarina_of_Time_capa.png/330px-The_Legend_of_Zelda_Ocarina_of_Time_capa.png",
    plataforma: ["nintendo", "PC"]
  },
  {
    nome: "The Legend of Zelda: Breath of the Wild",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 2017,
    preco: 329.95,
    descricao: "Um mundo aberto massivo que redefiniu a série Zelda.",
    imagem: "https://www.oficinadanet.com.br/imagens/post/18127/capa-zelda.jpg",
    plataforma: ["nintendo", "PC"]
  },
  {
    nome: "The Legend of Zelda: Tears of the Kingdom",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 2023,
    preco: 329.95,
    descricao: "Sequência direta de BOTW com foco em criatividade e física.",
    imagem: "https://i.pinimg.com/736x/86/0a/28/860a287a31ec709f6db30e122ff39627.jpg"
  },
  {
    nome: "Super Mario Bros.",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 1985,
    preco: 109.95,
    descricao: "O jogo que definiu o gênero plataforma 2D.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",
    plataforma: ["nintendo", "PC"]
  },
  {
    nome: "Super Mario 64",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 1996,
    preco: 164.95,
    descricao: "Definiu o padrão para jogos de plataforma 3D.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/7b/Super_Mario_64_front.jpg",
    plataforma: ["nintendo", "PC"]
  },
  {
    nome: "Super Mario Odyssey",
    desenvolvedor: "Nintendo",
    genero: "Aventura",
    anoLancamento: 2017,
    preco: 274.95,
    descricao:
      "Uma aventura criativa em vários mundos abertos com a mecânica Cappy.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3FqAPExRaY0RFOGfuS7E-l89vq8zyWXKITA&s",
    plataforma: ["nintendo", "PC"]
  },
  {
    nome: "Sonic The Hedgehog (1991)",
    desenvolvedor: "Sonic Team",
    genero: "Aventura",
    anoLancamento: 1991,
    preco: 54.95,
    descricao: "O ouriço azul em sua estreia de alta velocidade.",
    imagem: "https://i.pinimg.com/736x/18/bc/2a/18bc2a2b0b7b1eef9fcbf01edb9c1d5a.jpg",
    plataforma: ["PlayStation", "Xbox", "Nintendo", "PC"]
  },
  {
    nome: "Sonic Adventure 2",
    desenvolvedor: "Sonic Team",
    genero: "Aventura",
    anoLancamento: 2001,
    preco: 109.95,
    descricao:
      "O primeiro grande jogo 3D do Sonic, com foco em aventura e velocidade.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/6/60/Sonic_Adventure.PNG"
  },
  {
    nome: "The Last of Us Part I",
    desenvolvedor: "Naughty Dog",
    genero: "Terror",
    anoLancamento: 2013,
    preco: 219.95,
    descricao: "Uma jornada emocional de sobrevivência em um mundo devastado.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhsmtczq1oC0O70PQDDAb4qYs99lAPnGDhw&s",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Returnal",
    desenvolvedor: "Housemarque",
    genero: "Ação",
    anoLancamento: 2021,
    preco: 274.95,
    descricao: "Ação frenética em terceira pessoa com estrutura roguelike.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SFcw6Dzh8Io0cvNap8RMdXRVbWLlsH6wIg&s",
    plataforma: ["PlayStation", "Xbox", "Nintendo", "PC"]
  },
  {
    nome: "Death Stranding 2: On The Beach",
    desenvolvedor: "Kojima Productions",
    genero: "Aventura",
    anoLancamento: 2025,
    preco: 329.95,
    descricao: "O próximo épico de Hideo Kojima sobre conexão.",
    imagem: "https://cdn.wallpapersafari.com/97/56/iCm2W4.jpg",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Red Dead Redemption 2",
    desenvolvedor: "Rockstar Games",
    genero: "Aventura",
    anoLancamento: 2018,
    preco: 329.95,
    descricao: "Um épico faroeste com detalhes impecáveis e mundo aberto.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zw3ba8igTlqTD-rCWWQgpjA1dFwTv0DV3w&s",
    plataforma: ["PlayStation", "Xbox", "Nintendo", "PC"]
  },
  {
    nome: "Grand Theft Auto V",
    desenvolvedor: "Rockstar Games",
    genero: "Aventura",
    anoLancamento: 2013,
    preco: 329.95,
    descricao: "O sucesso de vendas em Los Santos.",
    imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1gXhYBTiv8whMqlcgbtSi-iegWR0IECT6VdLZo8wFfARvvZR0g52pBqiAOeMcN_9Age0BHzav1MrMpYI2o0ZuJ-6Fjfq7DZLf8ju53IrOTxD4jJb0XRqFJ_2aLxWASjhoEhHgBZU0ZbjE/s1600/capa2.jpg",
    plataforma: ["PlayStation", "Xbox", "Nintendo", "PC"]
  },
  {
    nome: "Ghost of Tsushima",
    desenvolvedor: "Sucker Punch",
    genero: "Aventura",
    anoLancamento: 2020,
    preco: 274.95,
    descricao: "Épico samurai visualmente deslumbrante em mundo aberto.",
    imagem: "https://www.animeunited.com.br/oomtumtu/2021/07/Ghost-of-tsushima-DLC.jpg",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Days Gone",
    desenvolvedor: "Bend Studio",
    genero: "Aventura",
    anoLancamento: 2019,
    preco: 274.95,
    descricao: "Sobrevivência de motoqueiro contra hordas de Freakers.",
    imagem: "https://wallpapers.com/images/hd/days-gone-zombie-strike-poster-808vz2axmhw4zege.jpg",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Detroit: Become Human",
    desenvolvedor: "Quantic Dream",
    genero: "Aventura",
    anoLancamento: 2018,
    preco: 219.95,
    descricao:
      "Thriller cinemático focado em escolhas sobre a revolução dos andróides.",
    imagem: "https://wallpapers.com/images/featured/imagens-de-detroit-become-human-bibftr8jchiimbo5.jpg",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Shadow of the Colossus",
    desenvolvedor: "Team Ico",
    genero: "Aventura",
    anoLancamento: 2005,
    preco: 164.95,
    descricao: "Uma jornada artística e melancólica de combate a gigantes.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUuyV7LdlGWkUT144IfjjrY0s2GcLQgQ0vg&s",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Until Dawn",
    desenvolvedor: "Supermassive Games",
    genero: "Terror",
    anoLancamento: 2015,
    preco: 164.95,
    descricao: "Drama de terror adolescente com muitas escolhas e mortes.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPZGBVz1ezIcDfttlSzsWFtshLHnPeDUUT2Q&s",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Uncharted 4: A Thief’s End",
    desenvolvedor: "Naughty Dog",
    genero: "Aventura",
    anoLancamento: 2016,
    preco: 274.95,
    descricao: "O final emocionante da saga de Nathan Drake.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0snNlNaY4pMltVnfXr36jQ-QnBWfDB5LmA&s",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Metal Gear Solid 3: Snake Eater",
    desenvolvedor: "Konami",
    genero: "Aventura",
    anoLancamento: 2004,
    preco: 164.95,
    descricao: "O mestre do stealth focado em sobrevivência na selva.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/75/Metal_Gear_Solid_3_Subsistence_-_North-american_cover.jpg",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Assassin’s Creed II",
    desenvolvedor: "Ubisoft",
    genero: "Aventura",
    anoLancamento: 2009,
    preco: 109.95,
    descricao: "A aventura de Ezio Auditore no Renascimento.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH0YV72G9BI65NeUSLKG6CkjvjZXrWbHEvaQ&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
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
    imagem: "https://pizzafria.ig.com.br/wp-content/uploads/2024/04/fallout-4.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Astrobot Rescue Mission",
    desenvolvedor: "Japan Studio",
    genero: "Realidade virtual",
    anoLancamento: 2018,
    preco: 164.95,
    descricao: "O aclamado jogo de plataforma exclusivo de PS VR.",
    imagem: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/astro-bot/9/9b/Astro-bot-rescue-mission-listing-thumb-01-ps4-us-02oct18.png",
    plataforma: ["PlayStation"]
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
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4kA0xkIYLy9RM6lDBkCq9fkyDFKCOOTnjg&s",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Yakuza 6: The Song of Life",
    desenvolvedor: "Ryu Ga Gotoku Studio",
    genero: "Ação",
    anoLancamento: 2016,
    preco: 164.95,
    descricao: "O final da história de Kazuma Kiryu.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNM1pfasYvt458WDSDElam8PVNLemBnRFu3w&s",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Gran Turismo",
    desenvolvedor: "Polyphony Digital",
    genero: "Ação",
    anoLancamento: 2022,
    preco: 274.95,
    descricao:
      "O simulador de corrida que celebra a história do automobilismo.",
    imagem: "https://www.gamewallpapers.com/download.php?img=wallpaper_gran_turismo_01_1920x1080.jpg",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Need for Speed Underground",
    desenvolvedor: "EA Black Box",
    genero: "Ação",
    anoLancamento: 2003,
    preco: 54.95,
    descricao: "Popularizou as corridas de rua e a customização de carros.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/5/52/Need_for_Speed_Underground_cover.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Doom: The Dark Ages",
    desenvolvedor: "id Software",
    genero: "FPS",
    anoLancamento: 2025,
    preco: 329.95,
    descricao: "O prelúdio épico da saga Doom, focado em combate medieval.",
    imagem: "https://www.gamewallpapers.com/download.php?img=wallpaper_doom_the_dark_ages_01_1920x1080.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },

{
  nome: "Battlefield 6",
  desenvolvedor: "DICE",
  genero: "FPS",
  anoLancamento: 2021,
  preco: 274.95,
  descricao: "FPS multiplayer de larga escala focado em guerra total e futurista.",
  imagem: "https://t2.tudocdn.net/768969?w=1920&h=1080",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Call of Duty: Black Ops",
  desenvolvedor: "Treyarch",
  genero: "FPS",
  anoLancamento: 2010,
  preco: 164.95,
  descricao: "FPS com foco em operações secretas da Guerra Fria.",
  imagem: "https://wallpapers.com/images/hd/call-of-duty-black-ops-1-1920-x-1200-vo4c1dti83efvqvd.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Black",
  desenvolvedor: "Criterion Games",
  genero: "FPS",
  anoLancamento: 2006,
  preco: 82.5,
  descricao: "Clássico de FPS para PS2 conhecido por sua ação cinematográfica e destrutiva.",
  imagem: "https://i.ytimg.com/vi/HHVZvp5SB5M/maxresdefault.jpg",
  plataforma: ["PlayStation", "Xbox"]
},
{
  nome: "Hollow Knight: Silksong",
  desenvolvedor: "Team Cherry",
  genero: "Indie",
  anoLancamento: 2025,
  preco: 109.95,
  descricao: "A esperada sequência do 'metroidvania' aclamado pela crítica.",
  imagem: "https://images.squarespace-cdn.com/content/v1/606d4deb4db8c15ea53b3624/1617781631369-1MXKY1XUZXMPNL3TVF2X/banner-3.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Peak",
  desenvolvedor: "Indie Studio",
  genero: "Indie",
  anoLancamento: 2024,
  preco: 54.95,
  descricao: "Um jogo indie de exploração focado em escalada e narrativa.",
  imagem: "https://assets-prd.ignimgs.com/2025/06/23/peak-1750699534248.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Roblox",
  desenvolvedor: "Roblox Corporation",
  genero: "Aventura",
  anoLancamento: 2006,
  preco: 0.0,
  descricao: "Plataforma de criação de jogos onde usuários desenvolvem e jogam experiências feitas pela comunidade.",
  imagem: "https://m.media-amazon.com/images/I/81YoKLnmDTL._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Minecraft",
  desenvolvedor: "Mojang Studios",
  genero: "Aventura",
  anoLancamento: 2011,
  preco: 99.95,
  descricao: "Jogo de sobrevivência e construção em mundo aberto com blocos totalmente modificáveis.",
  imagem: "https://cdn.sistemawbuy.com.br/arquivos/c30f3cdb5ede193830560f4c44f96b28/produtos/641bdb2392c6a/gift-card-minecraft-java-641bdb24085f4.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Hytale",
  desenvolvedor: "Hypixel Studios",
  genero: "RPG",
  anoLancamento: 2025,
  preco: 110.00,
  descricao: "RPG de aventura com criação de mundos, exploração e combate inspirado por Minecraft.",
  imagem: "https://sm.ign.com/t/ign_pt/cover/h/hytale/hytale_fpdy.1200.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Batman: Arkham shadow",
  desenvolvedor: "Rocksteady Studios",
  genero: "Realidade virtual",
  anoLancamento: 2024,
  preco: 109.95,
  descricao: "Experiência imersiva em VR que coloca o jogador no papel do Batman investigando um mistério.",
  imagem: "https://cdn.mos.cms.futurecdn.net/UmZmedKUbXmhTvRvnqndxV.jpg",
  plataforma: ["VR"]
},
{
  nome: "Five Nights at Freddy's 2",
  desenvolvedor: "Scott Cawthon",
  genero: "Terror",
  anoLancamento: 2014,
  preco: 54.95,
  descricao: "Jogo de terror onde o jogador deve sobreviver à noite monitorando animatrônicos assustadores.",
  imagem: "https://www.pixelstalk.net/wp-content/uploads/images6/Fnaf-HD-Wallpaper-Free-download.png",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Bendy and the Ink Machine",
  desenvolvedor: "Joey Drew Studios",
  genero: "Terror",
  anoLancamento: 2017,
  preco: 82.5,
  descricao: "Aventura de terror em estilo cartoon envolvendo mistérios em um estúdio de animação.",
  imagem: "https://www.otakupt.com/wp-content/uploads/2025/04/Bendy-and-the-ink-machine.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Grand Theft Auto VI",
  desenvolvedor: "Rockstar Games",
  genero: "Mapa Aberto",
  anoLancamento: 2030,
  preco: 399.95,
  descricao: "Nova entrada da série GTA com mundo aberto expansivo e narrativa cinematográfica.",
  imagem: "https://img.gta5-mods.com/q95/images/save-game-44/a82937-v_trunk_1920x1080.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "The Witcher 3: Wild Hunt",
  desenvolvedor: "CD Projekt Red",
  genero: "Mapa Aberto",
  anoLancamento: 2015,
  preco: 164.95,
  descricao: "RPG de mundo aberto onde Geralt busca sua filha adotiva enquanto enfrenta monstros.",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/0/06/TW3_Wild_Hunt.png",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Cyberpunk 2077",
  desenvolvedor: "CD Projekt Red",
  genero: "RPG",
  anoLancamento: 2020,
  preco: 274.95,
  descricao: "RPG futurista em mundo aberto ambientado na metrópole tecnológica Night City.",
  imagem: "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/12aaa3b137a18e180bb92682e8f81674dcb7451f-1920x1080.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Starfield",
  desenvolvedor: "Bethesda Game Studios",
  genero: "Mapa Aberto",
  anoLancamento: 2023,
  preco: 329.95,
  descricao: "RPG espacial focado em exploração de planetas, combate e narrativa.",
  imagem: "https://store-images.s-microsoft.com/image/apps.35187.13567343664224659.1eb6fdf9-8a0b-4344-a135-ab17dfa3c609.c83b6d6a-56c3-4c3f-8b31-456cfb21c3b7",
  plataforma: ["PC", "Xbox"]
},
{
  nome: "Final Fantasy XVI",
  desenvolvedor: "Square Enix",
  genero: "Ação",
  anoLancamento: 2023,
  preco: 329.95,
  descricao: "Ação e fantasia sombria com combates rápidos e foco na história de Clive Rosfield.",
  imagem: "https://gh.cdn.sewest.net/assets/ident/pulse/8219b4c1/FFXVI_Logo_Black-4fj23ciqa.jpg?quality=65",
  plataforma: ["PlayStation", "PC"]
},
{
  nome: "Diablo IV",
  desenvolvedor: "Blizzard Entertainment",
  genero: "Ação",
  anoLancamento: 2023,
  preco: 349.95,
  descricao: "RPG de ação sombrio com exploração, combate rápido e loot abundante.",
  imagem: "https://preview.redd.it/diablo-iv-lilith-1920x1080-v0-eco2zgm1uo6b1.jpg?auto=webp&s=d5a2cd87b8646ca31f2371fac8d3b0c823070e7d",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Baldur's Gate 3",
  desenvolvedor: "Larian Studios",
  genero: "RPG",
  anoLancamento: 2023,
  preco: 274.95,
  descricao: "RPG estratégico baseado em D&D com escolhas profundas e narrativa ramificada.",
  imagem: "https://4kwallpapers.com/images/wallpapers/baldurs-gate-3-10k-1920x1080-12703.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Marvel's Midnight Suns",
  desenvolvedor: "Firaxis Games",
  genero: "RPG",
  anoLancamento: 2022,
  preco: 219.95,
  descricao: "RPG tático com heróis da Marvel usando cartas de habilidades em batalhas estratégicas.",
  imagem: "https://m.media-amazon.com/images/I/81gdMzWvONL._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "DOOM Eternal",
  desenvolvedor: "id Software",
  genero: "FPS",
  anoLancamento: 2020,
  preco: 219.95,
  descricao: "FPS frenético com combates intensos contra hordas demoníacas.",
  imagem: "https://wallpapers.com/images/hd/doom-eternal-4k-yjupc6n854eclgo1.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Halo Infinite",
  desenvolvedor: "343 Industries",
  genero: "FPS",
  anoLancamento: 2021,
  preco: 274.95,
  descricao: "Nova aventura de Master Chief com campanha aberta e multiplayer competitivo.",
  imagem: "https://xboxwire.thesourcemediaassets.com/sites/8/2022/11/HALO_INFINITE_WINTER_UPDATE_WALLPAPER_XBOX_CONSOLE_1920x1080_BRANDED_RGB-ca953c303455f686fe68.jpg",
  plataforma: ["PC", "Xbox"]
},
{
  nome: "Apex Legends",
  desenvolvedor: "Respawn Entertainment",
  genero: "FPS",
  anoLancamento: 2019,
  preco: 0.0,
  descricao: "Battle royale baseado em heróis com habilidades únicas e jogabilidade dinâmica.",
  imagem: "https://external-preview.redd.it/M9L9vReIHyYjlNFQMHV_BpfGeQWtu9YkXiv4ynTwr2Q.jpg?auto=webp&s=545055643d5fd23f79dfa34d421348f9ab82591b",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Valorant",
  desenvolvedor: "Riot Games",
  genero: "FPS",
  anoLancamento: 2020,
  preco: 0.0,
  descricao: "FPS tático competitivo focado em precisão e habilidades especiais dos agentes.",
  imagem: "https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6",
  plataforma: ["PC"]
},
{
  nome: "Call of Duty: Modern Warfare III",
  desenvolvedor: "Sledgehammer Games",
  genero: "FPS",
  anoLancamento: 2023,
  preco: 349.95,
  descricao: "FPS com campanha de guerra moderna e multiplayer frenético.",
  imagem: "https://i.redd.it/vdam5h0ho3jb1.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Counter-Strike 2",
  desenvolvedor: "Valve",
  genero: "FPS",
  anoLancamento: 2023,
  preco: 0.0,
  descricao: "FPS competitivo focado em estratégia e precisão em partidas 5v5.",
  imagem: "https://preview.redd.it/counter-strike-2-wallpaper-1920x1080-v0-wfnfuq0b8jpa1.png?auto=webp&s=576a6b1f3114776d993cd91b8ad0354f15ab5de0",
  plataforma: ["PC"]
},
{
  nome: "Lies of P",
  desenvolvedor: "Round8 Studio",
  genero: "Soulslike",
  anoLancamento: 2023,
  preco: 274.95,
  descricao: "Soulslike inspirado em Pinóquio com combate desafiador e atmosfera sombria.",
  imagem: "https://i.pinimg.com/736x/bd/d2/b2/bdd2b243c0455a7e17eb61360275b441.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Stellaris",
  desenvolvedor: "Paradox Interactive",
  genero: "Aventura",
  anoLancamento: 2016,
  preco: 109.95,
  descricao: "Jogo de estratégia espacial com exploração, diplomacia e grandes impérios.",
  imagem: "https://m.media-amazon.com/images/I/81TR-hOIA+L._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["PC"]
},
{
  nome: "Civilization VI",
  desenvolvedor: "Firaxis Games",
  genero: "Aventura",
  anoLancamento: 2016,
  preco: 164.95,
  descricao: "Estratégia por turnos onde você desenvolve uma civilização através dos séculos.",
  imagem: "https://cdn1.epicgames.com/cd14dcaa4f3443f19f7169a980559c62/offer/EGS_SidMeiersCivilizationVI_FiraxisGames_S1-2560x1440-2fcd1c150ac6d8cdc672ae042d2dd179.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Among Us",
  desenvolvedor: "Innersloth",
  genero: "Indie",
  anoLancamento: 2018,
  preco: 27.5,
  descricao: "Jogo social onde jogadores tentam descobrir impostores em uma nave.",
  imagem: "https://unity.com/_next/image?url=https%3A%2F%2Fcdn.bfldr.com%2FS5BC9Y64%2Fat%2F8r7ktk5664pfjpzmhcj2m84%2FAmongUS-FeaturedImage.jpg%3Fauto%3Dwebp&w=3840&q=75",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Fall Guys",
  desenvolvedor: "Mediatonic",
  genero: "Ação",
  anoLancamento: 2020,
  preco: 0.0,
  descricao: "Battle royale de provas malucas com personagens coloridos e divertidos.",
  imagem: "https://cdn2.unrealengine.com/fgss04-keyart-withlogo-16x9-1920x1080-enus-1920x1080-e7a60ab198e8.png",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Fortnite",
  desenvolvedor: "Epic Games",
  genero: "Ação",
  anoLancamento: 2017,
  preco: 0.0,
  descricao: "Battle royale com construção, eventos ao vivo e constante atualização.",
  imagem: "https://cms-assets.unrealengine.com/cm6l5gfpm05kr07my04cqgy2x/cmhc4tb6o12x707n4v9vuvn9q",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "League of Legends",
  desenvolvedor: "Riot Games",
  genero: "Ação",
  anoLancamento: 2009,
  preco: 0.0,
  descricao: "MOBA competitivo com dezenas de campeões e estratégia em equipe.",
  imagem: "https://i.pinimg.com/736x/20/54/b6/2054b617ac11f24e23d62e05f85303d4.jpg",
  plataforma: ["PC"]
},
{
  nome: "Dota 2",
  desenvolvedor: "Valve",
  genero: "Ação",
  anoLancamento: 2013,
  preco: 0.0,
  descricao: "MOBA profundo com grande variedade de heróis e partidas intensas.",
  imagem: "https://images2.alphacoders.com/474/thumb-1920-474206.jpg",
  plataforma: ["PC"]
},
{
  nome: "Genshin Impact",
  desenvolvedor: "miHoYo",
  genero: "RPG",
  anoLancamento: 2020,
  preco: 0.0,
  descricao: "RPG de mundo aberto com combates elementais e personagens colecionáveis.",
  imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhG3YbN0QiX82Ok9ZgFMkH9Z3c_efkKUySMiEfY_62GPsTx6Mb6knZtYmAi08l_Dm07Y9QOW0EwCtvR9-1H-ZmwDIwsDFXyOslUj9P9cUKkW17ZfM3LkXftnxvV7nKM55i2-1xRJQeXSnaS/s1920/Genshin_Impact_Key_Art-EN.jpg",
  plataforma: ["PC", "PlayStation", "Nintendo"]
},
{
  nome: "Honkai: Star Rail",
  desenvolvedor: "miHoYo",
  genero: "RPG",
  anoLancamento: 2023,
  preco: 0.0,
  descricao: "RPG por turnos com história espacial e personagens estilizados.",
  imagem: "https://i.pinimg.com/736x/d4/27/88/d4278882675eb693d7c9d84e3ed310bf.jpg",
  plataforma: ["PC", "PlayStation", "Nintendo"]
},
{
  nome: "Sea of Thieves",
  desenvolvedor: "Rare",
  genero: "Aventura",
  anoLancamento: 2018,
  preco: 219.95,
  descricao: "Aventura pirata cooperativa em mundo aberto cheio de exploração e batalhas navais.",
  imagem: "https://i.pinimg.com/1200x/ea/14/78/ea1478c29344f7254cf702787a88523c.jpg",
  plataforma: ["PC", "Xbox"]
},
{
  nome: "Hades",
  desenvolvedor: "Supergiant Games",
  genero: "Ação",
  anoLancamento: 2020,
  preco: 109.95,
  descricao: "Roguelike de ação rápida onde você tenta escapar do Submundo.",
  imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDmuxS38ekrs51ij4WHn9A1mYq1lfonwn52hLcCDtq3O5qqjLkUPd5dBa7g3Gxc-rnhaAmLcHMl1LaVbCgt4TaHPr36C1JdCYKX49oEHLBzIjcwX3SK37hZAX1pSlPoFVct28Yj9JKepY/s2000/H2x1_NSwitchDS_Hades.png",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Disco Elysium",
  desenvolvedor: "ZA/UM",
  genero: "RPG",
  anoLancamento: 2019,
  preco: 109.95,
  descricao: "RPG narrativo focado em investigação e escolhas profundas.",
  imagem: "https://wallpapers.com/images/featured/disco-elysium-2bn8881khm8rpj66.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Deathloop",
  desenvolvedor: "Arkane Lyon",
  genero: "FPS",
  anoLancamento: 2021,
  preco: 274.95,
  descricao: "FPS em que o jogador fica preso em um looping temporal e deve eliminar alvos.",
  imagem: "https://cdn2.unrealengine.com/dl-epic-blog-featuredimage-1920x1080-1920x1080-768bd758c833.png",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Sifu",
  desenvolvedor: "Sloclap",
  genero: "Luta",
  anoLancamento: 2022,
  preco: 219.95,
  descricao: "Jogo de luta com foco em artes marciais e sistema de envelhecimento do personagem.",
  imagem: "https://i.pinimg.com/736x/1f/42/d4/1f42d45de726a110384e3ff3c2bf36fe.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Stray",
  desenvolvedor: "BlueTwelve Studio",
  genero: "Aventura",
  anoLancamento: 2022,
  preco: 109.95,
  descricao: "Aventura onde você controla um gato explorando uma cidade futurista habitada por robôs.",
  imagem: "https://i.pinimg.com/736x/35/c2/97/35c297898eb3caa546fb15f714959e06.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
}
]


export async function seedJogos(prisma) {
  console.log(
    "🌎 Iniciando o seed com 100 jogos consolidados e filtrados (valores em reais)..."
  );

  const dataToInsert = famousGames.map((jogo) => ({
    nome: jogo.nome,
    desenvolvedor: jogo.desenvolvedor,
    genero: jogo.genero,
    anoLancamento: jogo.anoLancamento,
    preco: String(jogo.preco),
    descricao: jogo.descricao ? jogo.descricao.substring(0, 500) : '',
    imagens: jogo.imagens
      ? jogo.imagens
      : jogo.imagem
      ? [jogo.imagem]
      : [],
    plataforma: jogo.plataforma, 
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
