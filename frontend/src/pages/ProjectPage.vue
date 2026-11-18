<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Loader from '@/components/Loader.vue'
import { AppData } from '@/stores/AppData'
import { splitStack } from '@/helpers/helpers'

const route = useRoute()
const data = AppData.getInstance()

const projectTitle = computed(() => {
    const match = route.params.pathMatch
    const value = Array.isArray(match) ? match.join('/') : match ?? ''
    return value.toLowerCase()
})

const project = computed(() =>
    data.projects.find((item) => item.url.toLowerCase() === projectTitle.value)
)

const stackItems = computed(() =>
    project.value ? splitStack(project.value.stack) : []
)
</script>

<template>
    <div v-if="!data.isDataLoaded" class="loader-wrap">
        <Loader />
    </div>
    <div v-else-if="project" class="container-project">
        <div class="project-logo" :style="{ backgroundImage: 'url(/images/' + project.imgbg + ')' }">
            <div class="colored-glass" :style="{ backgroundColor: project.color || undefined }">
                <div class="logo"><img :src="'images/projects/' + project.logo" /></div>
                <div class="title">{{ project.title }}</div>
            </div>
        </div>
        <div class="project-descr">
            <h1 :style="{ borderColor: project.color || undefined }">{{ project.subtitle }}</h1>
            <div class="descr">
                <div class="stack">
                    <div v-for="(tech, index) in stackItems" :key="index" class="tech"
                        :style="{ backgroundColor: project.color || undefined }">
                        {{ tech }}
                    </div>
                </div>

                <div class="page-content" v-html="project.page"></div>
            </div>
        </div>
    </div>
    <div v-else class="not-found">
        Project introuvable.
    </div>
</template>

<style scoped>
.container-project {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    color: var(--white);

    font-family: Roboto, 'Segoe UI', 'San Francisco', sans-serif;
    font-size: 14px;
    border-bottom: 1px solid var(--gray);

    background-color: rgb(29, 29, 29);
}

@media (min-width: 768px) {
    .container-project {
        flex-direction: row;
    }
}

.project-logo {
    flex: 3;
}

.colored-glass {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: rgba(105, 14, 110, 0.858);

    backdrop-filter: blur(10px);
}

.colored-glass div {
    display: flex;
    flex: 1;
    justify-content: center;
}

.logo {
    align-items: flex-end;
}

.title {
    padding-bottom: 5%;
    align-items: flex-start;
    font-size: 30px;
    text-align: center;
}

@media (min-width: 768px) {
    .title {
        align-items: flex-start;
        font-size: 30px;
        text-align: center;
    }
}

.logo img {
    width: 150px;
}

.project-descr {
    flex: 7;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
    padding-bottom: 3%;
}

.descr {
    white-space: pre-line;
    max-width: 100%;
}

.page-content :deep(img),
.page-content :deep(video) {
    max-width: 100%;
}

@media (min-width: 768px) {
    .page-content :deep(img),
    .page-content :deep(video) {
        max-width: 750px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
}

.page-content :deep(a) {
    color: var(--white);
}

.page-content :deep(a:hover) {
    color: var(--yellow);
}

h1 {
    padding-bottom: 10px;

    max-width: 50%;
    border-bottom: 1px solid var(--yellow);

    color: var(--white);
    font-family: 'trebuchet ms', sans-serif;
    font-size: 32px;
    font-weight: 100;
}

h2 {
    margin-top: 15px;
    margin-bottom: 10px;

    font-family: 'trebuchet ms', sans-serif;
    font-size: 20px;
    font-weight: 100;
}

a,
a:active {
    color: var(--white);
    font-size: 12px;
}

a:hover {
    color: var(--yellow);
}

.stack {
    display: grid;
    gap: 2%;
    row-gap: 10%;
    grid-template-columns: auto auto auto auto;

    padding-top: 20px;
    padding-bottom: 70px;
}

.tech {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 7px;
    padding-left: 10px;
    padding-right: 10px;

    border: 1px solid white;
    border-radius: 50px;
}

.loader-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
}

.not-found {
    padding: 40px;
    text-align: center;
    color: var(--white);
}
</style>
