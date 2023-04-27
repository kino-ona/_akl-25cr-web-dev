import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import isMobile from './functions/isMobile'
import sendCaptureImage from "./functions/sendCaptureImage"
import getEnumData from './functions/enums'
import http from './functions/http'
import getNoticeLastIndex from './functions/getNoticeLastIndex'
import windowCapture from './functions/windowCapture'
import windowCaptureFirst from './functions/windowCaptureFirst'
import setData from './functions/setData'
import getData from './functions/getData'
import "@/assets/scss/global.scss";

Vue.config.productionTip = false

window.isMobile = new isMobile();
Vue.prototype.$getEnumData= getEnumData;
Vue.prototype.$sendCaptureImage = sendCaptureImage;
Vue.prototype.$http= http;
Vue.prototype.$windowCapture = windowCapture;
Vue.prototype.$windowCaptureFirst = windowCaptureFirst;

// Window Function으로 등록함으로서 Native App에서 해당 함수를 호출할 수 있도록 설정
window.sendCaptureImage = sendCaptureImage;
window.setData = setData;
window.getData = getData;
window.windowCapture = windowCapture;
window.windowCaptureFirst = windowCaptureFirst;
window.getNoticeLastIndex = getNoticeLastIndex;
window.setTimeout = setTimeout;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')