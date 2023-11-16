export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('user_email')
    table.string('auth0Id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
