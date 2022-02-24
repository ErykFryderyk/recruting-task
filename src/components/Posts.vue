<template>
  <ul>
    <li v-for="item in posts" :key="item.id">
      <h2>{{item.title}}</h2>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Posts',
  props: {
    posts: Object,
  }
}
</script>

<style lang="scss" scoped>

</style>