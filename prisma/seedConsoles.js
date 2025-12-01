const consolesDataExpandida = [
    {
        nome: "Nintendo Entertainment System (NES)",
        fabricante: "Nintendo",
        geracao: "3ª Geração",
        nota: 9.20,
        anoLancamento: 1985,
        preco: 650.00,
        descricao: "Revitalizou o mercado de videogames na Terceira Geração (Nintendinho).",
        imagens: ["https://cdn.awsli.com.br/600x1000/53/53761/produto/174950759/0de4eaa599.jpg"]
    },
    {
        nome: "Game Boy",
        fabricante: "Nintendo",
        geracao: "4ª Geração",
        nota: 9.50,
        anoLancamento: 1989,
        preco: 400.00,
        descricao: "O console portátil que definiu a indústria, graças ao Tetris.",
        imagens: ["https://cdn.awsli.com.br/800x800/17/17021/produto/37233930/e8eb32c4e5.jpg"]
    },
    {
        nome: "Super Nintendo (SNES)",
        fabricante: "Nintendo",
        geracao: "4ª Geração",
        nota: 9.50,
        anoLancamento: 1991,
        preco: 850.00,
        descricao: "Console de 16-bits, líder da Quarta Geração no Brasil e América.",
        imagens: ["https://i.pinimg.com/736x/dd/fd/30/ddfd309f7a09992accd513e3f73cb9dc.jpg"]
    },
    {
        nome: "Virtual Boy",
        fabricante: "Nintendo",
        geracao: "5ª Geração",
        nota: 3.00,
        anoLancamento: 1995,
        preco: 100.00,
        descricao: "Primeira tentativa de console de realidade virtual da Nintendo (fracasso comercial).",
        imagens: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMiOW9m6b7AywyFC-UKbpq3Yf0Oe278FLhA&s"]
    },
    {
        nome: "Nintendo 64 (N64)",
        fabricante: "Nintendo",
        geracao: "5ª Geração",
        nota: 8.70,
        anoLancamento: 1996,
        preco: 1100.00,
        descricao: "Consagrou os gráficos 3D e o uso do stick analógico.",
        imagens: ["https://http2.mlstatic.com/D_NQ_NP_865723-MLB81558925114_012025-O.webp"]
    },
    {
        nome: "Game Boy Color",
        fabricante: "Nintendo",
        geracao: "5ª Geração",
        nota: 8.00,
        anoLancamento: 1998,
        preco: 300.00,
        descricao: "Primeira versão colorida do portátil Game Boy.",
        imagens: ["https://http2.mlstatic.com/D_NQ_NP_950482-MLB52371312667_112022-O.webp"]
    },
    {
        nome: "Nintendo GameCube",
        fabricante: "Nintendo",
        geracao: "6ª Geração",
        nota: 8.50,
        anoLancamento: 2001,
        preco: 1300.00,
        descricao: "Console da Sexta Geração, focado em jogos exclusivos de alta qualidade.",
        imagens: ["https://http2.mlstatic.com/D_NQ_NP_680221-MLB77120677639_062024-O.webp"]
    },
    {
        nome: "Game Boy Advance (GBA)",
        fabricante: "Nintendo",
        geracao: "6ª Geração",
        nota: 9.00,
        anoLancamento: 2001,
        preco: 400.00,
        descricao: "Portátil de 32-bits que trouxe qualidade de SNES para o formato móvel.",
        imagens: ["https://cdn.awsli.com.br/2500x2500/17/17021/produto/37233862/58ac1fb316.jpg"]
    },
    {
        nome: "Nintendo DS",
        fabricante: "Nintendo",
        geracao: "7ª Geração",
        nota: 9.40,
        anoLancamento: 2004,
        preco: 700.00,
        descricao: "Portátil com tela dupla e touchscreen, sucesso estrondoso.",
        imagens: ["https://i.pinimg.com/1200x/54/53/57/545357ff2723c63f8c2adc4b519a1f62.jpg"]
    },
    {
        nome: "Wii",
        fabricante: "Nintendo",
        geracao: "7ª Geração",
        nota: 8.20,
        anoLancamento: 2006,
        preco: 1500.00,
        descricao: "Inovou com controle de movimento (Wii Remote), atraindo público casual.",
        imagens: ["https://images.tcdn.com.br/img/img_prod/615179/nintendo_wii_branco_caixa_original_usado_3889_1_28ba594f9bd4647aded8e78d7da1a74a.jpg"]
    },
    {
        nome: "Nintendo 3DS (Família)",
        fabricante: "Nintendo",
        geracao: "8ª Geração",
        nota: 8.50,
        anoLancamento: 2011,
        preco: 900.00,
        descricao: "Portátil com tela 3D estereoscópica sem a necessidade de óculos.",
        imagens: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVbmQIb6NNFNVS3fyaO8zQla6NA51yPEEDQQ&s"]
    },
    {
        nome: "Wii U",
        fabricante: "Nintendo",
        geracao: "8ª Geração",
        nota: 6.50,
        anoLancamento: 2012,
        preco: 1200.00,
        descricao: "Console da Oitava Geração, com um controle com tela (Gamepad).",
        imagens: ["https://m.media-amazon.com/images/I/51c27gmD8jL.jpg"]
    },
    {
        nome: "Nintendo Switch (Família)",
        fabricante: "Nintendo",
        geracao: "9ª Geração",
        nota: 9.30,
        anoLancamento: 2017,
        preco: 2800.00,
        descricao: "Console híbrido (portátil e de mesa) de grande sucesso atual.",
        imagens: ["https://images.kabum.com.br/produtos/fotos/sync_mirakl/690409/xlarge/Console-Nintendo-Switch-32gb-Standard-Preto-Cinza_1742855432.png"]
    },

    /* --- SONY --- */

    {
        nome: "PlayStation (PS1)",
        fabricante: "Sony",
        geracao: "5ª Geração",
        nota: 9.60,
        anoLancamento: 1995,
        preco: 1200.00,
        descricao: "Primeiro console da Sony, popularizou os jogos em CD.",
        imagens: ["https://stargamesparaguay.com/wp-content/uploads/2021/06/CONSOLE-PLAYSTATION-1-PSONE-CLASSIC-MINI-1.jpg"]
    },
    {
        nome: "PlayStation 2 (PS2)",
        fabricante: "Sony",
        geracao: "6ª Geração",
        nota: 9.80,
        anoLancamento: 2000,
        preco: 1500.00,
        descricao: "O console mais vendido da história, compatível com DVD.",
        imagens: ["https://http2.mlstatic.com/D_762395-MLB75210377895_032024-C.jpg"]
    },
    {
        nome: "PlayStation Portable (PSP)",
        fabricante: "Sony",
        geracao: "7ª Geração",
        nota: 8.50,
        anoLancamento: 2004,
        preco: 700.00,
        descricao: "Portátil da Sony, com foco em mídia e jogos com qualidade de PS2.",
        imagens: ["https://pt.static.webuy.com/product_images/Jogos/PSP%20Consolas/SPSP3000A_l.jpg"]
    },
    {
        nome: "PlayStation 3 (PS3)",
        fabricante: "Sony",
        geracao: "7ª Geração",
        nota: 8.60,
        anoLancamento: 2006,
        preco: 1800.00,
        descricao: "Console da Sétima Geração com leitor Blu-ray.",
        imagens: ["https://stargamesparaguay.com/wp-content/uploads/2021/06/71ANin97l9L._SX600_-e1539275570600.jpg"]
    },
    {
        nome: "PlayStation Vita (PS Vita)",
        fabricante: "Sony",
        geracao: "8ª Geração",
        nota: 7.50,
        anoLancamento: 2011,
        preco: 900.00,
        descricao: "Portátil da Sony, sucessor do PSP.",
        imagens: ["https://http2.mlstatic.com/D_NQ_NP_14792-MLB20090295219_052014-O.webp"]
    },
    {
        nome: "PlayStation 4 (PS4)",
        fabricante: "Sony",
        geracao: "8ª Geração",
        nota: 9.40,
        anoLancamento: 2013,
        preco: 2500.00,
        descricao: "Oito geração, forte foco em jogos AAA e comunidade online.",
        imagens: ["https://acdn-us.mitiendanube.com/stores/004/334/292/products/500gb-normal-405d2c4d8ebbd462e617116512535397-1024-1024.webp"]
    },
    {
        nome: "PlayStation VR (PS VR)",
        fabricante: "Sony",
        geracao: "8ª Geração",
        nota: 8.00,
        anoLancamento: 2016,
        preco: 1900.00,
        descricao: "Acessório de Realidade Virtual lançado para o PlayStation 4. Popularizou a VR nos consoles.",
        imagens: ["https://cdn.awsli.com.br/2500x2500/53/53761/produto/45286550/a41b93604a.jpg"]
    },
    {
        nome: "PlayStation 5 (PS5)",
        fabricante: "Sony",
        geracao: "9ª Geração",
        nota: 9.70,
        anoLancamento: 2020,
        preco: 4999.00,
        descricao: "Nona Geração, com carregamento SSD ultrarrápido e controle DualSense.",
        imagens: ["https://stargamesparaguay.com/wp-content/uploads/2021/06/CX-PS5.jpg"]
    },
    {
        nome: "PlayStation VR2 (PS VR2)",
        fabricante: "Sony",
        geracao: "9ª Geração",
        nota: 9.00,
        anoLancamento: 2023,
        preco: 3500.00,
        descricao: "A segunda geração do sistema de Realidade Virtual da Sony, exclusivo para o PlayStation 5.",
        imagens: ["https://m.media-amazon.com/images/I/61KecCIiU3L.jpg"]
    },

    /* --- MICROSOFT --- */

    {
        nome: "Xbox (Original)",
        fabricante: "Microsoft",
        geracao: "6ª Geração",
        nota: 8.90,
        anoLancamento: 2001,
        preco: 1400.00,
        descricao: "Primeiro console da Microsoft, introduziu o Xbox Live e tinha um hardware potente.",
        imagens: ["https://http2.mlstatic.com/D_NQ_NP_873098-MLB77187990052_072024-O.webp"]
    },
    {
        nome: "Xbox 360",
        fabricante: "Microsoft",
        geracao: "7ª Geração",
        nota: 9.00,
        anoLancamento: 2005,
        preco: 1700.00,
        descricao: "Sucesso da Sétima Geração, notável pelo serviço Xbox Live.",
        imagens: ["https://cdn.awsli.com.br/600x700/17/17021/produto/59776844/22b1dfb527.jpg"]
    },
    {
        nome: "Xbox One",
        fabricante: "Microsoft",
        geracao: "8ª Geração",
        nota: 8.70,
        anoLancamento: 2013,
        preco: 2400.00,
        descricao: "Console da Oitava Geração, focado em ser um centro de entretenimento.",
        imagens: ["https://stargamesparaguay.com/wp-content/uploads/2021/06/61x26DNGgAL._SL1200_.jpg"]
    },
    {
        nome: "Xbox Series X",
        fabricante: "Microsoft",
        geracao: "9ª Geração",
        nota: 9.60,
        anoLancamento: 2020,
        preco: 4599.00,
        descricao: "O console mais poderoso da Nona Geração, focado em 4K e serviço Xbox Game Pass.",
        imagens: ["https://m.media-amazon.com/images/I/71jrlQ2m7BS._AC_UF350,350_QL50_.jpg"]
    },
    {
        nome: "Xbox Series S",
        fabricante: "Microsoft",
        geracao: "9ª Geração",
        nota: 9.00,
        anoLancamento: 2020,
        preco: 2800.00,
        descricao: "Modelo de entrada da Nona Geração, totalmente digital e menor que o Series X.",
        imagens: ["https://www.adrenaline.com.br/wp-content/uploads/2023/03/xbox-series-s-caixa.jpg"]
    },

    /* --- STEAM/VALVE --- */

    {
        nome: "Steam (Plataforma Digital)",
        fabricante: "Steam",
        geracao: "7ª Geração",
        nota: 9.90,
        anoLancamento: 2003,
        preco: 0.00,
        descricao: "A maior plataforma de distribuição digital de jogos para PC. (Representa o ecossistema Steam/PC Gaming)",
        imagens: ["https://i.pinimg.com/736x/37/1f/3a/371f3a9ab78f4a28c1f803b817ae8081.jpg"]
    },
    {
        nome: "Steam Machine",
        fabricante: "Steam",
        geracao: "8ª Geração",
        nota: 6.50,
        anoLancamento: 2015,
        preco: 3000.00,
        descricao: "Tentativa da Valve de lançar PCs pré-configurados para a sala de estar, rodando o SteamOS.",
        imagens: ["https://files.tecnoblog.net/wp-content/uploads/2016/06/steam_machine_alienware-1060x596.jpg"]
    },
    {
        nome: "Steam Deck (Portátil)",
        fabricante: "Steam",
        geracao: "9ª Geração",
        nota: 9.00,
        anoLancamento: 2022,
        preco: 4200.00,
        descricao: "PC portátil da Valve, sucesso em levar a biblioteca Steam para a mobilidade.",
        imagens: ["https://a-static.mlcdn.com.br/800x800/steam-deck-64gb-jogos-portateis-de-alta-qualidade-valve/olistplus/o2es0d4gqtwkost3/4dc89293e99ea1569601f936736e27fd.jpeg"]
    }
];


export async function seedConsoles(prisma) {
    console.log(`\n🌎 Iniciando o seed de consoles com ${consolesDataExpandida.length} itens (valores em reais)...`);

    const dataToInsert = consolesDataExpandida.map((console) => ({
        ...console,
        nota: String(console.nota),
        preco: String(console.preco),
        descricao: console.descricao.substring(0, 500),
    }));

    const { count } = await prisma.console.createMany({
        data: dataToInsert,
        skipDuplicates: true,
    });

    console.log(`\n✅ Sucesso! Total de ${count} consoles criados/verificados na tabela 'console'.`);
    return count;
}
