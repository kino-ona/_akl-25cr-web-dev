<template>
  <div class="policy-detail">
    <div class="container p14">
      <header class="policy-detail__header">
        <h1 class="mb-0 policy-detail__title" v-if="!this.isProfile">
          {{ this.result.termsTitle }}
        </h1>
        <div class="policy-detail__select" v-else>
          <p class="policy-detail__title">{{ this.result.termsTitle }}</p>
          <!-- 변경 -->
          <div class="detail__select-box" :class="{open: this.isSelectOpen}">
            <div class="detail__select-value" @click="handleSelect">V{{ this.onePick }}</div>
            <div class="detail__select-box--list">
              <perfect-scrollbar>
                <div class="list__item"
                     :class="{active: version === onePick}"
                     v-for="(version, index) in this.versionList"
                     @click="handleVersion(version)"
                >V{{version}}</div>
              </perfect-scrollbar>
            </div>
            <div v-if="isSelectOpen" @click="isSelectOpen = false" class="detail__select-box--backdrop"></div>
          </div>
          <!-- 변경 -->
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
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
export default {
  components: {
    PerfectScrollbar
  },
  data() {
    return {
      isSelectOpen: false,
      result: {},
      onePick : "",
      versionList: [],
      termsContents: "",
      termsTitle: "",
      isProfile: false,
      tempResult: ""
    }
  },
  created() {
    let result = {
      termsType: this.$route.query.termsType,
      termsVersion: this.$route.query.termsVersion,
      termsId: this.$route.query.termsId
    }
    const isProfile = this.$route.query.isProfile
    if (isProfile){
      this.isProfile = true
    }
    this.tempResult = result
    this.getData(result)
  },
  methods : {
    handleSelect() {
      this.isSelectOpen = !this.isSelectOpen;
    },
    handleVersion(version) {
      this.isSelectOpen = false;
      this.onePick = version;
      console.log("선택된 버전 입니다. : ", this.onePick)
      this.versionChange()
    },
    // 버전 변경 요청 시 해당 버전 데이터 조회
    versionChange() {
      this.result.termsVersion = this.onePick
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
      let url = "front/getTermsDetail?termsId=" + params.termsId + "&termsType=" + params.termsType + "&termsVersion="+ params.termsVersion
      let _this = this;
      this.$http.post(url)
          .then((response) => {
            console.log("Response Data ::::::::::: ", response.data.result[0])
            _this.result = response.data.result[0];
            let tempList = _this.result.versionList.split(',');
            _this.versionList = tempList.reverse();
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
    position: relative;
    margin-left: 10px;
    &.open {
      .detail__select-value {
        background: url('~@/assets/icons/icon-dropdown-up.svg') no-repeat right center;
      }
      .detail__select-box--list {
        display: block;
      }
    }
    .detail__select-value {
      font-size: 22px;
      padding-right: 24px;
      background: url('~@/assets/icons/icon-dropdown.svg') no-repeat right center;
      background-size: 20px;
    }
    .detail__select-box--list {
      position: absolute;
      bottom: -4px;
      left: 50%;
      z-index: 10;
      transform: translate(-50%, 100%);
      display: none;
      background: #30394d;
      border-radius: 12px;
      padding: 15px 0;
      .ps {
        max-height: 208px;
        padding: 0 30px;
        .ps__thumb-y {
          width: 4px;
          background: #6d7381;
        }
        &.ps--active-y > .ps__rail-y {
          background-color: transparent !important;
        }
      }
      .list__item {
        font-size: 14px;
        color: #6d7381;
        text-align: center;
        &.active {
          color: #fff;
        }
      }
      .list__item + .list__item {
        margin-top: 14px;
      }
    }
    .detail__select-box--backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
    }
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