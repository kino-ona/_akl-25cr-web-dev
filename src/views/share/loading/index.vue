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
      interval1 : null,
    }
  },
  mounted() {
    let result = {
      path: this.$route.query.path,
    }
    this.getData(result)
  },
  methods : {
    getData(result){
      if(window.isMobile.any()) {
        // 휴대폰을 이용해 접근한 경우
        console.log("Mobile로 접근 성공")
        let url = {'func' : 'setData','callback' : 'setData','param' : 'null'};
        window.getData(url);
      } else {
        // Web상에서 테스트 하는 경우
        console.log("Web 상에서 Test 진행 :::::::::::: ", this.mainData);
        let mainData = '%7B%0A%20%20%22date%22%3A%20%222022%EB%85%84%201%EC%9B%94%2010%EC%9D%BC%20%EC%98%A4%ED%9B%84%209%3A30%22%2C%0A%20%20%22classTitle%22%3A%20%22%EC%8A%A4%ED%94%BC%EB%8B%9D%20%ED%81%AC%EB%A3%A8%20%ED%8C%8C%EC%9D%B4%ED%84%B0%22%2C%0A%20%20%22lectureName%22%3A%20%22%EC%95%94%EC%9B%A8%EC%9D%B4%EA%B0%95%EC%82%AC%EB%8B%98%20%20%22%2C%0A%20%20%22exerciseModeCode%22%3A%20%2202%22%2C%0A%20%20%22isFree%22%3A%20true%2C%0A%20%20%22classWorkoutCategoryCode%22%3A%20%2203%22%2C%0A%20%20%22classLevelCode%22%3A%20%22L%22%2C%0A%20%20%22musclePoint%22%3A%200%2C%0A%20%20%22distence%22%3A%205.2%2C%0A%20%20%22exerciseTime%22%3A%20123123%2C%0A%20%20%22calories%22%3A%202645%2C%0A%20%20%22avgSpeed%22%3A%200%0A%7D'
        window.setData(mainData);
      }
      this.$router.push({
        path: result.path
      }).catch((reason)=>{
        console.log("페이지 이동에 실패했습니다.")
        this.mainData = '라우팅 도중에 에러가 발생했어 체크해볼래?\n' + reason
      });
    }
  }
}
</script>