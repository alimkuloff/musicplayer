const CLIENT_ID = "d715cdd11d8d407e834aec489efa27d5";
const CLIENT_SECRET = "9221442bd9b8474ba247234c8c7ef003";

export const getToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();

  localStorage.setItem("spotify_access_token", data.access_token);

  return data.access_token;
};
