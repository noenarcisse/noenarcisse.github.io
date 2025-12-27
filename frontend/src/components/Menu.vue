<script setup>
    import { ref } from 'vue'
    import MenuButton from './MenuButton.vue'

    const props = defineProps(
        {
            buttons:
            {
                type:Array,
                required: true
            }
        }
    )

    const gridCol = calcGrid();

    function calcGrid()
    {
        let l = props.buttons.length;
        let gridSize = Math.ceil(l / 1);

        console.log("l=" + l);
        console.log("grid = " + gridSize);

        return {
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`
        };
    }

    const emit = defineEmits(['app-selected'])

    function onSelectApp(id)
    {
        emit('app-selected', id)
    }


</script>

<template>

    <div ref="grid" id="menu-grid" class="parent" :style="gridCol">

        <MenuButton v-for="b in props.buttons"
                    :item="b"
                    :key="b.id"
                    @select-app="onSelectApp"
                    >
        </MenuButton>
    </div>

</template>


<style scoped>
    .parent {
        max-width: 100%;
        /* justify-content: center; */
        display: grid;

        grid-template-columns: repeat(3, 1fr);
    
/*        grid-template-areas:
            "a b b c"
            "a d e f";*/
        gap: 2px;

        -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
        -moz-box-sizing: border-box; /* Firefox, other Gecko */
        box-sizing: border-box; /* Opera/IE 8+ */
    }

    .corner-t-l {
        border-top-left-radius: var(--radius);
    }

    .corner-t-r {
        border-top-right-radius: var(--radius);
    }

    .corner-b-l {
        border-bottom-left-radius: var(--radius);
    }

    .corner-b-r {
        border-bottom-right-radius: var(--radius);
    } 

</style>
