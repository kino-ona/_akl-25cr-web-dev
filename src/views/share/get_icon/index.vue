<template>
  <div v-if="state.result.iconCode == '01'">배지 획득</div>
  <div v-else-if="state.result.iconCode == '02'">머슬핀 달성</div>
  <div v-else-if="state.result.iconCode == '03'">미션 성공</div>
  <img :src="state.result.image"/>
  <div>{{ state.result.celebrityMessage }}</div>
  <div>{{ state.result.title }}</div>
  <button @click="sendCaptureImage">Image 전송</button>
  <functionComponent></functionComponent>
</template>

<script>
import { useRoute } from 'vue-router'
import { watchEffect, reactive, getCurrentInstance, onBeforeMount } from "vue";
import functionComponent from "@/components/functionComponent.vue"

export default {
  components: {
    functionComponent,
  },
  setup () {
    const { proxy } = getCurrentInstance();
    const route = useRoute();
    const state = reactive({
      result: {
        image: "",
        iconCode: "", // 01: 배지 or 02: 머슬핀 or 03: 미션
        celebrityMessage: "",
        title: ""
      }
    })

    // TODO - Native App 테스트 완료 시 onBeforeMount 삭제 후 functionComponent 내 주석 해제
    onBeforeMount(() => {
      let result = {
        image: window.mainData.image,
        iconCode: window.mainData.iconCode, // 01: 배지 or 02: 머슬핀 or 03: 미션
        celebrityMessage: window.mainData.celebrityMessage,
        title: window.mainData.title
      }
      state.result = result
    })

    watchEffect(() => {
      proxy.$windowCapture()
      console.log("데이터 변경 체크 : ", state.result)
    })

    const sendCaptureImage = () => {
      proxy.$sendCaptureImage()
    }

    return {
      sendCaptureImage,
      state
    }
  }
}
</script>