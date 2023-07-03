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
  <div class="wrapper">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './style/main.scss';

.wrapper {
  background-color: transparent;
  background-image: url(https://i.pinimg.com/736x/b9/de/9f/b9de9f00e4d1929271bf43058d61764f.jpg);
  background-size: cover;
}
</style>
