import axios from "axios"

export const fetchData = async (str) => {
  const apiEp = `http://www.omdbapi.com/?t=${str}&apikey=ea9fbbc9`
  try {
    const { data } = await axios.get(apiEp)
    return data
  } catch (error) {
    console.log(error)
  }
}
