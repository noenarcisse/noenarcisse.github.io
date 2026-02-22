<script setup lang="ts">

</script>

<template>
    <div class="header" style="">
        <div class="header-l-box">
            <img src="/nn-logo-white.png" />
        </div>
        <div class="header-m-box">
        </div>
        <div class="header-r-box">
            <div class="socials">
                <a href="mailto:noenarcisse.job@gmail.com"><img class="icon" src="/email_icon.png" />Email</a>
            </div>
            <div class="socials">
                <a href="https://github.com/noenarcisse"><img class="icon" src="/github_icon.png" />Github</a>
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

 @media (min-width: 768px) {
    .header
    {
        flex-direction: row;

    }
}

.header-l-box {
    flex: 2;

    text-align: left;

    color: var(--gray);
    font-family: TrajanPro Tahoma;
    font-variant: small-caps;
    font-size: 52px;
    font-weight: bold;

    border-bottom: 1px solid var(--gray);

}

.header-l-box img {
    width: 80%;
}

 @media (min-width: 768px) {
    .header-l-box img {
        width: 100%;
    }
}

.header-m-box {
    flex: 5;
    align-content: center;
    border-bottom: 1px solid var(--gray);
}

.header-r-box {
    flex: 4;
    
    display: flex;
    flex-direction: row;

    border-bottom: 1px solid var(--gray);
}
 @media (min-width: 768px) {  
    .header-r-box 
    {
        display: block;
        border-bottom: 1px solid var(--gray);
    }
 }

.socials {
    margin-right: auto;
    margin-left: auto;
    max-width: 30%;
    padding: 5px;
}
 @media (min-width: 768px) {
    .socials {
        margin-right: 0px;
        margin-left: auto;
        max-width: 30%;
        padding: 5px;
    }
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
 .icon {
    width: 22px;
    vertical-align: middle;
    margin-right: 20px;
}
 }
</style>
