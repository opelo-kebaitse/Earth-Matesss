export async function seed(knex) {
  await knex('users').insert([
    {
      name: 'Opelo',
      user_email: 'opelo@gmail.com',
      auth0Id: 'auth0|102',
    },
    {
      name: 'Mark',
      user_email: 'mark@gmail.com',
      auth0Id: 'auth0|652cb119071b925318906207',
    },
    {
      name: 'Laura',
      user_email: 'laura@gmail.com',
      auth0Id: 'auth0|101',
    },
    {
      name: 'Rich',
      user_email: 'rich@gmail.com',
      auth0Id: 'auth0|104',
    },
    {
      name: 'Hope',
      user_email: 'hope@gmail.com',
      auth0Id: 'auth0|105',
    },
  ])
}
