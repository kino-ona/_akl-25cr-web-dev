<template>
  <!-- TODO - 퍼블 나오면 <template>을 새롭게 제작해서 안에 값을 치환하는 식으로 제작하면 됨 -->
  <div>{{ state.result.date }}</div>
  <div>총머슬포인트</div>
  <div>{{ state.result.totMusclePoint }}</div>
  <div>{{ state.result.maxMusclePoint }}</div>
  <div>{{ state.result.maxRpm }}</div>
  <div>{{ state.result.avgRpm }}</div>
  <div>{{ state.result.totCalories }}</div>
  <div>{{ state.result.totDistance }}</div>
  <div>{{ state.result.totExerciseTime }}</div>

  <button @click="sendCaptureImage">Image 전송</button>
  <functionComponent></functionComponent>
</template>

<script>
import { watchEffect, reactive, getCurrentInstance, onBeforeMount } from "vue";
import functionComponent from "@/components/functionComponent.vue"

export default {
  components: {
    functionComponent,
  },
  setup () {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      result: {
        date: "",
        totMusclePoint: "",
        maxMusclePoint: "",
        maxRpm: "",
        avgRpm: "",
        totCalories: "",
        totDistance: 0,
        totExerciseTime: "",
        // recentlyVod:[],
        // recentlyLive: [],
        // calDataInfoList: []
      }
    })

    // TODO - Native App 테스트 완료 시 onBeforeMount 삭제 후 functionComponent 내 주석 해제
    onBeforeMount(() => {
      let result = {
        date: window.mainData.date,
        totMusclePoint: window.mainData.totMusclePoint,
        maxMusclePoint: window.mainData.maxMusclePoint,
        maxRpm: window.mainData.maxRpm,
        avgRpm: window.mainData.avgRpm,
        totCalories: window.mainData.totCalories,
        totDistance: window.mainData.totDistance,
        totExerciseTime: window.mainData.totExerciseTime,
        // recentlyVod: window.mainData.recentlyVod,
        // recentlyLive: window.mainData.recentlyLive,
        // calDataInfoList: window.mainData.calDataInfoList
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

    const getEnumData = (enumType, value) => {
      return proxy.$getEnumData(enumType, value)
    }

    return {
      sendCaptureImage,
      getEnumData,
      state
    }
  }
}
</script>