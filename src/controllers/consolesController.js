import * as consolesModel from './../models/consolesModel.js'

export const listarTodosConsoles = async (req, res) => {
  try {
    const consoles = await consolesModel.findAll()
    const { nome, anoLancamento} = req.query
    let resultado = consoles

    if (nome) {
      resultado = resultado.filter((console) => console.nome.toLowerCase().includes(nome.toLowerCase()))
    }
    if (anoLancamento) {
      resultado = resultado.filter((console) => console.anoLancamento === parseInt(anoLancamento))
    }

    if (!resultado || resultado.length === 0) {
      return res.status(404).json({
        status:404,
        sucess:false,
        total: 0,
        mensagem: 'Não há consoles na lista',
        consoles: [],
      })
    }

    res.status(200).json({
      status:200,
      sucess:true,
      total: resultado.length,
      mensagem: 'Lista de consoles',
      consoles: resultado,
    })
  } catch (error) {
    res.status(500).json({
      status:500,
      sucess:false,
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
        status:404,
        sucess:false,
        erro: 'Console não encontrado!',
        mensagem: 'Verifique se o id do console existe',
        id: id,
      })
    }

    res.status(200).json({
      status:200,
      sucess:true,
      mensagem: 'Console encontrado',
      console,
    })
  } catch (error) {
    res.status(500).json({
      status:500,
      sucess:false,
      erro: 'Erro ao buscar console por id',
      detalhes: error.message,
    })
  }
}

export const criarConsole = async (req, res) => {
  try {
    const { nome, nota, anoLancamento, preco, descricao, fabricante, geracao } = req.body
    const dado = req.body

    const camposObrigatorios = ['nome', 'nota', 'anoLancamento', 'preco', 'descricao', 'fabricante', 'geracao']
    const faltando = camposObrigatorios.filter((campo) => !dado[campo])

    if (faltando.length > 0) {
      return res.status(400).json({
        status: 400,
        success: false,
        erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`,
      })
    }

    const fabricantesValidos = ['sony', 'microsoft', 'nintendo', 'steam']
    if (!fabricantesValidos.includes(fabricante.toLowerCase())) {
      return res.status(400).json({
        status: 400,
        success: false,
        erro: `Fabricante inválido. Fabricantes válidos são: ${fabricantesValidos.join(', ')}.`,
      })
    }

    const novoConsole = await consolesModel.create(dado)

    res.status(201).json({
      status:201,
      sucess:true,
      mensagem: 'Novo console criado com sucesso.',
      console: novoConsole,
    })
  } catch (error) {
    res.status(500).json({
      status:500,
      sucess:false,
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
        status:404,
        sucess:false,
        erro: 'Console não encontrado.',
        mensagem: 'Verifique se o ID do console existe.',
        id: id,
      })
    }

    await consolesModel.deleteConsole(id)

    res.status(200).json({
      status:200,
      sucess:true,
      mensagem: 'Console apagado com sucesso.',
      consoleRemovido: consoleExiste,
    })
  } catch (error) {
    res.status(500).json({
      status:500,
      sucess:false,
      erro: 'Erro ao apagar o console.',
      detalhes: error.message,
    })
  }
}

export const atualizarConsole = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const consoleExiste = await consolesModel.findById(id);

        if (!consoleExiste) {
            return res.status(404).json({
                status:404,
                sucess:false,
                erro: 'console não encontrado com esse id',
                id: id
            })
        }
        if (dados.fabricante) {
      const fabricantesValidos = ['sony', 'microsoft', 'nintendo', 'steam']
      if (!fabricantesValidos.includes(dados.fabricante.toLowerCase())) {
        return res.status(400).json({
          status: 400,
          success: false,
          erro: `Fabricante inválido. Fabricantes válidos são: ${fabricantesValidos.join(', ')}.`,
        })
      }
    }


        const consoleAtualizado = await consolesModel.update(id, dados);

        res.status(200).json({
          status:200,
          sucess:true,
            mensagem: 'console atualizado com sucesso',
            console: consoleAtualizado
        })

    } catch (error) {
        res.status(500).json({
            status:500,
            sucess:false,
            erro: 'Erro ao atualizar consoles',
            detalhes: error.message
        })
    }
}