<template>
  <div class="faq">
    <div class="container p14">
      <div class="faq__menu">
        <ul class="faq__menu-tab list-style-none">  <!-- @click="selectCate(cate.dtlCd)" -->
          <li class="tab-list" v-for="(cate, index) in result.questionCateList" :key="index" :class="{active:currentTab === index}" @click="selectCate(cate.dtlCd)">
              <div class="tab-contents">
                  <p class="tab__menu-title">
                    <a class="tab-link" href="#" @click.prevent="currentTab = index">{{ cate.dtlCdNm }}</a>
                  </p>
              </div>
          </li>
        </ul>
      </div>
      <div class="faq__accordion">
        <div class="faq__accordion-wrap">
          <ul class="faq__list list-style-none">
            <li class="faq__cont" v-for="(question, index) in result.questionList" :class="{open: selectedMenu === index}" :key="index" @click="handleMenu(index)">
              <div class="faq__question">
                <div class="faq__question-wrap">
                  <p class="faq__title mb-0">{{ question.askContents }}</p>
<!--                  <p class="faq__text sub mb-0">{{ question.createDatetime }}</p>-->
                </div>
                <i class="icon-dropdown"></i>
              </div>
              <transition
                name="accordion"
                @before-enter="beforeEnter"
                @enter="enter"
                @before-leave="beforeLeave"
                @leave="leave"
              ><!-- :id="question.askId" v-if="question.isSelected" -->
                <div class="faq__answer" v-show="selectedMenu === index" :key="index">
                  <div class="faq__answer-wrap">
                    <div class="answer__cont">
                      <p class="answer__cont-text mb-0" v-html="question.ansContents">
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
        result: {
          questionList: [],
          questionCateList: []
        },
        nowCateCode:"01" ,
        nowPage: 0,
        isBottom: false,
        currentTab: 0,
        selectedMenu: 0,
      }
    },
    created() {
      let questionTypeCode = this.$route.query.questionTypeCode;
      if (!questionTypeCode){
        questionTypeCode = "01"
      }
      let params = {
        questionTypeCode: questionTypeCode,
        pagingStart: 0
      }
      this.selectedMenu = null;
      this.getFirstData(params)
      window.addEventListener('scroll', this.handleNotificationListScroll())
    },

    destroyed() {
      window.removeEventListener('scroll', this.handleNotificationListScroll())
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

      // 무한 스크롤
      handleNotificationListScroll() {
        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
        if(!this.isBottom){
          this.isBottom = (scrollHeight - 50 < (scrollTop + clientHeight));
          if (this.isBottom) this.handleLoadMore(this.nowPage + 50);
        }
      },

      // 데이터 더 가져오기
      handleLoadMore(newPage) {
        let params = {
          "pagingStart": newPage
        }
        this.getData(params)
        this.nowPage = newPage
        this.isBottom = false;
      },

      // 자주묻는질문 카테고리 클릭 시 데이터 조회
      selectCate(cateCode) {
        this.result.questionList = [] ;
        this.selectedMenu = null;  //상세내용숨기기 

        this.nowCateCode = cateCode
        let params = {
          "questionTypeCode": cateCode,
          "pagingStart": 0
        }
        this.getFirstData(params)
      },

      // 서버로 부터 데이터 수신
      getFirstData(params) {
        let _this = this;
        this.$http.post("guest/questions?questionTypeCode=" + params.questionTypeCode + "&pagingStart=" + params.pagingStart)
            .then((response) => {
              _this.result.questionList = response.data.result.questionList;
              _this.result.questionCateList = response.data.result.questionCateList;
            })
            .catch((error) => {
              console.log("Error Check >>>>>>>>>> ", error);
            })
      },

      // 서버로 부터 데이터 수신
      getData(params) {
        let _this = this;
        this.$http.post("guest/questions?questionTypeCode=" + params.questionTypeCode + "&pagingStart=" + params.pagingStart)
            .then((response) => {
              _this.result.questionList = _this.result.questionList.concat(response.data.result.questionList);
              _this.result.questionCateList = response.data.result.questionCateList;
            })
            .catch((error) => {
              console.log("Error Check >>>>>>>>>> ", error);
            })
      }
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
.answer__cont-text li {
  margin-left: 20px;
}
</style>
