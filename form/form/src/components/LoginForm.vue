<template>
<h1>This is the login form</h1>
<h2>{{ uppercaseName }}</h2>
<input type="text"  placeholder="enter name"><br><br>
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
            },
            Componentname:'loginform'
}
    },
    computed:
    {
        uppercaseName(){
            return this.Componentname.toUpperCase();
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