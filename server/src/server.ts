import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  console.log('access')
  return response.json([
    {
      id: 1,
      name: 'Nikolas',
    },
    {
      id: 2,
      name: 'Kiki',
    },
    {
      id: 3,
      name: 'Zuzu',
    },
  ])
})

app.listen(3333)
