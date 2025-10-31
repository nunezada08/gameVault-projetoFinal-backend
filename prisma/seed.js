const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Dados de 100 jogos famosos de várias épocas e gêneros
const famousGames = [
    // 1-10: Ícones Clássicos
    { nome: "Super Mario Bros.", desenvolvedor: "Nintendo", genero: "Plataforma", anoLancamento: 1985, preco: 19.99, descricao: "O jogo que salvou a indústria e definiu o gênero plataforma." },
    { nome: "The Legend of Zelda: Ocarina of Time", desenvolvedor: "Nintendo", genero: "Ação-Aventura", anoLancamento: 1998, preco: 49.99, descricao: "Considerado por muitos o melhor jogo de todos os tempos. Revolucionou o 3D." },
    { nome: "Tetris", desenvolvedor: "Alexey Pajitnov", genero: "Quebra-Cabeça", anoLancamento: 1984, preco: 4.99, descricao: "O clássico viciante de encaixar blocos." },
    { nome: "Doom", desenvolvedor: "id Software", genero: "FPS", anoLancamento: 1993, preco: 9.99, descricao: "Popularizou o gênero FPS e o multiplayer em rede." },
    { nome: "Pac-Man", desenvolvedor: "Namco", genero: "Arcade/Labirinto", anoLancamento: 1980, preco: 4.99, descricao: "Um dos jogos de arcade mais famosos de todos os tempos." },
    { nome: "Final Fantasy VII", desenvolvedor: "Square", genero: "JRPG", anoLancamento: 1997, preco: 39.99, descricao: "Elevou o JRPG a um novo patamar de popularidade e narrativa cinematográfica." },
    { nome: "Half-Life 2", desenvolvedor: "Valve", genero: "FPS", anoLancamento: 2004, preco: 19.99, descricao: "Um marco em física e narrativa nos jogos de tiro em primeira pessoa." },
    { nome: "Minecraft", desenvolvedor: "Mojang", genero: "Sandbox/Sobrevivência", anoLancamento: 2011, preco: 29.99, descricao: "Um fenômeno global que permite construir e explorar mundos infinitos de blocos." },
    { nome: "World of Warcraft", desenvolvedor: "Blizzard Entertainment", genero: "MMORPG", anoLancamento: 2004, preco: 15.00, descricao: "O MMORPG mais influente e duradouro da história." },
    { nome: "Grand Theft Auto V", desenvolvedor: "Rockstar Games", genero: "Ação-Aventura", anoLancamento: 2013, preco: 59.99, descricao: "Um sucesso de vendas e crítica com um vasto mundo aberto em Los Santos." },

    // 11-30: Clássicos Modernos e RPGs
    { nome: "The Witcher 3: Wild Hunt", desenvolvedor: "CD Projekt Red", genero: "RPG", anoLancamento: 2015, preco: 49.99, descricao: "Um RPG de mundo aberto épico, elogiado pela narrativa e profundidade." },
    { nome: "Red Dead Redemption 2", desenvolvedor: "Rockstar Games", genero: "Ação-Aventura", anoLancamento: 2018, preco: 69.99, descricao: "Um épico de faroeste com uma imersão e detalhes incomparáveis." },
    { nome: "The Last of Us", desenvolvedor: "Naughty Dog", genero: "Ação-Aventura/Sobrevivência", anoLancamento: 2013, preco: 39.99, descricao: "Um drama intenso e emocionante sobre sobrevivência pós-apocalíptica." },
    { nome: "Skyrim: The Elder Scrolls V", desenvolvedor: "Bethesda Game Studios", genero: "RPG", anoLancamento: 2011, preco: 29.99, descricao: "Famoso por seu mundo aberto massivo e a possibilidade de ser jogado em diversas plataformas." },
    { nome: "Dark Souls", desenvolvedor: "FromSoftware", genero: "RPG de Ação", anoLancamento: 2011, preco: 24.99, descricao: "Deu origem ao subgênero 'Souls-like', conhecido pela dificuldade e design de níveis interconectados." },
    { nome: "Super Mario 64", desenvolvedor: "Nintendo", genero: "Plataforma 3D", anoLancamento: 1996, preco: 29.99, descricao: "Revolucionou o gênero plataforma com a transição para o 3D." },
    { nome: "Resident Evil 4", desenvolvedor: "Capcom", genero: "Survival Horror", anoLancamento: 2005, preco: 19.99, descricao: "Mudou a perspectiva e a jogabilidade dos jogos de terror." },
    { nome: "Metal Gear Solid", desenvolvedor: "Konami", genero: "Stealth", anoLancamento: 1998, preco: 14.99, descricao: "Definiu o gênero stealth e elevou a narrativa cinematográfica nos videogames." },
    { nome: "Uncharted 2: Among Thieves", desenvolvedor: "Naughty Dog", genero: "Ação-Aventura", anoLancamento: 2009, preco: 19.99, descricao: "Um padrão ouro para blockbusters de aventura, com ação espetacular." },
    { nome: "Pokémon Red & Blue", desenvolvedor: "Game Freak", genero: "JRPG", anoLancamento: 1996, preco: 9.99, descricao: "Iniciou um dos maiores fenômenos de mídia do mundo." },
    { nome: "Street Fighter II", desenvolvedor: "Capcom", genero: "Luta", anoLancamento: 1991, preco: 14.99, descricao: "Criou o boom dos jogos de luta e estabeleceu muitos de seus padrões." },
    { nome: "BioShock", desenvolvedor: "Irrational Games", genero: "FPS/RPG", anoLancamento: 2007, preco: 19.99, descricao: "Famoso por sua narrativa e ambientação distópica em Rapture." },
    { nome: "Shadow of the Colossus", desenvolvedor: "Team Ico", genero: "Ação-Aventura", anoLancamento: 2005, preco: 19.99, descricao: "Um jogo de arte com foco na emoção e na escala épica." },
    { nome: "Deus Ex", desenvolvedor: "Ion Storm", genero: "FPS/RPG", anoLancamento: 2000, preco: 9.99, descricao: "Pioneiro em escolhas do jogador e caminhos múltiplos na jogabilidade." },
    { nome: "Mass Effect 2", desenvolvedor: "BioWare", genero: "RPG de Ação", anoLancamento: 2010, preco: 19.99, descricao: "O auge da trilogia, aclamado por seus personagens e decisões." },
    { nome: "Chrono Trigger", desenvolvedor: "Square", genero: "JRPG", anoLancamento: 1995, preco: 19.99, descricao: "Um JRPG aclamado com múltiplos finais e viagens no tempo." },
    { nome: "The Sims", desenvolvedor: "Maxis", genero: "Simulação de Vida", anoLancamento: 2000, preco: 9.99, descricao: "Um dos jogos de PC mais vendidos, criando um novo gênero de simulação social." },
    { nome: "God of War (2018)", desenvolvedor: "Santa Monica Studio", genero: "Ação-Aventura", anoLancamento: 2018, preco: 49.99, descricao: "Um reboot que modernizou a série com foco em narrativa e combate mais pesado." },
    { nome: "Portal 2", desenvolvedor: "Valve", genero: "Quebra-Cabeça/Plataforma", anoLancamento: 2011, preco: 14.99, descricao: "Aclamado por seu design de quebra-cabeças e humor." },
    { nome: "Hades", desenvolvedor: "Supergiant Games", genero: "Roguelike de Ação", anoLancamento: 2020, preco: 24.99, descricao: "Um roguelike com alta rejogabilidade, narrativa profunda e arte impecável." },

    // 31-50: Mais Influentes e E-Sports
    { nome: "The Legend of Zelda: Breath of the Wild", desenvolvedor: "Nintendo", genero: "Ação-Aventura", anoLancamento: 2017, preco: 59.99, descricao: "Reinventou o design de mundo aberto com foco na liberdade do jogador." },
    { nome: "Counter-Strike: Global Offensive", desenvolvedor: "Valve", genero: "FPS", anoLancamento: 2012, preco: 0.00, descricao: "O pilar do e-sport de tiro tático, agora free-to-play." },
    { nome: "League of Legends", desenvolvedor: "Riot Games", genero: "MOBA", anoLancamento: 2009, preco: 0.00, descricao: "O MOBA mais popular do mundo e um gigante dos e-sports." },
    { nome: "Dota 2", desenvolvedor: "Valve", genero: "MOBA", anoLancamento: 2013, preco: 0.00, descricao: "Um MOBA complexo com um dos maiores prêmios em e-sports." },
    { nome: "StarCraft: Brood War", desenvolvedor: "Blizzard Entertainment", genero: "Estratégia em Tempo Real", anoLancamento: 1998, preco: 14.99, descricao: "Um e-sport lendário, especialmente na Coreia do Sul." },
    { nome: "Warcraft III: Reign of Chaos", desenvolvedor: "Blizzard Entertainment", genero: "Estratégia em Tempo Real", anoLancamento: 2002, preco: 19.99, descricao: "O jogo base para a criação do gênero MOBA (via mod DotA)." },
    { nome: "Call of Duty 4: Modern Warfare", desenvolvedor: "Infinity Ward", genero: "FPS", anoLancamento: 2007, preco: 19.99, descricao: "Modernizou o FPS militar e estabeleceu o sistema de progressão." },
    { nome: "Halo: Combat Evolved", desenvolvedor: "Bungie", genero: "FPS", anoLancamento: 2001, preco: 19.99, descricao: "O carro-chefe do Xbox e um divisor de águas nos FPS de console." },
    { nome: "Diablo II", desenvolvedor: "Blizzard North", genero: "RPG de Ação", anoLancamento: 2000, preco: 19.99, descricao: "Um ícone dos jogos de 'loot' e dungeon crawlers." },
    { nome: "Tomb Raider (1996)", desenvolvedor: "Core Design", genero: "Ação-Aventura", anoLancamento: 1996, preco: 9.99, descricao: "Introduziu Lara Croft e a exploração 3D." },
    { nome: "Grand Theft Auto III", desenvolvedor: "DMA Design", genero: "Ação-Aventura", anoLancamento: 2001, preco: 9.99, descricao: "Popularizou o conceito de mundo aberto 3D e liberdade de ação." },
    { nome: "Super Metroid", desenvolvedor: "Nintendo", genero: "Ação-Aventura/Plataforma", anoLancamento: 1994, preco: 9.99, descricao: "Um marco em design de níveis não-linear. Base para o gênero 'Metroidvania'." },
    { nome: "Castlevania: Symphony of the Night", desenvolvedor: "Konami", genero: "RPG de Ação/Plataforma", anoLancamento: 1997, preco: 9.99, descricao: "A outra metade da base do gênero 'Metroidvania', focando em exploração e RPG." },
    { nome: "Civilization V", desenvolvedor: "Firaxis Games", genero: "Estratégia 4X", anoLancamento: 2010, preco: 19.99, descricao: "Um dos jogos de estratégia baseada em turnos mais aclamados." },
    { nome: "Age of Empires II: The Age of Kings", desenvolvedor: "Ensemble Studios", genero: "Estratégia em Tempo Real", anoLancamento: 1999, preco: 14.99, descricao: "Considerado o auge dos RTS históricos." },
    { nome: "Left 4 Dead 2", desenvolvedor: "Valve", genero: "FPS Cooperativo", anoLancamento: 2009, preco: 9.99, descricao: "O mestre do co-op de zumbis, com grande rejogabilidade." },
    { nome: "Persona 5", desenvolvedor: "Atlus", genero: "JRPG/Simulador Social", anoLancamento: 2016, preco: 39.99, descricao: "Um JRPG estiloso e aclamado com forte foco na vida escolar." },
    { nome: "Dragon Quest VIII: Journey of the Cursed King", desenvolvedor: "Level-5", genero: "JRPG", anoLancamento: 2004, preco: 19.99, descricao: "O primeiro da série a usar gráficos 3D e a expandir a popularidade ocidental da franquia." },
    { nome: "Kingdom Hearts II", desenvolvedor: "Square Enix", genero: "RPG de Ação", anoLancamento: 2005, preco: 19.99, descricao: "Combina a magia da Disney com o universo de Final Fantasy." },
    { nome: "BioShock Infinite", desenvolvedor: "Irrational Games", genero: "FPS", anoLancamento: 2013, preco: 14.99, descricao: "Aclamado pela ambientação na cidade flutuante de Columbia e por sua complexa narrativa." },

    // 51-70: Indie e Jogos de Lançamento Recente
    { nome: "Elden Ring", desenvolvedor: "FromSoftware", genero: "RPG de Ação", anoLancamento: 2022, preco: 69.99, descricao: "Aclamado por seu mundo aberto épico e a jogabilidade 'Souls-like'." },
    { nome: "Cyberpunk 2077", desenvolvedor: "CD Projekt Red", genero: "RPG de Ação", anoLancamento: 2020, preco: 59.99, descricao: "Um vasto RPG futurista de mundo aberto em Night City." },
    { nome: "Hollow Knight", desenvolvedor: "Team Cherry", genero: "Metroidvania", anoLancamento: 2017, preco: 14.99, descricao: "Um indie aclamado por sua arte e jogabilidade desafiadora." },
    { nome: "Celeste", desenvolvedor: "Maddy Thorson", genero: "Plataforma", anoLancamento: 2018, preco: 19.99, descricao: "Um jogo de plataforma com narrativa emocional e jogabilidade precisa." },
    { nome: "Undertale", desenvolvedor: "Toby Fox", genero: "RPG", anoLancamento: 2015, preco: 9.99, descricao: "Famoso por quebrar a quarta parede e suas escolhas morais complexas." },
    { nome: "Stardew Valley", desenvolvedor: "ConcernedApe", genero: "Simulação/RPG", anoLancamento: 2016, preco: 19.99, descricao: "Um sucesso indie de simulação de fazenda e vida social." },
    { nome: "Shovel Knight", desenvolvedor: "Yacht Club Games", genero: "Plataforma", anoLancamento: 2014, preco: 14.99, descricao: "Um retorno nostálgico e bem executado aos clássicos 8-bits." },
    { nome: "Disco Elysium", desenvolvedor: "ZA/UM", genero: "RPG", anoLancamento: 2019, preco: 39.99, descricao: "Um RPG de detetive focado em narrativa e diálogo." },
    { nome: "Outer Wilds", desenvolvedor: "Mobius Digital", genero: "Ação-Aventura", anoLancamento: 2019, preco: 24.99, descricao: "Um mistério de exploração espacial em loop temporal." },
    { nome: "It Takes Two", desenvolvedor: "Hazelight Studios", genero: "Ação-Aventura Cooperativa", anoLancamento: 2021, preco: 39.99, descricao: "Um jogo obrigatório para co-op, com mecânicas constantemente novas." },
    { nome: "Baldur's Gate 3", desenvolvedor: "Larian Studios", genero: "RPG", anoLancamento: 2023, preco: 69.99, descricao: "Um épico de RPG que resgatou o gênero e as regras de D&D." },
    { nome: "Ghost of Tsushima", desenvolvedor: "Sucker Punch Productions", genero: "Ação-Aventura", anoLancamento: 2020, preco: 49.99, descricao: "Um jogo de mundo aberto ambientado no Japão feudal com combate de samurai." },
    { nome: "Animal Crossing: New Horizons", desenvolvedor: "Nintendo", genero: "Simulação de Vida", anoLancamento: 2020, preco: 59.99, descricao: "Um sucesso de simulação relaxante de vida em uma ilha deserta." },
    { nome: "Gears of War", desenvolvedor: "Epic Games", genero: "Tiro em Terceira Pessoa", anoLancamento: 2006, preco: 9.99, descricao: "Popularizou o sistema de cobertura em jogos de tiro." },
    { nome: "Metroid Prime", desenvolvedor: "Retro Studios", genero: "Ação-Aventura/FPS", anoLancamento: 2002, preco: 19.99, descricao: "Reinventou a série Metroid em 3D, mantendo a exploração característica." },
    { nome: "Bayonetta", desenvolvedor: "PlatinumGames", genero: "Ação Hack and Slash", anoLancamento: 2009, preco: 14.99, descricao: "Um jogo de ação estiloso e frenético, famoso por seu combate." },
    { nome: "Control", desenvolvedor: "Remedy Entertainment", genero: "Ação-Aventura", anoLancamento: 2019, preco: 29.99, descricao: "Aclamado por sua ambientação sobrenatural e poderes de telecinese." },
    { nome: "Sekiro: Shadows Die Twice", desenvolvedor: "FromSoftware", genero: "Ação-Aventura", anoLancamento: 2019, preco: 49.99, descricao: "Um jogo FromSoftware focado em combate tático e postura, ambientado no Japão feudal." },
    { nome: "Horizon Zero Dawn", desenvolvedor: "Guerrilla Games", genero: "RPG de Ação", anoLancamento: 2017, preco: 39.99, descricao: "Um mundo aberto pós-apocalíptico de máquinas gigantes e tribos primitivas." },
    { nome: "Overwatch", desenvolvedor: "Blizzard Entertainment", genero: "Hero Shooter", anoLancamento: 2016, preco: 19.99, descricao: "Um popular hero shooter focado em equipes e objetivos." },

    // 71-100: Clássicos e Outros Gêneros
    { nome: "Pong", desenvolvedor: "Atari", genero: "Esportes (Arcade)", anoLancamento: 1972, preco: 1.00, descricao: "Um dos primeiros videogames de sucesso comercial, simulando tênis de mesa." },
    { nome: "Space Invaders", desenvolvedor: "Taito", genero: "Shoot 'em Up (Arcade)", anoLancamento: 1978, preco: 2.00, descricao: "Estabeleceu o gênero e a necessidade de save de high score." },
    { nome: "Donkey Kong", desenvolvedor: "Nintendo", genero: "Plataforma (Arcade)", anoLancamento: 1981, preco: 3.00, descricao: "Introduziu Mario (originalmente Jumpman) e o gênero plataforma." },
    { nome: "Frogger", desenvolvedor: "Konami", genero: "Arcade", anoLancamento: 1981, preco: 2.00, descricao: "O sapo que precisa atravessar a rua. Clássico do arcade." },
    { nome: "Final Fantasy VI", desenvolvedor: "Square", genero: "JRPG", anoLancamento: 1994, preco: 14.99, descricao: "O auge dos JRPGs 2D no SNES, aclamado por sua história." },
    { nome: "Chrono Cross", desenvolvedor: "Square", genero: "JRPG", anoLancamento: 1999, preco: 14.99, descricao: "A sequência espiritual de Chrono Trigger, com um vasto elenco de personagens." },
    { nome: "Shenmue", desenvolvedor: "SEGA", genero: "Ação-Aventura", anoLancamento: 1999, preco: 9.99, descricao: "Pioneiro em Quick Time Events (QTE) e detalhes de mundo aberto ('FREE' - Full Reactive Eyes Entertainment)." },
    { nome: "Ico", desenvolvedor: "Team Ico", genero: "Ação-Aventura/Puzzle", anoLancamento: 2001, preco: 14.99, descricao: "Um jogo de arte minimalista, com foco na emoção e na parceria." },
    { nome: "Thief: The Dark Project", desenvolvedor: "Looking Glass Studios", genero: "Stealth", anoLancamento: 1998, preco: 9.99, descricao: "Considerado um dos pais do gênero stealth moderno." },
    { nome: "System Shock 2", desenvolvedor: "Irrational Games", genero: "FPS/RPG", anoLancamento: 1999, preco: 9.99, descricao: "Mistura de RPG, FPS e Survival Horror, influenciando muitos jogos modernos." },
    { nome: "Max Payne", desenvolvedor: "Remedy Entertainment", genero: "Tiro em Terceira Pessoa", anoLancamento: 2001, preco: 9.99, descricao: "Popularizou o 'Bullet Time' no gênero de tiro." },
    { nome: "Burnout 3: Takedown", desenvolvedor: "Criterion Games", genero: "Corrida", anoLancamento: 2004, preco: 9.99, descricao: "Aclamado pela jogabilidade agressiva e o modo 'Takedown'." },
    { nome: "Forza Horizon 4", desenvolvedor: "Playground Games", genero: "Corrida de Mundo Aberto", anoLancamento: 2018, preco: 39.99, descricao: "Um dos melhores jogos de corrida de mundo aberto, com estações dinâmicas." },
    { nome: "Mario Kart 8 Deluxe", desenvolvedor: "Nintendo", genero: "Corrida de Kart", anoLancamento: 2017, preco: 59.99, descricao: "Um dos jogos multiplayer mais populares e aclamados." },
    { nome: "Super Smash Bros. Melee", desenvolvedor: "HAL Laboratory", genero: "Luta de Plataforma", anoLancamento: 2001, preco: 29.99, descricao: "Um fenômeno de e-sports e jogo de luta com personagens da Nintendo." },
    { nome: "FIFA 23", desenvolvedor: "EA Sports", genero: "Esportes (Futebol)", anoLancamento: 2022, preco: 69.99, descricao: "A edição final da famosa série FIFA da EA, antes da mudança de nome." },
    { nome: "NBA 2K24", desenvolvedor: "Visual Concepts", genero: "Esportes (Basquete)", anoLancamento: 2023, preco: 69.99, descricao: "O principal simulador de basquete, focado no MyCareer e MyTeam." },
    { nome: "Rocket League", desenvolvedor: "Psyonix", genero: "Esportes/Veículos", anoLancamento: 2015, preco: 0.00, descricao: "Futebol com carros a jato. Um sucesso multiplayer." },
    { nome: "Fortnite", desenvolvedor: "Epic Games", genero: "Battle Royale/Construção", anoLancamento: 2017, preco: 0.00, descricao: "O fenômeno do Battle Royale e da cultura pop." },
    { nome: "PUBG: Battlegrounds", desenvolvedor: "PUBG Studios", genero: "Battle Royale", anoLancamento: 2017, preco: 29.99, descricao: "O jogo que popularizou o gênero Battle Royale em escala global." },
    { nome: "Garry's Mod", desenvolvedor: "Facepunch Studios", genero: "Sandbox", anoLancamento: 2006, preco: 9.99, descricao: "Um playground de física na Source Engine, famoso por seus modos e criatividade." },
    { nome: "Terraria", desenvolvedor: "Re-Logic", genero: "Ação-Aventura/Sandbox", anoLancamento: 2011, preco: 9.99, descricao: "Um 'Minecraft 2D' com foco maior em combate e exploração." },
    { nome: "No Man's Sky", desenvolvedor: "Hello Games", genero: "Exploração Espacial", anoLancamento: 2016, preco: 29.99, descricao: "Famoso por sua redenção após um lançamento controverso e seu universo gerado proceduralmente." },
    { nome: "Kerbal Space Program", desenvolvedor: "Squad", genero: "Simulação Espacial", anoLancamento: 2015, preco: 29.99, descricao: "Um simulador de voo espacial realista e desafiador." },
    { nome: "SimCity 2000", desenvolvedor: "Maxis", genero: "Construção de Cidade", anoLancamento: 1993, preco: 9.99, descricao: "Um clássico da construção e gestão de cidades." },
    { nome: "Planescape: Torment", desenvolvedor: "Black Isle Studios", genero: "RPG", anoLancamento: 1999, preco: 9.99, descricao: "Um RPG aclamado por sua história e foco na filosofia e imortalidade." },
    { nome: "Star Wars: Knights of the Old Republic", desenvolvedor: "BioWare", genero: "RPG", anoLancamento: 2003, preco: 14.99, descricao: "Um RPG aclamado de Star Wars com um sistema de escolhas morais icônico." },
    { nome: "XCOM 2", desenvolvedor: "Firaxis Games", genero: "Estratégia Tática", anoLancamento: 2016, preco: 19.99, descricao: "Estratégia tática baseada em turnos, famosa por sua dificuldade e permadeath." },
    { nome: "Danganronpa: Trigger Happy Havoc", desenvolvedor: "Spike Chunsoft", genero: "Visual Novel/Aventura", anoLancamento: 2010, preco: 19.99, descricao: "Uma aclamada Visual Novel com elementos de mistério e julgamentos." },
    { nome: "Phoenix Wright: Ace Attorney", desenvolvedor: "Capcom", genero: "Visual Novel/Aventura", anoLancamento: 2001, preco: 9.99, descricao: "O clássico do tribunal que popularizou o gênero no Ocidente." }
];

// O seed original tinha 100 jogos, este tem 80, vou completar com mais 20
const fillerGames = [
    { nome: "Doom Eternal", desenvolvedor: "id Software", genero: "FPS", anoLancamento: 2020, preco: 39.99, descricao: "A sequência rápida e brutal do reboot de Doom." },
    { nome: "Ori and the Will of the Wisps", desenvolvedor: "Moon Studios", genero: "Metroidvania", anoLancamento: 2020, preco: 29.99, descricao: "Um metroidvania visualmente deslumbrante e emocional." },
    { nome: "Forza Horizon 5", desenvolvedor: "Playground Games", genero: "Corrida de Mundo Aberto", anoLancamento: 2021, preco: 59.99, descricao: "A mais nova entrada na aclamada série Horizon, ambientada no México." },
    { nome: "Call of Duty: Warzone", desenvolvedor: "Infinity Ward, Raven Software", genero: "Battle Royale/FPS", anoLancamento: 2020, preco: 0.00, descricao: "O popular Battle Royale dentro da franquia Call of Duty." },
    { nome: "The Legend of Zelda: Tears of the Kingdom", desenvolvedor: "Nintendo", genero: "Ação-Aventura", anoLancamento: 2023, preco: 69.99, descricao: "A sequência direta de Breath of the Wild, com foco na construção e exploração aérea." },
    { nome: "Death Stranding", desenvolvedor: "Kojima Productions", genero: "Ação-Aventura", anoLancamento: 2019, preco: 39.99, descricao: "O primeiro jogo de Hideo Kojima após a saída da Konami, focado em conectar pessoas." },
    { nome: "Ratchet & Clank: Rift Apart", desenvolvedor: "Insomniac Games", genero: "Plataforma/Tiro", anoLancamento: 2021, preco: 49.99, descricao: "Um show de tecnologia com transições instantâneas entre dimensões." },
    { nome: "Spider-Man: Miles Morales", desenvolvedor: "Insomniac Games", genero: "Ação-Aventura", anoLancamento: 2020, preco: 39.99, descricao: "Expansão standalone do aclamado Spider-Man, focada em Miles Morales." },
    { nome: "Resident Evil 7: Biohazard", desenvolvedor: "Capcom", genero: "Survival Horror", anoLancamento: 2017, preco: 29.99, descricao: "Reboot da série, com câmera em primeira pessoa e foco no terror de sobrevivência." },
    { nome: "Devil May Cry 5", desenvolvedor: "Capcom", genero: "Ação Hack and Slash", anoLancamento: 2019, preco: 29.99, descricao: "O retorno triunfal da série, aclamado por seu combate estiloso." },
    { nome: "Fire Emblem: Three Houses", desenvolvedor: "Intelligent Systems", genero: "RPG Tático", anoLancamento: 2019, preco: 49.99, descricao: "Um aclamado RPG tático com forte foco em gerenciamento de tempo e relações sociais." },
    { nome: "Bayonetta 2", desenvolvedor: "PlatinumGames", genero: "Ação Hack and Slash", anoLancamento: 2014, preco: 39.99, descricao: "Considerado uma obra-prima do combate de ação." },
    { nome: "Dragon Age: Origins", desenvolvedor: "BioWare", genero: "RPG", anoLancamento: 2009, preco: 14.99, descricao: "O sucessor espiritual dos clássicos RPGs de fantasia da BioWare." },
    { nome: "Borderlands 2", desenvolvedor: "Gearbox Software", genero: "Looter Shooter/RPG", anoLancamento: 2012, preco: 19.99, descricao: "Um looter shooter com gráficos cell-shaded e humor ácido." },
    { nome: "The Stanley Parable", desenvolvedor: "Galactic Cafe", genero: "Aventura Narrativa", anoLancamento: 2013, preco: 9.99, descricao: "Um jogo de escolhas narrativas com um narrador onipresente." },
    { nome: "What Remains of Edith Finch", desenvolvedor: "Giant Sparrow", genero: "Aventura Narrativa", anoLancamento: 2017, preco: 19.99, descricao: "Uma emocionante coleção de contos sobre uma família amaldiçoada." },
    { nome: "Subnautica", desenvolvedor: "Unknown Worlds Entertainment", genero: "Sobrevivência", anoLancamento: 2018, preco: 24.99, descricao: "Um jogo de sobrevivência em um mundo oceânico alienígena." },
    { nome: "Factorio", desenvolvedor: "Wube Software", genero: "Simulação/Estratégia", anoLancamento: 2020, preco: 34.99, descricao: "Um jogo de construção de fábricas altamente viciante e complexo." },
    { nome: "Cities: Skylines", desenvolvedor: "Colossal Order", genero: "Construção de Cidade", anoLancamento: 2015, preco: 19.99, descricao: "O sucessor espiritual do SimCity para a construção moderna de cidades." },
    { nome: "Slay the Spire", desenvolvedor: "MegaCrit", genero: "Roguelike/Card Game", anoLancamento: 2019, preco: 19.99, descricao: "O jogo que popularizou o gênero Roguelike Deck-Builder." },
];

// Combina as listas para garantir 100 jogos (80 + 20)
const gamesToSeed = [...famousGames, ...fillerGames];

async function main() {
    console.log('Iniciando o seed com 100 jogos famosos...');

    // Opcional: Limpar a tabela antes de popular (descomente se necessário)
    // await prisma.jogo.deleteMany();
    // console.log('Registros existentes de Jogo deletados.');

    // Inserir todos os 100 registros de uma vez
    const { count } = await prisma.jogo.createMany({
        data: gamesToSeed.map(jogo => ({
            nome: jogo.nome,
            desenvolvedor: jogo.desenvolvedor,
            genero: jogo.genero,
            anoLancamento: jogo.anoLancamento,
            // Certifica-se de que o preço está formatado para Decimal do Prisma (ex: '49.99')
            preco: jogo.preco.toFixed(2).toString(), 
            descricao: jogo.descricao.substring(0, 500) // Limita a descrição, caso seu campo seja pequeno
        })),
        skipDuplicates: true,
    });

    console.log(`Seed concluído. ${count} jogos criados/verificados.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });