<template>
  <div class="home">
    <ul class="home__ul list-style-none">
      <li>
        <router-link to="/record-share-light">기록 공유 라이트 모드</router-link>
      </li>
      <li>
        <router-link to="/record-share">기록 공유</router-link>
      </li>
      <li>
        <router-link to="/share-template">공유 템플릿</router-link>
      </li>
      <li>
        <router-link to="/exercise-share">운동이력 공유</router-link>
      </li>
      <li>
        <router-link to="/exercise-stats">운동 통계</router-link>
      </li>
      <li>
        <router-link to="/faq">자주하는 질문</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
a {
  color: #fff;
}
.home__ul {
  padding: 0 16px;
  li {
    margin-top: 10px;
  }
  a {
    font-size: 20px;
  }
}
</style>
