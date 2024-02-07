<template>
    <div>User component</div>
    <p>{{ users_id }}</p>
</template>
<script>
export default{
    name: 'UserList',
    data()
    {
        return{
            users_id:this.$route.params.id
        }
    }
}
</script>