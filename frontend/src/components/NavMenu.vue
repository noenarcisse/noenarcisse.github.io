<script setup lang="ts">

interface NavItem {
    label: string
    to: string
}

withDefaults(
    defineProps<{ items?: NavItem[] }>(),
    {
        items: () => [
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' }
        ]
    }
)
</script>

<template>
<nav class="nav-menu-container">
    <div v-for="item in items" :key="item.to" class="nav-menu-item">
        <RouterLink :to="item.to">{{ item.label }}</RouterLink>
    </div>
</nav>
</template>

<style scoped>
.nav-menu-container {
    display: flex;
    justify-content: center;

    padding:20px;

    color: var(--white);
}

.nav-menu-item {
    flex: 1;

    display: flex;
    justify-content: center;
}

a {
    color: var(--white);
    text-decoration: none;

    font-family: Roboto;
}

a:hover {
    color: var(--yellow);
}

@media (min-width: 768px) {

    .nav-menu-container {
        padding :0px;

    }
}
</style>
