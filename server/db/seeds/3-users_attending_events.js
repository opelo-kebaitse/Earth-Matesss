/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users_attending_events').insert([
    { event_id: 2, user: 'hsgoldsack@gmail.com' },
    { event_id: 3, user: 'hsgoldsack@gmail.com' },
    { event_id: 2, user: 'mark@gmail.com' },
    { event_id: 4, user: 'opelo@gmail.com' },
    { event_id: 5, user: 'lionheartnz85@gmail.com' },
    { event_id: 5, user: 'lionheartnz85@gmail.com' },
  ])
}
