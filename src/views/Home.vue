<template>
  <div class="home">
    <ul class="home__ul list-style-none">
      path: "/share/loading",
      path: "/share/get-icon",
      path: "/share/exercise/my-exercise-history",
      path: "/share/exercise/class-exercise-history",
      path: "/share/exercise/statistics",
      path: "/notice",
      path: "/questions",
      <li>
        <router-link to="/share/loading">공유로딩페이지</router-link>
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
