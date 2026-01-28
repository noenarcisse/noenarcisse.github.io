<script setup lang="ts">
import { ref } from 'vue';

import { type Project } from '@/types/Project'
import { AppData } from '@/stores/AppData';

const data = AppData.getInstance()

const props = defineProps<
    {
        pair: boolean,
        project: Project
    }
>()

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
    <div v-if="project.isShown || (project.isShownDev && data.isDevMode)" class="container-project" :class="props.pair ? 'pair' : ''">
        <!-- <div class="project-logo" :style="`background-image: url('./${project.backgroundImage}');`"> -->
            <div class="project-logo" :style="{ backgroundImage: 'url(/images/'+project.backgroundImage+')' }">
            <div class="colored-glass" :style="'background-color:'+project.color">
            <div class="logo"><img :src="'images/projects/'+project.logo" /></div>
            <div class="title">{{ project.title }}</div>
            </div>
        </div>
        <div class="project-descr" :class="props.pair ? 'reversed' : ''">
            <h1>{{ project.subtitle }}</h1>
            <div class="descr">
                <span v-if="project.link !== '#'"> Link: <a
                        :href="project.link" target="_blank"
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

    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    color: var(--white);

    font-family: Roboto, 'Segoe UI', 'San Francisco', sans-serif;
    font-size:12px;
    border-bottom: 1px solid var(--gray);

    background-color: rgb(29, 29, 29);
}

.pair {
    background-color: black !important;
}


.project-logo
{
    flex:3;
    /* background: url('/images/copypasta_screen.jpg'); */
}
.colored-glass
{
    display: flex;
    flex-direction: column;
    width:100%;
    height:100%;
    background: rgba(105, 14, 110, 0.858);

    backdrop-filter: blur(10px);
}
.colored-glass div
{
    display: flex;
    flex :1;
    justify-content: center; 
}
.logo
{
    align-items: flex-end;
}
.title
{
    align-items:flex-start;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
}
.logo img
{
    width: 150px;
}


.project-descr {
    flex:7;
    padding-left: 5%;
    padding-right: 5%;
    padding-top:1%;
    padding-bottom:3%;
}

.descr {
    white-space: pre-line;
}

.visual {
    padding-top:20px;
    flex: 3;
}
.visual video
{
    max-width: 600px;
}
.visual img
{
    max-width: 600px;
}


h1 {
    padding-bottom: 10px;

    max-width: 50%;
    border-bottom: 1px solid var(--yellow);

    color: var(--white);
    /* font-family: 'Noto Sans'; */
    font-family: 'trebuchet ms',sans-serif;
    font-size: 32px;
    font-weight: 100;
    
}

h2 
{
    margin-top:15px;
    margin-bottom:10px;

    font-family: 'trebuchet ms',sans-serif;
    font-size: 20px;
    font-weight: 100;
}

a ,a:active {
    color: var(--white);
    font-size:12px;
}

a:hover {
    color: var(--yellow);
}
</style>
