<template>
  <section>
    <!-- TODO - 퍼블 나오면 <template>을 새롭게 제작해서 안에 값을 치환하는 식으로 제작하면 됨 -->
    <div>이용 약관 상세</div>
    <div>
      {{ result.termsTitle }}
      <span>
        <select v-model="nowVersion">
            <option v-for="version in versionList" selected>{{ version }}</option>
        </select>
      </span>
    </div>
    <div>{{ result.termsContents }}</div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      result: {},
      versionList: [],
      nowVersion: 0
    }
  },
  created() {
    let result = {
      termsType: this.$route.query.termsType,
      termsVersion: this.$route.query.termsVersion
    }
    this.getData(result)
  },
  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    nowVersion: function () {
      this.versionChange();
    }
  },
  methods : {
    // 버전 변경 요청 시 해당 버전 데이터 조회
    versionChange() {
      this.result.termsVersion = this.nowVersion
      this.getData(this.result)
    },

    // 페이지 처음 접근하는 거면 제일 최신 약관이 나오도록 설정
    newestVersion() {
      if (!this.nowVersion){
        for(var val=0; val < this.versionList.length; val++){
          if (this.versionList[val] > this.nowVersion){
            this.nowVersion = this.versionList[val]
          }
        }
      }
    },

    // API 서버로부터 데이터 요청
    getData(params) {
      console.log("요청 URL : ", "front/getTermsDetail?termsType=" + params.termsType + "&termsVersion="+ params.termsVersion)
      let _this = this;
      this.$http.post("front/getTermsDetail?termsType=" + params.termsType + "&termsVersion="+ params.termsVersion)
        .then((response) => {
          _this.result = response.data.result[0];
          _this.versionList = _this.result.versionList.split(',');
          _this.newestVersion();
        })
        .catch((error) => {
            console.log(error);
        })
    }
  }
}
</script>