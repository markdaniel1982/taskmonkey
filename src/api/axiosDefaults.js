import axios from "axios";

axios.defaults.baseURL = "https://md82-p5-api-93955a9ca799.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true