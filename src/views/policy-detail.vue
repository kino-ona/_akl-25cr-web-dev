<template>
  <div class="policy-detail">
    <div class="container p14">
      <header class="policy-detail__header">
        <h1 class="mb-0 policy-detail__title">
          한국암웨이 클럽타올라 민감정보 수집
        </h1>
        <div class="policy-detail__select">
          <p class="policy-detail__title">이용약관</p>
          <!-- 변경 -->
          <div class="detail__select-box" :class="{open: isSelectOpen}">
            <div class="detail__select-value" @click="handleSelect">{{ onePick }}</div>
            <div class="detail__select-box--list">
              <perfect-scrollbar>
                <div class="list__item"
                     :class="{active: list.text === onePick}"
                     v-for="(list, index) in versionList"
                     @click="handleVersion(index)"
                >{{ list.text }}</div>
              </perfect-scrollbar>
            </div>
            <div v-if="isSelectOpen" @click="isSelectOpen = false" class="detail__select-box--backdrop"></div>
          </div>
          <!-- 변경 -->
        </div>
      </header>
      <div class="policy-detail__content">
        <div class="detail__content-wrap">
          <p class="detail__content-text mb-0">한국암웨이(주)는 클럽타올라 운영을 위하여
            다음과 같이 귀하의 민감 정보를 수집, 이용 합니다.</p>
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
     currentIndex: 0,
     onePick : '0',
     versionList: [
       {
         text: 'V1.2',
         value: 'V1.2'
       },
       {
         text: 'V1.3',
         value: 'V1.3'
       },
       {
         text: 'V1.4',
         value: 'V1.4'
       },
       {
         text: 'V1.5',
         value: 'V1.5'
       },
       {
         text: 'V1.6',
         value: 'V1.6'
       },
       {
         text: 'V1.7',
         value: 'V1.7'
       },
       {
         text: 'V1.8',
         value: 'V1.8'
       },
       {
         text: 'V1.9',
         value: 'V1.9'
       },
       {
         text: 'V1.10',
         value: 'V1.10'
       },
     ]
   }
  },
  created() {
   this.onePick = this.versionList[0].value;
  },
  methods: {
   handleSelect() {
     this.isSelectOpen = !this.isSelectOpen;
   },
   handleVersion(index) {
     this.isSelectOpen = false;
     this.onePick = this.versionList[index].text;
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
