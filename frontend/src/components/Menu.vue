<script setup lang="ts">
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
        let gridSize = Math.ceil(l / 2);

        console.log("l=" + l);
        console.log("grid = " + gridSize);

        return {
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`
        };
    }

    const emit = defineEmits(['app-selected'])

    function onSelectApp(id:number)
    {
        emit('app-selected', id)
    }


</script>

<template>

    <div ref="grid" id="menu-grid" class="parent" :style="gridCol">

        <MenuButton v-for="b in props.buttons"
                    :item="b"

                    @select-app="onSelectApp"
                    >
        </MenuButton>

                            <!-- :key="b.id" ne pas refact ca, ca doit sauter  -->
    </div>

</template>


<style scoped>
    .parent {
        margin:auto;
        max-width: 40%;
        justify-content: center;
        display: grid;

        grid-template-columns: repeat(3, 1fr);
    
        gap: 50px;
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
