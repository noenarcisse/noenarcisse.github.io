<script setup>
    import { ref } from 'vue'

    const emit = defineEmits(['back'])

    function backHandler()
    {
        emit('back')
    }

</script>

<template>

        <div class="back-button-wrapper">
            <button @click="backHandler">Back</button>
        </div>


</template>


<style scoped>
    .back-button-wrapper
    {
        flex:1;
    }

</style>
