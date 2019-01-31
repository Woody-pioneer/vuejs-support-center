<template>
    <form @submit.prevent="submit">
        <section class="content">
            <h2>{{title}}</h2>
            <slot></slot>
            <div class="actions">
                <slot name="action"></slot>
            </div>
            <div class="error" v-if="error">{{error}}</div>
        </section>
    </form>
</template>

<script>
    export default {
        name: "SmartForm",
        props:{
            title:{
                type:String,
                required:true,
            },
            operation: {
                type: Function,
                required: true,
            },
        },
        data(){
            return {
                error:null,
                busy:false,
            }
        },
        methods:{
            async submit(){
                    try{
                       await this.operation();
                    }catch (e) {
                        this.error=e.message;
                    }
                    this.busy=false;
                }
        }
    }
</script>

<style scoped>

</style>