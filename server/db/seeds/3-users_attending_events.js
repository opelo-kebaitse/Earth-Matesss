/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  await knex('users_attending_events').insert([
    { event_id: 2, user: 'google-oauth2|113314505680548891591' },
    { event_id: 3, user: 'google-oauth2|113314505680548891591' },
    { event_id: 2, user: 'google-oauth2|110018297537843173032' },
    { event_id: 4, user: 'auth0|652cb119071b925318906207' },
    { event_id: 5, user: 'auth0|652cb119071b925318906207' },
    { event_id: 5, user: 'google-oauth2|110018297537843173032' },
  ])
}
