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
        <div :style="{ backgroundImage: 'url(' + item.bg + ')' }"   @click="handleClick"  :class="item.gridId+' gridDivs '" :data-link="item.link">
            <div  class="button-bg-overlay" @mouseenter="showDescription" @mouseleave="hideDescription" >
                <div class="app-descr">
                    <div>
                        <img  :src="item.img" />
                    </div>
                    <div>
                        {{item.name}}
                        <p class="descr" :class="{'show-descr' : classDescr}">
                            {{ item.descr }}
                        </p>
                    </div>
                </div>
                                <div class="empty-flex"></div>
            </div>
        </div>
</template>


<style scoped>

    /* CUSTOM PROPERTIES */
    @property --posup
    {
    syntax: "<length>";
    inherits: false;
    initial-value: -200px;
    }
    @property --posdown
    {
    syntax: "<length>";
    inherits: false;
    initial-value: 100px;
    }

    @property --grad-color
    {
    syntax: "<color>";
    inherits: false;
    initial-value: rgb(80, 51, 118);
    }

    
    /* CUSTOM ANIMS */

    @keyframes fadein
    {
         0% 
        {
            opacity: 1;
            background-position-y: var(--posdown);
        }
        100%
        {
            opacity: 1;
            background-position-y: var(--posup);
        } 

    }
    /* obligé, ne pas utiliser fadein en reverse, ca casse violent ?! */
        @keyframes fadeout
    {
         0% 
        {   
            opacity: 1;
            background-position-y: var(--posup);
        }
        100%
        {
            opacity: 1;
            background-position-y: var(--posdown);
        } 

    }

    .button-bg-overlay
    {
        border: 0px solid black;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;       

        display:flex;
        flex-direction: column-reverse;
        opacity:1;
        padding: 10%;
        width:300px;
        /* padding-top:400px; */
        min-height:500px;

        background-image : linear-gradient(0deg, var(--grad-color) 30%, rgba(0,0,0, 0) 100%);
        background-repeat: no-repeat;
        background-size: 100% 150%;  
        background-position-y: var(--posdown);

        animation-name: fadeout;
        animation-duration: .5s;
        animation-iteration-count: 1;
        animation-timing-function: linear;

        box-sizing: border-box;

    }
    .button-bg-overlay:hover
    {
        animation-name: fadein;
        animation-duration: .5s;
        animation-iteration-count: 1;
        animation-timing-function: linear;

        background-position-y: var(--posup);
    }

    .empty-flex
    {

        flex: 9 9 auto;
    }
    .app-descr
    {

        flex: 1 1 auto;
    }

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

    .descr
    {
        display:none;

        max-height:0px;
        overflow-y:hidden;

        max-height: 80px;

        font-size:9px;

    }

    .show-descr
    {
        display: block;
        opacity:1;
        max-height:80px;
        overflow-y: hidden;

        transform-origin: 0% 0%;

        animation-name: grow;
        animation-duration: .4s;
        
    }

    .gridDivs
    {

        border: 0px solid black;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        font-family: Roboto;
        color: white;
        text-align: center;
        background-color: var(--app-bg);
        transition: .5s;

        background-position: center;
        background-size: 250%;
    }

    .gridDivs:hover {
            scale: 104%;
            cursor: pointer;
            z-index: 100;
            transform: translateY(-2%);

            /* background-size: 100%; */
    }

    .gridDivs img {
            width: 20%;
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
