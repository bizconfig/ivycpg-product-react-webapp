import axios from 'axios'

const instance = axios.create({
    baseURL:'https://bizconfig-26621.firebaseio.com/'
})

export default instance;