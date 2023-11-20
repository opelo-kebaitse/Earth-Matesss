export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('user_email')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
