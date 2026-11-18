<script setup lang="ts">

const shortDescr: string = `
  Quality Assurance Tester / Automation based in Brussels with a passion to learn how things work and automating tasks.

  Currently enrolled in a QA Tester program at Digital.brussels with a ISTQB Foundation certification at the end.
  Previously worked as a character artist in games at Clever Trickster Studio and as a solo dev on personal games project with Unity.
`
</script>

<template>
    <div class="container section-descr">
        <div class="about">
            <div class="profile">
                <div class="profile-picture"><img src="/images/profile_pics/avat-daphne.jpg" /></div>
                <div class="name">Noe Narcisse</div>
                <div class="email"><img src="/email_icon.png" class="small-icons" /><a
                        href="mailto:noenarcisse.job@gmail.com">noenarcisse.job@gmail.com</a></div>
                <div class="location"><img src="/location_icon.png" class="small-icons" />Brussels, Belgium</div>
            </div>
            <div class="descr">
                <span>
                    {{shortDescr}}
                </span>
            </div>

        </div>

    </div>
</template>

<style scoped>
h2 {
    /* padding-bottom: 10px; */

    padding-top: 1.5em;

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

    padding-left: 5%;
    padding-right: 5%;

}

@media (min-width: 768px) {
    .about-section .container {
        padding-left: 10%;
        padding-right: 10%;
    }
}

.about-section .section-descr {
    /* background-color: rgb(37, 37, 37); */
    background-color: rgb(32, 32, 32);
}

.about {
    display: flex;
    flex-direction: column;
    gap: 2%;
}

@media (min-width: 768px) {
    .about {
        flex-direction: row;
    }
}

.about>div {
    padding-top: 5px;
    padding-bottom: 5px;
}

.name {
    font-size: 32px;
}

.email {}

.location {}

.small-icons {
    width: 25px;
    margin-right: 20px;
    vertical-align: middle;
}

.profile {
    min-width: 35%;
    display: flex;
    flex-direction: column;
    gap: .7em;
}

@media (min-width: 768px) {
    .profile {
        min-width: none;
    }
}


.profile-picture img {
    width: 150px;
    border: .7em double var(--gray);
    border-radius: 100px;
}

.descr {
    padding: 1%;
    display: flex;
    align-items: center;
    font-size: larger;
    /* border: 1px solid red; */
}

.descr>span {
    white-space: pre-line;
}
</style>