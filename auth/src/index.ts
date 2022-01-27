import express, { json } from 'express'

const app = express()
app.use(json())

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hello')
})

app.listen(3000, () => {
  console.log('Listening on port 3000, auth')
})
