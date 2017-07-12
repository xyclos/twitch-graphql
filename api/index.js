const fetch = require('node-fetch')
const {twitch} = require('../secrets')

const API_URL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = twitch.clientId


async function fetchJson(url) {
  const res = await fetch(url);

  return await res.json(null);
}

async function getUser(name) {
  return await fetchJson(`${API_URL}/users/${name}?client_id=${CLIENT_ID}`);
}

async function getChannel(name) {
  return await fetchJson(`${API_URL}/channels/${name}?client_id=${CLIENT_ID}`);
}

async function getStream(name) {
  return (await fetchJson(`${API_URL}/streams/${name}?client_id=${CLIENT_ID}`)).stream;
}


module.exports = {
  getUser,
  getChannel,
  getStream
}
