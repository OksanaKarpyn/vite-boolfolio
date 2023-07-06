<script >
import axios from 'axios';
import { store } from '../store';
import MainComp from '../components/MainComp.vue'
//import MainComp from './components/MainComp.vue';
export default {
    name: 'AppVue',
    components: {
        MainComp
    },
    data() {
        return {
            store,
            selectCategory: 'all',
            selectTecnology: []
        }
    },
    mounted() {
        this.api();
        this.getcategory();
        this.getTecnology();

    },
    watch: {
        selectTecnology: {
            handler: 'api',
            deep: true
        }
    },
    methods: {
        api() {
            const params = {
                page: this.store.currentPage,
            }
            if (this.selectCategory !== 'all') {
                params.category_id = this.selectCategory
            }
            if (this.selectTecnology.length > 0) {
                params.tecnol_ids = this.selectTecnology.join(',');
            }
            //console.log(params);
            axios.get(`${this.store.baseUrl}/api/post`, {

                params

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
        },
        getcategory() {

            axios.get(`${this.store.baseUrl}/api/categories`)
                .then((res) => {
                    this.store.category = res.data.categories
                    // console.log(this.store.category);
                })
        },
        getTecnology() {
            axios.get(`${this.store.baseUrl}/api/tecnologies`)
                .then((res) => {
                    this.store.tecnology = res.data.queryTecnology
                })
        }

    }


}
</script>

<template>
    <div class="container">
        <h1>Portfolio</h1>
        <div class="mb-3">
            <h2>Tecnologies</h2>
            <div class="form-group" v-for="(elem, index) in this.store.tecnology" :key="index">
                <input type="checkbox" name="" id="" :value="elem.id" v-model="selectTecnology">
                <label for="tecnology" class="ms-2">
                    {{ elem.title }}
                </label>
            </div>
        </div>
        <div class="mb-3">
            <label for="category" class="form-label">Categorie</label>
            <select @change="api()" v-model="selectCategory" class="form-select form-select-lg" name="" id="category">
                <option value="all">--Select All---</option>
                <option :value="elem.id" v-for="(elem, index) in this.store.category" :key="index">{{ elem.title }}
                </option>
            </select>
        </div>
    </div>

    <MainComp></MainComp>
    <div class=" d-flex justify-content-center my-4">
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
.router-link-active {
    background-color: transparent;

    border: 1.5px solid #928978;
    border-radius: 25% 10%;
}
</style>
