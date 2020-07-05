import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://weather.livedoor.com/forecast/webservice/json/',
  responseType: 'json'
})

export default Axios
