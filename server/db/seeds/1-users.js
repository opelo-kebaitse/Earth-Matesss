export async function seed(knex) {
  await knex('users').insert([
    {
      auth0Id: 'auth0|102',
      name: 'Opelo',
      email: 'opelo@gmail.com',
    },
    {
      auth0Id: 'auth0|652cb119071b925318906207',
      name: 'Mark',
      email: 'mark@gmail.com',
    },
    {
      auth0Id: 'auth0|655b15bea044d9589caa3368',
      name: 'Laura',
      email: 'lionheartnz85@gmail.com',
    },
    {
      auth0Id: 'auth0|104',
      name: 'Rich',
      email: 'rich@gmail.com',
    },
    {
      auth0Id: 'auth0|105',
      name: 'Hope',
      email: 'hsgoldsack@gmail.com',
    },
  ])
}
