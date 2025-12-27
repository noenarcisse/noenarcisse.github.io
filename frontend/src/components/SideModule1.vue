<script setup>


</script>

<template>

	<div class="container-side-module">
		<h1>Module</h1>
		<p>
            Plein de texte<br />
            Encore<br />
            Et encore<br />
            Et<br />
            Encore<br />
        </p>

            <ul>
                <li v-for="i in 10">
                    Elem {{ i }} 
                </li>
            </ul>



	</div>

</template>


<style scoped>


    .container-side-module {
        background-color: gainsboro;
        width: 80%;
        border-radius: 20px;
        padding: 20px;

        overflow-y: scroll;

        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box; /* Firefox, other Gecko */
        box-sizing: border-box; /* Opera/IE 8+ */
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
