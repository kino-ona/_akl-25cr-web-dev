<template>
  <section>
    로딩중입니다.
    <a href="clubtaola://host?callbackFunction=setData">가보자잇!</a>
    <button @click="getData()">가자잇!</button>
  </section>
</template>

<script>
export default {
  created() {
    let result = {
      path: this.$route.query.path,
    }
    this.getData(result)
  },
  methods : {
    getData(result){
      // 휴대폰을 이용해 접근한 경우
      if(window.isMobile.any()) {
        console.log("Mobile로 접근 성공")
        let url = {'func' : 'setData','callback' : 'setData','param' : 'null'};
        window.getData(url);
        setTimeout(function () {
          this.$router.push({
            path: result.path
          })
        }, 1000);
      // Web상에서 테스트 하는 경우
      } else {
        console.log("Web 상에서 Test 진행 :::::::::::: ", this.result);
        let mainData = '%7B%0A%20%20%22date%22%3A%20%222022%EB%85%84%201%EC%9B%94%2013%EC%9D%BC%20%EB%AA%A9%EC%9A%94%EC%9D%BC%22%2C%0A%20%20%22totMusclePoint%22%3A%20%22%22%2C%0A%20%20%22maxMusclePoint%22%3A%200%2C%0A%20%20%22maxRpm%22%3A%200%2C%0A%20%20%22avgRpm%22%3A%200%2C%0A%20%20%22totCalories%22%3A%200%2C%0A%20%20%22totExerciseTime%22%3A%200%2C%0A%20%20%22totDistance%22%3A%200%2C%0A%20%20%22recentlyVod%22%3A%20%7B%0A%20%20%7D%2C%0A%20%20%22recentlyLive%22%3A%20%7B%0A%20%20%7D%0A%7D'
        window.setData(mainData);
        this.$router.push({
          path: result.path
        })
      }
    }
  }
}
</script>