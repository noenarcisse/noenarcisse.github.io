<script setup lang="ts">

//about module

</script>

<template>
    <div class="about-container">
        <div class="descr">
        <h1>About</h1>
        <p>email</p>
        <p>Brussels, Belgium</p>
        <p>
            Software developer based in Brussels. <br>
            Previously worked as a character artist in games at Clever Trickster Studio and as a solo dev.<br>
            Released games : 
            <ul>
                <li>Blood bar tycoon</li>
                <li>Magic Forge Tycoon</li>
                <li>Berzerker Homestead</li>
                <li>Star Fish Strumpfer</li>
                <li>Lights out prototype</li>
            </ul>
        </p>
        </div>
        <div class="descr">
            <h1>Skills</h1>
            <ul>
                <li>English & French</li>
                <li>Architecture & Logic</li>
                <li>Organization</li>
                <li>Efficiency</li>
                <li>Teamwork</li>
                <li>Fast learning</li>
            </ul>
            <h1>Languages & tech</h1>
            <ul>
                <li>C#, ASP.NET Core, LINQ, Entity</li>
                <li>Javascript, Typescript, Vue, Node.js</li>
                <li>Github, PlasticSCM</li>
                <li>Previously learned Java, SQL, HTML5 & CSS3, PHP & MySQL</li>
            </ul>
        </div>

    </div>

</template>


<style scoped>
.about-container 
{
    margin-bottom: 20px;
    padding-top: 40px;
    padding-bottom: 80px;

    padding-left: 10%;
    padding-right: 10%;

    color: var(--white);

    font-family: Roboto, 'Segoe UI', 'San Francisco', sans-serif;
    font-size:12px;

    background-color: rgb(0, 0, 0);
}

h1 {
    padding-bottom: 10px;

    max-width: 50%;

    color: var(--white);
    font-family: 'trebuchet ms',sans-serif;
    font-size: 18px;
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
