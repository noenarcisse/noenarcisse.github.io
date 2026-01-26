<script setup lang="ts">

import Papa from 'papaparse'

import Loader from './components/Loading1.vue'
import Header from './components/Header.vue'
import Band from './components/Project.vue'
import About from './components/About.vue'

import { ref, type App } from 'vue'
import { type Project, type RawProjectCSV, isProject } from './types/Project'
import { AppData } from './stores/AppData' 

//          VARS
const GOOGLESHEET_URL_BODY = "https://docs.google.com/spreadsheets/d/e/"
const data:AppData = AppData.getInstance(GOOGLESHEET_URL_BODY)

data.links.files.push("2PACX-1vQx_XlO6VRfyXA4UOBFnTaWLwds1vpF7pMHFVG5RQpau7cRMUmVijl5jdx05j3VMdLV-66-aYOcMtRy/pub?gid=730308241&single=true&output=csv")

//mv appdata
const isDevMode = import.meta.env.DEV
const projects = ref<Project[]>([])
const isDataLoaded = ref<boolean>(false)

//string ? unused for now right panel in the header to be done
//const infosData = ref([])

const link = ref<string>("https://docs.google.com/spreadsheets/d/e/2PACX-1vQx_XlO6VRfyXA4UOBFnTaWLwds1vpF7pMHFVG5RQpau7cRMUmVijl5jdx05j3VMdLV-66-aYOcMtRy/pub?gid=730308241&single=true&output=csv")
const link2 = ref<string>('https://docs.google.com/spreadsheets/d/e/2PACX-1vQx_XlO6VRfyXA4UOBFnTaWLwds1vpF7pMHFVG5RQpau7cRMUmVijl5jdx05j3VMdLV-66-aYOcMtRy/pub?gid=2138789322&single=true&output=csv')


/**
 * Get the values from the published CSV and parse them.
 * Doublecheck is values are leggit and clear some \n issue from the sheet
 */
Papa.parse(data.links.body+data.links.files[0],
    {
        header: true,						// use a header kept in the very first line 
        download: true,
        encoding: 'UTF-8',					//csv file from g sheets are in utf
        skipEmptyLines: true,				//remove the last empty line, does not remove any other one despite the actual name of the param
        complete: function (results) {
            //console.log(results.data)		// json de string a repasser
            const rawData = results.data as RawProjectCSV[]

            projects.value = rawData
                                .filter(isProject)
                                .map((row, index:number):Project => ({

                                    id: index,
                                    title: row.title || 'Title missing',
                                    subtitle: row.subtitle || 'subtitle missing',
                                    link: row.link || '#',
                                    stack: row.stack || 'Stack is missing',
                                    description: {
                                            objective:  row.objective?.replace(/\n{3,}/g, '\n\n') || 'Objective is missing',
                                            challenge:  row.challenge?.replace(/\n{3,}/g, '\n\n') || 'Challenge is missing',
                                            solution:   row.solution?.replace(/\n{3,}/g, '\n\n') || 'Solution is missing'
                                    },
                                    visual: row.visual || '',
                                    isShown: Boolean(Number(row.isShown)), //omg js false == 0 != "0" == true evidemment
                                    isShownDev: Boolean(Number(row.isShownDev)),
                                    logo: row.logo || '/unitylogowhite.png', // a cleaner avec un vrai defautl logo a faire
                                    color: row.color || 'black',
                                    backgroundImage: row.imgbg || '/images/copypasta_screen.jpg' //change proper default img here
                                }))

            data.isDataLoaded=true;

        }
    });

//     Papa.parse(link2.value,
// 	{
// 		header: true,						// use a header kept in the very first line
// 		download: true,
// 		encoding : 'UTF-8',					//csv file from g sheets are in utf
// 		skipEmptyLines: true,				//remove the last empty line, does not remove any other one despite the actual name of the param
// 		complete: function(results)
// 		{
// 			console.log(results.data)		// Array d'objets
//                   infosData.value = results.data.map((row, index:number) => ({
//                     id: row.id ? Number(row.id) : index + 1,  // si id existe dans CSV, sinon auto-incrément
//                     title: row.title || 'missing title',                      // nom depuis CSV
//                     descr: row.descr || 'missing elem description',
//                     link: row.link || ''
//                     }))
//             console.log(infosData.value)
//             //dataLoaded.value = true;

// 		}
// 	});

</script>

<template>
    <Header />
    <div v-if="data.isDataLoaded" id="content">
        <div v-for="project of projects">
            <Band :project="project" :pair="project.id % 2 == 0" />
        </div>
    </div>
    <div v-else>
        <Loader />
    </div>
    <About />
</template>

<style>
:root {
    --bg-color: #161616;

    --white: #DEE4E6;
    --yellow: #E2B61B;
    --gray: #323232;
    --black: black;

    --header: rgb(88, 60, 153);
    --app-bg: black;

    --radius: 20px;

    --glass-alpha: .6;
}

* {
    box-sizing: border-box;
    /* border:1px solid red; */
}

html,
body {
    height: 100%;
    margin: 0px;
}

body {
    background: var(--bg-color);
}

@keyframes colorShift {
    0% {
        background-color: rgba(186, 45, 32, var(--glass-alpha));
    }

    15% {
        background-color: rgba(245, 187, 39, var(--glass-alpha));
    }

    30% {
        background-color: rgba(69, 189, 68, var(--glass-alpha));
    }

    45% {
        background-color: rgba(68, 189, 167, var(--glass-alpha));
    }

    60% {
        background-color: rgba(89, 120, 212, var(--glass-alpha));
    }

    75% {
        background-color: rgba(169, 68, 201, var(--glass-alpha));
    }

    85% {
        background-color: rgba(201, 68, 159, var(--glass-alpha));
    }

    100% {
        background-color: rgba(186, 45, 32, var(--glass-alpha));
    }
}


#content {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
}

#app-menu {
    flex: 1;
}
</style>
<style scoped></style>
