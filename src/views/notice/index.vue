<template>
  <section>
    <div>공지사항</div>

    <!-- TOP -->
    <div v-for="notice in this.result.topList" @click="toggleQuestion(notice)">
      <div>############### {{ notice.notiTitle }} ###############</div>
      <div>
        <span> {{ notice.notiDatatime }} </span> |
        <span v-if="notice.notiType == 'N'">공지</span>
        <span v-else-if="notice.notiType == 'E'">이벤트</span>
      </div>
      <div :id="notice.notiId" v-if="notice.isSelected">{{ notice.contents }}</div>
    </div>

    <!-- SUB -->
    <div v-for="notice in this.result.noticeList" @click="toggleQuestion(notice)">
      <div>{{ notice.notiTitle }}</div>
      <div>
        <span>{{ notice.notiDatatime }} </span> |
        <span v-if="notice.notiType == 'N'">공지</span>
        <span v-else-if="notice.notiType == 'E'">이벤트</span>
      </div>
      <div :id="notice.notiId" v-if="notice.isSelected">{{ notice.contents }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      result: {
        noticeList: [],
        topList: []
      },
      nowPage: 0,
      isBottom: false,
    }
  },
  created(){
    let params = {
      "pagingStart": 0
    }
    this.getData(params)
    window.addEventListener('scroll', this.handleNotificationListScroll())
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

  methods : {
    // 무한 스크롤
    handleNotificationListScroll() {
      const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
      if(!this.isBottom){
        this.isBottom = (scrollHeight - 50 < (scrollTop + clientHeight));
        if (this.isBottom) this.handleLoadMore(this.nowPage + 50);
      }
    },

    handleLoadMore(newPage) {
      let params = {
        "pagingStart": newPage
      }
      this.getData(params)
      this.nowPage = newPage
      this.isBottom = false;
    },

    getData(params) {
      this.$http.post("guest/notice?pagingStart=" + params.pagingStart)
          .then((response) => {
            this.result.topList = response.data.result.topList
            this.result.noticeList = this.result.noticeList.concat(response.data.result.noticeList)
          })
          .catch((error) => {
            console.log(error);
          })
    },

    toggleQuestion(item) {
      item.isSelected = !item.isSelected
    }
  }
}
</script>