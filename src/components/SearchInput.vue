<template>
  <div class="search-box">
    <label for="search">Search</label>
    <input id="search" type="text"
      v-model="inputValue"
      @input="$emit('show-value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
    };
  },
}
</script>

<style scoped lang="scss">
.search-box {
  width: 100%;
  // height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
