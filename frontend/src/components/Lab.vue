<script setup lang="ts">


</script>

<template>

	<div class="container-lab">
		<h1>You did it!</h1>
		<p>
			Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
			documentation.
            Plein de texte
            Encore
            Et encore
            Et

            Encore
		</p>

	</div>

</template>


<style scoped>


    .container-lab {
		background-color: gainsboro;
		flex:3;
		border-radius: 20px;
		padding:20px;
	}

    p {
		color:cornflowerblue;
    }

    button {
        padding: 5px;
        padding-left: 20px;
        padding-right: 20px;
        border: 0px solid white;
        border-radius: 25px;
        background-color: var(--blue);
        color: white;
        transition: .5s;
        transition-delay: .2;
    }
        button:hover {
            background-color: var(--blueHover);
            scale: 120%;
        }
</style>
