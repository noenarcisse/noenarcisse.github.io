<script setup lang="ts">

const props = defineProps<{
    title: string,
    elements: string[]
}>()
</script>

<template>
    <div class="skills">
        <h2>{{ title }}</h2>
        <div class="list">
            <div v-for="element of elements" class="list-elements">
                <div class="lang-name">
                    {{ element }}
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.list {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

@media (min-width: 768px) {
    .list {
        /* max-width: 60%; */
    }
}

.list-elements {
    display: inline-block;
    margin: 5px;
    padding: 7px;

    background-color: rgb(32, 32, 32);

    border: 1px solid var(--gray);
    border-radius: 5px;

    color: var(--white);
    white-space: nowrap;
    text-transform: uppercase;


    transition: 0.4s;
}

.list-elements2 {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: rgba(0, 0, 0, 0);
    border: 0px solid white;
}

.list-elements2 div {
    display: flex;
    justify-content: center;
}

.list-elements2 img {
    max-height: 32px;
    background-color: rgba(0, 0, 0, 0);
    border: 0px solid white;
}

.lang-name {
    text-align: center;
    text-transform: uppercase;
}

@media (min-width: 768px) {
    .list-elements {
        margin: 5px;
        padding: 10px;
    }
}


.list-elements:hover {
    transform: scale(1.1, 1.1);
}
</style>
