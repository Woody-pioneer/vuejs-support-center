<template>
    <div class="radio">
        <div class="radioGroup">
            <div class="radioItem" v-for="item of options" :key="item.value">
                <input type="radio" name="test-radio" class="radioBox" :class="{checked: item.value === checked}"  @click="clickRadio(item.value)"/>{{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RadioBox",
        props: {
            options: Array,
            value: 0,
        },
        data(){
            return {
               checked:0,
            }
        },
        model: {
            prop: "value", //绑定的值，通过父组件传递
            event: "update" //自定义时间名
        },
        methods: {
            clickRadio(val) {
                this.checked = val;
                this.$emit("update", val); //子组件与父组件通讯，告知父组件更新绑定的值
            }
        },
        watch: {
            checked: function(newVal, oldVal) {
                console.log( newVal);
            }
        }
    }
</script>

<style scoped>

</style>