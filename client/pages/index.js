import buildClient from '../api/build-client'

const Landing = ({ currentUser }) => (
  <h1>{currentUser ? 'You are signed in' : 'You are not signed in'}</h1>
)

Landing.getInitialProps = async (context) => {
  const client = buildClient(context)
  const { data } = await client.get('/api/users/currentuser')

  return data
}

export default Landing
