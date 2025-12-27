<script setup>

import { ref } from 'vue'

// PROPS
    const props = defineProps({
    item: Object
    })


    const classDescr = ref('')

    function showDescription()
    {
        classDescr.value = true
    }
    function hideDescription()
    {
        classDescr.value= false;
    }

// COLORS

    let backgroundGradient = ref("background: linear-gradient(0deg,rgba(0,0,0,1) 0%, rgba(0,0,0, 0) 100%);")

    const randomColors = new Array("Crimson", "SteelBlue", "DarkCyan", "LimeGreen", "Tomato", "RebeccaPurple");
    const alpha = 100;

    const delay = .4*1000;
    var timeout;

    function changeColor(event)
    {

        timeout = setTimeout(function() {

        let rand = Math.floor((Math.random()*randomColors.length));
        event.target.style="background-color: "+randomColors[rand]+";";

        event.target.style="background: linear-gradient(0deg, color-mix(in srgb, "+randomColors[rand]+" "+alpha+"%, transparent) 20%, rgba(0,0,0, 0) 100%);"
        },
        delay);

    }
    function revertColor(event)
    {
        if(timeout)
        {
            clearTimeout(timeout);
        }
        event.target.style=backgroundGradient.value;
    }

// SENDERS
    const emit = defineEmits(['select-app'])
    function handleClick()
    {
        emit('select-app', props.item.id)
    }

    //faut debug l'ajout de background avec la refonte du css avec anim
//:style="backgroundGradient" @mouseleave="revertColor" @mouseenter="changeColor"


</script>

<template>
        <div    @click="handleClick"  :class="item.gridId+' gridDivs '" :data-link="item.link">
                    <div>
                        <img :style="{ backgroundColor: item.color }" :src="item.img" />
                    </div>
                    <div :style="{ color: item.color }">
                        {{item.name}}
                    </div>
       
          
        </div>
</template>


<style scoped>

    /* LOCAL CUSTOM PROPERTIES */
    @property --posup
    {
    syntax: "<length>";
    inherits: false;
    initial-value: -200px;
    }

    
    /* CUSTOM ANIMS */
    
    @keyframes grow
    {
        from {
            transform : scale(100%,0%);
            opacity:0;
        }
        to { 
            transform : scale(100%,100%);
            opacity:1;
        }
    }

    .gridDivs
    {
        font-family: Roboto;
        color: var(--gray);
        text-align: center;
        transition: .5s;
    }

    .gridDivs:hover {
            scale: 120%;
            cursor: pointer;
            z-index: 100;
            
    }

    .gridDivs img 
    {
        border: 0px solid var(--white);
        border-radius: 20px;
        background-color:black;
        padding: 40px;
        width: 50%;
        min-width: 120px;
        transition:.5s;
     }
     @keyframes boup
     {
        0%
        {
            padding: 40px;  
        }
        40%
        {
            padding: 40px;  
        }
        80%
        {
            padding: 20px;
        }
        90%
        {
            padding: 10px;
        }
        100%
        {
            padding: 20px;
        }
     }
    .gridDivs img:hover
    {
        border: 10px double var(--white);
        padding: 20px;

        animation-name: boup;
        animation-duration: .5s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
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
