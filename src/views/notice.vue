<template>
  <div class="notice">
    <div class="notice-fixed">
      <div class="container p14">
        <div class="notice__accordion-wrap">
          <ul class="notice__list list-style-none">
            <li class="notice__cont" v-for="index in 3" :class="{open: selectedMenu === index}" :key="index" @click="handleMenu(index)">
              <div class="notice__question">
                <div class="notice__question-wrap">
                  <p class="notice__title mb-0">스피닝 [신년에도 다타러 가즈아~~~!] 미션..</p>
                  <div class="notice__text-wrap new">
                    <span class="notice__text sub">공지</span>
                    <span class="notice-bar"></span>
                    <span class="notice__text sub">2021년 09월 24일 19:11</span>
                  </div>
                </div>
                <i class="icon-dropdown"></i>
              </div>
              <transition
                name="accordion"
                @before-enter="beforeEnter"
                @enter="enter"
                @before-leave="beforeLeave"
                @leave="leave"
              >
                <div class="notice__answer" v-show="selectedMenu === index" :key="index">
                  <div class="answer__cont">
                    <p class="answer__title notice__title">스피닝 [신년에도 다타러 가즈아~~~!] 미션..</p>
                    <p class="answer__cont-text mb-0">
                      따로 또 같이, 친구와 가족이 함께 스피닝으로
                      건강자산을 만들 수 있는 매일 5km 스피닝 미션이
                      1월에도 진행됩니다. 하루 10~15분 부담 없는
                      라이딩으로 당신의 평생 건강에 플러스가 될 건강
                      루틴을 함께 만들어가보세요!
                    </p>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container p14">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTab: 0,
      selectedMenu: 0,
    }
  },
  methods: {
    handleMenu(index) {
      if(this.selectedMenu === index) {
        this.selectedMenu = null;
      } else {
        this.selectedMenu = index;
      }
    },
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave(el) {
      el.style.height = 0;
    },
  }
}
</script>

<style lang="scss">
.notice__cont {
  padding: 18px 0;
  border-bottom: 1px solid #535d6d;
  &:last-child {
    border-bottom: none;
  }
  &.open {
    .notice__question {
      padding-bottom: 18px;
      border-bottom: solid 1px #535d6d;
    }
    .icon-dropdown {
      background: url("~@/assets/icons/icon-dropdown-up.svg");
    }
  }
}
.notice__question {
  display: flex;
  align-items: flex-start;
}
.notice-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0c172e;
}
.notice__question-wrap {
  width: calc(100% - 40px);
}
.notice__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 16px;
  line-height: 23px;
  font-weight: 500;
  letter-spacing: -.3;
  color: #9ea2ab;
}
.notice__text-wrap {
  &.new {
    position: relative;
    &::before {
      position: absolute;
      right: 27px;
      top: 50%;
      transform: translateY(-50%);
      content: 'N';
      width: 20px;
      height: 20px;
      background-color: $primary;
      border-radius: 50%;
      color: #000;
      font-size: 10px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.notice__text {
  display: inline-block;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -.3;
  font-weight: 400;
  color:#6d7381;
}
.notice-bar {
  display: inline-block;
  width: 1px;
  height: 11px;
  background-color: #6d7381;
  margin: 0 8px;
}
.icon-dropdown {
  display: block;
  width: 20px;
  height: 20px;
  background: url("~@/assets/icons/icon-dropdown.svg") no-repeat center;
  background-size: cover;
  margin-left: 20px;
}
.notice__answer {
  transition: 0.3s ease-out;
  overflow: hidden;
}
.answer__cont {
  padding-top: 20px;
  max-height: 320px;
  overflow-y: scroll;
}
.answer__title {
  padding-bottom: 12px;
}
.answer__cont-text {
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -.09;
  color:#6d7381;
}
</style>