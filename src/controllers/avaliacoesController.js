import * as avaliacoesModel from "./../models/avaliacoesModel.js";

export const listarTodasAvaliacoes = async (req, res) => {
  try {
    const avaliacoes = await avaliacoesModel.findAll();
    const { nome, comentario} = req.query;
    let resultado = avaliacoes;

    if (nome) {
        resultado = resultado.filter((avaliacao) =>
        avaliacao.nome.toLowerCase().includes(nome.toLowerCase())
      );
    }
    if (comentario) {
        resultado = resultado.filter(
        (avaliacao) => avaliacao.comentario === parseInt(comentario)
      );
    }
    if (!avaliacoes || avaliacoes.length === 0) {
      return res.status(404).json({
        status:404,
        sucess:false,
        total: 0,
        mensagem: "Não há avaliações na lista",
        avaliacoes: [],
      });
    }

    // caso exista conteúdo:
    return res.status(200).json({
      status:200,
      sucess:true,
      total: avaliacoes.length,
      mensagem: "Lista de avaliações",
      avaliacoes,
    });
  } catch (error) {
    return res.status(500).json({
      erro: "Erro interno de servidor",
      detalhes: error.message,
      status: 500,
      sucess:false,
    });
  }
};

export const avaliacaoById = async (req, res) => {
  try {
    const id = req.params.id;
    const avaliacao = await avaliacoesModel.findById(id);

    if (!avaliacao) {
      return res.status(404).json({
        status:404,
        sucess:false,
        erro: "avaliação não encontrado!",
        mensagem: "Verifique se o id da avaliação existe",
        id: id,
      });
    }

    res.status(200).json({
      status:200,
      sucess:true,
      mensagem: "avaliação encontrada",
      avaliacao,
    });
  } catch (error) {
    res.status(500).json({
      status:500,
      sucess:false,
      erro: "Erro ao buscar avaliação por id",
      detalhes: error.message,
    });
  }
};
export const criarAvaliacao = async (req, res) => {
    try {
const { nome, comentario} = req.body;

        const dado = req.body;

        const camposObrigatorios = ['nome', 'comentario'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                status:400,
                sucess:false,
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }

        const novaAvaliacao = await avaliacoesModel.create(dado);

    res.status(201).json({
        status:201,
        sucess:true,
        mensagem: 'Nova avaliação criada com sucesso.',
        avaliacao: novaAvaliacao
    })

    } catch (error) {
        res.status(500).json({
            status:500,
            sucess:false,
            erro: 'Erro ao criar nova avaliação.',
            detalhes: error.message
        })
    }
}
export const atualizarAvaliacao = async (req, res) => {
    try {

        const id = parseInt(req.params.id);
        const dados = req.body;

        const avaliacaoExiste = await avaliacoesModel.findById(id);

        if (!avaliacaoExiste) {
            return res.status(404).json({
                status:404,
                sucess:false,
                erro: 'avalição não encontrado.',
                mensagem: "Verifique se o ID da avalição.",
                id: id,
            })
        }

        const avaliacaoAtualizada = await avaliacoesModel.updateAvaliacao(id, dados);

        res.status(200).json({
            status:200,
            sucess:true,
            mensagem: 'avaliação atualizado com sucesso.',
            avaliacao: avaliacaoAtualizada
        })


    } catch (error) {
        res.status(500).json({
            status:500,
            sucess:false,
            erro: 'Erro ao atualizar o jogo.',
            detalhes: error.message
        })
        
    }
}
export const apagarAvaliacao = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const avaliacaoExiste = await avaliacoesModel.findById(id);

        if (!avaliacaoExiste) {
            return res.status(404).json({
                status:404,
                sucess:false,
                erro: 'Avaliação não encontrada.',
                mensagem: "Verifique se o ID da avaliação existe.",
                id: id,
            })
        }

        await avaliacoesModel.deleteAvaliacao(id);

        res.status(200).json({
            status:200,
            sucess:true,
            mensagem: "Avaliacao apagado com sucesso.",
            AvaliacaoRemovido: avaliacaoExiste
        })

    } catch (error) {
        res.status(500).json({
            status:500,
            sucess:false,
            erro: 'Erro ao apagar Avaliacao.',
            detalhes: error.message
        })
    }
}