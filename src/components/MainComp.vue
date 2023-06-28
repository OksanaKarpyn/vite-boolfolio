<script>
import { store } from '../store';
import ProjectCard from './ProjectCard.vue'
export default {
    name: "MainComp",
    props: [

    ],
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <ProjectCard v-for="(elem, index) in  store.arrayProject " :key="index" :nomeProps="elem">

            </ProjectCard>
            <!-- <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" @click.prevent="prev(), api(this.currentPage + 1)"
                            href="#">Previous</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" @click.prevent="next(), api(this.currentPage - 1)"
                            href="#">Next</a>
                    </li>
                </ul>
            </nav> -->
        </div>

    </div>
</template>

<style lang="scss" scoped></style>