<template>
  <div class="policy-list">
    <div class="container p14">
      <div class="list__wrap" v-if="isList">
        <ul class="list__ul list-style-none" v-for="index in 3" :key="index">
          <li class="list-cont">
            <div class="cont-wrap">
              <div class="cont-item">
                <div class="item-wrap">
                  <p class="item-title mb-0">한국암웨이 클럽타올라 이용 약관 V0.3</p>
                  <p class="item-text sub">2021년 09월 24일 19:11</p>
                </div>
                <router-link class="detail-link" to="/policy-detail">
                <div class="cont-detail">
                  <p class="detail-text mb-0">
                    보기
                  </p>
                </div>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="no-data" v-else>
        <div class="no-data__wrap">
          <div class="empty__icon-wrap">
            <i class="icon-empty"></i>
          </div>
          <div class="empty__text-wrap">
            <p class="empty-text mb-0">글이 없습니다.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isList: true
      }
    }
  }
</script>
<style lang="scss">
  .policy-list {
    .list-cont {
      padding: 18px 0;
      border-bottom: 1px solid #535d6d;
    }
    .cont-item {
      display: flex;
      align-items: flex-start;
    }
    .item-wrap {
      width: calc(100% - 50px);
    }
    .item-title {
      font-size: 16px;
      line-height: 23px;
      color: #9ea2ab;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .item-text {
      font-size: 14px;
      line-height: 21px;
      color: #6d7381;
    }
    .cont-detail {
      width: 50px;
      text-align: right;
    }
    .detail-text {
      font-size: 14px;
      line-height: 21px;
      color: #9ea2ab;
      text-decoration: none;
    }
  }
</style>