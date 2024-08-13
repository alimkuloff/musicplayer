import RouteController from "./routes";

const client_id = 'd715cdd11d8d407e834aec489efa27d5';
const client_secret = '9221442bd9b8474ba247234c8c7ef003';

const authOptions = {
  method: 'POST',
  headers: {
    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: new URLSearchParams({
    grant_type: 'client_credentials'
  })
};

fetch('https://accounts.spotify.com/api/token', authOptions)
  .then(response => response.json())
  .then(data => {
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
    } else {
      console.error('Failed to retrieve access token:', data);
    }
  })
  .catch(error => console.error('Error:', error));


function App() {

  return (
    <>
     <RouteController />
    </>
  )
}

export default App