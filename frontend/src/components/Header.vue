<script setup lang="ts">

</script>

<template>
    <div class="header" style="">
        <div class="header-l-box">
            <img src="/nn-logo-white.png" />
        </div>
        <div class="header-m-box">
            <!-- <div class="menu">
                <div class="menu-btn">
                    <a href="#">Home</a>
                </div>
                <div class="menu-btn">
                    <a href="#">Resume</a>
                </div>
            </div> -->
        </div>
        <div class="header-r-box">
            <div class="socials">
                <a href="mailto:noenarcisse.job@gmail.com"><img class="icon" src="/mail-logo.png" />Email</a>
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
    background-color: var(--bg);
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
    width: 100%;
}

.header-m-box {
    flex: 5;
    align-content: center;
    border-bottom: 1px solid var(--gray);
}

.header-r-box {
    flex: 4;
    border-bottom: 1px solid var(--gray);
}

.menu {
    display: flex;

    padding: 1%;
}

.menu-btn {
    flex: 1;

    padding: 15px;
    padding-top: 30px;
    padding-bottom: 30px;

    text-align: center;

    font-family: Roboto;
    color: var(--white);

    transition: .5s;
}

.menu-btn:hover {
    background-color: black;
    transform: scale(1.1, 1.1);
    cursor: pointer;
}

.menu-btn a,
.menu-btn a:active {
    color: var(--white);
    text-decoration: none;
}

.socials {
    margin-right: 0px;
    margin-left: auto;
    max-width: 30%;
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
    margin-right: 20px;
}
</style>
