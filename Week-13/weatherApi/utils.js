const axios = require('axios')
const { url, foreCastUrl, historyUrl } = require('./config')

const getCityWeather = async (city) => {
  try {
    const response = await axios.get(`${url}&q=${city}`);
    return response.data
  }
  catch (err) {
    console.log(err)
  }
}

const getDetailedWeatherInfo = async (city, days) => {
  try {
    const response = await axios.get(`${foreCastUrl}&q=${city}&days=${days}`);
    return response.data
  }
  catch (err) {
    console.log(err)
  }
}

const getCityDate = async (city, date) => {
  try {
    console.log('getCityDate', `${historyUrl}&q=${city}&dt=${date}`)
    const response = await axios.get(`${historyUrl}&q=${city}&dt=${date}`);
    return response.data
  }
  catch (err) {
    console.log(err)
  }
}

module.exports = { getCityWeather, getDetailedWeatherInfo, getCityDate }