// prisma/seedConsoles.js (Script de Consoles refatorado para createMany)
// NOTA: Os imports de PrismaClient e a instanciação de 'prisma' foram movidos
// para o arquivo mestre para que você passe o cliente Prisma como argumento.
// No entanto, para ser um arquivo autônomo, mantenho-os. Se você for usar um arquivo mestre, 
// a melhor prática é receber 'prisma' como parâmetro na função.

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


const consolesDataExpandida = [
    // === ARCADE/FLIPERAMA ===
    {
        nome: "Pong (Gabinete Arcade)",
        nota: 9.00,
        anoLancamento: 1972,
        preco: 1000.00,
        descricao: "O marco zero dos videogames, popularizou a indústria em fliperamas (Arcade/Fliperama).",
    },

    // === ATARI ===
    {
        nome: "Atari Home Pong (Console)",
        nota: 7.00,
        anoLancamento: 1975,
        preco: 200.00,
        descricao: "Versão doméstica do Pong.",
    },
    {
        nome: "Atari 2600 (VCS)",
        nota: 8.80,
        anoLancamento: 1977,
        preco: 499.90,
        descricao: "O console que popularizou o videogame na Segunda Geração. Lançado oficialmente no Brasil em 1983 pela Polyvox/Gradiente.",
    },
    {
        nome: "Atari 5200",
        nota: 6.00,
        anoLancamento: 1982,
        preco: 300.00,
        descricao: "Sucessor do 2600, mas com problemas de controle e retrocompatibilidade limitada.",
    },
    {
        nome: "Atari 7800",
        nota: 7.20,
        anoLancamento: 1986,
        preco: 350.00,
        descricao: "Lançado para competir com o NES e Master System, com retrocompatibilidade com o 2600.",
    },
    {
        nome: "Atari Lynx",
        nota: 7.50,
        anoLancamento: 1989,
        preco: 450.00,
        descricao: "Console portátil com tela colorida, concorrente do Game Boy.",
    },
    {
        nome: "Atari Jaguar",
        nota: 5.50,
        anoLancamento: 1993,
        preco: 600.00,
        descricao: "O último console da Atari, promovido como 64-bit.",
    },

    // === MSX / TELEJOGO (Contexto Brasil) ===
    {
        nome: "Telejogo (Philco/Ford)",
        nota: 7.50,
        anoLancamento: 1977,
        preco: 250.00,
        descricao: "Um dos primeiros consoles domésticos vendidos oficialmente no Brasil.",
    },
    {
        nome: "MSX (Padrão)",
        nota: 7.00,
        anoLancamento: 1983,
        preco: 750.00,
        descricao: "Padrão de computador doméstico (Micro Soft e ASCII) popular para jogos no Brasil e Japão.",
    },

    // === SEGA ===
    {
        nome: "Master System",
        nota: 8.50,
        anoLancamento: 1986,
        preco: 580.00,
        descricao: "Console de 8-bits, enorme sucesso no Brasil pela Tectoy.",
    },
    {
        nome: "Mega Drive / Genesis",
        nota: 9.10,
        anoLancamento: 1989,
        preco: 799.90,
        descricao: "O console de 16-bits da SEGA, principal rival do SNES.",
    },
    {
        nome: "Sega Game Gear",
        nota: 6.90,
        anoLancamento: 1991,
        preco: 350.00,
        descricao: "Console portátil da SEGA com tela colorida e forte consumo de bateria.",
    },
    {
        nome: "Sega CD (Acessório)",
        nota: 6.50,
        anoLancamento: 1992,
        preco: 500.00,
        descricao: "Acessório para o Mega Drive que introduziu o formato CD e vídeos interativos.",
    },
    {
        nome: "Sega 32X (Acessório)",
        nota: 4.00,
        anoLancamento: 1994,
        preco: 150.00,
        descricao: "Módulo de 32-bits para o Mega Drive, lançado no final da vida útil do console.",
    },
    {
        nome: "Sega Saturn",
        nota: 7.90,
        anoLancamento: 1995,
        preco: 1050.00,
        descricao: "Console de 32-bits, popular por conversões de arcade e jogos japoneses.",
    },
    {
        nome: "Sega Dreamcast",
        nota: 8.00,
        anoLancamento: 1999,
        preco: 1200.00,
        descricao: "O último console da SEGA, pioneiro em jogos online.",
    },

    // === NINTENDO (Mesa e Portáteis) ===
    {
        nome: "Color TV-Game (Série)",
        nota: 6.50,
        anoLancamento: 1977,
        preco: 100.00,
        descricao: "Série de consoles de primeira geração da Nintendo.",
    },
    {
        nome: "Game & Watch (Série)",
        nota: 7.50,
        anoLancamento: 1980,
        preco: 150.00,
        descricao: "Série de jogos portáteis que estabeleceu o formato de tela dupla.",
    },
    {
        nome: "Nintendo Entertainment System (NES)",
        nota: 9.20,
        anoLancamento: 1985,
        preco: 650.00,
        descricao: "Revitalizou o mercado de videogames na Terceira Geração (Nintendinho).",
    },
    {
        nome: "Game Boy",
        nota: 9.50,
        anoLancamento: 1989,
        preco: 400.00,
        descricao: "O console portátil que definiu a indústria, graças ao Tetris.",
    },
    {
        nome: "Super Nintendo (SNES)",
        nota: 9.50,
        anoLancamento: 1991,
        preco: 850.00,
        descricao: "Console de 16-bits, líder da Quarta Geração no Brasil e América.",
    },
    {
        nome: "Virtual Boy",
        nota: 3.00,
        anoLancamento: 1995,
        preco: 100.00,
        descricao: "Primeira tentativa de console de realidade virtual da Nintendo (fracasso comercial).",
    },
    {
        nome: "Nintendo 64 (N64)",
        nota: 8.70,
        anoLancamento: 1996,
        preco: 1100.00,
        descricao: "Consagrou os gráficos 3D e o uso do stick analógico.",
    },
    {
        nome: "Game Boy Color",
        nota: 8.00,
        anoLancamento: 1998,
        preco: 300.00,
        descricao: "Primeira versão colorida do portátil Game Boy.",
    },
    {
        nome: "Nintendo GameCube",
        nota: 8.50,
        anoLancamento: 2001,
        preco: 1300.00,
        descricao: "Console da Sexta Geração, focado em jogos exclusivos de alta qualidade.",
    },
    {
        nome: "Game Boy Advance (GBA)",
        nota: 9.00,
        anoLancamento: 2001,
        preco: 400.00,
        descricao: "Portátil de 32-bits que trouxe qualidade de SNES para o formato móvel.",
    },
    {
        nome: "Nintendo DS",
        nota: 9.40,
        anoLancamento: 2004,
        preco: 700.00,
        descricao: "Portátil com tela dupla e touchscreen, sucesso estrondoso.",
    },
    {
        nome: "Wii",
        nota: 8.20,
        anoLancamento: 2006,
        preco: 1500.00,
        descricao: "Inovou com controle de movimento (Wii Remote), atraindo público casual.",
    },
    {
        nome: "Nintendo 3DS (Família)",
        nota: 8.50,
        anoLancamento: 2011,
        preco: 900.00,
        descricao: "Portátil com tela 3D estereoscópica sem a necessidade de óculos.",
    },
    {
        nome: "Wii U",
        nota: 6.50,
        anoLancamento: 2012,
        preco: 1200.00,
        descricao: "Console da Oitava Geração, com um controle com tela (Gamepad).",
    },
    {
        nome: "Nintendo Switch (Família)",
        nota: 9.30,
        anoLancamento: 2017,
        preco: 2800.00,
        descricao: "Console híbrido (portátil e de mesa) de grande sucesso atual.",
    },

    // === PLAYSTATION (Sony) ===
    {
        nome: "PlayStation (PS1)",
        nota: 9.60,
        anoLancamento: 1995,
        preco: 1200.00,
        descricao: "Primeiro console da Sony, popularizou os jogos em CD.",
    },
    {
        nome: "PlayStation 2 (PS2)",
        nota: 9.80,
        anoLancamento: 2000,
        preco: 1500.00,
        descricao: "O console mais vendido da história, compatível com DVD.",
    },
    {
        nome: "PlayStation Portable (PSP)",
        nota: 8.50,
        anoLancamento: 2004,
        preco: 700.00,
        descricao: "Portátil da Sony, com foco em mídia e jogos com qualidade de PS2.",
    },
    {
        nome: "PlayStation 3 (PS3)",
        nota: 8.60,
        anoLancamento: 2006,
        preco: 1800.00,
        descricao: "Console da Sétima Geração com leitor Blu-ray.",
    },
    {
        nome: "PlayStation Vita (PS Vita)",
        nota: 7.50,
        anoLancamento: 2011,
        preco: 900.00,
        descricao: "Portátil da Sony, sucessor do PSP.",
    },
    {
        nome: "PlayStation 4 (PS4)",
        nota: 9.40,
        anoLancamento: 2013,
        preco: 2500.00,
        descricao: "Oito geração, forte foco em jogos AAA e comunidade online.",
    },
    {
        nome: "PlayStation VR (PS VR)",
        nota: 8.00,
        anoLancamento: 2016,
        preco: 1900.00,
        descricao: "Acessório de Realidade Virtual lançado para o PlayStation 4. Popularizou a VR nos consoles.",
    },
    {
        nome: "PlayStation 5 (PS5)",
        nota: 9.70,
        anoLancamento: 2020,
        preco: 4999.00,
        descricao: "Nona Geração, com carregamento SSD ultrarrápido e controle DualSense.",
    },
    {
        nome: "PlayStation VR2 (PS VR2)",
        nota: 9.00,
        anoLancamento: 2023,
        preco: 3500.00,
        descricao: "A segunda geração do sistema de Realidade Virtual da Sony, exclusivo para o PlayStation 5.",
    },

    // === XBOX (Microsoft) ===
    {
        nome: "Xbox (Original)",
        nota: 8.90,
        anoLancamento: 2001,
        preco: 1400.00,
        descricao: "Primeiro console da Microsoft, introduziu o Xbox Live e tinha um hardware potente.",
    },
    {
        nome: "Xbox 360",
        nota: 9.00,
        anoLancamento: 2005,
        preco: 1700.00,
        descricao: "Sucesso da Sétima Geração, notável pelo serviço Xbox Live.",
    },
    {
        nome: "Xbox One",
        nota: 8.70,
        anoLancamento: 2013,
        preco: 2400.00,
        descricao: "Console da Oitava Geração, focado em ser um centro de entretenimento.",
    },
    {
        nome: "Xbox Series X",
        nota: 9.60,
        anoLancamento: 2020,
        preco: 4599.00,
        descricao: "O console mais poderoso da Nona Geração, focado em 4K e serviço Xbox Game Pass.",
    },
    {
        nome: "Xbox Series S",
        nota: 9.00,
        anoLancamento: 2020,
        preco: 2800.00,
        descricao: "Modelo de entrada da Nona Geração, totalmente digital e menor que o Series X.",
    },

    // === STEAM (Plataforma/Hardware) ===
    {
        nome: "Steam (Plataforma Digital)",
        nota: 9.90,
        anoLancamento: 2003,
        preco: 0.00,
        descricao: "A maior plataforma de distribuição digital de jogos para PC. (Representa o ecossistema Steam/PC Gaming)",
    },
    {
        nome: "Steam Machine (Plataforma)",
        nota: 6.50,
        anoLancamento: 2015,
        preco: 3000.00,
        descricao: "Tentativa da Valve de lançar PCs pré-configurados para a sala de estar, rodando o SteamOS.",
    },
    {
        nome: "Steam Deck (Portátil)",
        nota: 9.00,
        anoLancamento: 2022,
        preco: 4200.00,
        descricao: "PC portátil da Valve, sucesso em levar a biblioteca Steam para a mobilidade.",
    },
];

/**
 * Função de seeding para Consoles. 
 * É exportada para ser chamada por um script mestre.
 * @param {PrismaClient} prisma - A instância do cliente Prisma.
 * @returns {number} O número de registros criados.
 */
export async function seedConsoles(prisma) {
    console.log(`\n🌎 Iniciando o seed de consoles com ${consolesDataExpandida.length} itens (valores em reais)...`);

    // Mapeia os dados, convertendo nota e preco para String
    const dataToInsert = consolesDataExpandida.map((console) => ({
        ...console,
        nota: String(console.nota), // Garante que é tratado como string para Decimal
        preco: String(console.preco), // Garante que é tratado como string para Decimal
        descricao: console.descricao.substring(0, 500), // Garante o limite do campo
    }));

    // Inserção em lote (createMany)
    const { count } = await prisma.console.createMany({
        data: dataToInsert,
        skipDuplicates: true, // Ignora se o console já existir
    });

    console.log(`\n✅ Sucesso! Total de ${count} consoles criados/verificados na tabela 'console'.`);
    return count;
}


// A função 'main()' e o bloco .catch().finally() foram removidos daqui.
// Se você quiser executar este arquivo isoladamente (sem um mestre), descomente o bloco abaixo.
/*
async function main() {
    await seedConsoles(prisma);
}

main()
    .catch((e) => {
        console.error("❌ ERRO ao rodar o seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
*/