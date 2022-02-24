<template>
  <div id="app">
    <SearchInput @show-value="handleInput"/>
    <Posts :posts="results"/> 
    <!-- <ul>
      <li v-for="item in results" :key="item.id">
        {{item.title}}
      </li>
    </ul> -->
  </div>
</template>

<script>
import SearchInput from './components/SearchInput.vue'
import Posts from '@/components/Posts.vue'

import axios from "axios";
import debounce from "lodash.debounce";

const API = "https://jsonplaceholder.typicode.com/";

export default {
  name: 'App',
  components: {
    SearchInput,
    Posts,
  },
  data() {
    return{ 
      searchValue: "",
      selectValue: "",
      results: [],
    }
  },
  methods: {
    handleInput: debounce(function () {
      axios
        .get(`${API}posts/`)
        .then((response) => {
          this.results = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000),
  },
}
</script>

<style lang="scss">
</style>
