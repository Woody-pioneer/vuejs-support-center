<template>
    <input type="checkbox"  :checked="checked"  @change="onChange"/>
</template>

<script>
    export default {
        name: "CheckBox",
        model: {
            prop: 'checked',
            event: 'change'
         },
        props:{
            checked:Boolean,
            value:String,
        },
        methods:{
            onChange(){
                console.log(event.target);
                this.$emit('change',event.target.checked);
            }
        }
    }
</script>

<style scoped>

</style>