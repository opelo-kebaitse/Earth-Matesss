export async function seed(knex) {
  await knex('events').insert([
    {
      id: 1,
      name: 'Beach clean-up at Mission Bay',
      location: 'Auckland',
      date: '2023-12-05',
      description:
        'Beach clean-up at Mission Bay. Bring your own bucket and spade - it’s like building sandcastles, but for grown-ups!',
      added_by_user: 'auth0|101',
      photo: 'mission_bay_cleanup.jpg',
    },
    {
      id: 2,
      name: 'Tree planting at Mount Victoria',
      location: 'Wellington',
      date: '2023-11-20',
      description:
        'Tree planting at Mount Victoria. Get ready to dig deep and plant trees - it’s like hide and seek with saplings!',
      added_by_user: 'auth0|102',
      photo: 'mount_victoria_trees.jpg',
    },
    {
      id: 3,
      name: 'River restoration in Avon River',
      location: 'Christchurch',
      date: '2023-10-15',
      description:
        'River restoration in Avon River. Help us make the river so clean, even the fish will be queuing for a swim!',
      added_by_user: 'auth0|103',
      photo: 'avon_river_restoration.jpg',
    },
    {
      id: 4,
      name: 'Trail clean-up in Ben Lomond Track',
      location: 'Queenstown',
      date: '2023-09-10',
      description:
        'Trail clean-up in Ben Lomond Track. Tidy trails for tidy minds. And who knows, you might find some lost treasure!',
      added_by_user: 'auth0|104',
      photo: 'ben_lomond_cleanup.jpg',
    },
    {
      id: 5,
      name: 'Wildlife habitat conservation in Whakarewarewa Forest',
      location: 'Rotorua',
      date: '2023-08-05',
      description:
        'Wildlife habitat conservation in Whakarewarewa Forest. It’s like setting up a five-star hotel for birds and bugs!',
      added_by_user: 'auth0|105',
      photo: 'whakarewarewa_conserv.jpg',
    },
    {
      id: 6,
      name: 'Litter collection around Lake Taupo',
      location: 'Taupo',
      date: '2023-07-25',
      description:
        'Litter collection around Lake Taupo. We’re fishing for trash, not trout!',
      added_by_user: 'auth0|101',
      photo: 'taupo_lake_cleanup.jpg',
    },
    {
      id: 7,
      name: 'Beach clean-up at Tahunanui Beach',
      location: 'Nelson',
      date: '2023-06-15',
      description:
        'Beach clean-up at Tahunanui Beach. Perfect your tan while tidying the sand!',
      added_by_user: 'auth0|102',
      photo: 'tahunanui_beach_cleanup.jpg',
    },
    {
      id: 8,
      name: 'Community gardening in The Octagon',
      location: 'Dunedin',
      date: '2023-05-20',
      description:
        'Community gardening in The Octagon. Get down and dirty with plants in the heart of Dunedin!',
      added_by_user: 'auth0|103',
      photo: 'octagon_gardening.jpg',
    },
    {
      id: 9,
      name: 'Restoring native plants in Hamilton Gardens',
      location: 'Hamilton',
      date: '2023-04-10',
      description:
        'Restoring native plants in Hamilton Gardens. Be a plant superhero - capes optional!',
      added_by_user: 'auth0|104',
      photo: 'hamilton_gardens_restoration.jpg',
    },
    {
      id: 10,
      name: 'Marine life protection at Mount Maunganui',
      location: 'Tauranga',
      date: '2023-03-30',
      description:
        'Marine life protection at Mount Maunganui. Dive into action and help our underwater neighbours!',
      added_by_user: 'auth0|105',
      photo: 'mount_maunganui_marine.jpg',
    },
    {
      id: 11,
      name: 'Eco-friendly waste management workshop',
      location: 'Invercargill',
      date: '2023-02-20',
      description:
        'Eco-friendly waste management workshop. Learn how to trash-talk... eco-style!',
      added_by_user: 'auth0|101',
      photo: 'invercargill_waste_workshop.jpg',
    },
    {
      id: 12,
      name: 'Sustainable living seminar at Marine Parade',
      location: 'Napier',
      date: '2023-01-15',
      description:
        'Sustainable living seminar at Marine Parade. Go green or go home!',
      added_by_user: 'auth0|102',
      photo: 'marine_parade_seminar.jpg',
    },
    {
      id: 13,
      name: 'Recycling drive at The Square',
      location: 'Palmerston North',
      date: '2022-12-05',
      description:
        'Recycling drive at The Square. Turning trash into treasure, one bottle at a time.',
      added_by_user: 'auth0|103',
      photo: 'palmerston_recycling.jpg',
    },
    {
      id: 14,
      name: 'Coastal cleanup at Fitzroy Beach',
      location: 'New Plymouth',
      date: '2022-11-20',
      description:
        'Coastal cleanup at Fitzroy Beach. Surfs up! But first, lets pick up some rubbish.',
      added_by_user: 'auth0|104',
      photo: 'fitzroy_beach_cleanup.jpg',
    },
    {
      id: 15,
      name: 'Native tree planting at Titirangi Reserve',
      location: 'Gisborne',
      date: '2022-10-10',
      description:
        'Native tree planting at Titirangi Reserve. Plant a tree, make a bird happy.',
      added_by_user: 'auth0|105',
      photo: 'titirangi_reserve_trees.jpg',
    },
  ])
}
