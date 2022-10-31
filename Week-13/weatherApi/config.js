// https://www.weatherapi.com/
const API_KEY = '8cee9e56d28646879ac134613222910'

const PORT = 8080
const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`
const foreCastUrl = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}`
const historyUrl = `http://api.weatherapi.com/v1/history.json?key=${API_KEY}`

module.exports = { PORT, url, foreCastUrl, historyUrl }
