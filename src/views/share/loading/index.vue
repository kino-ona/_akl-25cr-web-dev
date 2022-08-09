<template>
  로딩중입니다.
  <a href="clubtaola://host?callbackFunction=setData">가보자잇!</a>
  <button @click="getData()">가자잇!</button>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { reactive, getCurrentInstance, onBeforeMount } from "vue";
import functionComponent from "@/components/functionComponent.vue"

export default {
  components: {
    functionComponent,
  },
  setup () {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const router = useRouter();

    onBeforeMount(() => {
      let result = {
        path: route.query.path,
      }
      getData(result)
    })

    const getData = (result) => {
      // 휴대폰을 이용해 접근한 경우
      if(window.isMobile.any()) {
        console.log("Mobile로 접근 성공")
        let url = {'func' : 'setData','callback' : 'setData','param' : 'null'};
        window.getData(url);
        router.push({
          path: result.path
        })
        // Web상에서 테스트 하는 경우
      } else {
        console.log("Web 상에서 Test 진행")
        let mainData = {
          "image": "https://25cr.dev.amway.co.kr/media/badgeImg/sample.png",
          "iconCode": "01",
          "celebrityMessage": "스피닝조와김연재님, 축하합니다.",
          "title": "YB홀릭 1"
        }
        window.setData(mainData);
        router.push({
          path: result.path
        })
      }
    }

    return {
      getData
    }
  }
}
</script>