import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('apelido', 32).notNullable().unique()
      table.string('nome', 100).notNullable()
      table.string('nascimento', 10).notNullable()
      table.specificType('stack', 'text[]').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}