<template>
    <nav class="menu">
        <router-link :to="{name:'home'}" exact>Home</router-link>
        <router-link :to="{name:'faq'}" exact>FAQ</router-link>
    </nav>
</template>

<script>
    export default {
        name: "NavMenu"
    }
</script>

<style lang="sass" scoped>
    @import "../style/imports"
    .route-link-exact-active
        border-bottom-color: $primary-color
</style>