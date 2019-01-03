import axios from 'axios'

const apiData = {}

apiData.getFilmList = (obj) => {
  return axios.post(`filmSearch/?type=${obj.type}&class=${obj.class}&page=${obj.page}`)
}
export default apiData