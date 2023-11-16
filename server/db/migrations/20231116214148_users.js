export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('user_email')
    table.string('added_by_user')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
