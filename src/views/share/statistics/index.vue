<template>
  <!-- TODO - 퍼블 나오면 <template>을 새롭게 제작해서 안에 값을 치환하는 식으로 제작하면 됨 -->
  <div>{{ state.result.date }}</div>
  <div>{{ getEnumData("term", state.result.term) }} | {{ getEnumData("exeType", state.result.exeType) }} </div>
  <div>{{ state.clickValue }}</div>
  <span v-for="statistics in state.result.dataList" :key="statistics" @click="setClickValue(statistics.data)">
    {{ statistics.data }} {{ statistics.date }} &nbsp;&nbsp;
  </span>
  <div>최근 일별 머슬 포인트</div>
  <div>{{ state.result.avgData }}</div>
  <div>{{ state.result.maxData }}</div>
  <button @click="sendCaptureImage">Image 전송</button>
  <functionComponent></functionComponent>
</template>

<script>
import { reactive, getCurrentInstance, onBeforeMount, watchEffect } from "vue";
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
        term: "",
        exeType: "",
        dataList: [],
        avgData: 0,
        maxData: 0
      },
      clickValue: 100
    })

    // TODO - Native App 테스트 완료 시 onBeforeMount 삭제 후 functionComponent 내 주석 해제
    onBeforeMount(() => {
      let result = {
        date: window.mainData.date,
        term: window.mainData.term,
        exeType: window.mainData.exeType,
        dataList: window.mainData.dataList,
        avgData: window.mainData.avgData,
        maxData: window.mainData.maxData
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

    const setClickValue = (value) => {
      state.clickValue = value
    }

    const getEnumData = (enumType, value) => {
      return proxy.$getEnumData(enumType, value)
    }

    return {
      sendCaptureImage,
      setClickValue,
      getEnumData,
      state
    }
  }
}
</script>