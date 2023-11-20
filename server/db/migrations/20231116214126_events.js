export async function up(knex) {
  await knex.schema.createTable('events', (table) => {
    table.integer('id').primary()
    table.string('name')
    table.string('location')
    table.string('date')
    table.string('description')
    table.number('added_by_user').references('users.id')
    table.string('photo')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('events')
}
