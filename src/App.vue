<template>
  <div id="app">
    <h1 class="">Posts App</h1>
    <!-- <SearchInput @show-value="handleInput"/> -->
    <Posts :posts="results"/> 
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
    }, 100),
  },
  mounted(){
    this.handleInput();
 },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap');
:root{
  font-size: 16px;
}
*, *::before, *::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  height: 100vh;
  font-size: 17px;
  background: #cfcfcf;
  color: black;
  font-family: 'Quicksand', sans-serif;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-weight: normal;
  line-height: normal;
  color: #000; }

ul {
  padding: 0;
  margin: 0; }

li {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #000; }

a {
  text-decoration: none;
  color: #000; }

p {
  color: #000;
  line-height: 1.5;
  letter-spacing: 1px; }

img {
  max-width: 100%; }
#app{
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;  
}
</style>
