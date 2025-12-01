// O `prisma` é passado pelo `seed.mjs` — não instanciamos aqui para evitar múltiplas conexões.

const famousGames = [
  {
    nome: "Demon's Souls (Remake)",
    desenvolvedor: "FromSoftware/Bluepoint",
    genero: "Soulslike",
    anoLancamento: 2020,
    preco: 329.95,
    descricao: "O pioneiro da série, refeito para a nova geração.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLCoFCC9LuBW-Aff4I6n5-AyD1fP3-6NdOMA&s",
    plataforma: ["PlayStation", "Xbox", "Nintendo", "PC"]

  },
  {
    nome: "Dark Souls",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2011,
    preco: 164.95,
    descricao: "O RPG de Ação desafiador que popularizou o gênero.",
    imagem: "https://m.media-amazon.com/images/I/71Moqa6XZlL._AC_UF1000,1000_QL80_.jpg",
    plataforma: ["PlayStation", "Xbox", "Nintendo", "PC"]
  },
  {
    nome: "Bloodborne",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2015,
    preco: 219.95,
    descricao: "Caça gótica Lovecraftiana com foco em combate rápido.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk62h2PTD0r1rB9MFnK_eWPArp8FriPJp9cw&s",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Elden Ring",
    desenvolvedor: "FromSoftware",
    genero: "Soulslike",
    anoLancamento: 2022,
    preco: 329.95,
    descricao:"O vasto mundo aberto Soulslike criado por Miyazaki e G.R.R. Martin.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_cspEzfgMdenwt0VS7QHBJCOdWaVkrXyvA&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Resident Evil 1 (1996)",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 1996,
    preco: 82.5,
    descricao: "O início do survival horror e da mansão assombrada.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/04/Resident_Evil_capa.png",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Resident Evil 2 Remake",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2019,
    preco: 164.95,
    descricao: "O remake aterrorizante da experiência de Raccoon City.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZZxPlqR8F_VrvILKygK1cfHt_RBzIDtmGOg&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Resident Evil 3 Remake",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2020,
    preco: 164.95,
    descricao: "Jill Valentine e a perseguição implacável de Nemesis.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi0YYUF_c2t9gzvLAVAcrdpEfz-KfpBIxAkQ&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Resident Evil 4 (2004)",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2005,
    preco: 109.95,
    descricao:"O clássico que mudou o survival horror para uma câmera sobre o ombro.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/9/91/Resident_Evil_4_-_North-american_cover.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Resident Evil 5",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2009,
    preco: 54.95,
    descricao: "Foco total na ação cooperativa e na África.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcI1IHTDyATH7gaE3g6V0hptj4EqI8YldA4g&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Resident Evil 6",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2012,
    preco: 54.95,
    descricao: "O jogo mais focado em ação da série, com múltiplas campanhas.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/73/Resident_evil_6.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Resident Evil 7: Biohazard",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2017,
    preco: 109.95,
    descricao: "Retorno às raízes do horror em primeira pessoa.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6tAmNF8GByl-jAhJL23YiCD59ELR_axdMNg&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Resident Evil Village",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2021,
    preco: 274.95,
    descricao: "A aventura de Ethan Winters na vila sombria.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBkJY9wY8UHr-_S-cZFuEwKbVdzZsYiWh-Q&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Resident Evil requiem",
    desenvolvedor: "Capcom",
    genero: "Terror",
    anoLancamento: 2025,
    preco: 329.95,
    descricao:
      "O próximo grande título da série, focado no terror de sobrevivência.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Jqi5z1KdRrCGDj_f9UiclrEU5bhIZVg0pQ&s", 
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "God of War (Original 2005)",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2005,
    preco: 54.95,
    descricao: "A fúria de Kratos na Grécia Antiga.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/5/53/God_of_War_2005_capa.png",
    plataforma: ["PlayStation"]
  },
  {
    nome: "God of War II",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2007,
    preco: 54.95,
    descricao: "Considerado o ápice da franquia original de Kratos no PS2.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_rHm-wTcyReenjEAhWV4vfVH8Uwnjps5zA&s",
    plataforma: ["PlayStation"]
  },
  {
    nome: "God of War III",
    desenvolvedor: "Santa Monica Studio",
    genero: "Ação",
    anoLancamento: 2010,
    preco: 109.95,
    descricao: "O final épico da trilogia grega.",
    imagem: "https://cdn.awsli.com.br/800x800/53/53761/produto/13244966/d8b15e12f6.jpg",
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
    imagem: "https://m.media-amazon.com/images/I/81gC318-4KL._UF1000,1000_QL80_.jpg",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Devil May Cry (2001)",
    desenvolvedor: "Capcom",
    genero: "Ação",
    anoLancamento: 2001,
    preco: 109.95,
    descricao: "O nascimento do combate estiloso com Dante.",
    imagem: "https://i.pinimg.com/736x/84/e7/04/84e704f9ab2e4edcd507e8741709ece3.jpg",
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
    imagem: "https://i.pinimg.com/736x/84/25/0b/84250b333f9d66307323f4b07a12e582.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Darksiders",
    desenvolvedor: "Vigil Games",
    genero: "Ação",
    anoLancamento: 2010,
    preco: 109.95,
    descricao: "Guerra, o Cavaleiro do Apocalipse, em sua jornada.",
    imagem: "https://i.pinimg.com/736x/35/a5/59/35a5591085fe9f404fd3fc5b8ecf4a25.jpg",
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
    imagem: "https://i.pinimg.com/1200x/6b/b5/af/6bb5af7537a315b2732d1bbdde6bd77a.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Darksiders III",
    desenvolvedor: "Gunfire Games",
    genero: "Ação",
    anoLancamento: 2018,
    preco: 164.95,
    descricao: "Fúria, a Cavaleira, focada em combate ágil e quebra-cabeças.",
    imagem: "https://i.pinimg.com/736x/92/b1/a3/92b1a396e0d12a1bbfb9cd15354eb1f8.jpg",
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
    nome: "Pokémon Red/Blue/Yellow/green",
    desenvolvedor: "Game Freak",
    genero: "RPG",
    anoLancamento: 1996,
    preco: 82.5,
    descricao: "O início da aventura de caça e treinamento de Pokémon.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zJNgcbySMVfBycuYDDGeunR7IvWUp8i28w&s",
    plataforma: ["nintendo", "PC"]
  },
  {
    nome: "Pokémon Scarlet/Violet",
    desenvolvedor: "Game Freak",
    genero: "RPG",
    anoLancamento: 2022,
    preco: 274.95,
    descricao:
      "A primeira experiência de mundo aberto completa da franquia Pokémon.",
    imagem: "https://sm.ign.com/ign_br/game/p/pokemon-sc/pokemon-scarlet_aqh9.png",
    plataforma: ["PlayStation", "Xbox", "PC"]
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
    imagem: "https://i.pinimg.com/736x/86/0a/28/860a287a31ec709f6db30e122ff39627.jpg",
    plataforma: ["nintendo", "PC"]
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
    nome: "Sonic Adventure",
    desenvolvedor: "Sonic Team",
    genero: "Aventura",
    anoLancamento: 1998,
    preco: 109.95,
    descricao:
      "O primeiro grande jogo 3D do Sonic, com foco em aventura e velocidade.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/6/60/Sonic_Adventure.PNG",
    plataforma: ["PlayStation", "Xbox", "Nintendo", "PC"]
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
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Death Stranding 2: On The Beach",
    desenvolvedor: "Kojima Productions",
    genero: "Aventura",
    anoLancamento: 2025,
    preco: 329.95,
    descricao: "O próximo épico de Hideo Kojima sobre conexão.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/e/e0/Death_Stranding_2_Icon.jpg",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Red Dead Redemption 2",
    desenvolvedor: "Rockstar Games",
    genero: "Aventura",
    anoLancamento: 2018,
    preco: 329.95,
    descricao: "Um épico faroeste com detalhes impecáveis e mundo aberto.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Zw3ba8igTlqTD-rCWWQgpjA1dFwTv0DV3w&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Grand Theft Auto V",
    desenvolvedor: "Rockstar Games",
    genero: "Aventura",
    anoLancamento: 2013,
    preco: 329.95,
    descricao: "O sucesso de vendas em Los Santos.",
    imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1gXhYBTiv8whMqlcgbtSi-iegWR0IECT6VdLZo8wFfARvvZR0g52pBqiAOeMcN_9Age0BHzav1MrMpYI2o0ZuJ-6Fjfq7DZLf8ju53IrOTxD4jJb0XRqFJ_2aLxWASjhoEhHgBZU0ZbjE/s1600/capa2.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Ghost of Tsushima",
    desenvolvedor: "Sucker Punch",
    genero: "Aventura",
    anoLancamento: 2020,
    preco: 274.95,
    descricao: "Épico samurai visualmente deslumbrante em mundo aberto.",
    imagem: "https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Days Gone",
    desenvolvedor: "Bend Studio",
    genero: "Aventura",
    anoLancamento: 2019,
    preco: 274.95,
    descricao: "Sobrevivência de motoqueiro contra hordas de Freakers.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/1/16/Days_Gone_cover_art.jpg",
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
    imagem: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkUbrHi53C3hasmUFxNtSJFeo4R0M-Prx9n4sRN9Sj4illTqaaxl1s3COQ634fuB8zcDZcIWBg",
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
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Assassin’s Creed II",
    desenvolvedor: "Ubisoft",
    genero: "Aventura",
    anoLancamento: 2009,
    preco: 109.95,
    descricao: "A aventura de Ezio Auditore no Renascimento.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/a/ac/Assassins_Creed_2_capa.png",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Horizon Zero Dawn",
    desenvolvedor: "Guerrilla Games",
    genero: "RPG",
    anoLancamento: 2017,
    preco: 274.95,
    descricao: "Aloy em um mundo pós-apocalíptico com máquinas animais.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDFmU7vmHYCcaqaxUEpyxmtj8A6SK-cO0aaA&s",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Horizon Forbidden West",
    desenvolvedor: "Guerrilla Games",
    genero: "RPG",
    anoLancamento: 2022,
    preco: 329.95,
    descricao: "A continuação da jornada de Aloy no Oeste Proibido.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e5/Horizon_Forbidden_West.jpg",
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Fallout 4",
    desenvolvedor: "Bethesda Game Studios",
    genero: "RPG",
    anoLancamento: 2015,
    preco: 164.95,
    descricao: "Sobrevivência e construção no Commonwealth pós-apocalíptico.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/70/Fallout_4_cover_art.jpg",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },
  {
    nome: "Astrobot Rescue Mission",
    desenvolvedor: "Japan Studio",
    genero: "Realidade virtual",
    anoLancamento: 2018,
    preco: 164.95,
    descricao: "O aclamado jogo de plataforma exclusivo de PS VR.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rVO0lYe_iXtniPexb4wJj2txAcbSlBR_ag&s",
    plataforma: ["PlayStation"]
  },
  {
    nome: "Marvel's Spider-Man 2",
    desenvolvedor: "Insomniac Games",
    genero: "Ação",
    anoLancamento: 2023,
    preco: 349.95,
    descricao: "Peter Parker e Miles Morales enfrentam Venom e Kraven.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/6/64/Spider-Man_2_2023_capa.jpg",  
    plataforma: ["PlayStation", "PC"]
  },
  {
    nome: "Marvel's Wolverine",
    desenvolvedor: "Insomniac Games",
    genero: "Ação",
    anoLancamento: 2025,
    preco: 349.95,
    descricao: "O próximo grande jogo de super-heróis da Insomniac Games.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTh6Oj-Do4Vsiatfeco0SI-0RgSveCAfQVQ&s",
    plataforma: ["PlayStation", "PC"]
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
    nome: "Gran Turismo 7",
    desenvolvedor: "Polyphony Digital",
    genero: "Ação",
    anoLancamento: 2022,
    preco: 274.95,
    descricao:
      "O simulador de corrida que celebra a história do automobilismo.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_q2zXerc_ClXNmThOS6rImCExJjr5LhuSQ&s",
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
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CjHB7iZ4vMUMnNy8BP215mVrp5MdTgBqpw&s",
    plataforma: ["PlayStation", "Xbox", "PC"]
  },

{
  nome: "Battlefield 6 (2042)",
  desenvolvedor: "DICE",
  genero: "FPS",
  anoLancamento: 2021,
  preco: 274.95,
  descricao: "FPS multiplayer de larga escala focado em guerra total e futurista.",
  imagem: "https://i.pinimg.com/1200x/84/7f/c1/847fc1a7d49ac3d5f5d093c8c668b7ee.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Call of Duty: Black Ops",
  desenvolvedor: "Treyarch",
  genero: "FPS",
  anoLancamento: 2010,
  preco: 164.95,
  descricao: "FPS com foco em operações secretas da Guerra Fria.",
  imagem: "https://upload.wikimedia.org/wikipedia/pt/5/54/Call-of-Duty---Black-Ops---Cover-.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Black",
  desenvolvedor: "Criterion Games",
  genero: "FPS",
  anoLancamento: 2006,
  preco: 82.5,
  descricao: "Clássico de FPS para PS2 conhecido por sua ação cinematográfica e destrutiva.",
  imagem: "https://upload.wikimedia.org/wikipedia/en/a/ad/Black_cover_art.jpg",
  plataforma: ["PlayStation", "Xbox"]
},
{
  nome: "Hollow Knight: Silksong",
  desenvolvedor: "Team Cherry",
  genero: "Indie",
  anoLancamento: 2025,
  preco: 109.95,
  descricao: "A esperada sequência do 'metroidvania' aclamado pela crítica.",
  imagem: "https://pbs.twimg.com/media/GniOTj6WcAA_0O2.jpg",
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
  nome: "Batman: Arkham VR",
  desenvolvedor: "Rocksteady Studios",
  genero: "Realidade virtual",
  anoLancamento: 2016,
  preco: 109.95,
  descricao: "Experiência imersiva em VR que coloca o jogador no papel do Batman investigando um mistério.",
  imagem: "https://m.media-amazon.com/images/I/71JO-prEujL._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["VR"]
},
{
  nome: "Five Nights at Freddy's",
  desenvolvedor: "Scott Cawthon",
  genero: "Terror",
  anoLancamento: 2014,
  preco: 54.95,
  descricao: "Jogo de terror onde o jogador deve sobreviver à noite monitorando animatrônicos assustadores.",
  imagem: "https://m.media-amazon.com/images/M/MV5BZmQ3NmIxNTgtYjFiNS00NzliLWI0YzAtZDkxY2E0YWIxZDEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Bendy and the Ink Machine",
  desenvolvedor: "Joey Drew Studios",
  genero: "Terror",
  anoLancamento: 2017,
  preco: 82.5,
  descricao: "Aventura de terror em estilo cartoon envolvendo mistérios em um estúdio de animação.",
  imagem: "https://sm.ign.com/t/ign_pt/cover/b/bendy-and-/bendy-and-the-ink-machine_a9hz.600.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Grand Theft Auto VI",
  desenvolvedor: "Rockstar Games",
  genero: "Mapa Aberto",
  anoLancamento: 2030,
  preco: 399.95,
  descricao: "Nova entrada da série GTA com mundo aberto expansivo e narrativa cinematográfica.",
  imagem: "https://www.europanet.com.br/upload/id_produto/60_____/6001702g.jpg",
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
  imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f7/Cyberpunk_2077_capa.png",
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
  imagem: "https://m.media-amazon.com/images/I/81dmAhOA4pL._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["PlayStation", "PC"]
},
{
  nome: "Diablo IV",
  desenvolvedor: "Blizzard Entertainment",
  genero: "Ação",
  anoLancamento: 2023,
  preco: 349.95,
  descricao: "RPG de ação sombrio com exploração, combate rápido e loot abundante.",
  imagem: "https://m.media-amazon.com/images/I/61LtU8b5p9L._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Baldur's Gate 3",
  desenvolvedor: "Larian Studios",
  genero: "RPG",
  anoLancamento: 2023,
  preco: 274.95,
  descricao: "RPG estratégico baseado em D&D com escolhas profundas e narrativa ramificada.",
  imagem: "https://m.media-amazon.com/images/M/MV5BN2I0N2Y3MWUtNjJiNy00NjRjLWE4ZTctOTQ2YWVhM2VhMTM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
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
  imagem: "https://m.media-amazon.com/images/I/71cMlBdT7gL._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Halo Infinite",
  desenvolvedor: "343 Industries",
  genero: "FPS",
  anoLancamento: 2021,
  preco: 274.95,
  descricao: "Nova aventura de Master Chief com campanha aberta e multiplayer competitivo.",
  imagem: "https://i.pinimg.com/736x/9b/87/d3/9b87d3529bbe702fb0ec2c04aa72472d.jpg",
  plataforma: ["PC", "Xbox"]
},
{
  nome: "Apex Legends",
  desenvolvedor: "Respawn Entertainment",
  genero: "FPS",
  anoLancamento: 2019,
  preco: 0.0,
  descricao: "Battle royale baseado em heróis com habilidades únicas e jogabilidade dinâmica.",
  imagem: "https://m.media-amazon.com/images/I/91Nqbl71UkL._AC_UF1000,1000_QL80_.jpg",
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
  imagem: "https://i.pinimg.com/1200x/0a/a6/7b/0aa67b11d1cd4a12e2ce6ca720fe045f.jpg",
  plataforma: ["PC", "PlayStation", "Xbox"]
},
{
  nome: "Counter-Strike 2",
  desenvolvedor: "Valve",
  genero: "FPS",
  anoLancamento: 2023,
  preco: 0.0,
  descricao: "FPS competitivo focado em estratégia e precisão em partidas 5v5.",
  imagem: "https://m.media-amazon.com/images/I/61xQi94LmuL._AC_UF894,1000_QL80_.jpg",
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
  imagem: "https://m.media-amazon.com/images/I/A1BceoX-6nL._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Among Us",
  desenvolvedor: "Innersloth",
  genero: "Indie",
  anoLancamento: 2018,
  preco: 27.5,
  descricao: "Jogo social onde jogadores tentam descobrir impostores em uma nave.",
  imagem: "https://cdn1.epicgames.com/salesEvent/salesEvent/amogusportrait_1200x1600-66ad0e4d363e1c92f9f8aae67a96dd31",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Fall Guys",
  desenvolvedor: "Mediatonic",
  genero: "Ação",
  anoLancamento: 2020,
  preco: 0.0,
  descricao: "Battle royale de provas malucas com personagens coloridos e divertidos.",
  imagem: "https://m.media-amazon.com/images/I/71DUE93s4RL._AC_UF1000,1000_QL80_.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Fortnite",
  desenvolvedor: "Epic Games",
  genero: "Ação",
  anoLancamento: 2017,
  preco: 0.0,
  descricao: "Battle royale com construção, eventos ao vivo e constante atualização.",
  imagem: "https://i.pinimg.com/736x/7e/e8/c4/7ee8c4361736ed806711ae99f7d6762c.jpg",
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
  imagem: "https://i.pinimg.com/1200x/09/1d/37/091d371866ebbc9b858ac76fe6d1c2f7.jpg",
  plataforma: ["PC"]
},
{
  nome: "Genshin Impact",
  desenvolvedor: "miHoYo",
  genero: "RPG",
  anoLancamento: 2020,
  preco: 0.0,
  descricao: "RPG de mundo aberto com combates elementais e personagens colecionáveis.",
  imagem: "https://i.pinimg.com/1200x/9b/86/7a/9b867ad05f18784ec8d042e9a2384b0c.jpg",
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
  imagem: "https://i.pinimg.com/1200x/bd/b8/ec/bdb8eca07de123c1c9f6e0801c817e6a.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Disco Elysium",
  desenvolvedor: "ZA/UM",
  genero: "RPG",
  anoLancamento: 2019,
  preco: 109.95,
  descricao: "RPG narrativo focado em investigação e escolhas profundas.",
  imagem: "https://i.pinimg.com/736x/4b/d9/60/4bd96072e6668e3a99af7318b4d03296.jpg",
  plataforma: ["PC", "PlayStation", "Xbox", "Nintendo"]
},
{
  nome: "Deathloop",
  desenvolvedor: "Arkane Lyon",
  genero: "FPS",
  anoLancamento: 2021,
  preco: 274.95,
  descricao: "FPS em que o jogador fica preso em um looping temporal e deve eliminar alvos.",
  imagem: "https://i.pinimg.com/736x/f2/de/f5/f2def5d61c3ad01087af0bb01a649373.jpg",
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
