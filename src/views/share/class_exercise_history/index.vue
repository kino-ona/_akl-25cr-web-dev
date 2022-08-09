<template>
  <!-- TODO - 퍼블 나오면 <template>을 새롭게 제작해서 안에 값을 치환하는 식으로 제작하면 됨 -->
  <recordShare01Vue v-if="state.result.exerciseModeCode != '04'" :result="state.result"></recordShare01Vue>
  <recordShare02Vue v-else :result="state.result"></recordShare02Vue>
  <button @click="sendCaptureImage">Image 전송</button>
</template>

<script>
import { watchEffect, reactive, getCurrentInstance, onBeforeMount } from "vue";
import recordShare01Vue from './record-share01.vue';
import recordShare02Vue from './record-share02.vue';


export default {
  components: {
    recordShare01Vue,
    recordShare02Vue
  },
  setup () {
    const { proxy } = getCurrentInstance();
    const state = reactive({
      result: {
        date: "",
        classTitle: "",
        lectureName: "",
        exerciseModeCode: "", // 01: 라이브, 02: 재방송, 03: VOD, 04: 라이트모드
        isFree: "", // 라이브, 재방송, 라이트모드는 모두 false가 Default
        classWorkoutCategoryCode: "", // 스피닝, EMS, 스피닝 + EMS
        classLevelCode: "",
        musclePoint: 0,
        distence: 0,
        exerciseTime: "",
        calories: 0,
        avgSpeed: 0 // 라이트모드일 경우만 제공
      }
    })

    onBeforeMount(() => {
      let result = {
        date: window.mainData.date,
        classTitle: window.mainData.classTitle,
        lectureName: window.mainData.lectureName,
        exerciseModeCode: window.mainData.exerciseModeCode, // 01: 라이브, 02: 재방송, 03: VOD, 04: 라이트모드
        isFree: true, // 라이브, 재방송, 라이트모드는 모두 false가 Default
        classWorkoutCategoryCode: window.mainData.classWorkoutCategoryCode, // 01: 스피닝, 02: EMS, 03: 스피닝+EMS
        classLevelCode: window.mainData.classLevelCode,
        musclePoint: window.mainData.musclePoint,
        distence: window.mainData.distence,
        exerciseTime: window.mainData.exerciseTime,
        calories: window.mainData.calories,
        avgSpeed: window.mainData.avgSpeed
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