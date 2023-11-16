export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      name: 'Opelo',
      user_email: 'opelo@gmail.com',
      auth0Id: 'auth0|102',
    },
    {
      id: 2,
      name: 'Mark',
      user_email: 'mark@gmail.com',
      auth0Id: 'auth0|103',
    },
    {
      id: 3,
      name: 'Laura',
      user_email: 'laura@gmail.com',
      auth0Id: 'auth0|101',
    },
    {
      id: 4,
      name: 'Rich',
      user_email: 'rich@gmail.com',
      auth0Id: 'auth0|104',
    },
    {
      id: 5,
      name: 'Hope',
      user_email: 'hope@gmail.com',
      auth0Id: 'auth0|105',
    },
  ])
}
