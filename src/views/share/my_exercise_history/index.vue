<template>
  <section class="exercise-share">
    <div>
      {{ this.lengVal }} 리스트 길이는 ????? {{ this.result }}
    </div>
    <br/>
    {{ this.isInClubTaolaData }}
    <br/>
    <div>
      {{ this.result['recentlyClassList'] }} 리스트 길이는 ????? {{ this.result.recentlyClassList }}
    </div>
    <div class="container">
      <header class="exercise-share__header">
        <h2 class="header__title">{{ this.result.date }}</h2>
        <img class="logo" src="@/assets/logo.png" alt="로고" />
      </header>
      <div class="exercise-share__body">
        <section v-if="(this.result.shareType != 3)" class="exercise-share__section">
          <h1 class="exercise-share__title">
            <img src="@/assets/icons/icon-coin.svg" class="w-26" alt="총 머슬 포인트 아이콘" />
            <span>총 머슬 포인트</span>
          </h1>
          <div class="exercise-share__point">
            <span class="point__value">{{ this.result.totMusclePoint }}</span>
            <span class="point__unit">점</span>
          </div>

          <div class="exercise-share__record">
            <div class="record__divide">
              <div class="record__panel">
                <h2 class="panel__title">최고 머슬 포인트</h2>
                <div class="panel__point text-primary">
                  <span class="point__value">{{ this.result.maxMusclePoint }}</span>
                  <span class="point__unit">점</span>
                </div>
              </div>
            </div>
            <div class="record__divide">
              <div class="record__panel">
                <h2 class="panel__title">최고 케이던스</h2>
                <div class="panel__point text-blue">
                  <span class="point__value">{{ this.result.maxRpm }}</span>
                  <span class="point__unit">rpm</span>
                </div>
              </div>
              <div class="record__panel">
                <h2 class="panel__title">평균 케이던스</h2>
                <div class="panel__point text-blue">
                  <span class="point__value">{{ this.result.avgRpm }}</span>
                  <span class="point__unit">rpm</span>
                </div>
              </div>
            </div>
          </div>

          <ul class="record-share__ul list-style-none">
            <li>
              <div class="record-share__item">
                <div class="d-flex align-items-center">
                  <img src="@/assets/icons/icon-fire.svg" class="w-34 mr-10" alt="소모칼로리 아이콘"/>
                  <span class="text-16 font-weight-800">소모 칼로리</span>
                </div>

                <div class="d-flex align-items-end line-height-1">
                  <span class="text-20 font-weight-800">{{ this.result.totCalories }}</span>
                  <span class="text-14 font-weight-800 ml-4">kcal</span>
                </div>
              </div>
            </li>
            <li>
              <div class="record-share__item">
                <div class="d-flex align-items-center">
                  <img src="@/assets/icons/icon-exercise-distance.svg" class="w-34 mr-10" alt="운동 거리 아이콘" />
                  <span class="text-16 font-weight-800">운동 거리</span>
                </div>

                <div class="d-flex align-items-end line-height-1">
                  <span class="text-20 font-weight-800">{{ this.result.totDistance }}</span>
                  <span class="text-14 font-weight-800 ml-4">km/h</span>
                </div>
              </div>
            </li>
            <li>
              <div class="record-share__item">
                <div class="d-flex align-items-center">
                  <img src="@/assets/icons/icon-exercise-time.svg" class="w-34 mr-10" alt="운동 시간 아이콘" />
                  <span class="text-16 font-weight-800">운동 시간</span>
                </div>

                <div class="d-flex align-items-end line-height-1">
                  <span class="text-20 font-weight-800">{{ getTime(this.result.totExerciseTime) }}</span>
                </div>
              </div>
            </li>
          </ul>

          <p class="text-guide">
            * 25센트 라이드와 클럽타올라 서비스의<br />
            합산 운동 이력입니다.
          </p>
        </section>
        <section class="exercise-share__section" v-if="(this.result.shareType != 2)">
          <h2 class="section__title">클럽타올라 기록</h2>
          <ul  v-if="this.isInClubTaolaData" class="exercise-share__record-box list-style-none">
            <li v-for="(classItem, index) in this.result['recentlyClassList']" :key="index">
              <div class="record__item">
                <div class="record__detail">
                  <img :src="(getEnumData('contentTypeData', classItem.contentsType)).iconData" class="w-34" :alt="(getEnumData('contentTypeData', classItem.contentsType)).altData" />
                  <div class="line-height-1">
                    <h3 class="detail__title">{{classItem.classNm}}</h3>
                    <span class="detail__text">{{classItem.lectureName}}</span>
                  </div>
                </div>
                <div class="record__point">
                  <span class="point__value">{{classItem.calories}}</span>
                  <span class="point__unit">kcal</span>
                </div>
              </div>
            </li>
          </ul>
          <div v-else class="exercise-share__empty-data">
            클럽타올라 기록이 없습니다.
          </div>
        </section>
        <section class="exercise-share__section" v-if="false">
          <h2 class="section__title">
            클럽타올라 배지
            <span>15</span>
          </h2>
          <div v-if="false" class="exercise-share__empty-data">
            클럽타올라 배지가 없습니다.
          </div>
          <div v-else class="exercise-share__badge-group">
            <ul class="list-style-none">
              <li v-for="(list, index) in 4" :key="index">
                <div class="badge__item">
                  <figure class="badge__figure">
                    <img src="@/assets/imgs/dummy-musclepin.png" alt="뱃지" />
                  </figure>
                  <p class="badge__text">미션 달성 1회</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <button v-if="!isMobile" @click="$sendCaptureImage()">Image 전송</button>
  </section>
</template>

<script>
export default {
  data(){
    return {
      result: "",
      isMobile: window.isMobile.any(),
      isInClubTaolaData: false,
      lengVal: -1
    }
  },
  mounted(){
    // this.result = JSON.parse(sessionStorage.getItem("mainData"));
    this.result = this.$store.state.mainData;
    this.lengVal = (this.result) ? true : false;
    if(this.result){
      this.isInClubTaolaData = true;
    }
  },
  methods : {
    getEnumData(enumType, value) {
      return this.$getEnumData(enumType, value)
    },
    getTime(minuteValue){
      let hour = Math.floor(minuteValue / 60)
      let min = minuteValue % 60
      let timeStr = ""
      if(hour >= 1){
        timeStr = hour + "시 " + min + "분"
      } else {
        timeStr = min + "분"
      }
      return timeStr
    }
  },
  // setData를 통한 데이터 변화 감지
  computed:{
    getMainData(){return this.$store.getters.getMainData}
  },
  watch:{
    getMainData(val){
      this.result = val
      this.isInClubTaolaData = true;
    }
  },
}
</script>

<style lang="scss">
.exercise-share {
  padding-bottom: 80px;
  .exercise-share__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    margin-bottom: 20px;
    .header__title {
      font-size: 18px;
      font-weight: 800;
      line-height: 25px;
      letter-spacing: -.3px;
    }
    .logo {
      position: absolute;
      top: 12px;
      right: 5px;
      width: 76px;
    }
  }
  .exercise-share__title {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 800;
    line-height: 25px;
    img {
      margin-right: 4px;
    }
  }
  .exercise-share__point {
    display: flex;
    align-items: baseline;
    line-height: 1;
    margin-bottom: 20px;
    .point__value {
      font-size: 46px;
      font-weight: 700;
      line-height: 56px;
      letter-spacing: -1px;
    }
    .point__unit {
      font-size: 18px;
      letter-spacing: -.3px;
      margin-left: 4px;
    }
  }

  .exercise-share__record {
    display: flex;
    margin-bottom: 4px;
    .record__divide {
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
    }
    .record__divide + .record__divide {
      margin-left: 4px;
    }
    .record__panel {
      display: flex;
      flex-direction: column;
      background: $bg-secondary;
      border-radius: 24px;
      padding: 20px;
      height: 100%;
      .panel__title {
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -.3px;
        margin-bottom: 18px;
      }
      .panel__point {
        display: flex;
        align-items: baseline;
        line-height: 1;
        margin-top: auto;
        .point__value {
          font-size: 36px;
          letter-spacing: -.3px;
          font-weight: 700;
        }
        .point__unit {
          font-size: 18px;
          letter-spacing: -.3px;
          margin-left: 4px;
          font-weight: 800;
        }
      }
    }
    .record__panel + .record__panel {
      margin-top: 4px;
    }
  }

  .record-share__ul {
    padding: 0 20px;
    background: $bg-secondary;
    border-radius: 10px;
    li + li {
      border-top: 1px solid #070D18;
    }
    .record-share__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
    }
  }

  .exercise-share__section + .exercise-share__section {
    margin-top: 56px;
  }

  .exercise-share__section {
    .section__title {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 800;
      line-height: 25px;
      letter-spacing: -.3px;
      margin-bottom: 20px;
      span {
        margin-left: 4px;
        color: $gray02;
      }
    }
  }

  .exercise-share__empty-data {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 195px;
    font-size: 16px;
    font-weight: 800;
    color: $gray;
    background: $bg-secondary;
    border-radius: 24px;
  }

  .exercise-share__record-box {
    li + li {
      margin-top: 4px;
    }
    .record__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 88px;
      border-radius: 24px;
      background: $bg-secondary;
      padding: 0 20px;
    }
    .record__detail {
      display: flex;
      align-items: center;
      img {
        margin-right: 12px;
      }
      .detail__title {
        font-size: 16px;
        font-weight: 800;
        line-height: 23px;
        letter-spacing: -.3px;
      }
      .detail__text {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: -.3px;
        color: $gray02;
      }
    }
    .record__point {
      display: flex;
      align-items: baseline;
      line-height: 1;
      .point__value {
        font-size: 26px;
        letter-spacing: -.3px;
      }
      .point__unit {
        font-size: 16px;
        letter-spacing: -.1px;
        margin-left: 4px;
      }
    }
  }

  .exercise-share__badge-group {
    padding: 30px 25px 0 25px;
    background: $bg-secondary;
    border-radius: 24px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.333333%;
        margin-bottom: 30px;
      }
    }
    .badge__item {
      max-width: 80px;
      margin: 0 auto;
      .badge__figure {
        margin-bottom: 12px;
        img {
          width: 100%;
        }
      }
      .badge__text {
        font-size: 14px;
        font-weight: 800;
        line-height: 21px;
        letter-spacing: -.3px;
        text-align: center;
      }
    }
  }
}
</style>
