<script setup lang="ts">
import type { Icon } from "@/types/Icon"

import ListIcons from '@/components/ListIcons.vue'
import Profile from '@/components/Profile.vue'
import SimpleList from '@/components/SimpleList.vue'

const baseUrl = "/images/prods/"
const baseLangUrl = "/images/lang_icons/"
const baseTechUrl = "/images/techs_icons/"

const prods: Record<string, string> = {
    "Blood Bar Tycoon": baseUrl + "bbt_mini.jpg",
    "Magic Forge Tycoon": baseUrl + "mft_mini.jpg",
    "Berzerker Homestead": baseUrl + "bh_mini.jpg",
    "Lights out!": baseUrl + "lo_mini.jpg",
    "Star Fish Strumpfer": baseUrl + "sfs_mini.jpg"
}

const techs = new Map<string, Icon>([
    ["Jira", baseTechUrl + "jira.png"],
    ["SquashTM", baseTechUrl + "squash.png"],
    ["SonarQube Community", baseTechUrl + "sonarqube.png"],

    [".NET", baseTechUrl + "dotnet.png"],

    ["FlaUI", baseTechUrl + "flaui.png"],
    ["Playwright", baseTechUrl + "playwright.png"],
    ["Selenium", baseTechUrl + "selenium.png"],

    ["PostGreSQL", baseTechUrl + "postgresql.png"],
    ["SQLite", baseTechUrl + "sqlite.png"],

    ["Blazor", baseTechUrl + "blazor.png"],
    ["Vue 3", baseTechUrl + "vue.png"],

    ["pytest", baseTechUrl + "pytest.png"],
    ["Bruno", baseTechUrl + "bruno.png"],
    ["DevTools", baseTechUrl + "devtools.png"],
    ["xUnit", baseTechUrl + "xunit.png"],
    ["Shouldly", baseTechUrl + "shouldly.png"],
    ["NSubsitute", baseTechUrl + "nsubstitute.png"],
    ["Testcontainers", baseTechUrl + "testcontainers.png"],

    ["NBomber", baseTechUrl + "nbomber.png"],

    ["Deno", baseTechUrl + "deno.png"],
    ["Node.js", baseTechUrl + "node.png"],

    ["Git", baseTechUrl + "git.png"],
    ["Docker", baseTechUrl + "docker.png"],
    ["Plastic SCM", baseTechUrl + "plastic.png"],
    ["Unity 3D", baseTechUrl + "unity.png"],
])

const skills: string[] = [

    "Scripting & Programming",
    "Test design & strategy",
    "Automation",

    "Architecture",
    "API",
    "Databases",

    "Jira",
    "Agile",
    "Scrum",

    "CI / CD",
    // "ISTQB Foundation",
]

const softs: string[] = [
    "Curiosity",
    "Methodical approach",
    "Structured reports & documentation",
    "Fast adaptation to new languages & tools",
    "Attention to detail",
    "Autonomy (minimal supervision,clarifying ambiguities early)",
    "Communication and collaboration skills",
]

const languages: string[] = [
    "French - C2",
    "English - C1"
]

const progLanguages: Map<string, Icon> = new Map([
    ["C#", baseLangUrl + "cs.png"],
    ["Go", baseLangUrl + "go.png"],
    ["Python", baseLangUrl + "py.png"],
    ["SQL", baseLangUrl + "sql.png"],
    ["Nim", baseLangUrl + "nim.png"],
    ["Typescript", baseLangUrl + "ts.png"],
    // ["Javascript", baseLangUrl + ""],
    ["HTML", baseLangUrl + "html.png"],
    ["CSS", baseLangUrl + "css.png"],
])

const others: Map<string, Icon> = new Map([
    ["Angular", baseTechUrl + "angular.png"],
    ["Duck DB", baseTechUrl + "duckdb.png"],

    ["F#", baseLangUrl + "fs.png"],
    ["Gleam", baseLangUrl + "gleam.png"],
    ["Java", baseLangUrl + "java.png"],
    ["PHP", baseLangUrl + "php.png"],
    ["MySQL", baseLangUrl + "mysql.png"],
    ["C", baseLangUrl + "c.png"],
])

</script>

<template>
    <div class="about-section">
        <Profile />
        <div class="container">
            <div class="container-sep">
               <SimpleList title="Skills" :elements="[...skills, ...softs]" />
            </div>
            <div class="container-sep">
                <SimpleList title="Languages" :elements="languages" />
            </div>
            <div class="container-sep">
                <ListIcons title="Programming languages" :elements="progLanguages" />
                <ListIcons title="Techs" :elements="techs" />
                <ListIcons title="Others (notions or previously used)" :elements="others" />
            </div>
            <div class="prod">
                <h1>Released games</h1>
                <div class="prods">
                    <div v-for="(value, key) of prods" class="list-prods">
                        
                    <div>
                        <img :src="value" />
                    </div>
                    <div class="lang-name">
                        {{key}}
                    </div>

               
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
h1 {
    padding-bottom: 10px;

    max-width: 50%;

    color: var(--white);
    font-family: 'trebuchet ms', sans-serif;
    font-size: 18px;
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

.about-section {
    margin-bottom: 20px;


    color: var(--white);

    font-family: Roboto, 'Segoe UI', 'San Francisco', sans-serif;
    font-size: 12px;

    background-color: rgb(0, 0, 0);
}

.about-section .container {
    padding-top: 40px;
    padding-bottom: 80px;

    padding-left: 10%;
    padding-right: 10%;

}

.about-section .descr {
    background-color: rgb(37, 37, 37);
}

.about div {
    padding-top: 5px;
    padding-bottom: 5px;
}

.name {
    font-size: 32px;
}

.small-icons {
    width: 25px;
    margin-right: 20px;
    vertical-align: middle;
}

.profile-picture img {
    width: 150px;
    border-radius: 100px;
}


/* ------------------------ */


.prod {
    padding-top: 20px;
    margin-top: 50px;
    /* border-top: 1px solid gray; */
}

.prods {
    display : flex;
    flex-direction: column;
    gap: 10px;
}

@media (min-width: 768px) {
    .prods {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
    }
}

.list-prods{
    margin-bottom: 2em;
}
.list-prods:last-child {
    margin-bottom: 0;
}

.list-prods img {
    width: 100%;
    border-radius: 10px;
    border: .3em double var(--gray)
}

@media (min-width: 768px) {
    .list-prods img {
        width: 200px;
        border-radius: 10px;
    }
}

.container-sep {
    padding-bottom: 30px;
    margin-bottom: 50px;
    border-bottom: 1px solid gray;
}



.tech {}

.list {
    max-width: 100%;
}

@media (min-width: 768px) {
    .list {
        max-width: 60%;
    }
}


.list-elements {
    display: inline-block;
    margin: 5px;
    padding: 7px;

    background-color: rgb(32, 32, 32);

    border: 1px solid var(--white);
    border-radius: 5px;

    color: var(--white);
    white-space: nowrap;
    text-transform: uppercase;


    transition: 0.4s;
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

.lang-name {
    text-align: center;
    text-transform: uppercase;
}
</style>
