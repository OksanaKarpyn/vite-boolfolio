<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import { store } from '../store';
export default defineComponent({
    name: 'ContactForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,

        };
    },
    props: {},

    components: {},



    mounted() {
        this.sendForm();
    },

    methods: {
        sendForm() {
            const paramData = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post(`${this.store.baseUrl}/api/contacts`, paramData)
                .then((res) => {
                    this.success = res.data.success
                    if (this.success) {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                })
        }
    },

    computed: {},

    watch: {},




});
</script>
<template>
    <div>
        <h1>sono pag contatti</h1>
    </div>
    <div class="container">
        <form @submit.prevent="sendForm()" method="post">
            <div class="mb-3">
                <label for="input-name" class="form-label">Name</label>
                <input type="text" class="form-control" name="name" id="input-name" aria-describedby="helpId"
                    placeholder="inserisci nome" v-model="name">
            </div>
            <div class="mb-3">
                <label for="input-email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="input-email" aria-describedby="helpId"
                    placeholder="inserisci email" v-model="email">
            </div>
            <div class="mb-3">
                <label for="input-textarea" class="form-label">Messaggio</label>
                <textarea class="form-control" name="message" id="input-textarea" rows="4" v-model="message"></textarea>
            </div>
            <button type="submit" class="btn btn-outline-secondary">invia form</button>
        </form>
    </div>
</template>
<style lang="scss" scoped></style>
