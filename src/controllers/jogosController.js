import * as jogosModel from '../models/jogosModel.js';

export const listarTodosJogos = async (req, res) => {
    try {
        const jogos = await jogosModel.findALL();
        const {nome,desenvolvedor,genero,anoLancamento,preco} = req.query

        let resultado = jogos;

        if(nome){
            resultado=resultado.filter((jogo) => jogo.nome.toLowerCase().includes(nome.toLowerCase()))
        }
        if(desenvolvedor){
            resultado=resultado.filter((jogo) => jogo.desenvolvedor.toLowerCase().includes(desenvolvedor.toLowerCase()))
        }
        if(genero){
            resultado=resultado.filter((jogo) => jogo.genero.toLowerCase().includes(genero.toLowerCase()))
        }
        if(anoLancamento){
            resultado=resultado.filter((jogo) => jogo.anoLancamento === parseInt(anoLancamento))
        }

        if (!resultado || resultado.length === 0) {
            return res.status(404).json({
                total: resultado.length,
                mensagem: 'Nenhum jogo encontrado.',
                jogos: resultado
            });
        }

        return res.status(200).json({
            total: resultado.length,
            mensagem: 'Lista de jogos encontrada com sucesso.',
            jogos: resultado
        });
        
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno no servidor.',
            datalhes: error.message,
            status: 500
        });
    }
}
export const listarUm = async (req,res) => {
    try{
        const id = req.params.id;
        const jogo = await jogosModel.findById(id);

        if (!jogo) {
            return res.status(404).json({
                erro: 'Jogo não encontrado!',
                mensagem: 'Verifique se o id do jogo existe',
                id:id
            })
        }
        res.status(200).json({
            mensagem: 'Jogo encontrado',
            jogo
        })
    }catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar jogo por id',
            detalhes: error.message
        })
    }
}
export const criarJogo = async (req, res) => {
    try {
        const { nome, desenvolvedor, genero, anoLancamento, preco, descricao } = req.body;

        const dado = req.body;

        const camposObrigatorios = ['nome', 'desenvolvedor', 'genero', 'anoLancamento', 'preco', 'descricao'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }

        const generosValidos = ['Ação', 'Soulslike', 'FPS', 'RPG', 'Aventura', 'Realidade virtual', 'Mapa berto', 'Luta', 'Terror', 'Indie'];
        if (!generosValidos.includes(genero)) {
            return res.status(400).json({
                erro: `Genero inválido.`,
                generosValidos
            })
        }

        const novoJogo = await jogosModel.create(dado);

    res.status(201).json({
        mensagem: 'Novo jogo criado com sucesso.',
        jogo: novoJogo
    })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar novo jogo.',
            detalhes: error.message
        })
    }
}
export const atualizarJogo = async (req, res) => {
    try {

        const id = parseInt(req.params.id);
        const dados = req.body;

        const jogoExiste = await jogosModel.findById(id);

        if (!jogoExiste) {
            return res.status(404).json({
                erro: 'jogo não encontrado.',
                mensagem: "Verifique se o ID do jogo existe.",
                id: id,
            })
        }

        if (dados.genero) {
            const generosValidos = [ "Ação", "Soulslike", "FPS", "RPG", "Aventura", "Realidade virtual", "Mapa aberto", "Luta", "Terror", "Indie" ];
            if (!generosValidos.includes(dados.genero)) {
                return res.status(400).json({
                    erro: `jogo inválido.`,
                    generosValidos
            })
        }
    }

        const jogoAtualizado = await jogosModel.updatejogo(id, dados);

        res.status(200).json({
            mensagem: 'jogo atualizado com sucesso.',
            jogo: jogoAtualizado
        })


    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar o jogo.',
            detalhes: error.message
        })
        
    }
}
export const apagar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const jogoExiste = await jogosModel.findById(id);

        if (!jogoExiste) {
            return res.status(404).json({
                erro: 'Jogo não encontrado.',
                mensagem: "Verifique se o ID do jogo existe.",
                id: id,
            })
        }

        await jogosModel.deleteJogo(id);

        res.status(200).json({
            mensagem: "Jogo apagado com sucesso.",
            jogoRemovido: jogoExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar o jogo.',
            detalhes: error.message
        })
    }
}