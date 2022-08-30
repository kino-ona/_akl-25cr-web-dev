<template>
  <div class="policy-detail">
    <div class="container p14">
      <header class="policy-detail__header">
        <h1 class="mb-0 policy-detail__title" v-if="!this.isProfile">
          {{ this.result.termsTitle }}
        </h1>
        <div class="policy-detail__select" v-else>
          <p class="policy-detail__title">{{ this.result.termsTitle }}</p>
          <div class="detail__select-box">
            <select class="select-box" v-model="onePick">
              <option v-for="value in this.versionList" :value="value">V{{value}}</option>
            </select>
          </div>
        </div>
      </header>
      <div class="policy-detail__content">
        <div class="detail__content-wrap">
          <p class="detail__content-text mb-0" v-html="this.result.termsContents"></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: {},
      onePick : "",
      versionList: [],
      termsContents: "",
      termsTitle: "",
      isProfile: false
    }
  },
  created() {
    let result = {
      termsType: this.$route.query.termsType,
      termsVersion: this.$route.query.termsVersion
    }
    const isProfile = this.$route.query.isProfile
    console.log("isProfile ::::::::::::: ", isProfile)
    if (isProfile){
      this.isProfile = true
    }
    this.getData(result)
  },
  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    onePick: function () {
      this.versionChange();
    }
  },
  methods : {
    // 버전 변경 요청 시 해당 버전 데이터 조회
    versionChange() {
      this.result.termsVersion = this.onePick
      console.log("versionChange :::::::::::: ")
      this.getData(this.result)
    },

    // 페이지 처음 접근하는 거면 제일 최신 약관이 나오도록 설정
    newestVersion() {
      if (!this.onePick){
        for(var val=0; val < this.versionList.length; val++){
          if (this.versionList[val] > this.onePick){
            this.onePick = this.versionList[val]
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
            console.log("Response Data ::::::::::: ", response.data.result[0])
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
<style lang="scss">
.policy-detail {
  padding-top: 12px;
  .policy-detail__title {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -1px;
    color: #fff;
  }
  .policy-detail__select {
    display: flex;
    align-items: center;
  }
  .detail__select-box {
    margin-left: 10px;
  }
  .policy-detail__content {
    padding-top: 30px;
  }
  .detail__content-text {
    font-size: 16px;
    line-height: 23px;
    font-weight: 500;
    color: #9da2ab;
  }
  .select-box {
    font-size: 20px;
    font-weight: 700;
    color: #ffffff;
    background-color: transparent;
    border: none;
  }
}

</style>