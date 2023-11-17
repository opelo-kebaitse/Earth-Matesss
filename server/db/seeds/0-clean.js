export async function seed(knex) {
  // await knex('tbc').del()
  await knex('events').del()
  await knex('users').del()
}
