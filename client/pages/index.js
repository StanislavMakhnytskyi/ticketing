import axios from 'axios'

const Landing = ({ currentUser }) =>
  <h1>Landing Page</h1>

Landing.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    const { data } = await axios
      .get(
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
        {
          headers: req.headers,
        }
      )
      .catch((e) => console.log(e))

    return data
  } else {
    const { data } = await axios
      .get('/api/users/currentuser')
      .catch((e) => console.log(e))

    return data
  }
}

export default Landing
