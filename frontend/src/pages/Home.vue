<script setup lang="ts">
import { computed } from 'vue'

import ProjectCard from '@/components/ProjectCard.vue'
import Loader from '@/components/Loader.vue'
import { AppData } from '@/stores/AppData'

const data = AppData.getInstance()

const visibleProjects = computed(() =>
    data.projects.filter((project) => project.isShown || (project.isShownDev && data.isDevMode))
)
</script>

<template>
    <div v-if="data.isDataLoaded" id="content">
        <div v-for="project of visibleProjects" :key="project.id">
            <ProjectCard :project="project" />
        </div>
    </div>
    <div v-else>
        <Loader />
    </div>
</template>

<style scoped>
#content {
    padding-left:1%;
    padding-right:1%;
    display: flex;
    flex-direction: column;
    gap:.4em;    width: 100%;
}

@media (min-width: 768px) {
    #content {
        display: grid;
        grid-template-columns: auto auto auto;
        gap:.4em;
        align-content: start;
    }
}
</style>
