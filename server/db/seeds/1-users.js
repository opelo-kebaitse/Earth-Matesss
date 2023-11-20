export async function seed(knex) {
  await knex('users').insert([
    {
      name: 'Opelo',
      user_email: 'opelo@gmail.com',
      id: 2,
    },
    {
      name: 'Mark',
      user_email: 'mark@gmail.com',
      id: 6,
    },
    {
      name: 'Laura',
      user_email: 'laura@gmail.com',
      id: 1,
    },
    {
      name: 'Rich',
      user_email: 'rich@gmail.com',
      id: 4,
    },
    {
      name: 'Hope',
      user_email: 'hope@gmail.com',
      id: 5,
    },
  ])
}
