export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.integer('id')
    table.string('name')
    table.string('email').primary()
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
