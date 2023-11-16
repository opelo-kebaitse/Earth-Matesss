export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      name: 'Opelo',
      user_email: 'opelo@gmail.com',
      added_by_user: 'auth0|102',
    },
    {
      id: 2,
      name: 'Mark',
      user_email: 'mark@gmail.com',
      added_by_user: 'auth0|103',
    },
    {
      id: 3,
      name: 'Laura',
      user_email: 'laura@gmail.com',
      added_by_user: 'auth0|101',
    },
    {
      id: 4,
      name: 'Rich',
      user_email: 'rich@gmail.com',
      added_by_user: 'auth0|104',
    },
    {
      id: 5,
      name: 'Hope',
      user_email: 'hope@gmail.com',
      added_by_user: 'auth0|105',
    },
  ])
}
