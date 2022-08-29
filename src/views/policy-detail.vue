<template>
  <div class="policy-detail">
    <div class="container p14">
      <header class="policy-detail__header">
        <h1 class="mb-0 policy-detail__title">
          한국암웨이 클럽타올라 민감정보 수집
        </h1>
        <div class="policy-detail__select">
          <p class="policy-detail__title">이용약관</p>
          <div class="detail__select-box">
            <select class="select-box" v-model="onePick">
              <option v-for="(list,index) in versionList" :value="list.value">{{ list.text }}</option>
            </select>
          </div>
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
 export default {
   data() {
     return {
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
         }
       ]
     }
   },
   created() {
     this.onePick = this.versionList[0].value;
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
    margin-left: 10px;
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