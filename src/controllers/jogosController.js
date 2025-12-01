import * as jogosModel from '../models/jogosModel.js';

export const listarTodosJogos = async (req, res) => {
    try {
        const jogos = await jogosModel.findAll();
        const { nome, desenvolvedor, genero, anoLancamento, preco, plataforma } = req.query;

        let resultado = jogos;

        if (nome) {
            resultado = resultado.filter((jogo) => 
                jogo.nome.toLowerCase().includes(nome.toLowerCase())
            );
        }
        if (desenvolvedor) {
            resultado = resultado.filter((jogo) => 
                jogo.desenvolvedor.toLowerCase().includes(desenvolvedor.toLowerCase())
            );
        }
        if (genero) {
            resultado = resultado.filter((jogo) => 
                jogo.genero.toLowerCase().includes(genero.toLowerCase())
            );
        }
        if (anoLancamento) {
            resultado = resultado.filter((jogo) => 
                jogo.anoLancamento === parseInt(anoLancamento)
            );
        }
        if (plataforma) {
            resultado = resultado.filter((jogo) => 
                jogo.plataforma.toLowerCase().includes(plataforma.toLowerCase())
            );
        }

        if (!resultado || resultado.length === 0) {
            return res.status(404).json({
                status: 404,
                success: false,
                total: resultado.length,
                mensagem: 'Nenhum jogo encontrado.',
                jogos: resultado
            });
        }

        return res.status(200).json({
            status: 200,
            success: true,
            total: resultado.length,
            mensagem: 'Lista de jogos encontrada com successo.',
            jogos: resultado
        });
        
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno no servidor.',
            detalhes: error.message,
            status: 500,
            success: false
        });
    }
};

export const listarUm = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: 'ID inválido. Deve ser um número inteiro.',
                id: req.params.id
            });
        }

        const jogo = await jogosModel.findById(id);

        if (!jogo) {
            return res.status(404).json({
                status: 404,
                success: false,
                erro: 'Jogo não encontrado!',
                mensagem: 'Verifique se o id do jogo existe',
                id: id
            });
        }
        
        res.status(200).json({
            status: 200,
            success: true,
            mensagem: 'Jogo encontrado',
            jogo
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            erro: 'Erro ao buscar jogo por id',
            detalhes: error.message
        });
    }
};

export const criarJogo = async (req, res) => {
    try {
        const { nome, desenvolvedor, genero, anoLancamento, preco, descricao, plataforma } = req.body;
        const dado = req.body;

        const camposObrigatorios = ['nome', 'desenvolvedor', 'genero', 'anoLancamento', 'preco', 'descricao', 'plataforma'];
        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }

        const generosValidos = ['Ação', 'Soulslike', 'FPS', 'RPG', 'Aventura', 'Realidade virtual', 'Mapa aberto', 'Luta', 'Terror', 'Indie'];
        if (!generosValidos.includes(genero)) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: `Gênero inválido. Gêneros válidos são: ${generosValidos.join(', ')}.`,
                generosValidos
            });
        }

        if (!nome || nome.length < 3 || nome.length > 100) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: "O nome do jogo é obrigatório e deve ter entre 3 e 100 caracteres."
            });
        }

        if (!anoLancamento || isNaN(anoLancamento) || anoLancamento < 1970 || anoLancamento > 2025) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: `Ano de lançamento inválido. Deve ser entre 1970 e 2025.`,
                anoMinimo: 1970,
                anoMaximo: 2025
            });
        }

        const plataformasValidas = ['PlayStation', 'Xbox', 'Nintendo', 'PC', 'VR'];
        if (!plataformasValidas.includes(plataforma)) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: `Plataforma inválida. Plataformas válidas são: ${plataformasValidas.join(', ')}.`
            });
        }

        if (isNaN(preco) || preco <= 0) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: "Preço inválido. Deve ser um número positivo."
            });
        }

        if (descricao && descricao.length > 500) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: "A descrição deve ter no máximo 500 caracteres."
            });
        }

        const novoJogo = await jogosModel.createJogo({ 
            nome, 
            desenvolvedor, 
            genero, 
            anoLancamento, 
            preco, 
            descricao, 
            plataforma 
        });

        res.status(201).json({
            status: 201,
            success: true,
            mensagem: 'Novo jogo criado com sucesso.',
            jogo: novoJogo
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            erro: 'Erro ao criar novo jogo.',
            detalhes: error.message
        });
    }
};

export const atualizarJogo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: 'ID inválido. Deve ser um número inteiro.',
                id: req.params.id
            });
        }

        const dados = req.body;

        const jogoExiste = await jogosModel.findById(id);

        if (!jogoExiste) {
            return res.status(404).json({
                status: 404,
                success: false,
                erro: 'Jogo não encontrado.',
                mensagem: "Verifique se o ID do jogo existe.",
                id: id,
            });
        }

        if (dados.genero) {
            const generosValidos = ["Ação", "Soulslike", "FPS", "RPG", "Aventura", "Realidade virtual", "Mapa aberto", "Luta", "Terror", "Indie"];
            if (!generosValidos.includes(dados.genero)) {
                return res.status(400).json({
                    status: 400,
                    success: false,
                    erro: `Gênero inválido. Gêneros válidos são: ${generosValidos.join(', ')}.`,
                    generosValidos
                });
            }
        }

        if (dados.plataforma) {
            const plataformasValidas = ['PlayStation', 'Xbox', 'Nintendo', 'PC', 'VR'];
            if (!plataformasValidas.includes(dados.plataforma)) {
                return res.status(400).json({
                    status: 400,
                    success: false,
                    erro: `Plataforma inválida. Plataformas válidas são: ${plataformasValidas.join(', ')}.`
                });
            }
        }
 {
            if (anoLancamento < 1970 || anoLancamento > 2025) {
                return res.status(400).json({
                    status: 400,
                    success: false,
                    erro: `Ano de lançamento inválido. Deve ser entre 1970 e 2025.`
                });
            }
        }

        if (dados.preco && (isNaN(dados.preco) || dados.preco <= 0)) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: "Preço inválido. Deve ser um número positivo."
            });
        }

        if (dados.descricao && dados.descricao.length > 500) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: "A descrição deve ter no máximo 500 caracteres."
            });
        }

        const jogoAtualizado = await jogosModel.updateJogo(id, dados);

        res.status(200).json({
            status: 200,
            success: true,
            mensagem: 'Jogo atualizado com sucesso.',
            jogo: jogoAtualizado
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            erro: 'Erro ao atualizar o jogo.',
            detalhes: error.message
        });
    }
};

export const apagar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                success: false,
                erro: 'ID inválido. Deve ser um número inteiro.',
                id: req.params.id
            });
        }

        const jogoExiste = await jogosModel.findById(id);

        if (!jogoExiste) {
            return res.status(404).json({
                status: 404,
                success: false,
                erro: 'Jogo não encontrado.',
                mensagem: "Verifique se o ID do jogo existe.",
                id: id,
            });
        }

        await jogosModel.deleteJogo(id);

        res.status(200).json({
            status: 200,
            success: true,
            mensagem: "Jogo apagado com successo.",
            jogoRemovido: jogoExiste
        });

    } catch (error) {
        res.status(500).json({
            status: 500,
            success: false,
            erro: 'Erro ao apagar o jogo.',
            detalhes: error.message
        });
    }
};