<template>
  <!-- 라이트 모드 공유 ASH_04_05 -->
  <div class="record-share">
    <div class="container">
      <header class="record-share__header">
        <div class="header__div">
          <p class="header__text">{{ this.result.date }}</p>
          <h1 class="header__title">라이트 모드</h1>
        </div>

        <img class="logo" src="@/assets/logo.png" alt="로고" />
        <hr class="hr" />
      </header>

      <div class="record-share__body">
        <div class="record-share__top">
          <div class="d-flex align-items-center">
            <img src="@/assets/icons/icon-exercise-distance.svg" class="w-26" />
            <span class="text-16 font-weight-800">운동거리</span>
          </div>

          <div class="d-flex align-items-end line-height-1">
            <span class="text-40 font-weight-700">{{ this.result.distence }}</span>
            <span class="text-16 font-weight-600 ml-4">km</span>
          </div>
        </div>
        <ul class="record-share__ul list-style-none">
          <li>
            <div class="record-share__item">
              <div class="d-flex align-items-center">
                <img src="@/assets/icons/icon-exercise-time.svg" class="w-20 mr-10" />
                <span class="text-16 font-weight-800">운동 시간</span>
              </div>

              <div class="d-flex align-items-end line-height-1">
                <span class="text-20 font-weight-800 text-blue">{{ this.result.exerciseTime }}</span>
              </div>
            </div>
          </li>
          <li>
            <div class="record-share__item">
              <div class="d-flex align-items-center">
                <img src="@/assets/icons/icon-fire.svg" class="w-20 mr-10" />
                <span class="text-16 font-weight-800">소모 칼로리</span>
              </div>

              <div class="d-flex align-items-end line-height-1">
                <span class="text-20 font-weight-800 text-blue">{{ this.result.calories }}</span>
                <span class="text-14 font-weight-800 text-blue ml-4">kcal</span>
              </div>
            </div>
          </li>
          <li>
            <div class="record-share__item">
              <div class="d-flex align-items-center">
                <img src="@/assets/icons/icon-speed.svg" class="w-20 mr-10" />
                <span class="text-16 font-weight-800">평균 속도</span>
              </div>

              <div class="d-flex align-items-end line-height-1">
                <span class="text-20 font-weight-800 text-blue">{{ this.result.avgSpeed }}</span>
                <span class="text-14 font-weight-800 text-blue ml-4">km/h</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["result"],
  setup () {
    const { proxy } = getCurrentInstance();

    const sendCaptureImage = () => {
      proxy.$sendCaptureImage()
    }

    const getEnumData = (enumType, value) => {
      return proxy.$getEnumData(enumType, value)
    }

    return {
      sendCaptureImage,
      getEnumData
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
