<template>
  <!-- ASH_04_03 -->
  <section class="share-template">
    <div class="container">
      <header class="share-template__header">
        <h1 class="header__title">{{this.getEnumData("iconCodeTitle", this.result.iconCode)}}</h1>
        <img class="logo" src="@/assets/logo.png" alt="로고" />
      </header>

      <div class="">
        <figure class="share-template__img">
          <img :src="this.result.image" alt="마크" />
        </figure>

        <p class="share-template__text">
          {{ this.result.celebrityMessage }}
        </p>
        <p class="share-template__text02">
          {{ this.result.title }}
        </p>
      </div>
    </div>
    <button v-if="!isMobile" @click="$sendCaptureImage()">Image 전송</button>
  </section>
</template>

<script>
export default {
  data(){
    return {
      result: {
        image: "",
        iconCode: "", // 01: 배지 or 02: 머슬핀 or 03: 미션
        celebrityMessage: "",
        title: ""
      },
      isMobile: window.isMobile.any()
    }
  },
  created(){
    this.result = JSON.parse(sessionStorage.getItem("mainData"));
    console.log("mainData ::::::::::::::::::::: ", this.result);
  },

  watch: {
    result: function () {
      this.$windowCapture();
      console.log("데이터 변경 체크 : ", this.result);
    }
  },

  methods : {
    getEnumData(enumType, value) {
      return this.$getEnumData(enumType, value)
    }
  }
}
</script>

<style lang="scss">
.share-template {
  background: $bg-secondary url('~@/assets/imgs/bg-confetti.svg') no-repeat top center;
  background-size: contain;
  min-height: 100vh;
  .share-template__header {
    position: relative;
    text-align: center;
    padding: 34px 0;
    .logo {
      position: absolute;
      top: 12px;
      right: 12px;
      width: 76px;
    }
    .header__title {
      font-size: 18px;
      line-height: 25px;
      letter-spacing: -.3px;
    }
  }
  .share-template__img {
    max-width: 144px;
    margin: 0 auto 18px auto;
    img {
      width: 100%;
    }
  }
  .share-template__text {
    font-size: 28px;
    font-weight: 800;
    line-height: 36px;
    letter-spacing: -.3px;
    text-align: center;
    color: $primary;
    margin-bottom: 12px;
  }
  .share-template__text02 {
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -.1px;
    color: #fff;
    text-align: center;
  }
}
</style>
