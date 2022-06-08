<template>
  <div class="pagination-container">
    <font-awesome-icon class="icon" icon="angles-left" @click="changePage(0)" />
    <font-awesome-icon class="icon" icon="angle-left" @click="changePage(-1)" />
    <span class="inner-pagination-content">
      Page {{ page }} of {{ pages }}
    </span>
    <font-awesome-icon
      class="icon"
      icon="angle-right"
      @click="changePage(+1)"
    />
    <font-awesome-icon
      class="icon"
      icon="angles-right"
      @click="changePage(pages)"
    />
    <span class="pagination-seperator">|</span>
    Showing: {{ totalRecords }}
    <!-- <select name="" id="">
      <option v-for="opction in perPageOptions" :key="opction" :value="opcion">
        {{ opction }}
      </option>
    </select> -->
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: [
    "totalRecords", // ile jest POSTÓW (elementów w tablicy RESULTS)
    "perPageOptions", //
  ],
  data() {
    return {
      page: 1,
      perPage: this.perPageOptions[0], // ile ma być wyświetlanch elemetnów e.g. 20 elementów nas stronie <select>20 or 50, or 100</select>
    };
  },
  computed: {
    pages() {
      const remainder = this.totalRecords % this.perPage;

      if (remainder < 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1;
      } else {
        return this.totalRecords / this.perPage;
      }
    },
  },
  methods: {
    changePage(value) {
      switch (value) {
        case 0: this.page = 1; break;
        case -1: this.page = this.page > 1 ? this.page - 1 : this.page; break;
        case +1: this.page = this.page < this.pages ? this.page + 1 : this.page; break;
        case this.pages: this.page = this.pages; break;
      
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
}
.icon {
  cursor: pointer;
}
</style>
