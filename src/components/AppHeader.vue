<script>
export default {
    name: 'AppHeader',
    data() {
        return {

        }
    },

}
</script>
<template>
    <div class="container py-5">
        <nav class="navbar navbar-expand-lg rounded-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <router-link class="nav-link" href="#" to="/">Home</router-link>
                        <router-link class="nav-link" href="#" to="/blog">Posts</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
                        <router-link class="nav-link active" aria-current="page" to="/contacts">Contact</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style></style>