<script setup lang="ts">

import Papa from 'papaparse'

import Header from './components/Header.vue'

import { type ProjectCardData, type ProjectCardRow, isProjectCard } from './types/ProjectCard'
import { AppData } from './stores/AppData'


//          VARS

//Rework ca proprement
const GOOGLESHEET_URL_BODY = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQx_XlO6VRfyXA4UOBFnTaWLwds1vpF7pMHFVG5RQpau7cRMUmVijl5jdx05j3VMdLV-66-aYOcMtRy/pub?gid="
const data: AppData = AppData.getInstance(GOOGLESHEET_URL_BODY)

data.AddFile(
    "normal",
    "730308241&single=true&output=csv"
)

data.AddFile(
    "dev",
    "1796485526&single=true&output=csv"
)

const fileToUse = (data.isDevMode ? data.sheets.get("dev") : data.sheets.get("normal"))?.file ?? ''

/**
 * Get the values from the published CSV and parse them.
 * Doublecheck is values are leggit and clear some \n issue from the sheet
 */
Papa.parse(GOOGLESHEET_URL_BODY + fileToUse,
    {
        header: true,						// use a header kept in the very first line 
        download: true,
        encoding: 'UTF-8',					//csv file from g sheets are in utf
        skipEmptyLines: true,				//remove the last empty line, does not remove any other one despite the actual name of the param
        complete: function (results) {
            const rawData = results.data as ProjectCardRow[]

            data.projects = rawData
                .filter(isProjectCard)
                .map((row, index: number): ProjectCardData => ({

                    id: index,
                    title: row.title || 'Title missing',
                    subtitle: row.subtitle || '',
                    summary: row.summary || 'Summary missing',
                    url: row.url || '',
                    stack: row.stack || '',
                    page: row.page || '',
                    isShown: Boolean(Number(row.isShown)),
                    isShownDev: Boolean(Number(row.isShownDev)),
                    logo: row.logo || 'unitylogowhite.png',
                    color: row.color || 'black',
                    imgbg: row.imgbg || 'copypasta_screen.jpg'
                }))

            data.isDataLoaded = true;

        }
    });



</script>

<template>
    <Header />
    <RouterView />
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
}


html,
body {
    margin: 0px;
    padding-bottom:20px;

    color: var(--white);
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
</style>
