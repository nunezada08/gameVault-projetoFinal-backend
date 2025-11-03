import * as jogosModel from '../models/jogosModel.js';

export const listarTodosJogos = async (req, res) => {
    try {
        const jogos = await jogosModel.findALL();

        if (!jogos || jogos.length === 0) {
            res.status(404).json({
                total: jogos.length,
                mensagem: 'Nenhum jogo encontrado.',
                jogos
            })
            
        }

        res.status(200).json({
            total: jogos.length,
            mensagem: 'Lista de jogos encontrada com sucesso.',
            jogos
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