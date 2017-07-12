const fetch = require('node-fetch')
const {twitch} = require('../secrets')

const API_URL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = twitch.clientId

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-ID': CLIENT_ID
    }
  });

  return await res.json(null);
}

async function getUser(name) {
  return await fetchJson(`${API_URL}/users/${name}`);
}

async function getChannel(name) {
  return await fetchJson(`${API_URL}/channels/${name}`);
}

async function getStream(name) {
  return (await fetchJson(`${API_URL}/streams/${name}`)).stream;
}

async function getStreams(offset) {
  offset = offset || 0
  return (await fetchJson(`${API_URL}/streams?offset=${offset}`)).streams
}

async function getStreamSummary (game) {
  game = game || ''
  return await fetchJson(`${API_URL}/streams/summary/?game=${game}`)
}


module.exports = {
  getUser,
  getChannel,
  getStream,
  getStreams,
  getStreamSummary
}
