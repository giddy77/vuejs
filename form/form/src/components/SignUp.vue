<template>
    <div>
        <h1>Sign up form</h1>
        <p v-if="error.length"></p>
        <form @submit="login">
            <input type="text" v-model="name" placeholder="enter name"><br><br>
            <input type="password" v-model="password" placeholder="enter password"><br><br>
            <button type="submit">submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data() {
        return {
            name: null,
            password: null,
            error:[]

        }
    },
    methods:
    {
        login(e) {
            if(this.name && this.password){
                console.log('login is called')
            }
           this.error = []
           if(!this.name){
            this.error.push('name is required')
           }
           if(!this.password){
            this.error.push('password is required')
           }
           console.warn('errors', this.error)
            e.preventDefault()
        }
    }
}
</script>