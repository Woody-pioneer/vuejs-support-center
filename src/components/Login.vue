<template>
    <div class="row">
        <div class="col-md-12">
            <h1>Please login to continue...</h1>
            <SmartForm class="" :title="title" :operation="operation">
                <FormInput name="'username" v-model="username" placeholder="Username"></FormInput>
                <FormInput name="password" type="password" v-model="password" placeholder="password"></FormInput>
                <template v-if="mode==='signup'">
                    <FormInput name="verify-password" v-model="password2" placeholder=""></FormInput>
                    <FormInput name="email" type="email" v-model="email" placeholder="email"></FormInput>
                </template>
                <div class="left">select：{{checked}}</div>
                <RadioBox class="right" :options="options" v-model="checked"></RadioBox>
                <CheckBox class="right" value="some value" v-model="agreed"></CheckBox>
                {{agreed}}
                <template slot="action">
                    <template v-if="mode=='login'">
                        <button type="submit" class="secondary">Log In</button>
                        <button type="button"  @click="mode='signup'">Sign Up</button>
                    </template>
                    <template v-else-if="mode=='signup'">
                        <button type="button" class="secondary" @click="mode='login'">Back To Login</button>
                        <button type="submit">Create Account</button>
                    </template>
                </template>
            </SmartForm>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                mode: 'signup',
                username: '',
                password: '',
                password2: '',
                email: '',
                checked: 0,
                options: [
                    {
                        value: 2,
                        name: '选项1'
                    },
                    {
                        value: 3,
                        name: '选项2'
                    },
                ],
                agreed: true
            }
        },
        computed: {
            title() {
                switch (this.mode) {
                    case 'login':
                        return 'Login';
                    case 'signup':
                        return 'Create a new account';
                }
            }
        },
        methods: {
            updateUsername: function (value) {
                this.username = value;
            },
            async operation(){
              await this[this.mode]();
            },
            async login(){
                console.log('click login to submit');
            }
        }

    }
</script>

<style scoped>

</style>