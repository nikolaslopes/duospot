import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  console.log('access')
  return response.json([
    {
      id: 1,
      name: 'Nikolas',
    },
  ])
})

app.listen(3333)
