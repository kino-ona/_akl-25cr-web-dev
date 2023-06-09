// 페이지가 로딩되기 전 호출해야 하는 함수
import store from '../store/index';

export default function setData(data) {
    // 데이터는 Key, Value 형식의 데이터로 전달 필요(ex. JSON)
    if(typeof(data) == 'string'){
        store.commit('SETDATA', JSON.parse(decodeURIComponent(data)))
        // sessionStorage.setItem("mainData", decodeURIComponent(data))
    } else {
        store.commit('SETDATA', JSON.parse(data))
        // sessionStorage.setItem("mainData", data)
    }
}