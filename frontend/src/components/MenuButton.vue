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
        console.log(event.target.getAttribute('data-color'))

        event.target.children[0].children[0].style.backgroundColor = event.target.getAttribute('data-color')
        event.target.children[1].style.color = event.target.getAttribute('data-color')

    }
    function revertColor(event)
    {
        event.target.children[0].children[0].style.backgroundColor = 'black'
        event.target.children[1].style.color = 'black'
    }

// SENDERS
    const emit = defineEmits(['select-app'])
    function handleClick()
    {
        emit('select-app', props.item.id)
    }

    //faut debug l'ajout de background avec la refonte du css avec anim
//:style="backgroundGradient" @mouseleave="revertColor" @mouseenter="changeColor"

//:style="{ backgroundColor: item.color }"
//:style="{ color: item.color }"

</script>

<template>
        <div @mouseenter="changeColor" @mouseleave="revertColor" @click="handleClick"  :class="item.gridId+' gridDivs '" :data-color="item.color" :data-link="item.link">
                    <div>
                        <img  :src="item.img" />
                    </div>
                    <div >
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
            padding: 20px;
        }
        60%
        {
            padding: 10px;
        }
        70%
        {
            padding: 22px;
        }
        85%
        {
            padding: 16px;
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
