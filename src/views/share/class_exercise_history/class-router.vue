<template>
  Class Router 로딩중입니다. {{ this.result }}
</template>

<script>
export default {
  data(){
    return {
      result: "",
      path: "/share/exercise/class-exercise-history"
    }
  },

  methods : {
    goClassComp() {
      console.log("결과입니다. ", (this.result.exerciseModeCode == '04'))
      if(this.result.exerciseModeCode == '04') {
        this.path = this.path + "/light-mode"
      } else {
        this.path = this.path + "/normal"
      }

      this.$router.push({
        path: this.path
      }).catch((reason)=>{
        console.log("페이지 이동에 실패했습니다.")
        this.mainData = '라우팅 도중에 에러가 발생했어 체크해볼래?\n' + reason
      });
    },
  },
  computed:{
    getMainData(){return this.$store.getters.getMainData}
  },
  watch: {
    getMainData(val) {
      this.result = val
    },
    result(){
      this.goClassComp()
    }
  }
}
</script>

<style lang="scss">
.record-share {
  .record-share__header {
    position: relative;
    padding: 10px 7px 0 15px;
    .header__div {
      margin-bottom: 15px;
    }
    .header__text {
      font-size: 12px;
      margin-bottom: 4px;
      color: $gray02;
    }
    .header__title {
      font-size: 18px;
      font-weight: 900;
    }
    .logo {
      position: absolute;
      top: 10px;
      right: 12px;
      width: 76px;
    }
  }
  .record-share__body {
    padding-top: 54px;
  }

  .record-share__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    img {
      margin-right: 8px;
    }
  }

  .record-share__ul {
    li + li {
      margin-top: 4px;
    }
    .record-share__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: $bg-secondary;
      border-radius: 25px;
      height: 50px;
      padding: 0 20px;
    }
  }
}
</style>
