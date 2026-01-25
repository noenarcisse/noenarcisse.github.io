<script setup lang="ts">

//about module

const baseUrl:string = "/images/prods/"

const prods:Record<string, string> = {
    "Blood Bar Tycoon":         baseUrl+"bbt_mini.jpg", 
    "Magic Forge Tycoon":       baseUrl+"mft_mini.jpg",
    "Berzerker Homestead":      baseUrl+"bh_mini.jpg",
    "Lights out!":              baseUrl+"lo_mini.jpg",
    "Star Fish Strumpfer":      baseUrl+"sfs_mini.jpg"
}

const skills:string[] = [
    "Architecture & Logic",
    "Efficiency",
    "Fast Learning",
    "Organization",
    "Teamwork",
    "French",
    "English"
]
const techs:string[] = [
    "C#",
    "ASP.NET Core",
    "LINQ",
    "Entity",
    "Javascript",
    "Typescript",
    "Vue 3",
    "Node.js",
    "Github",
    "Plastic SCM",

]

const oldTechs:string[] = [
    "Java",
    "SQL",
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "Notions in Perl",
    "Notions in C"
]

</script>

<template>
    <div class="about-section">
        <div class="container descr">
            <div class="about">
                <div class="profile-picture"><img src="/images/profile_pics/aod_mini.jpg" /></div>
                <div class="name">Noe Narcisse</div>
                <div class="email"><img src="/email_icon.png" class="small-icons"/><a href="mailto:noenarcisse.job@gmail.com">noenarcisse.job@gmail.com</a></div>
                <div class="location"><img src="/location_icon.png" class="small-icons"/>Brussels, Belgium</div>
                <p>
                    Software developer based in Brussels. <br>
                    Previously worked as a character artist in games at Clever Trickster Studio and as a solo dev.<br>
                </p>
            </div>

        </div>
        <div class="container">
            <div class="prod">
                <h1>Released games</h1>
                <div class="prods">
                    <div v-for="(value, key) of prods" class="list-prods">
                        <img :src="value" /><br>
                        {{ key }}
                    </div>
                </div>
            </div>
            <div class="skills">
                <h1>Skills</h1>
                <div style="max-width:50%;">
                    <span v-for="skill in skills" class="list-elements">{{ skill }}</span>
                </div>

            </div>
            <div class="tech">
                <h1>Languages & tech</h1>
                <div>
                    <span v-for="tech in techs" class="list-elements">{{ tech }}</span>
                    <p>Previously learned:</p>
                    <span v-for="item in oldTechs" class="list-elements">{{ item }}</span>
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
.about-section .descr
{
    background-color: rgb(37, 37, 37);
}

.about div
{
    padding-top:5px;
    padding-bottom:5px;
}
.name
{
    font-size: 32px;
}
.email
{

}
.location
{

}
.small-icons
{
    width:25px;
    margin-right: 20px;
    vertical-align: middle;
}

.profile-picture img {
    width: 150px;
    border-radius: 100px;
}


/* ------------------------ */

.prod {
    padding-bottom: 30px;
    margin-bottom: 50px;
    border-bottom: 1px solid gray;
}

.prods
{
    display:flex;
    flex-direction: row;
    gap:20px;
}

.list-prods img {
    width: 200px;
    border: 1px solid var(--white);
    border-radius: 10px;
}

.skills {
    padding-bottom: 30px;
    margin-bottom: 50px;
    border-bottom: 1px solid gray;
}

.tech {}



.list-elements
{
    display : inline-block;
    margin: 5px;
    padding:10px;

    background-color: rgb(32, 32, 32);

    border:1px solid var(--yellow);
    border-radius: 5px;

    color: var(--yellow);
    white-space: nowrap;
    text-transform: uppercase;


    transition: 0.4s;
}
.list-elements:hover
{
    transform: scale(1.1, 1.1);
}
</style>
