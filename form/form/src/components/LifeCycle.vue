<template>
    <div>
        <h1>{{ name }}</h1>
    </div>
</template>
<script>
export default{
    name: 'LifeCycle',
    data()
    {
        return{
            name: 'wolf'
        }
    },
    beforeCreate(){
        this.name = 'sipoi'
        console.warn('before creat component', this.name)
    },
    created()
    {
        this.name = 'developer'
        console.warn('created',this.name)
    },
    beforeMount()
    {
        console.warn('before mount',this.name)
    },
    mounted()
    {
        console.warn('mounted',this.name);
    }
}
</script>