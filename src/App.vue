<script >
import axios from 'axios';
import { store } from './store';
import MainComp from './components/MainComp.vue';
export default {
  name: 'AppVue',
  components: {
    MainComp
  },
  data() {
    return {
      store,


    }
  },
  mounted() {
    this.api(),
      this.prev(),
      this.next()
  },
  methods: {
    api(currentPage) {
      axios.get(`${this.store.baseUrl}/api/post`, {
        params: {
          page: this.store.currentPage
        }
      })
        .then((res) => {
          this.store.arrayProject = res.data.post.data;
          this.store.currentPage = res.data.post.current_page;
          this.store.lastPage = res.data.post.last_page;
        })
    },

    prev() {
      this.store.currentPage = this.store.currentPage - 1;
      if (this.store.currentPage == 0) {

        return this.store.currentPage = this.store.lastPage;
      }
      //this.store.currentPage = this.store.currentPage - 1;
    },
    next() {
      this.store.currentPage = this.store.currentPage + 1;
      if (this.store.currentPage == this.store.lastPage + 1) {

        return this.store.currentPage = 1;
      }
      //this.store.currentPage = this.store.currentPage + 1;
    }

  }

}
</script>

<template>
  <h1>Ciao mondo</h1>
  <MainComp></MainComp>
  <div class="container d-flex justify-content-center my-4">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click.prevent=" prev(), api(currentPage)" href="#">Previous</a>
        </li>

        <!-- <li class="page-item" v-for="(elem, index) in store.lastPage" :key="index">
          <a class="page-link" href="#" @click.prevent=" prev()">{{ elem }}</a>
        </li> -->
        <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li> -->

        <li class="page-item"><a class="page-link" @click.prevent="next(), api(this.currentPage)" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
