<template>
    <div>
        <h1>delete user</h1>
        <table border="1px">
            <tr>
                <th>name</th>
                <th>email</th>
                <th>action</th>
            </tr>
            <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td><button v-on:click="deleteUser(user.id)" >delete</button></td>
            </tr>
        </table>

    </div>
</template>
<script>
import axios from 'axios';
export default{
    name: 'DeleteData',
    data()
    {
        return{
            users:null,
        }
    },
    methods:
    {
        getData()
        {
            axios.get('https://jsonplaceholder.typicode.com/users').then((result)=>{
                console.warn(result.data)
                this.users = result.data
            })
        },

        deleteUser(id)
        {
            axios.delete('https://jsonplaceholder.typicode.com/users/'+ id).then(()=>{
                console.log('success deleted')
            })
            this.getData(); //to repopulate the table
        }
    },
    mounted()
    {
        this.getData()
    }
}
</script>