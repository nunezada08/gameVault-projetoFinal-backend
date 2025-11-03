










export const ConsoleById = async (req,res) => {
    try{
        const id = req.params.id;
        const console = await consolesModel.findById(id);

        if (!console) {
            return res.status(404).json({
                erro: 'console não encontrado!',
                mensagem: 'Verifique se o id do console existe',
                id:id
            })
        }
        res.status(200).json({
            mensagem: 'console encontrado',
            console
        })
    }catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar console por id',
            detalhes: error.message
        })
    }
}

export const criarConsole = async (req, res) => {
    try {
        const { nome, nota, anoLancamento, preco, descricao } = req.body;

        const dado = req.body;

        const camposObrigatorios = ['nome', 'nota', 'anoLancamento', 'preco', 'descricao' ];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }


        const novoConsole = await consolesModel.create(dado);

    res.status(201).json({
        mensagem: 'Novo console criado com sucesso.',
        console: novoConsole
    })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar novo console.',
            detalhes: error.message
        })
    }
}























































export const apagar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const consolesExiste = await consolesModel.findById(id);

        if (!consolesExiste) {
            return res.status(404).json({
                erro: 'console não encontrado.',
                mensagem: "Verifique se o ID do console existe.",
                id: id,
            })
        }

        await jogosModel.deleteConsole(id);

        res.status(200).json({
            mensagem: "console apagado com sucesso.",
            conosoleRemovido: consolesExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar o console.',
            detalhes: error.message
        })
    }
}