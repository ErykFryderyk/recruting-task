<template>
  <div class="search-box">
    <label for="search">Search</label>
    <select name="" id="" v-model="selectValue" @click="handleInput">
      <option value="posts">Posts</option>
      <option value="comments">Comments</option>
      <option value="albums">Albums</option>
    </select>
    <input id="search" type="text" v-model="searchValue" @click="handleInput" />
    <h1>{{ selectValue }}</h1>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";

const API = "https://jsonplaceholder.typicode.com/";

export default {
  name: 'SearchInput',
  data() {
    return {
      searchValue: "",
      selectValue: "",
      results: [],
    };
  },
  methods: {
    handleInput: debounce(function () {
      axios
        .get(`${API}${this.selectValue}/`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000),
  },
}
</script>

<style scoped lang="scss">
.search-box {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
