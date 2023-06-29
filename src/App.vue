<script >
//import axios from 'axios';
import { store } from './store';
//import MainComp from './components/MainComp.vue';
//mport PostList from './pages/PostList.vue'
import AppHeader from './components/AppHeader.vue';
export default {
  name: 'AppVue',
  components: {

    AppHeader
  },
  data() {
    return {
      store,


    }
  },
  mounted() {

  },
  methods: {


  }

}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
