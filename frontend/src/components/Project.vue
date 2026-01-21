<script setup lang="ts">
//template band pour un projet
</script>

<template>

  <div class="container-project">
        <h1>Elemeowtalist: Level design tool</h1>
        <div class="flex-container">
            <div class="descr">
                Link: <a href="https://github.com/noenarcisse/CodeSamples/blob/main/Csharp/Map.cs" target="_blank"
                    rel="noopener">https://github.com/noenarcisse/CodeSamples/blob/main/Csharp/Map.cs</a><br>
                Stack : C# / Unity <br>

                <h2>Objective</h2>
                Mapping the data from an isometric map into a manipulable logical grid to enable character navigation.
                <h2>Challenge</h2>
                The system must be resilient when processing unpredictable level designs, consisting of tiles spread in
                a 3D
                space.
                <h2>Solution</h2>
                Implementation of an optimized O(1) mapping system to retrieve complex layouts of items and their
                coordinates in a world-space to logical grid indices.
                The tool is designed to remain layout-agnostic and be able to build the data structure even for complex
                setups.
            </div>
            <div class="visual">
                IMG OR VIDEO HERE
            </div>
        </div>
    </div>

</template>


<style scoped>
.container-project {
    padding: 20px;
    color: var(--white);

    font-family: Roboto;
    font-size: 11px;
}

.flex-container
{
    display: flex;
    flex-direction: row; /* alterner row et row-inverse %2 ? */
}
.descr
{
    flex:2;
}
.visual
{
    border: 1px solid rgb(194, 194, 194);
    border-radius: 10px;
    background-color: rgb(93, 93, 93);
    text-align: center;

    flex:3;
}




h1 {
    padding-bottom: 10px;

    max-width: 35%;
    border-bottom: 1px solid var(--yellow);

    color: var(--white);
    font-family: 'Noto Sans';
    font-family: Helvetica, sans-serif;  
}

h2 {}
a, a:active{
    color: var(--white);
}
a:hover
{
    color:var(--yellow);
}

</style>
