<template>
  <div>
    <h1>这是一个登录模板</h1>
    <div class="tContent">
      <router-view :key="key"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login'
}
</script>
