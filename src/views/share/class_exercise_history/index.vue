<template>
  <!-- TODO - 퍼블 나오면 <template>을 새롭게 제작해서 안에 값을 치환하는 식으로 제작하면 됨 -->
  <recordShare01Vue v-if="this.result.exerciseModeCode != '04'" :result="this.result"></recordShare01Vue>
  <recordShare02Vue v-else :result="this.result"></recordShare02Vue>
</template>

<script>
import recordShare01Vue from './record-share01.vue';
import recordShare02Vue from './record-share02.vue';

export default {
  components: {
    recordShare01Vue,
    recordShare02Vue
  },

  data(){
    return {
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
    }
  },
  created(){
    let mainData = JSON.parse(sessionStorage.getItem("mainData"));
    let result = {
      date: mainData.date,
      classTitle: mainData.classTitle,
      lectureName: mainData.lectureName,
      exerciseModeCode: mainData.exerciseModeCode, // 01: 라이브, 02: 재방송, 03: VOD, 04: 라이트모드
      isFree: true, // 라이브, 재방송, 라이트모드는 모두 false가 Default
      classWorkoutCategoryCode: mainData.classWorkoutCategoryCode, // 01: 스피닝, 02: EMS, 03: 스피닝+EMS
      classLevelCode: mainData.classLevelCode,
      musclePoint: mainData.musclePoint,
      distence: mainData.distence,
      exerciseTime: mainData.exerciseTime,
      calories: mainData.calories,
      avgSpeed: mainData.avgSpeed
    }
    this.result = result
  },

  // watch: {
  //   // 질문이 변경될 때 마다 이 기능이 실행됩니다.
  //   result: function () {
  //     // TODO $windowCapture이거 실행되는지 체크
  //     this.$windowCapture();
  //     console.log("데이터 변경 체크 : ", this.result);
  //   }
  // },

  methods : {
    sendCaptureImage() {
      this.$sendCaptureImage()
    },
    getEnumData(enumType, value) {
      return this.$getEnumData(enumType, value)
    }
  }
}
</script>