import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const famousGames = [
  { nome: "Demon's Souls (Remake)", desenvolvedor: "FromSoftware/Bluepoint", genero: "Soulslike", anoLancamento: 2020, preco: 329.95, descricao: "O pioneiro da série, refeito para a nova geração." },
  { nome: "Dark Souls", desenvolvedor: "FromSoftware", genero: "Soulslike", anoLancamento: 2011, preco: 164.95, descricao: "O RPG de Ação desafiador que popularizou o gênero." },
  { nome: "Bloodborne", desenvolvedor: "FromSoftware", genero: "Soulslike", anoLancamento: 2015, preco: 219.95, descricao: "Caça gótica Lovecraftiana com foco em combate rápido." },
  { nome: "Elden Ring", desenvolvedor: "FromSoftware", genero: "Soulslike", anoLancamento: 2022, preco: 329.95, descricao: "O vasto mundo aberto Soulslike criado por Miyazaki e G.R.R. Martin." },
  { nome: "Resident Evil 1 (1996)", desenvolvedor: "Capcom", genero: "Terror", anoLancamento: 1996, preco: 82.50, descricao: "O início do survival horror e da mansão assombrada." },
  { nome: "Resident Evil 2 Remake", desenvolvedor: "Capcom", genero: "Terror", anoLancamento: 2019, preco: 164.95, descricao: "O remake aterrorizante da experiência de Raccoon City." },
  { nome: "Resident Evil 3 Remake", desenvolvedor: "Capcom", genero: "Terror", anoLancamento: 2020, preco: 164.95, descricao: "Jill Valentine e a perseguição implacável de Nemesis." },
  { nome: "Resident Evil 4 (2004)", desenvolvedor: "Capcom", genero: "Terror", anoLancamento: 2005, preco: 109.95, descricao: "O clássico que mudou o survival horror para uma câmera sobre o ombro." },
  { nome: "Resident Evil 5", desenvolvedor: "Capcom", genero: "Ação", anoLancamento: 2009, preco: 54.95, descricao: "Foco total na ação cooperativa e na África." },
  { nome: "Resident Evil 6", desenvolvedor: "Capcom", genero: "Ação", anoLancamento: 2012, preco: 54.95, descricao: "O jogo mais focado em ação da série, com múltiplas campanhas." },
  { nome: "Resident Evil 7: Biohazard", desenvolvedor: "Capcom", genero: "Terror", anoLancamento: 2017, preco: 109.95, descricao: "Retorno às raízes do horror em primeira pessoa." },
  { nome: "Resident Evil Village (8)", desenvolvedor: "Capcom", genero: "Terror", anoLancamento: 2021, preco: 274.95, descricao: "A aventura de Ethan Winters na vila sombria." },
  { nome: "Resident Evil 9 (Projetado)", desenvolvedor: "Capcom", genero: "Terror", anoLancamento: 2025, preco: 329.95, descricao: "O próximo grande título da série, focado no terror de sobrevivência." },
  { nome: "God of War (Original 2005)", desenvolvedor: "Santa Monica Studio", genero: "Ação", anoLancamento: 2005, preco: 54.95, descricao: "A fúria de Kratos na Grécia Antiga." },
  { nome: "God of War II", desenvolvedor: "Santa Monica Studio", genero: "Ação", anoLancamento: 2007, preco: 54.95, descricao: "Considerado o ápice da franquia original de Kratos no PS2." },
  { nome: "God of War III", desenvolvedor: "Santa Monica Studio", genero: "Ação", anoLancamento: 2010, preco: 109.95, descricao: "O final épico da trilogia grega." },
  { nome: "God of War (2018)", desenvolvedor: "Santa Monica Studio", genero: "Ação", anoLancamento: 2018, preco: 274.95, descricao: "A reinvenção nórdica de Kratos e Atreus." },
  { nome: "God of War: Ragnarok", desenvolvedor: "Santa Monica Studio", genero: "Ação", anoLancamento: 2022, preco: 329.95, descricao: "O épico final da saga nórdica." },
  { nome: "Devil May Cry (2001)", desenvolvedor: "Capcom", genero: "Ação", anoLancamento: 2001, preco: 109.95, descricao: "O nascimento do combate estiloso com Dante." },
  { nome: "Devil May Cry 5", desenvolvedor: "Capcom", genero: "Ação", anoLancamento: 2019, preco: 164.95, descricao: "O ápice da ação 'hack and slash' com três personagens jogáveis." },
  { nome: "Darksiders", desenvolvedor: "Vigil Games", genero: "Ação", anoLancamento: 2010, preco: 109.95, descricao: "Guerra, o Cavaleiro do Apocalipse, em sua jornada." },
  { nome: "Darksiders II", desenvolvedor: "Vigil Games", genero: "Ação", anoLancamento: 2012, preco: 109.95, descricao: "Morte, o Cavaleiro do Apocalipse, em uma aventura maior e com elementos RPG." },
  { nome: "Darksiders III", desenvolvedor: "Gunfire Games", genero: "Ação", anoLancamento: 2018, preco: 164.95, descricao: "Fúria, a Cavaleira, focada em combate ágil e quebra-cabeças." },
  { nome: "Tomb Raider (1996)", desenvolvedor: "Core Design", genero: "Aventura", anoLancamento: 1996, preco: 82.50, descricao: "A aventura original de Lara Croft." },
  { nome: "Tomb Raider (Reboot 2013)", desenvolvedor: "Crystal Dynamics", genero: "Aventura", anoLancamento: 2013, preco: 109.95, descricao: "O reboot moderno de Lara Croft, focado em sobrevivência." },
  { nome: "Pokémon Red/Blue/Yellow", desenvolvedor: "Game Freak", genero: "RPG", anoLancamento: 1996, preco: 82.50, descricao: "O início da aventura de caça e treinamento de Pokémon." },
  { nome: "Pokémon Scarlet/Violet", desenvolvedor: "Game Freak", genero: "RPG", anoLancamento: 2022, preco: 274.95, descricao: "A primeira experiência de mundo aberto completa da franquia Pokémon." },
  { nome: "The Legend of Zelda: Ocarina of Time", desenvolvedor: "Nintendo", genero: "Aventura", anoLancamento: 1998, preco: 274.95, descricao: "Revolucionou o 3D e o gênero Ação-Aventura." },
  { nome: "The Legend of Zelda: Breath of the Wild", desenvolvedor: "Nintendo", genero: "Aventura", anoLancamento: 2017, preco: 329.95, descricao: "Um mundo aberto massivo que redefiniu a série Zelda." },
  { nome: "The Legend of Zelda: Tears of the Kingdom", desenvolvedor: "Nintendo", genero: "Aventura", anoLancamento: 2023, preco: 329.95, descricao: "Sequência direta de BOTW com foco em criatividade e física." },
  { nome: "Super Mario Bros.", desenvolvedor: "Nintendo", genero: "Aventura", anoLancamento: 1985, preco: 109.95, descricao: "O jogo que definiu o gênero plataforma 2D." },
  { nome: "Super Mario 64", desenvolvedor: "Nintendo", genero: "Aventura", anoLancamento: 1996, preco: 164.95, descricao: "Definiu o padrão para jogos de plataforma 3D." },
  { nome: "Super Mario Odyssey", desenvolvedor: "Nintendo", genero: "Aventura", anoLancamento: 2017, preco: 274.95, descricao: "Uma aventura criativa em vários mundos abertos com a mecânica Cappy." },
  { nome: "Sonic The Hedgehog (1991)", desenvolvedor: "Sonic Team", genero: "Aventura", anoLancamento: 1991, preco: 54.95, descricao: "O ouriço azul em sua estreia de alta velocidade." },
  { nome: "Sonic Adventure", desenvolvedor: "Sonic Team", genero: "Aventura", anoLancamento: 1998, preco: 109.95, descricao: "O primeiro grande jogo 3D do Sonic, com foco em aventura e velocidade." },
  { nome: "The Last of Us Part I", desenvolvedor: "Naughty Dog", genero: "Terror", anoLancamento: 2013, preco: 219.95, descricao: "Uma jornada emocional de sobrevivência em um mundo devastado." },
  { nome: "Returnal", desenvolvedor: "Housemarque", genero: "Ação", anoLancamento: 2021, preco: 274.95, descricao: "Ação frenética em terceira pessoa com estrutura roguelike." },
  { nome: "Death Stranding 2: On The Beach", desenvolvedor: "Kojima Productions", genero: "Aventura", anoLancamento: 2025, preco: 329.95, descricao: "O próximo épico de Hideo Kojima sobre conexão." },
  { nome: "Red Dead Redemption 2", desenvolvedor: "Rockstar Games", genero: "Aventura", anoLancamento: 2018, preco: 329.95, descricao: "Um épico faroeste com detalhes impecáveis e mundo aberto." },
  { nome: "Grand Theft Auto V", desenvolvedor: "Rockstar Games", genero: "Aventura", anoLancamento: 2013, preco: 329.95, descricao: "O sucesso de vendas em Los Santos." },
  { nome: "Ghost of Tsushima", desenvolvedor: "Sucker Punch", genero: "Aventura", anoLancamento: 2020, preco: 274.95, descricao: "Épico samurai visualmente deslumbrante em mundo aberto." },
  { nome: "Days Gone", desenvolvedor: "Bend Studio", genero: "Aventura", anoLancamento: 2019, preco: 274.95, descricao: "Sobrevivência de motoqueiro contra hordas de Freakers." },
  { nome: "Detroit: Become Human", desenvolvedor: "Quantic Dream", genero: "Aventura", anoLancamento: 2018, preco: 219.95, descricao: "Thriller cinemático focado em escolhas sobre a revolução dos andróides." },
  { nome: "Shadow of the Colossus", desenvolvedor: "Team Ico", genero: "Aventura", anoLancamento: 2005, preco: 164.95, descricao: "Uma jornada artística e melancólica de combate a gigantes." },
  { nome: "Until Dawn", desenvolvedor: "Supermassive Games", genero: "Terror", anoLancamento: 2015, preco: 164.95, descricao: "Drama de terror adolescente com muitas escolhas e mortes." },
  { nome: "Uncharted 4: A Thief’s End", desenvolvedor: "Naughty Dog", genero: "Aventura", anoLancamento: 2016, preco: 274.95, descricao: "O final emocionante da saga de Nathan Drake." },
  { nome: "Metal Gear Solid 3: Snake Eater", desenvolvedor: "Konami", genero: "Aventura", anoLancamento: 2004, preco: 164.95, descricao: "O mestre do stealth focado em sobrevivência na selva." },
  { nome: "Assassin’s Creed II", desenvolvedor: "Ubisoft", genero: "Aventura", anoLancamento: 2009, preco: 109.95, descricao: "A aventura de Ezio Auditore no Renascimento." },
  { nome: "Horizon Zero Dawn", desenvolvedor: "Guerrilla Games", genero: "RPG", anoLancamento: 2017, preco: 274.95, descricao: "Aloy em um mundo pós-apocalíptico com máquinas animais." },
  { nome: "Horizon Forbidden West", desenvolvedor: "Guerrilla Games", genero: "RPG", anoLancamento: 2022, preco: 329.95, descricao: "A continuação da jornada de Aloy no Oeste Proibido." },
  { nome: "Fallout 4", desenvolvedor: "Bethesda Game Studios", genero: "RPG", anoLancamento: 2015, preco: 164.95, descricao: "Sobrevivência e construção no Commonwealth pós-apocalíptico." },
  { nome: "Astrobot Rescue Mission", desenvolvedor: "Japan Studio", genero: "Realidade virtual", anoLancamento: 2018, preco: 164.95, descricao: "O aclamado jogo de plataforma exclusivo de PS VR." },
  { nome: "Marvel's Spider-Man 2", desenvolvedor: "Insomniac Games", genero: "Ação", anoLancamento: 2023, preco: 349.95, descricao: "Peter Parker e Miles Morales enfrentam Venom e Kraven." },
  { nome: "Marvel's Wolverine", desenvolvedor: "Insomniac Games", genero: "Ação", anoLancamento: 2025, preco: 349.95, descricao: "O próximo grande jogo de super-heróis da Insomniac Games." },
  { nome: "Stellar Blade", desenvolvedor: "Shift Up", genero: "Ação", anoLancamento: 2024, preco: 329.95, descricao: "Ação intensa focada no combate e na estética de ficção científica." },
  { nome: "Yakuza 6: The Song of Life", desenvolvedor: "Ryu Ga Gotoku Studio", genero: "Ação", anoLancamento: 2016, preco: 164.95, descricao: "O final da história de Kazuma Kiryu." },
  { nome: "Gran Turismo 7", desenvolvedor: "Polyphony Digital", genero: "Ação", anoLancamento: 2022, preco: 274.95, descricao: "O simulador de corrida que celebra a história do automobilismo." },
  { nome: "Need for Speed Underground", desenvolvedor: "EA Black Box", genero: "Ação", anoLancamento: 2003, preco: 54.95, descricao: "Popularizou as corridas de rua e a customização de carros." },
  { nome: "Doom: The Dark Ages", desenvolvedor: "id Software", genero: "FPS", anoLancamento: 2025, preco: 329.95, descricao: "O prelúdio épico da saga Doom, focado em combate medieval." },
  { nome: "Battlefield 6 (2042)", desenvolvedor: "DICE", genero: "FPS", anoLancamento: 2021, preco: 274.95, descricao: "FPS multiplayer de larga escala focado em guerra total e futurista." },
  { nome: "Call of Duty: Black Ops", desenvolvedor: "Treyarch", genero: "FPS", anoLancamento: 2010, preco: 164.95, descricao: "FPS com foco em operações secretas da Guerra Fria." },
  { nome: "Black", desenvolvedor: "Criterion Games", genero: "FPS", anoLancamento: 2006, preco: 82.50, descricao: "Clássico de FPS para PS2 conhecido por sua ação cinematográfica e destrutiva." },
  { nome: "Hollow Knight: Silksong", desenvolvedor: "Team Cherry", genero: "Indie", anoLancamento: 2025, preco: 109.95, descricao: "A esperada sequência do 'metroidvania' aclamado pela crítica." },
  { nome: "Peak", desenvolvedor: "Indie Studio", genero: "Indie", anoLancamento: 2024, preco: 54.95, descricao: "Um jogo indie de exploração focado em escalada e narrativa." },
];

export async function seedJogos(prisma) {
  console.log("🌎 Iniciando o seed com 57 jogos consolidados e filtrados (valores em reais)...");

  const dataToInsert = famousGames.map((jogo) => ({
    nome: jogo.nome,
    desenvolvedor: jogo.desenvolvedor,
    genero: jogo.genero,
    anoLancamento: jogo.anoLancamento,
    preco: String(jogo.preco),
    descricao: jogo.descricao.substring(0, 500),
  }));

  const { count } = await prisma.jogo.createMany({
    data: dataToInsert,
    skipDuplicates: true,
  });

  console.log(`✅ Seed concluído. ${count} jogos criados/verificados na tabela 'jogo'.`);
  return count;
}
