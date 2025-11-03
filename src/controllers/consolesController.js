import * as consolesModel from './../models/consolesModel.js'

export const listarTodosConsoles = async (req, res) => {
    try{
        const consoles = await consolesModel.findAll();
        if (consoles || consoles.length === 0) {
            res.status(404).json({
                total: consoles.length,
                mensagem: 'Não há consoles na lista',
                consoles
            })
        }
        res.status(200).json({
            total: consoles.length,
            mensagem: 'Lista de consoles',
            consoles
        })

} catch (error) {
    res.status(500).json({
        erro: 'Erro interno de servidor',
        detalhes: error.message,
        status: 500
        })
    }
}