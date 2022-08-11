<template>
  <section>
    <!-- TODO - 퍼블 나오면 <template>을 새롭게 제작해서 안에 값을 치환하는 식으로 제작하면 됨 -->
    <div>자주 묻는 질문</div>
    <span v-for="cate in result.questionCateList" @click="selectCate(cate.dtlCd)">
      <span v-if="cate.dtlCd == nowCateCode" style="color: rgb(174, 234, 22);">{{ cate.dtlCdNm }}</span>
      <span v-else>{{ cate.dtlCdNm }}</span> &nbsp;
    </span>
    <div v-if="result.questionList">
      <div v-for="question in result.questionList" @click="toggleQuestion(question)">
        <div>{{ question.askContents }}</div>
        <div>{{ question.createDatetime }}</div>
        <div :id="question.askId" v-if="question.isSelected">{{ question.ansContents }}</div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      result: {
        questionList: [],
        questionCateList: []
      },
      nowCateCode:"01" ,
      nowPage: 0,
      isBottom: false,
    }
  },

  created() {
    let params = {
      questionTypeCode: this.$route.query.questionTypeCode,
      pagingStart: 0
    }
    this.getData(params)
    window.addEventListener('scroll', this.handleNotificationListScroll())
  },

  destroyed() {
    window.removeEventListener('scroll', this.handleNotificationListScroll())
  },

  methods:{
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

    toggleQuestion(item) {
      item.isSelected = !item.isSelected
    },

    selectCate(cateCode) {
      this.nowCateCode = cateCode
      let params = {
        "questionTypeCode": cateCode,
        "pagingStart": 0
      }
      this.result.questionList = []
      this.getData(params)
    },

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