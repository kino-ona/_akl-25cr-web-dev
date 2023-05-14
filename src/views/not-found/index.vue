<template></template>
<script>
export default {
  created() {
    alert("페이지를 표시할 수 없습니다.\n이전 페이지로 이동합니다.")
    history.back();
  }
}
</script>