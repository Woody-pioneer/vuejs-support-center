<template>
    <div class="row">
        <input
                class="input"
                :class="inputClass"
                :name="name"
                :type="type"
                :value="text"
                :placeholder="placeholder"
                @input="update"
        />
    </div>
</template>

<script>
    export default {
        name: "FormInput",
        model:{
          prop:'text',
          event:'input'
        },
        props: {
            name: {
                type: String,
            },
            type: {
                type: String,
                default: 'text',
            },
            text: {
                required: true,
            },
            placeholder: {
                type: String,
            },
            invalid: {
                type: Boolean,
                default:false,
            },
        },
        computed:{
            inputClass(){
                return {
                    'invald':this.invald,
                }
            }
        },
        methods:{
            update(e){
               this.$emit('input',e.currentTarget.value);
               console.log(e.currentTarget.value);
            }
        }
    }
</script>

<style scoped>

</style>