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
    this.api()
  },
  methods: {
    api() {
      axios.get(`${this.store.baseUrl}/api/post`)
        .then((res) => {
          this.store.arrayProject = res.data.post;

        })
    }
  }

}
</script>

<template>
  <h1>Ciao mondo</h1>
  <MainComp></MainComp>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
