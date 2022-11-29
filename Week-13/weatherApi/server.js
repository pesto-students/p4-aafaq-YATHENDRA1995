const express = require('express')

const { PORT } = require('./config')
const { getCityWeather, getDetailedWeatherInfo, getCityDate } = require('./utils')
const app = express()
app.use(express.json())

/** Home URL gives info */
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello this is a weather api project',
    '/multipleCities': 'Get multiple cities data with pagination',
    '/detailedForecast': 'Get detailed forecast with city and days',
    '/cityDate': 'Get weather info of a city for a particular date',
  })
})

/** API which returns weather data of multiple cities with pagination */
// {
//   "cities": ["nandyal", "london", "kolkata", "delhi", "hyderabad", "chennai"],
//   "take": 3,
//   "skip":3
// }
app.post('/multipleCities', async (req, res) => {

  let reqInfo = req?.body
  let resInfo = []

  if (reqInfo && reqInfo?.take && reqInfo?.cities?.length) {
    // Getting each city data
    let skip = reqInfo?.skip || 0
    let filteredCities = reqInfo?.cities?.filter((item, index) => (index >= skip && index < skip + reqInfo?.take))
    for (let city of filteredCities) {
      resInfo.push(await getCityWeather(city))
    }
    await res.status(200).json({ data: resInfo })
  } else {
    await res.status(200).json({ data: resInfo, message: 'Need atleast 1 city and take key' })
  }

})

/** API which returns detailed forecast */
// {
//   "city":"london",
//   "days":10
// }
app.post('/detailedForecast', async (req, res) => {

  let reqInfo = req?.body
  let resInfo = {}

  if (reqInfo && reqInfo?.city && reqInfo?.days) {
    resInfo = await getDetailedWeatherInfo(reqInfo?.city, reqInfo?.days)
    await res.status(200).json({ data: resInfo })
  } else {
    await res.status(200).json({ data: resInfo, message: 'Need city and number of days' })
  }

})

/** API which returns data of a paricular city and particular date */
// {
//   "city":"london",
//   "date":"2022-10-01"
// }
app.post('/cityDate', async (req, res) => {

  let reqInfo = req?.body
  let resInfo = {}

  if (reqInfo && reqInfo?.city && reqInfo?.date) {
    resInfo = await getCityDate(reqInfo?.city, reqInfo?.date)
    await res.status(200).json({ data: resInfo })
  } else {
    await res.status(200).json({ data: resInfo, message: 'Need city and date' })
  }

})


app.listen(PORT, () => { console.log(`Listening on PORT : ${PORT}`) })
