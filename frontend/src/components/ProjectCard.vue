<script setup lang="ts">
import { computed } from 'vue'

import type { ProjectCardData } from '@/types/ProjectCard'
import { splitStack } from '@/helpers/helpers'

const props = defineProps<{ project: ProjectCardData }>()

const stackItems = computed(() => splitStack(props.project.stack))
const projectPath = computed(() => `/project/${props.project.url.toLowerCase()}`)

// todo : devin a envoyé des undefined partout sur des data manquantes
// faut des defaults sur les colors et les images
</script>

<template>
    <RouterLink :to="projectPath" class="project-card-link">
        <div class="container-project" :style="{ borderColor: project.color || undefined }">
            <div class="project-logo" :style="{ backgroundImage: 'url(/images/' + project.imgbg + ')' }">
                <div class="colored-glass" :style="{ backgroundColor: project.color || undefined }">
                    <div class="project-logo-media">
                        <img :src="'images/projects/' + project.logo" :alt="project.title" />
                    </div>
                    <div class="project-title">{{ project.title }}</div>
                </div>
            </div>
            <div class="project-descr">
                <div class="descr">{{ project.summary }}</div>
                <div class="stack">
                    <div v-for="(tech, index) in stackItems" :key="index" class="tech"
                        :style="{ backgroundColor: project.color || undefined }">
                        {{ tech }}
                    </div>
                </div>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
.project-card-link {
    display: block;
    height: 100%;
}

.container-project {
    display: flex;
    flex-direction: row;

    margin-bottom: 20px;

    height: 100%;
    min-height: 300px;

    color: var(--white);

    font-family: Roboto, 'Segoe UI', 'San Francisco', sans-serif;
    font-size: 12px;
    border-bottom: 1px solid var(--gray);

    background-color: rgb(29, 29, 29);
    border: 2px solid white;
    border-radius: 6px;

    transition: .3s;
}

.container-project:hover {
    transform: scale(1.02, 1.02);
}

.project-logo {
    flex: 5;
}

.colored-glass {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;
    background: rgba(105, 14, 110, 0.858);

    backdrop-filter: blur(10px);
}

.colored-glass div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    font-size: 20px;
}

.colored-glass div img {
    width: 75px;
    margin-right: 5%;
}

.project-descr {
    flex: 7;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
    padding-bottom: 3%;
}

.descr {
    padding-top: 5%;
    padding-bottom: 5%;

    max-width: 100%;

    white-space: pre-line;
}

.stack {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    row-gap: 1em;

    padding-top: 10px;
    padding-bottom: 10px;
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

a,
a:active {
    color: var(--white);
    font-size: 12px;
    text-decoration: none;
}

a:hover {
    color: var(--yellow);
}
</style>
