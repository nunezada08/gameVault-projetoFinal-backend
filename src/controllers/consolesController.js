import * as consolesModel from './../models/consolesModel.js'

export const listarTodosConsoles = async (req, res) => {
  try {
    const consoles = await consolesModel.findAll()

    if (!consoles || consoles.length === 0) {
      return res.status(404).json({
        total: 0,
        mensagem: 'Não há consoles na lista',
        consoles: [],
      })
    }

    res.status(200).json({
      total: consoles.length,
      mensagem: 'Lista de consoles',
      consoles,
    })
  } catch (error) {
    res.status(500).json({
      erro: 'Erro interno de servidor',
      detalhes: error.message,
      status: 500,
    })
  }
}

export const ConsoleById = async (req, res) => {
  try {
    const id = req.params.id
    const console = await consolesModel.findById(id)

    if (!console) {
      return res.status(404).json({
        erro: 'Console não encontrado!',
        mensagem: 'Verifique se o id do console existe',
        id: id,
      })
    }

    res.status(200).json({
      mensagem: 'Console encontrado',
      console,
    })
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao buscar console por id',
      detalhes: error.message,
    })
  }
}

export const criarConsole = async (req, res) => {
  try {
    const { nome, nota, anoLancamento, preco, descricao } = req.body
    const dado = req.body

    const camposObrigatorios = ['nome', 'nota', 'anoLancamento', 'preco', 'descricao']
    const faltando = camposObrigatorios.filter((campo) => !dado[campo])

    if (faltando.length > 0) {
      return res.status(400).json({
        erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`,
      })
    }

    const novoConsole = await consolesModel.create(dado)

    res.status(201).json({
      mensagem: 'Novo console criado com sucesso.',
      console: novoConsole,
    })
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao criar novo console.',
      detalhes: error.message,
    })
  }
}

export const apagar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const consoleExiste = await consolesModel.findById(id)

    if (!consoleExiste) {
      return res.status(404).json({
        erro: 'Console não encontrado.',
        mensagem: 'Verifique se o ID do console existe.',
        id: id,
      })
    }

    await consolesModel.deleteConsole(id)

    res.status(200).json({
      mensagem: 'Console apagado com sucesso.',
      consoleRemovido: consoleExiste,
    })
  } catch (error) {
    res.status(500).json({
      erro: 'Erro ao apagar o console.',
      detalhes: error.message,
    })
  }
}
