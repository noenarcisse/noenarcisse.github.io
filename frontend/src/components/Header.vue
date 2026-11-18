<script setup lang="ts">
import NavMenu from './NavMenu.vue';

const headerBanners : Array<[string,string]> = [
    ["QA engineer", "jobtitle_1.png"],
    ["QA tester", "jobtitle_2.png"],
  ]
const randomBanner = randomTitle()

function randomTitle() : [string, string] {
    const r = Math.floor(Math.random()*headerBanners.length)
    return headerBanners[r]!; //todo obligé de bang ici ?!
  }
</script>

<template>
<div class="header">
    <div class="header-l-box">
        <RouterLink to="/">
            <img src="/nn-logo-white.png" alt="Noe Narcisse" />
            <img :src="randomBanner[1]" :alt="randomBanner[0]">
        </RouterLink>
    </div>
    <div class="header-m-box">
        <NavMenu />
    </div>
    <div class="header-r-box">
        <div class="socials">
            <a href="mailto:noenarcisse.job@gmail.com"><img class="icon" src="/email_icon.png" />Email</a>
        </div>
        <div class="socials">
            <a href="https://github.com/noenarcisse"><img class="icon" src="/github_icon.png" />Github</a>
        </div>
        <div class="socials">
            <a href="https://gitlab.com/noenarcisse"><img class="icon" src="/GitLab_icon.svg.png" />Gitlab</a>
        </div>
        <div class="socials">
            <a href="https://codeberg.org/noenarcisse"><img class="icon" src="/Codeberg_Logo.svg.png" />Codeberg</a>
        </div>
        <div class="socials">
            <a href="https://kvall.itch.io/"><img class="icon" src="/itchio_icon.png" />Itch.io</a>
        </div>
    </div>
</div>



</template>

<style scoped>
.header {
    padding: 1%;
    display: flex;
    flex-direction: column;
    background-color: var(--bg);
}

.header-l-box {
    flex: 2;

    text-align: left;

    color: var(--gray);
    font-family: TrajanPro Tahoma;
    font-variant: small-caps;
    /* font-size: 52px; */
    font-weight: bold;

    border-bottom: 1px solid var(--gray);

}

.header-l-box img {
    width: 60%;
}



.header-m-box {
    flex: 5;
    align-content: center;
    border-bottom: 1px solid var(--gray);
}

.header-r-box {
    flex: 2;

    display: flex;
    flex-direction: row;

    border-bottom: 1px solid var(--gray);
}



.socials {
    margin-right: auto;
    margin-left: auto;
    max-width: 50%;
    padding: 5px;
}



.socials a,
a:active {
    color: var(--white);
    font-family: Roboto;
    font-size: 14px;
    text-decoration: none;
}

.icon {
    width: 22px;
    vertical-align: middle;
    margin-right: 10px;
}


@media (min-width: 768px) {
    .header {
        flex-direction: row;

    }
    .header-l-box img {
        width: 100%;
    }
    .header-r-box {
        display: block;
        border-bottom: 1px solid var(--gray);
    }
    .socials {
        margin-right: 0px;
        margin-left: auto;
        max-width: 50%;
        padding: 2px;
    }
    .icon {
        width: 18px;
        vertical-align: middle;
        margin-right: 20px;
    }
}
</style>
