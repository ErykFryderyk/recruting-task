<template>
  <div id="app">
    <MyHeader @toggle-modal="toggleModal" />
    <Pagination
      v-if="results"
      :totalRecords="results.length"
      :perPageOptions="perPageOptions"
      :pagination="pagination"
      @input="updateValue"
    />
    <Posts :posts="computedTableData" :users="users" />
    <Transition name="fade">
      <MyModal v-show="modalVisibility" @toggle-modal="toggleModal" />
    </Transition>
  </div>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";
import Posts from "@/components/Posts.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyModal from "@/components/MyModal.vue";
import Pagination from "./components/Pagination.vue";

import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/";

export default {
  name: "App",
  components: {
    MyHeader,
    SearchInput,
    Posts,
    MyModal,
    Pagination,
  },
  data() {
    return {
      perPageOptions: [20, 50, 100],
      modalVisibility: false, //show and hide popup
      mainBody: document.body,
      searchValue: "",
      selectValue: "",
      pagination: { page: 1, perPage: 20},
      results: [
        {
          userId: 4,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        },
        {
          userId: 3,
          id: 2,
          title: "qui est esse",
          body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        },
        {
          userId: 2,
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        },
        {
          userId: 1,
          id: 4,
          title: "eum et est occaecati",
          body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        },
        {
          userId: 2,
          id: 5,
          title: "nesciunt quas odio",
          body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        },
        {
          userId: 3,
          id: 6,
          title: "dolorem eum magni eos aperiam quia",
          body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        },
      ],
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: "-43.9509",
              lng: "-34.4618",
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: "-68.6102",
              lng: "-47.0653",
            },
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
              lat: "29.4572",
              lng: "-164.2990",
            },
          },
          phone: "493-170-9623 x156",
          website: "kale.biz",
          company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services",
          },
        },
      ],
    };
  },
  methods: {
    handleInput() {
      axios
        .all([axios.get(`${API}posts/`), axios.get(`${API}users/`)])
        .then(
          axios.spread((res1, res2) => {
            // console.log(res1.data);
            // console.log(res2.data);

            this.results = res1.data;
            this.users = res2.data;
            this.addReadMore();
          })
        )
        .catch((error) => {
          console.log(error);
        });
    },
    addReadMore() {
      for (let i = 0; i < this.results.length; i++) {
        const el = this.results[i];
        Object.assign(el, { readMore: false });
      }
    },
    toggleModal() {
      this.modalVisibility = !this.modalVisibility;
      this.mainBody.classList.toggle("modal-active");
    },
    updateValue(value) {
      this.pagination.page = value.page;
      this.pagination.perPage = value.perPage;
    },
  },
  mounted() {
    this.handleInput();
  },
  computed: {
    computedTableData() {
      if (!this.results) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;

        return this.results.slice(firstIndex, lastIndex);
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap");
:root {
  font-size: 16px;
}
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
  -webkit-tap-highlight-color: transparent; // remove the blue highlight of buttons and hiperlinks
}
body {
  height: 100vh;
  font-size: 17px;
  background: #ffffff;
  color: black;
  font-family: "Quicksand", sans-serif;
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
  color: #000;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
  color: #000;
}

a {
  text-decoration: none;
  color: #000;
}

p {
  color: #000;
  line-height: 1.5;
  letter-spacing: 1px;
}

img {
  max-width: 100%;
}
#app {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.modal-active {
  overflow: hidden;
}
</style>
