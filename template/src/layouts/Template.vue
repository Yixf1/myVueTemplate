<template>
  <div>
    <h1>这是一个通用模板</h1>
    <div class="tContent">
      <router-view :key="key"></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Template'
}
</script>
