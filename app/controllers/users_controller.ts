import User from '#models/user'
import { pessoaValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async create({ request, response }: HttpContext) {
    try {
      const data = await request.validateUsing(pessoaValidator)
      const user = await User.create(data)
      return response.status(201).json(user)
    } catch (error) {
      if (error.messages) {
        return response.status(422).json({ message: 'Erro de validação.', errors: error.message })
      }
      return response.status(400).json({ message: 'Erro ao registrar.', error: error.message })
    }

  }

  async get({ params, response }: HttpContext) {
    const pessoaId = params.id

    try {
      const aluno = await User.findOrFail(pessoaId)
      return response.status(200).json(aluno)
    } catch (error) {
      return response.status(404).json({ message: "Pessoa não encontrada", error })
    }
  }

  async search({ request, response }: HttpContext) {
    const termo = request.input('t')

    if (!termo) {
      return response.status(400).json({ message: 'Termo de busca é obrigatório.' })
    }

    try {
      const pessoas = await User.query()
        .whereILike('apelido', `%${termo}%`)
        .orWhereILike('nome', `%${termo}%`)
        .orWhereRaw('array_to_string(stack, \',\') ILIKE ?', [`%${termo}%`])
        .exec()

      return response.status(200).json(pessoas)
    } catch (error) {
      return response.status(500).json({ message: 'Error ao buscar pessoas.', error: error.message })
    }
  }

  async update({ params, request, response }: HttpContext) {
    const pessoaId = params.id

    try {
      const pessoa = await User.findOrFail(pessoaId)
      const data = await request.validateUsing(pessoaValidator)
      pessoa.merge(data)
      await pessoa.save()

      return response.status(200).json(pessoa)

    } catch (error) {
      return response.status(422).json({ message: 'Erro ao atualizar pessoa.' })
    }
  }

  async delete({ params, response, }: HttpContext) {
    const pessoaId = params.id
    try {
      const pessoa = await User.findOrFail(pessoaId)
      await pessoa.delete()
      return response.status(204)
    } catch (error) {
      return response.status(400).json({ message: 'Erro ao excluir esta pessoa ou ela não existe.' })
    }
  }
}