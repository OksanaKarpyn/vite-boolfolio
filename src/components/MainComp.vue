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
    }
}
</script>

<template>
    <div class="container">
        <ProjectCard v-for="(elem, index) in  store.arrayProject " :key="index" :nomeProps="elem">

        </ProjectCard>
    </div>
</template>

<style lang="scss" scoped></style>