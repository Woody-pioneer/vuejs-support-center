<template>
    <main class="faq">
        <h1>Frequent Asked Questions</h1>
        <div class="error" v-if="error">
            Can't load the question
        </div>
        <loading v-if="loading"></loading>

        <table class="table table-striped table-bordered">
            <tr v-for="question of questionList">
                <td v-html="question.name"></td>
                <td v-html="question.email"></td>
                <td v-html="question.body"></td>
                <td><img :src="question.avatar"/></td>
            </tr>
        </table>
    </main>
</template>

<script>
    import RemoteData from '../mixins/RemoteData'
    export default {
        name: "Faq",
        mixins:[
            RemoteData({
                questionList: 'signatures',
            }),
        ],
        data(){
            return {
                error:null,
                loading:false,
            }
        },
        /*
        async created() {
           this.loading=true;
            try {
                this.questions = await this.$fetch('signatures');
        } catch (e) {
            this.error=e;
            }
            this.loading=false;
            console.log(this.$state);

        }*/
    }
</script>

<style scoped>

</style>