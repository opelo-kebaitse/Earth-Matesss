export async function seed(knex) {
  await knex('users').insert([
    {
      name: 'Opelo',
      email: 'opelo@gmail.com',
      id: 2,
    },
    {
      name: 'Mark',
      email: 'mark@gmail.com',
      id: 6,
    },
    {
      name: 'Laura',
      email: 'lionheartnz85@gmail.com',
      id: 1,
    },
    {
      name: 'Rich',
      email: 'rich@gmail.com',
      id: 4,
    },
    {
      name: 'Hope',
      email: 'hsgoldsack@gmail.com',
      id: 5,
    },
  ])
}
