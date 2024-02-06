<template>
<h1>Consume external api</h1>
<table>
    <tr>
        <th>name</th>
        <th>model</th>
    </tr>
    <tr v-for="item in starships" v-bind:key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.model }}</td>
    </tr>
</table>
</template>
<script>
import axios from 'axios';
export default{
    name: 'ConsumeApi',
    data(){
        return{
            data:undefined,
            starships:[]
        }
    },
    mounted()
    {
         
            axios.get('https://swapi.dev/api/starships')
            .then((response)=>{
                this.data = response.data.results
                
                this.starships = this.data.map(item => item)
                console.log(response.data.results);
            })
        
    }
}
</script>