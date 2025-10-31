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