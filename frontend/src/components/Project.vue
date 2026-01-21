<script setup lang="ts">

import { type Project } from '@/types/Project'
import { ref } from 'vue';

//template band pour un projet

const props = defineProps<
    {
        pair: boolean,
        project: Project
    }
>()


console.log(props.project)

const videoUrl = ref<string>('/videos/')
const imgUrl = ref<string>('/images/')

//          VIDEOS
const videoPlayer = ref<HTMLVideoElement | null>(null)
function autoPlay() {
    if (videoPlayer.value)
        videoPlayer.value.play();
}
function autoPause() {
    if (videoPlayer.value)
        videoPlayer.value.pause();
}

//          Files types checks
function isVideo(fileName: string): boolean {
    const reg: RegExp = /.mp4$/gi
    return reg.test(fileName);
}
function isImage(fileName: string): boolean {
    const reg: RegExp = /(\.png|jpe?g|webp|avif)$/gi
    return reg.test(fileName);
}

</script>

<template>
    <div v-if="project.isShown === true" class="container-project" :class="props.pair ? 'pair' : ''">
        <h1>{{ project.title }}</h1>
        <div class="flex-container" :class="props.pair ? 'reversed' : ''">
            <div class="descr">
                <span v-if="project.link !== '#'"> Link: <a
                        href="https://github.com/noenarcisse/CodeSamples/blob/main/Csharp/Map.cs" target="_blank"
                        rel="noopener">{{ project.link }}</a><br>
                </span>

                Stack : {{ project.stack }} <br>

                <h2>Objective</h2>
                {{ project.description.objective }}
                <h2>Challenge</h2>
                {{ project.description.challenge }}
                <h2>Solution</h2>
                {{ project.description.solution }}
            </div>
            <div class="visual">
                <video v-if="isVideo(project.visual)" controls loop ref="videoPlayer"
                    @mouseenter="autoPlay()" @mouseleave="autoPause()">
                    <source :src="videoUrl + project.visual" type="video/mp4">
                    Your browser doesn't support videos.
                </video>
                <picture v-if="isImage(project.visual)">
                    <!-- <source :srcset="imgUrl+project.visual" type="image/avif">
                    <source :srcset="imgUrl+project.visual" type="image/webp"> -->
                    <img :src="imgUrl + project.visual" alt="Description">
                </picture>
            </div>
        </div>
    </div>

</template>


<style scoped>
.container-project {
    padding-top: 40px;
    padding-bottom: 80px;

    padding-left: 10%;
    padding-right: 10%;

    color: var(--white);

    font-family: Roboto;
    font-size: 11px;
    border-bottom: 1px solid var(--gray);
}

.pair {
    background-color: black;
}

.flex-container {
    display: flex;
    flex-direction: row;

    gap: 5%;
}

.reversed {
    flex-direction: row-reverse !important;
    background-color: black;
}

.descr {
    flex: 2;
    white-space: pre-line;
}

.visual {
    /* border: 1px solid rgb(194, 194, 194);
    border-radius: 10px;
    background-color: rgb(93, 93, 93);
    text-align: center; */

    flex: 3;
}
.visual video
{
    max-width: 720px;
}
.visual img
{
    max-width: 720px;
}


h1 {
    padding-bottom: 10px;

    max-width: 35%;
    border-bottom: 1px solid var(--yellow);

    color: var(--white);
    font-family: 'Noto Sans';
    font-family: Helvetica, sans-serif;
}

h2 {}

a,
a:active {
    color: var(--white);
}

a:hover {
    color: var(--yellow);
}
</style>
