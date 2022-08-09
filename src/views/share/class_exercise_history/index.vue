<template>
  <!-- TODO - 퍼블 나오면 <template>을 새롭게 제작해서 안에 값을 치환하는 식으로 제작하면 됨 -->
  <div>{{ state.result.date }}</div>
  <div v-if="state.result.exerciseModeCode == '02'">
    {{ getEnumData("exerciseModeCode", state.result.exerciseModeCode) }}
  </div>
  <div v-if="state.result.isFree">Free 배지 노출</div>
  <div>{{ state.result.classTitle }}</div>
  <div v-if="state.result.exerciseModeCode != '04'">
    <span>{{ state.result.lectureName }}</span>
    <span>{{ getEnumData("classWorkoutCategoryCode", state.result.classWorkoutCategoryCode) }}</span>
    <span>{{ state.result.classLevelCode }}</span>
  </div>
  <div v-if="state.result.exerciseModeCode != '04'">
    <div>{{ state.result.musclePoint }}</div>
    <div>{{ state.result.distence }}</div>
    <div>{{ state.result.exerciseTime }}</div>
    <div>{{ state.result.calories }}</div>
  </div>
  <div v-else>
    <div>{{ state.result.distence }}</div>
    <div>{{ state.result.exerciseTime }}</div>
    <div>{{ state.result.calories }}</div>
    <div>{{ state.result.avgSpeed }}</div>
  </div>
  <button @click="sendCaptureImage">Image 전송</button>
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

    // TODO - Native App 테스트 완료 시 onBeforeMount 삭제 후 functionComponent 내 주석 해제
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