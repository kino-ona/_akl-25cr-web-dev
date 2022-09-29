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
        let mainData = '%7B%0A%20%20%20%22maxRpm%22%3A148%2C%0A%20%20%20%22avgRpm%22%3A2916%2C%0A%20%20%20%22totCalories%22%3A3.2999999999999998%2C%0A%20%20%20%22shareType%22%3A%221%22%2C%0A%20%20%20%22totMusclePoint%22%3A130.5%2C%0A%20%20%20%22maxMusclePoint%22%3A68%2C%0A%20%20%20%22totExerciseTime%22%3A349%2C%0A%20%20%20%22date%22%3A%222022%EB%85%84%209%EC%9B%94%2026%EC%9D%BC%20%EC%9B%94%EC%9A%94%EC%9D%BC%22%2C%0A%20%20%20%22totDistance%22%3A140%2C%0A%20%20%20%22recentlyClassList%22%3A%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%22classId%22%3A%22318%22%2C%0A%20%20%20%20%20%20%20%20%20%22classNm%22%3A%22%EB%AA%A8%EB%91%90%EB%8B%A4%20%EC%8A%A4%ED%94%BC%EB%8B%9D%2C%20%EB%8B%A4%ED%84%B0%EB%9F%AC%20%EA%B0%80%EC%A6%88%EC%95%84%20%22%2C%0A%20%20%20%20%20%20%20%20%20%22calories%22%3A1%2C%0A%20%20%20%20%20%20%20%20%20%22contentsType%22%3A%22VV%22%2C%0A%20%20%20%20%20%20%20%20%20%22lectureName%22%3A%22%EB%AA%BD%ED%80%B4%EC%8C%A4%2C%EB%8B%A4%EB%9E%8C%EC%A5%90%EC%8C%A4%2C%EC%B2%9C%EC%82%AC%EB%A1%9C%EC%9A%B4%2C%EC%9C%A4%EC%B4%88%EB%A1%B1%EC%8C%A4(%EA%B0%95%EC%82%AC%EA%B6%8C%ED%95%9C%20TEST)%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%22classNm%22%3A%22%ED%83%80%EC%9D%B4%EB%A8%B8%20%ED%85%8C%EC%8A%A4%ED%8A%B82%20(%EC%83%88%EB%A1%AD%EA%B2%8C)%22%2C%0A%20%20%20%20%20%20%20%20%20%22lectureName%22%3A%22%EB%8B%A4%EB%9E%8C%EC%A5%90%EC%8C%A4%22%2C%0A%20%20%20%20%20%20%20%20%20%22contentsType%22%3A%22VV%22%2C%0A%20%20%20%20%20%20%20%20%20%22calories%22%3A0%2C%0A%20%20%20%20%20%20%20%20%20%22classId%22%3A%22340%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%22classNm%22%3A%229%EC%9B%94%2026%EC%9D%BC%20%EC%9B%94-%EC%95%84%EC%B9%A89%EC%8B%9Casdasdasdasdadadadadadasdadadadasdasdasd%EB%B0%98%20%EC%8A%A4%ED%94%BC%EB%8B%9D%20%22%2C%0A%20%20%20%20%20%20%20%20%20%22calories%22%3A1%2C%0A%20%20%20%20%20%20%20%20%20%22contentsType%22%3A%22LL%22%2C%0A%20%20%20%20%20%20%20%20%20%22classId%22%3A%22354%22%2C%0A%20%20%20%20%20%20%20%20%20%22lectureName%22%3A%22%EB%8B%A4%EB%9E%8C%EC%A5%90%EC%8C%A4%2C%EB%93%B1%EB%A1%9D%ED%85%8C%EC%8A%A4%ED%8A%B8sdasdasdasd%EC%9E%85%EB%8B%88%EB%8B%A4%20%2C%EB%8F%99%EA%B7%B8%EB%9E%80%EC%83%98%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%22calories%22%3A0%2C%0A%20%20%20%20%20%20%20%20%20%22contentsType%22%3A%22LL%22%2C%0A%20%20%20%20%20%20%20%20%20%22classNm%22%3A%229%EC%9B%94%2026%EC%9D%BC%20%EC%9B%94-%EC%95%84%EC%B9%A8asdasdasdasdasdasdasdasd9%EC%8B%9C%EB%B0%98%20%EC%8A%A4%ED%94%BC%EB%8B%9D%20%22%2C%0A%20%20%20%20%20%20%20%20%20%22lectureName%22%3A%22%EB%8B%A4%EB%9E%8C%EC%A5%90%EC%8C%A4%2C%EB%93%B1%EB%A1%9D%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9E%85%EB%8B%88%EB%8B%A4%20%2C%EB%8F%99%EA%B7%B8%EB%9E%80%EC%83%98%22%2C%0A%20%20%20%20%20%20%20%20%20%22classId%22%3A%22354%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%5D%0A%7D'
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