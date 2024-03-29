import axios from "axios";
// import searchbar from "./components/UI/Searchbar";

export const callAPI = async (method, slug, params) => {
  const host = 'https://192.168.29.220:8081'

  if (method === 'GET') {
    try {
      const res = await axios.get(`${host}${slug}`)
      console.log(`${res.status}: ${res.data.message}`)

      return res.data

    } catch (err) {
      console.error(`${err.response.status}: ${err.response.data.message}`)

      let data = err.response.data
      data["status"] = err.response.status

      return data
    }

  } else if (method === 'POST') {
    try {
      const res = await axios.post(`${host}${slug}`, params)
      console.log(`${res.status}: ${res.data.message}`)

      return res.data

    } catch (err) {
      console.error(`${err.response.status}: ${err.response.data.message}`)

      let data = err.response.data
      data["status"] = err.response.status

      return data
    }
  }
}

/* export const callSatellites = async () => {
  const host = 'http://192.168.29.220:8008'

  try {
    const res = await axios.get(`${host}/all`)
    console.log(JSON.stringify(res.data))

    return JSON.stringify(res)

  } catch (err) {

    return err
  }

}

export const callSatelliteById = async (searchInput) => {
  const host = 'http://192.168.29.220:8008'

  try {
    const res = await axios.get(`${host}/id/${searchInput}`)
    console.log(JSON.stringify(res.data))

    return JSON.stringify(res)

  } catch (err) {
    throw err
    return err
  }

} */