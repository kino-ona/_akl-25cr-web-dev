<template>
  <recordShare01Vue v-if="this.result.exerciseModeCode != '04'" :result="this.result"></recordShare01Vue>
  <recordShare02Vue v-else-if="this.result.exerciseModeCode == '04'" :result="this.result"></recordShare02Vue>
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
  mounted(){
    // this.result = JSON.parse(sessionStorage.getItem("mainData"));
    this.result = this.$store.state.mainData;
  },
  // setData를 통한 데이터 변화 감지
  computed:{
    getMainData(){return this.$store.getters.getMainData}
  },
  watch:{
    getMainData(val){
      this.result = val
    }
  },

}
</script>