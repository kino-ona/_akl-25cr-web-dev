<template>
  <div class="policy-list">
    <div class="container p14">
      <div class="list__wrap" v-if="isList">
        <ul class="list__ul list-style-none" v-for="(term, index) in result" :key="index">
          <li class="list-cont">
            <div class="cont-wrap">
              <div class="cont-item">
                <div class="item-wrap">
                  <p class="item-title mb-0">{{ term.termsTitle }}</p>
                  <p class="item-text sub">{{ term.applyStartDate }}</p>
                </div>
<!--                <router-link class="detail-link" to="/policy-detail">-->

                  <div v-if="!isMobile" class="cont-detail" @click="goDetail(term.termsId, term.termsType, term.termsVersion)">
                    <p class="detail-text mb-0">
                      Web에서 상세 보기 테스트
                    </p>
                  </div>
                  <div v-else class="cont-detail" @click="goDetail(term.termsId, term.termsType, term.termsVersion)">
                    <p class="detail-text mb-0">
                      보기
                    </p>
                  </div>
<!--                </router-link>-->
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="no-data" v-else>
        <div class="no-data__wrap">
          <div class="empty__icon-wrap">
            <i class="icon-empty"></i>
          </div>
          <div class="empty__text-wrap">
            <p class="empty-text mb-0">글이 없습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isList: true,
      result: [],
      isMobile: window.isMobile.any(),
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // API 서버로부터 데이터 요청
    getData() {
      console.log("요청 URL : ", "front/termsList")
      let _this = this;
      this.$http.post("front/termsList")
          .then((response) => {
            console.log("Terms List Check :::::::::: ", response.data.result)
            _this.result = response.data.result;
            _this.isList = (_this.result) ? true : false
          })
          .catch((error) => {
            console.log(error);
          })
    },
    goDetail(termsId, termsType, termsVersion){
      if (window.isMobile.iOS()){
        let webToAppUrl = {'func' : 'setTitle', 'callback' : 'null', 'param' : {'title' : '이용 약관 상세'}}
        window.getData(webToAppUrl);
      } else if (window.isMobile.Android()){
        let webToAppUrl = "{'func' : 'setTitle', 'callback' : 'null', 'param' : {'title' : '이용 약관 상세'}}"
        window.getData(webToAppUrl);
      }
      let url = "/terms?termsId=" + termsId + "&termsType=" + termsType + "&termsVersion=" + termsVersion + "&isProfile=true"
      this.$router.push({
        path: url
      }).catch(()=>{
        console.log("페이지 이동에 실패했습니다.")
      });
    }
  }
}
</script>

<style lang="scss">
.policy-list {
  .list-cont {
    padding: 18px 0;
    border-bottom: 1px solid rgba(83, 93, 109, 0.2);
  }
  .cont-item {
    display: flex;
    align-items: flex-start;
  }
  .item-wrap {
    width: calc(100% - 50px);
  }
  .item-title {
    font-size: 16px;
    line-height: 23px;
    color: #9ea2ab;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 5px;
  }
  .item-text {
    font-size: 14px;
    line-height: 21px;
    color: #6d7381;
  }
  .cont-detail {
    width: 50px;
    text-align: right;
  }
  .detail-link {
    text-decoration: none;
  }
  .detail-text {
    font-size: 14px;
    line-height: 21px;
    color: #9ea2ab;
  }
}
</style>
