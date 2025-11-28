const avaliacoesOriginais = [
    { usuario: "rogergames2000", comentario: "Excelente serviço, recomendo muito!", nota: 9.5 },
    { usuario: "spiderghost7", comentario: "Atendimento rápido e eficiente.", nota: 8.7 },
    { usuario: "notasQuentes", comentario: "Muito bom, voltarei a usar!", nota: 9.2 },
    { usuario: "peakReviews", comentario: "Poderia ser melhor em alguns aspectos.", nota: 7.1 },
    { usuario: "cordasantigas47", comentario: "Experiência satisfatória.", nota: 8.0 },
    { usuario: "nerdtopico", comentario: "Não gostei muito, esperava mais.", nota: 6.3 },
    { usuario: "furymaster", comentario: "Simplesmente perfeito!", nota: 10.0 },
    { usuario: "palmeirasmeuamor", comentario: "Ótimo custo-benefício.", nota: 9.0 },
    { usuario: "mengaomaiordobrasil", comentario: "Funcionou bem, sem problemas.", nota: 8.4 },
    { usuario: "corinthianonaoverde", comentario: "Atendimento deixou a desejar.", nota: 5.9 },
    { usuario: "ichigokurosaki33", comentario: "Muito intuitivo de usar.", nota: 8.8 },
    { usuario: "fairytail", comentario: "Fiquei impressionado com a qualidade.", nota: 9.6 },
    { usuario: "fernandinhoreidelas2011", comentario: "Razoável, mas poderia melhorar.", nota: 6.8 },
    { usuario: "noobmaster", comentario: "Tudo perfeito do início ao fim.", nota: 9.9 },
    { usuario: "proplayer", comentario: "Achei meio confuso no começo.", nota: 7.3 },
    { usuario: "gameboy", comentario: "Boa experiência.", nota: 8.1 },
    { usuario: "gamegirl", comentario: "Excelente suporte técnico.", nota: 9.4 },
    { usuario: "esmaganerdplanetario", comentario: "Não funcionou como esperado.", nota: 4.7 },
    { usuario: "badboy", comentario: "Gostei bastante do resultado.", nota: 8.9 },
    { usuario: "narutinhouzuzu", comentario: "Pode melhorar a interface.", nota: 6.9 },
    { usuario: "gokugamer", comentario: "Tudo funcionou perfeitamente.", nota: 9.3 },
    { usuario: "gokuPm", comentario: "Muito útil para meu dia a dia.", nota: 8.7 },
    { usuario: "player3000", comentario: "Atendimento excelente!", nota: 9.8 },
    { usuario: "brutalmogger99", comentario: "Rápido e eficiente.", nota: 8.5 },
    { usuario: "justaramdomGuy", comentario: "Achei fraco para o preço.", nota: 5.5 },
    { usuario: "phantommegadrive", comentario: "Nada a reclamar.", nota: 8.2 },
    { usuario: "fnafenjoyer", comentario: "Superou minhas expectativas.", nota: 9.7 },
    { usuario: "lukeofjusty", comentario: "Não voltaria a usar.", nota: 3.9 },
    { usuario: "ShadowPhoenix", comentario: "Muito bom, recomendo!", nota: 9.1 },
    { usuario: "NightWolfX", comentario: "Poderia ter mais opções.", nota: 7.0 },
    { usuario: "LunarVortex", comentario: "Produto excelente.", nota: 9.6 },
    { usuario: "XxDarkSlayerxX", comentario: "Gostei bastante.", nota: 8.3 },
    { usuario: "StormRider777", comentario: "Cumpre o que promete.", nota: 8.8 },
    { usuario: "CrimsonViper", comentario: "Não gostei da experiência.", nota: 4.5 },
    { usuario: "BlazeReaper", comentario: "Muito bom e prático.", nota: 9.0 },
    { usuario: "PhantomKnight", comentario: "Atendeu às minhas necessidades.", nota: 8.4 },
    { usuario: "LeandroSilva", comentario: "Excelente solução.", nota: 9.7 },
    { usuario: "Frostbite_42", comentario: "Não atendeu às expectativas.", nota: 5.1 },
    { usuario: "ElectricNova", comentario: "Interface muito amigável.", nota: 8.9 },
    { usuario: "AbyssalStrike", comentario: "Fácil de usar.", nota: 8.5 },
    { usuario: "FirestormKing", comentario: "Bom, mas pode melhorar.", nota: 7.2 },
    { usuario: "NebulaKnight", comentario: "Sensacional!", nota: 10.0 },
    { usuario: "SilentFury", comentario: "Achei razoável.", nota: 6.4 },
    { usuario: "VengefulEcho", comentario: "Funciona muito bem.", nota: 8.7 },
    { usuario: "InfernoAssassin", comentario: "Serviço impecável.", nota: 9.9 },
    { usuario: "OmegaVenom", comentario: "Não funcionou direito.", nota: 4.8 },
    { usuario: "LethalShadow", comentario: "Muito rápido.", nota: 8.6 },
    { usuario: "DarkXPhantom", comentario: "Gostei, recomendo.", nota: 8.9 },
    { usuario: "GhostScythe", comentario: "Péssima experiência.", nota: 2.1 },
    { usuario: "TitaniumWarlord", comentario: "Regular.", nota: 6.0 },
    { usuario: "ShadowFrost", comentario: "Top demais!", nota: 9.8 },
    { usuario: "ThunderXx", comentario: "Nada excepcional.", nota: 6.7 },
    { usuario: "SavagePhoenix", comentario: "Simples e funcional.", nota: 8.3 },
    { usuario: "EchoStorm", comentario: "Me ajudou muito.", nota: 9.2 },
    { usuario: "KingOfTheVoid", comentario: "Esperava mais recursos.", nota: 6.9 },
    { usuario: "RogueViking", comentario: "Muito bom!", nota: 9.1 },
    { usuario: "NebulaWraith", comentario: "Excelente atendimento.", nota: 9.6 },
    { usuario: "WickedLynx", comentario: "Ainda precisa melhorar.", nota: 6.3 },
    { usuario: "BlazeHunter", comentario: "Funcionou como o esperado.", nota: 8.0 },
    { usuario: "SteelFury", comentario: "Ótimo produto.", nota: 9.0 },
    { usuario: "PhantomRogue", comentario: "Gostei bastante da experiência.", nota: 8.8 },
    { usuario: "Vortex_Vanguard", comentario: "Muito eficiente.", nota: 9.4 },
    { usuario: "SilverViper", comentario: "Não recomendo.", nota: 3.6 },
    { usuario: "VenomousTiger", comentario: "Boa relação custo-benefício.", nota: 8.2 },
    { usuario: "HypernovaStrike", comentario: "Me surpreendeu positivamente.", nota: 9.3 },
    { usuario: "DeadlyEcho", comentario: "Satisfatório.", nota: 7.5 },
    { usuario: "RedDragonX", comentario: "Excelente qualidade.", nota: 9.7 },
    { usuario: "IronSpecter", comentario: "Poderia ser mais rápido.", nota: 6.8 },
    { usuario: "DoomBringerX", comentario: "Maravilhoso!", nota: 10.0 },
    { usuario: "StarshipRebel", comentario: "Bom, mas nada demais.", nota: 7.1 },
    { usuario: "Zer0Grav1ty", comentario: "Funciona direitinho.", nota: 8.5 },
    { usuario: "SpectralKnight", comentario: "Muito bom mesmo!", nota: 9.2 },
    { usuario: "GigaBlaze", comentario: "Não gostei tanto.", nota: 5.2 },
    { usuario: "VenomStorm", comentario: "Excelente!", nota: 9.8 },
    { usuario: "AbyssDragon", comentario: "Achei razoável.", nota: 6.3 },
    { usuario: "AlphaWraith", comentario: "Atende ao que promete.", nota: 8.7 },
    { usuario: "CrimsonStrike", comentario: "Perfeito!", nota: 10.0 },
    { usuario: "CosmicPhoenix", comentario: "Muito básico.", nota: 5.9 },
    { usuario: "ShadowReaperX", comentario: "Ótima experiência.", nota: 9.1 },
    { usuario: "VoidKnight", comentario: "Nada a reclamar.", nota: 8.4 },
    { usuario: "GhostStormX", comentario: "Muito útil.", nota: 8.9 },
    { usuario: "NeonTempest", comentario: "Simplesmente excelente.", nota: 9.7 },
    { usuario: "XxRevengeXx", comentario: "Faltam funcionalidades.", nota: 6.4 },
    { usuario: "VortexRider", comentario: "Muito eficiente.", nota: 9.0 },
    { usuario: "CelestialFury", comentario: "Bom, porém lento.", nota: 6.8 },
    { usuario: "RagingGhost", comentario: "Incrível desempenho.", nota: 9.8 },
    { usuario: "StealthShadow", comentario: "Regular, mas útil.", nota: 7.4 },
    { usuario: "SilentVengeance", comentario: "Excelente qualidade!", nota: 9.5 },
    { usuario: "QuantumAssassin", comentario: "Não funcionou como esperado.", nota: 4.9 },
    { usuario: "EternalViper", comentario: "Gostei muito.", nota: 8.9 },
    { usuario: "DarkSoulX", comentario: "Muito rápido e eficiente.", nota: 9.3 },
    { usuario: "ZephyrBlaze", comentario: "Funcional.", nota: 8.0 },
    { usuario: "InfernalTitan", comentario: "Não recomendo muito.", nota: 5.1 },
    { usuario: "BloodMoonX", comentario: "Experiência perfeita.", nota: 9.9 },
    { usuario: "StormWarden", comentario: "Aceitável.", nota: 7.0 },
    { usuario: "TitanFury", comentario: "Ótimo serviço.", nota: 9.2 },
    { usuario: "PhantomWolfX", comentario: "Nada demais.", nota: 6.6 },
    { usuario: "GhostSerpent", comentario: "Impecável.", nota: 9.8 },
    { usuario: "FrostPhoenixX", comentario: "Podia ser melhor.", nota: 6.9 },
    { usuario: "ShadowFrost", comentario: "Excelente, recomendo muito.", nota: 9.4 },
];

function generateTemporaryUserData() {
    return avaliacoesOriginais.map(item => ({
        nome: item.usuario,
        email: `${item.usuario}@temp.com`,
        senha: `$2b$10$temporary.hashed.password.for.seed`, 
    }));
}

async function fetchExistingIds(prisma) {
    const jogos = await prisma.jogo.findMany({ select: { id: true } });
    const consoles = await prisma.console.findMany({ select: { id: true } });
    const usuarios = await prisma.usuario.findMany({ select: { id: true } });

    return {
        jogoIds: jogos.map(j => j.id),
        consoleIds: consoles.map(c => c.id),
        usuarioIds: usuarios.map(u => u.id)
    };
}


export async function seedAvaliacoes(prisma) {
    console.log("\n🌱 Seed de avaliações iniciado...");

    const userSeedData = generateTemporaryUserData();
    await prisma.usuario.createMany({
        data: userSeedData,
        skipDuplicates: true
    });
    console.log(`👤 ${userSeedData.length} usuários temporários criados/verificados.`);

    const { jogoIds, consoleIds, usuarioIds } = await fetchExistingIds(prisma);

    if (usuarioIds.length === 0) {
        console.error("⚠️ ERRO: Nenhum usuário encontrado. Pare a execução e verifique se a criação de usuários foi bem-sucedida.");
        return;
    }
    
    const avaliacoesComRelacoes = avaliacoesOriginais.map((avaliacao, index) => {
        
        const usuarioId = usuarioIds[index % usuarioIds.length];

        let jogoId = null;
        let consoleId = null;

        const temJogos = jogoIds.length > 0;
        const temConsoles = consoleIds.length > 0;

        if (temJogos && temConsoles) {
            if (Math.random() < 0.5) {
                jogoId = jogoIds[Math.floor(Math.random() * jogoIds.length)];
            } else {
                consoleId = consoleIds[Math.floor(Math.random() * consoleIds.length)];
            }
        } else if (temJogos) {
            jogoId = jogoIds[Math.floor(Math.random() * jogoIds.length)];
        } else if (temConsoles) {
            consoleId = consoleIds[Math.floor(Math.random() * consoleIds.length)];
        } 
        
        return {
            comentario: avaliacao.comentario,
            nota: avaliacao.nota,
            usuarioId: usuarioId,
            jogoId: jogoId,
            consoleId: consoleId,
        };
    });

    const { count } = await prisma.avaliacao.createMany({
        data: avaliacoesComRelacoes,
        skipDuplicates: true
    });

    console.log(`✅ ${count} avaliações inseridas/verificadas com sucesso!`);
}

/*
O generateTemporaryUserData cria usuários temporários para associar às avaliações. Os usuários são necessários para manter a integridade referencial ao inserir avaliações que dependem de usuários existentes no banco de dados.
  nome: item.usuario, (O nome do novo usuário será o mesmo valor contido no campo usuario da avaliação)
        email: `${item.usuario}@temp.com`, (O email do novo usuário será o valor do campo usuario da avaliação com o sufixo @temp.com)
        senha: `$2b$10$temporary.hashed.password.for.seed`, (A senha do novo usuário é um hash temporário fixo usado apenas para o processo de seed. foi feito para simular a existencia de uma senha sem expor senhas reais, como se estivesse criptografada).

A função fetchExistingIds recupera os IDs existentes de jogos, consoles e usuários do banco de dados. Esses IDs são usados para associar aleatoriamente avaliações a jogos ou consoles, garantindo que as avaliações sejam vinculadas a entidades válidas no banco de dados.

A função seedAvaliacoes orquestra o processo de criação de usuários temporários, recuperação de IDs existentes e inserção das avaliações no banco de dados, garantindo que cada avaliação esteja corretamente associada a um usuário e, quando possível, a um jogo ou console.
*/