<template>
<h1>This is the login form</h1>
<input type="text" v-model="formdata.username" placeholder="enter name"><br><br>
<input type="password" v-model="formdata.password" placeholder="enter password"><br><br>

<button v-on:click="login">login</button>
</template>
<script>
export default{
    name: 'LoginForm',
    data()
    {
        return{
            formdata:{
                username:null,
                password:null
            }
}
    },
    methods:
   {
    login()
    {
        console.log('login is called')
        console.log(this.formdata)
    }
   }

}
</script>