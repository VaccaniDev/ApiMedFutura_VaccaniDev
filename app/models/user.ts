import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare apelido: string

  @column()
  declare nome: string

  @column()
  declare nascimento: string

  @column()
  declare stack: string[]

}