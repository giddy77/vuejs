<template>
    <div>
        <h1>Home page</h1>
        <div>
            <router-link to="/about">about</router-link>
        </div>
        <div>
            <ul>
                <li><router-link to="/users/1">Wolf</router-link></li>
                <li><router-link to="/users/2">Bruce</router-link></li>
                <li><router-link to="/users/3">Dev</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    name: 'HomePage'
}
</script>