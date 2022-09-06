<template>
  <section>
    <div>
      {{ this.mainData }}
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mainData: "로딩중입니다",
      interval1 : null
    }
  },
  mounted() {
    let result = {
      path: this.$route.query.path,
    }
    this.getData(result)
  },
  methods : {
    waitPageData(result){
      this.$router.push({
        path: result.path
      }).catch((reason)=>{
        console.log("페이지 이동에 실패했습니다.")
        this.statusVal = '라우팅 도중에 에러가 발생했어 체크해볼래?\n' + reason
      });
    },
    getData(result){
      if(window.isMobile.any()) {
        // 휴대폰을 이용해 접근한 경우
        console.log("Mobile로 접근 성공")
        let url = {'func' : 'setData','callback' : 'setData','param' : 'null'};
        window.getData(url);
      } else {
        // Web상에서 테스트 하는 경우
        console.log("Web 상에서 Test 진행 :::::::::::: ", this.statusVal);
        let mainData = '%7B%0A%20%20%22date%22%3A%20%222022%EB%85%84%201%EC%9B%94%2013%EC%9D%BC%20%EB%AA%A9%EC%9A%94%EC%9D%BC%22%2C%0A%20%20%22totMusclePoint%22%3A%200%2C%0A%20%20%22maxMusclePoint%22%3A%200%2C%0A%20%20%22maxRpm%22%3A%200%2C%0A%20%20%22avgRpm%22%3A%200%2C%0A%20%20%22totCalories%22%3A%200%2C%0A%20%20%22totExerciseTime%22%3A%200%2C%0A%20%20%22totDistance%22%3A%200%2C%0A%20%20%22recentlyVod%22%3A%20%7B%0A%20%20%20%20%22classId%22%3A%20%220001%22%2C%0A%20%20%20%20%22lectureName%22%3A%20%22%EC%8A%A4%ED%94%BC%EB%8B%9D%EA%B0%95%EC%82%AC%22%2C%0A%20%20%20%20%22classNm%22%3A%20%22%EC%8B%A0%EB%82%98%EB%8A%94%EC%8A%A4%ED%94%BC%EB%8B%9D%EC%9D%98%22%2C%0A%20%20%20%20%22calories%22%3A%20100%0A%20%20%7D%2C%0A%20%20%22recentlyLive%22%3A%20%7B%0A%20%20%20%20%22classId%22%3A%20%220002%22%2C%0A%20%20%20%20%22lectureName%22%3A%20%22%EC%8A%A4%ED%94%BC%EB%8B%9D%EB%AA%BD%ED%82%A4%EC%8C%A4%22%2C%0A%20%20%20%20%22classNm%22%3A%20%22%ED%99%94%EB%A0%A4%ED%95%9C%EC%A1%B0%EB%AA%85%EC%9D%B4%EB%82%98%EB%A5%BC%EA%B0%90%EC%8B%B8%EB%84%A4%22%2C%0A%20%20%20%20%22calories%22%3A%20200%0A%20%20%7D%2C%0A%20%20%22shareType%22%3A%202%0A%7D'
        window.setData(mainData);
      }

      // setData가 실행되도록 대기
      this.interval1 = setTimeout(()=>{
        this.waitPageData(result)
      }, 2000)
    }
  }
}
</script>