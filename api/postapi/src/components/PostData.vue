<template>
    <h1>post data </h1>
    <form @submit="submitdata" method="post">
        <input type="text" name="name" placeholder="name" v-model="item.name"><br><br>
        <input type="text" name="price" placeholder="price" v-model="item.data.price"><br><br>
        <input type="text" name="color" placeholder="color" v-model="item.data.color"><br><br>
        <button type="submit">submit</button><br><br>
    </form>
</template>
<script>
import axios from 'axios';
export default {
    name: 'PostData',
    data() {
        return {
            item: {
                name: null,
                data: {
                    price:null,
                    color:null
                }
            }
        }
    },
    methods: {
        submitdata(e) {
            axios.post('https://api.restful-api.dev/objects',this.item)
            .then(
                console.warn('hey wolf')
            )
            e.preventDefault();
        }
    }
}
</script>