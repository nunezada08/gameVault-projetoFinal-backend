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
