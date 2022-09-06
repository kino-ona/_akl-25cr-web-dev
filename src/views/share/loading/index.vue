<template>
  <section>
    {{ this.statusVal }}
  </section>
</template>

<script>
export default {
  data() {
    return {
      statusVal: "로딩중입니다",
    }
  },
  created() {
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
        this.statusVal = '데이터는 가져왔어 이제 라우팅해보자잇'
      } else {
        // Web상에서 테스트 하는 경우
        console.log("Web 상에서 Test 진행 :::::::::::: ", this.statusVal);
        let mainData = '%7B%0A%20%20%22date%22%3A%20%222022%EB%85%84%201%EC%9B%94%2013%EC%9D%BC%20%EB%AA%A9%EC%9A%94%EC%9D%BC%22%2C%0A%20%20%22term%22%3A%20%22W%22%2C%0A%20%20%22exeType%22%3A%20%22K%22%2C%0A%20%20%22dataList%22%3A%20%5B%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%207%EC%9D%BC%22%2C%20%22data%22%3A%20200%2C%20%22isSelected%22%3A%20false%7D%2C%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%208%EC%9D%BC%22%2C%20%22data%22%3A%20233%2C%20%22isSelected%22%3A%20false%7D%2C%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%209%EC%9D%BC%22%2C%20%22data%22%3A%20800%2C%20%22isSelected%22%3A%20false%7D%2C%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%2010%EC%9D%BC%22%2C%20%22data%22%3A%201033%2C%20%22isSelected%22%3A%20false%7D%2C%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%2011%EC%9D%BC%22%2C%20%22data%22%3A%202010%2C%20%22isSelected%22%3A%20true%7D%2C%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%2012%EC%9D%BC%22%2C%20%22data%22%3A%201500%2C%20%22isSelected%22%3A%20false%7D%2C%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%2013%EC%9D%BC%22%2C%20%22data%22%3A%20900%2C%20%22isSelected%22%3A%20false%7D%2C%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%2014%EC%9D%BC%22%2C%20%22data%22%3A%20750%2C%20%22isSelected%22%3A%20false%7D%2C%0A%20%20%20%20%7B%22date%22%3A%221%EC%9B%94%2015%EC%9D%BC%22%2C%20%22data%22%3A%202033%2C%20%22isSelected%22%3A%20false%7D%0A%20%20%5D%2C%0A%20%20%22avgData%22%3A%201000%2C%0A%20%20%22maxData%22%3A%202022%0A%7D'
        window.setData(mainData);
      }
      this.$router.push({
        path: result.path
      }).catch((reason)=>{
        console.log("페이지 이동에 실패했습니다.")
        this.statusVal = '라우팅 도중에 에러가 발생했어 체크해볼래?\n' + reason
      });
    }
  }
}
</script>