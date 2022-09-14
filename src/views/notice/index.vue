<template>
  <div class="notice">
    <!-- todo: isNotice -> 데이터 생성이후 데이터.length > 0로 v-if 변환하기 -->
    <div class="notice-contents" v-if="isNotice">
      <div class="notice-fixed">
        <div class="container p14">
          <div class="notice__accordion-wrap">
            <ul class="notice__list list-style-none">
              <div>
                접속한 User의 Profile ID :::::::: {{ this.beforeNotiList }}
              </div>
              <li class="notice__cont" v-for="(notice, index) in this.result.topList" :class="{open: selectedMenu === index}" :key="index" @click="handleMenu(notice.notiId, index)">
                <div class="notice__question">
                  <div class="notice__question-wrap">
                    <p class="notice__title mb-0">{{ notice.notiTitle }}</p>
                    <!--  todo: notice__text-wrap에 new 클래스 추가 시 새로운 글 표시 -->
                    <div class="notice__text-wrap " :class="{'new':  notice.isNew  }">
                      <span class="notice__text sub">{{ notice.notiType }}</span>
                      <span class="notice-bar"></span>
                      <span class="notice__text sub">{{ getTime(notice.notiDatatime) }}</span>
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
                      <!--                      <p class="answer__title notice__title">스피닝 [신년에도 다타러 가즈아~~~!] 미션..</p>-->
                      <p class="answer__cont-text mb-0" v-html="notice.contents">
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
        <div class="notice__accordion-wrap">
          <ul class="notice__list list-style-none">
            <li class="notice__cont" v-for="(notice, index) in this.result.noticeList" :class="{open: handleMenuNormal === index}" :key="index" @click="handleMenuNormal(notice.notiId, index)">
              <div class="notice__question">
                <div class="notice__question-wrap">
                  <p class="notice__title mb-0">{{ notice.notiTitle }}</p>
                  <div class="notice__text-wrap " :class="{'new':  notice.isNew  }">
                    <span class="notice__text sub">{{ notice.notiType }}</span>
                    <span class="notice-bar"></span>
                    <span class="notice__text sub">{{ getTime(notice.notiDatatime) }}</span>
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
                <div class="notice__answer" v-show="selectedMenuNormal === index" :key="index">
                  <div class="answer__cont">
                    <!--                    <p class="answer__title notice__title">스피닝 [신년에도 다타러 가즈아~~~!] 미션..</p>-->
                    <p class="answer__cont-text mb-0" v-html="notice.contents">
                    </p>
                  </div>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="no-data" v-else>
      <div class="no-data__wrap">
        <div class="empty__icon-wrap">
          <i class="icon-empty"></i>
        </div>
        <div class="empty__text-wrap">
          <p class="empty-text mb-0">공지사항이 없습니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      beforeNotiList: [],
      notiList: [],
      result: {
        noticeList: [],
        topList: []
      },
      nowPage: 0,
      isBottom: false,
      isNone: true,
      currentTab: 0,
      selectedMenu: 0,
      selectedMenuNormal: 0,
      isNotice: true,
      maxSize: this.$route.query.maxSize,
      noticeSize: 0,
      profileId: ""
    }
  },
  created(){
    let params = {
      "pagingStart": 0
    }
    this.selectedMenuNormal = null;
    this.selectedMenu = null;
    this.getData(params)
    window.addEventListener('scroll', this.handleNotificationListScroll())
    this.profileId = this.$route.query.profileId;
    this.expiredTimeCheck();
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleNotificationListScroll())
  },

  watch: {
    // 질문이 변경될 때 마다 이 기능이 실행됩니다.
    result: function () {
      this.$windowCapture();
      console.log("데이터 변경 체크 : ", this.result);
    }
  },
  methods: {
    handleMenu(notiId, index) {
      this.selectedMenuNormal = null;
      if(this.selectedMenu === index) {
        this.selectedMenu = null;
      } else {
        this.selectedMenu = index;
      }
      this.saveWatchedNotification(notiId)
      this.pushIsNew(this.result.topList)
    },
    handleMenuNormal (notiId, index) {
      this.selectedMenu = null;
      if(this.selectedMenuNormal === index) {
        this.selectedMenuNormal = null;
      } else {
        this.selectedMenuNormal = index;
      }
      this.saveWatchedNotification(notiId)
      this.pushIsNew(this.result.noticeList)
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

    // 스크롤 내릴 때 데이터 조회
    handleLoadMore(newPage) {
      let params = {
        "pagingStart": newPage
      }
      this.getData(params)
      this.nowPage = newPage
      this.isBottom = false;
    },

    // localStorage 내 조회 이력 저장
    saveWatchedNotification(notificationId){
      // 만료일 생성
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)

      // localStorage 내 현재 Profile의 공지사항 조회 리스트 불러오기. 없다면 빈값 생성
      let dicString = window.localStorage.getItem(this.profileId);
      let dic = {}
      if(dicString) {
        dic = JSON.parse(dicString)
      }

      // 각 공지사항별 시청 이력 저장하기
      const keyValue = "notificationId_" + notificationId;
      dic[keyValue] = tomorrow

      // 객체를 JSON 문자열로 변환
      const objString = JSON.stringify(dic);

      // 업데이트된 오브젝트로 기존 값 치환
      window.localStorage.setItem(this.profileId, objString);
    },

    expiredTimeCheck(){
      // 날짜 비교를 위한 값 세팅
      const today = new Date()
      const compareDate = new Date(today)
      compareDate.setDate(compareDate.getDate())
      let expiredDate = ""

      // localStorage 내 현재 Profile의 공지사항 조회 리스트 불러오기. 없다면 빈값 생성
      let dicString = window.localStorage.getItem(this.profileId);
      let dic = {}

      // 값이 존재하지 않는다면 비교하지 않고 리턴
      if(dicString) {
        dic = JSON.parse(dicString)
        for (const [key, value] of Object.entries(dic)) {
          if(value){
            expiredDate = new Date(value)

            // 날짜 비교 진행
            if (expiredDate < compareDate){
              delete dic[key]
            }
          }
        }
      } else {
        return
      }

      // 업데이트한 객체를 JSON 문자열로 변환
      const objString = JSON.stringify(dic)

      // 업데이트된 오브젝트로 기존 값 치환
      window.localStorage.setItem(this.profileId, objString);
      console.log("expiredTimeCheck End >>>>>> ", window.localStorage.getItem(this.profileId));
    },

    pushIsNew(notiList){
      for (const [key, value] of Object.entries(notiList)) {
        value['isNew'] = false

        // 날짜 비교를 위한 값 세팅
        const today = new Date()
        const compareDate = new Date(today)
        compareDate.setDate(compareDate.getDate())
        let dateTime = new Date(value.notiDatatime)
        dateTime = new Date(dateTime.setDate(dateTime.getDate() + 1));	// 어제

        // 날짜 비교 진행
        this.beforeNotiList = "" + dateTime + " | " + compareDate + " | " + value['isNew'] + " | " + value.notiId
        if (dateTime >= compareDate){
          value['isNew'] = (!this.isInLocalStorage(value.notiId))
        }
      }
      this.notiList = notiList
    },

    isInLocalStorage(notiId){
      this.beforeNotiList = this.profileId
      let dicString = window.localStorage.getItem(this.profileId);
      let dicValue = {}
      this.beforeNotiList = dicString
      if(dicString){
        dicValue = JSON.parse(dicString)
      } else {
        return false
      }
      this.beforeNotiList = this.profileId
      let searchNotiId = 'notificationId_' + notiId
      if(dicValue[searchNotiId]){
        return true
      }
      return false
    },

    getData(params) {
      let _this = this;
      this.$http.post("guest/notice?pagingStart=" + params.pagingStart)
          .then((response) => {
            _this.result.topList = response.data.result.topList
            _this.result.noticeList = _this.result.noticeList.concat(response.data.result.noticeList)
            this.pushIsNew(_this.result.topList);
            this.pushIsNew(_this.result.noticeList);

            _this.noticeSize =  response.data.result.noticeList.length;
            _this.isNone = (!_this.result.topList || !_this.result.topList)
          })
          .catch((error) => {
            console.log(error);
          })
    },

    getTime(timeValue){
      let date = new Date(timeValue);
      return date.getFullYear() + "년 "
          + this.setTime(date.getMonth()) + "월 "
          + this.setTime(date.getDate()) + "일 "
          + this.setTime(date.getHours()) + ":" + this.setTime(date.getMinutes())
    },
    setTime(timeValue){
      return timeValue >= 10 ? timeValue : ("0" + timeValue)
    }
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
/* nodata scss */
.no-data {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.no-data__wrap {
  text-align: center;
}
.empty__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-empty {
  width: 88px;
  height: 88px;
  display: block;
  background: url("~@/assets/icons/icon-empty.png") no-repeat center;
  background-size: cover;
}
.empty__text-wrap {
  padding-top: 10px;
}
.empty-text {
  font-size: 18px;
  color: #9ea2ab;
}
</style>
