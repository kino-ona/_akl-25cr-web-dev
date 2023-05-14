import axios from 'axios';
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL; //서버주소
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
export default axios;