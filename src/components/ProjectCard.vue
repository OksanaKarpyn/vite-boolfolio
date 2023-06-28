<script>
import { store } from '../store';
export default {
    name: 'ProjectCard',
    props: ['nomeProps'],
    //import { store } from '../store';
    data() {
        return {
            store
        }
    },
    created() {
    },
    methods: {
    }

};
</script>
<template>
    <div class="col-3 d-flex">
        <div class="card" style="width: 18rem;">
            <div>
                <img :src="`${store.baseUrl}/storage/${nomeProps.image}`" class="card-img-top" alt="...">
            </div>
            <h5 class="card-title">{{ nomeProps.title }}</h5>
            <div class="card-body">
                <p class="card-text">{{ nomeProps.content }}</p>
                <p class="card-text" v-if="nomeProps.category">{{ nomeProps.category.title }}</p>
                <ul class="card-text" v-if="nomeProps.tecnologies">
                    <li v-for="(item, index) in nomeProps.tecnologies" :key="index">{{ item.title }}</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>