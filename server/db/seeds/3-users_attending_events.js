/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users_attending_events').insert([
    { event_id: 2, user: 'auth0|102' },
    { event_id: 3, user: 'auth0|102' },
    { event_id: 2, user: 'auth0|104' },
    { event_id: 4, user: 'auth0|652cb119071b925318906207' },
    { event_id: 5, user: 'auth0|652cb119071b925318906207' },
    { event_id: 5, user: 'auth0|104' },
  ])
}
