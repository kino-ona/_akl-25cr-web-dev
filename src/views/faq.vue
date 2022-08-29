<template>
  <div class="faq">
    <div class="container p14">
      <div class="faq__menu">
        <ul class="faq__menu-tab list-style-none">
          <li class="tab-list" v-for="(list, index) in 8" :key="index" :class="{active:currentTab === index}">
              <div class="tab-contents">
                  <p class="tab__menu-title">
                    <a class="tab-link" href="#" @click.prevent="currentTab = index">클래스</a>
                  </p>
              </div>
          </li>
        </ul>
      </div>
      <div v-show="currentTab === 0" class="faq__accordion">
        <div class="faq__accordion-wrap">
          <ul class="faq__list list-style-none">
            <li class="faq__cont" v-for="index in 8" :class="{open: selectedMenu === index}" :key="index" @click="handleMenu(index)">
              <div class="faq__question">
                <div class="faq__question-wrap">
                  <p class="faq__title mb-0">자주 묻는 질문입니다.</p>
                  <p class="faq__text sub mb-0">3초전</p>
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
                <div class="faq__answer" v-show="selectedMenu === index" :key="index">
                  <div class="faq__answer-wrap">
                    <div class="answer__cont">
                      <p class="answer__cont-text mb-0">
                        따로 또 같이, 친구와 가족이 함께 스피닝으로
                        건강자산을 만들 수 있는 매일 5km 스피닝 미션이
                        1월에도 진행됩니다. 하루 10~15분 부담 없는
                        라이딩으로 당신의 평생 건강에 플러스가 될 건강
                        루틴을 함께 만들어가보세요!
                      </p>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="currentTab === 1" class="faq__accordion">
        <div class="faq__accordion-wrap">
          <ul class="faq__list list-style-none">
            <li class="faq__cont" v-for="index in 2" :class="{open: selectedMenu === index}" :key="index" @click="handleMenu(index)">
              <div class="faq__question">
                <div class="faq__question-wrap">
                  <p class="faq__title mb-0">자주 묻는 질문입니다.</p>
                  <p class="faq__text sub mb-0">3초전</p>
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
                <div class="faq__answer" v-show="selectedMenu === index" :key="index">
                  <div class="faq__answer-wrap">
                    <div class="answer__cont">
                      <p class="answer__cont-text mb-0">
                        따로 또 같이, 친구와 가족이 함께 스피닝으로
                        건강자산을 만들 수 있는 매일 5km 스피닝 미션이
                        1월에도 진행됩니다. 하루 10~15분 부담 없는
                        라이딩으로 당신의 평생 건강에 플러스가 될 건강
                        루틴을 함께 만들어가보세요!
                      </p>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="currentTab === 2" class="faq__accordion">
        <div class="faq__accordion-wrap">
          <ul class="faq__list list-style-none">
            <li class="faq__cont" v-for="index in 3" :class="{open: selectedMenu === index}" :key="index" @click="handleMenu(index)">
              <div class="faq__question">
                <div class="faq__question-wrap">
                  <p class="faq__title mb-0">자주 묻는 질문입니다.</p>
                  <p class="faq__text sub mb-0">3초전</p>
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
                <div class="faq__answer" v-show="selectedMenu === index" :key="index">
                  <div class="faq__answer-wrap">
                    <div class="answer__cont">
                      <p class="answer__cont-text mb-0">
                        따로 또 같이, 친구와 가족이 함께 스피닝으로
                        건강자산을 만들 수 있는 매일 5km 스피닝 미션이
                        1월에도 진행됩니다. 하루 10~15분 부담 없는
                        라이딩으로 당신의 평생 건강에 플러스가 될 건강
                        루틴을 함께 만들어가보세요!
                      </p>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="currentTab === 3" class="faq__accordion">
        <div class="faq__accordion-wrap">
          <ul class="faq__list list-style-none">
            <li class="faq__cont" v-for="index in 4" :class="{open: selectedMenu === index}" :key="index" @click="handleMenu(index)">
              <div class="faq__question">
                <div class="faq__question-wrap">
                  <p class="faq__title mb-0">자주 묻는 질문입니다.</p>
                  <p class="faq__text sub mb-0">3초전</p>
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
                <div class="faq__answer" v-show="selectedMenu === index" :key="index">
                  <div class="faq__answer-wrap">
                    <div class="answer__cont">
                      <p class="answer__cont-text mb-0">
                        따로 또 같이, 친구와 가족이 함께 스피닝으로
                        건강자산을 만들 수 있는 매일 5km 스피닝 미션이
                        1월에도 진행됩니다. 하루 10~15분 부담 없는
                        라이딩으로 당신의 평생 건강에 플러스가 될 건강
                        루틴을 함께 만들어가보세요!
                      </p>
                    </div>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
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
  .faq__menu {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .faq__menu-tab {
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
  .tab-list {
    &.active {
      .tab-link {
        color: $primary;
      }
    }
  }
  .tab-list + .tab-list {
    margin-left: 18px;
  }
  .tab-link {
    font-size: 20px;
    font-weight: 700;
    color: #6d7381;
    display: block;
    text-decoration: none;
    white-space: nowrap;
  }
  .faq__cont {
    padding: 18px 0;
    border-bottom: 1px solid #535d6d;
    &.open {
      .faq__question {
        padding-bottom: 18px;
        border-bottom: solid 1px #535d6d;
      }
      .icon-dropdown {
        background: url("~@/assets/icons/icon-dropdown-up.svg");
      }
    }
  }
  .faq__question {
    display: flex;
    align-items: flex-start;
  }
  .faq__question-wrap {
    width: calc(100% - 40px);
  }
  .faq__title {
    word-break: break-all;
    font-size: 16px;
    line-height: 23px;
    font-weight: 500;
    letter-spacing: -.3;
    color: #9ea2ab;
  }
  .faq__text {
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -.3;
    font-weight: 400;
    color:#6d7381;
  }
  .icon-dropdown {
    display: block;
    width: 20px;
    height: 20px;
    background: url("~@/assets/icons/icon-dropdown.svg") no-repeat center;
    background-size: cover;
    margin-left: 20px;
  }
  .faq__answer {
    transition: 0.3s ease-out;
    overflow: hidden;
  }
  .faq__answer-wrap {
    padding-top: 20px;
  }
  .answer__cont {
    max-height: 320px;
    overflow-y: scroll;
  }
  .answer__cont-text {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: -.09;
    color:#6d7381;
  }
</style>
