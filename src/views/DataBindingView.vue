<template>
    <h1>{{ sampleData }}</h1>
    <div>{{ sampleData2 }}</div>
</template>

<script>
export default {
    name: '',
    components: 'DataBinding',
    data() {
        return {
            sampleData: 'Hello',
            sampleData2: 'World'
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        
    }
}
</script>

<style scoped>

</style>