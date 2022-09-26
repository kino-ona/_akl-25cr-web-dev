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
    getData(result){
      if(window.isMobile.any()) {
        // 휴대폰을 이용해 접근한 경우
        console.log("Mobile로 접근 성공")
        let url = {'func' : 'setData','callback' : 'setData','param' : 'null'};
        window.getData(url);
      } else {
        // Web상에서 테스트 하는 경우
        console.log("Web 상에서 Test 진행 :::::::::::: ", this.mainData);
        let mainData = '%7B%22totDistance%22:140,%22maxRpm%22:148,%22avgRpm%22:2916,%22date%22:%222022%EB%85%84%209%EC%9B%94%2026%EC%9D%BC%20%EC%9B%94%EC%9A%94%EC%9D%BC%22,%22totExerciseTime%22:349,%22totMusclePoint%22:130.5,%22maxMusclePoint%22:68,%22totCalories%22:3.2999999999999998,%22recentlyClassList%22:%5B%7B%22calories%22:1,%22contentsType%22:%22VV%22,%22classId%22:%22318%22,%22lectureName%22:%22%EB%AA%BD%ED%80%B4%EC%8C%A4,%EB%8B%A4%EB%9E%8C%EC%A5%90%EC%8C%A4,%EC%B2%9C%EC%82%AC%EB%A1%9C%EC%9A%B4,%EC%9C%A4%EC%B4%88%EB%A1%B1%EC%8C%A4(%EA%B0%95%EC%82%AC%EA%B6%8C%ED%95%9C%20TEST)%22,%22classNm%22:%22%EB%AA%A8%EB%91%90%EB%8B%A4%20%EC%8A%A4%ED%94%BC%EB%8B%9D,%20%EB%8B%A4%ED%84%B0%EB%9F%AC%20%EA%B0%80%EC%A6%88%EC%95%84%20%22%7D,%7B%22classId%22:%22340%22,%22contentsType%22:%22VV%22,%22classNm%22:%22%ED%83%80%EC%9D%B4%EB%A8%B8%20%ED%85%8C%EC%8A%A4%ED%8A%B82%20(%EC%83%88%EB%A1%AD%EA%B2%8C)%22,%22lectureName%22:%22%EB%8B%A4%EB%9E%8C%EC%A5%90%EC%8C%A4%22,%22calories%22:0%7D,%7B%22calories%22:1,%22lectureName%22:%22%EB%8B%A4%EB%9E%8C%EC%A5%90%EC%8C%A4,%EB%93%B1%EB%A1%9D%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9E%85%EB%8B%88%EB%8B%A4%20,%EB%8F%99%EA%B7%B8%EB%9E%80%EC%83%98%22,%22contentsType%22:%22LL%22,%22classId%22:%22354%22,%22classNm%22:%229%EC%9B%94%2026%EC%9D%BC%20%EC%9B%94-%EC%95%84%EC%B9%A89%EC%8B%9C%EB%B0%98%20%EC%8A%A4%ED%94%BC%EB%8B%9D%20%22%7D,%7B%22classNm%22:%229%EC%9B%94%2026%EC%9D%BC%20%EC%9B%94-%EC%95%84%EC%B9%A89%EC%8B%9C%EB%B0%98%20%EC%8A%A4%ED%94%BC%EB%8B%9D%20%22,%22contentsType%22:%22LL%22,%22calories%22:0,%22lectureName%22:%22%EB%8B%A4%EB%9E%8C%EC%A5%90%EC%8C%A4,%EB%93%B1%EB%A1%9D%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9E%85%EB%8B%88%EB%8B%A4%20,%EB%8F%99%EA%B7%B8%EB%9E%80%EC%83%98%22,%22classId%22:%22354%22%7D%5D,%22shareType%22:%221%22%7D'
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