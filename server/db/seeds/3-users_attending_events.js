/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users_attending_events').insert([
    { event_id: 2, user: 2 },
    { event_id: 3, user: 2 },
    { event_id: 2, user: 4 },
    { event_id: 4, user: 2 },
    { event_id: 5, user: 2 },
    { event_id: 5, user: 4 },
  ])
}
