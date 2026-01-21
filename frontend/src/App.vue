<script setup lang="ts">
    
    import Papa from 'papaparse'

    import Loader from './components/Loading1.vue'
    import Header from './components/Header.vue'
    import Band from './components/Project.vue'

	import { ref } from 'vue'
    import { preProcessFile } from 'typescript'

    const prenom = ref<string>("Noe")
	const nom = ref<string>("Narcisse")

    //const buttons = ref([])
    //temp repasser en false default apres tests
    const isDataLoaded = ref<boolean>(true)

    //string ?
    const infosData = ref([])


    
    const link = ref<string>("https://docs.google.com/spreadsheets/d/e/2PACX-1vQx_XlO6VRfyXA4UOBFnTaWLwds1vpF7pMHFVG5RQpau7cRMUmVijl5jdx05j3VMdLV-66-aYOcMtRy/pub?gid=0&single=true&output=csv")
    const link2 = ref<string>('https://docs.google.com/spreadsheets/d/e/2PACX-1vQx_XlO6VRfyXA4UOBFnTaWLwds1vpF7pMHFVG5RQpau7cRMUmVijl5jdx05j3VMdLV-66-aYOcMtRy/pub?gid=2138789322&single=true&output=csv')

			// Papa.parse(link.value,
			// 	{
			// 		header: true,						// use a header kept in the very first line 
			// 		download: true,
			// 		//encoding : 'windows-1252',		//win old encoding for excell 2007  ANSI :<,
			// 		encoding : 'UTF-8',					//csv file from g sheets are in utf
			// 		skipEmptyLines: true,				//remove the last empty line, does not remove any other one despite the actual name of the param
			// 		complete: function(results) 
			// 		{
			// 			console.log(results.data)		// Array d'objets
            //                   buttons.value = results.data.map((row, index) => ({
            //                     id: row.id ? Number(row.id) : index + 1,  // si id existe dans CSV, sinon auto-incrément
            //                     name: row.name || '',                      // nom depuis CSV
            //                     img: row.img || 'default.png',             // fallback image
            //                     link: row.link || '#',
            //                     descr: row.descr || 'missing app description',
            //                     color: row.color || 'black'
                           
            //                     }))
            //             console.log(buttons.value)
            //             dataLoaded.value = true;

			// 		}
			// 	});


            //     Papa.parse(link2.value,
			// 	{
			// 		header: true,						// use a header kept in the very first line 
			// 		download: true,
			// 		encoding : 'UTF-8',					//csv file from g sheets are in utf
			// 		skipEmptyLines: true,				//remove the last empty line, does not remove any other one despite the actual name of the param
			// 		complete: function(results) 
			// 		{
			// 			console.log(results.data)		// Array d'objets
            //                   infosData.value = results.data.map((row, index:number) => ({
            //                     id: row.id ? Number(row.id) : index + 1,  // si id existe dans CSV, sinon auto-incrément
            //                     title: row.title || 'missing title',                      // nom depuis CSV
            //                     descr: row.descr || 'missing elem description',
            //                     link: row.link || ''
            //                     }))
            //             console.log(infosData.value)
            //             //dataLoaded.value = true;

			// 		}
			// 	});

</script>

<template>

    <Header />

    <div v-if="isDataLoaded" id="content">
        <Band />
    </div>
    <div v-else>
        <Loader />
    </div>
</template>

<style>
    :root {
        --bg-color: #161616;

        --white : #DEE4E6;
        --yellow: #E2B61B;
        --gray: #323232;
        --black: black;

        --header: rgb(88, 60, 153);
        --app-bg: black;

        --radius: 20px;

        --glass-alpha: .6;
    }
    *{
        box-sizing: border-box;
    }
    html, body {
        height: 100%;
        margin:0px;
    }

    body 
    {
        background: var(--bg-color);
    }

    @keyframes colorShift {
        0% {
            background-color: rgba(186, 45, 32, var(--glass-alpha));
        }

        15% {
            background-color: rgba(245, 187, 39, var(--glass-alpha));
        }

        30% {
            background-color: rgba(69, 189, 68, var(--glass-alpha));
        }

        45% {
            background-color: rgba(68, 189, 167, var(--glass-alpha));
        }

        60% {
            background-color: rgba(89, 120, 212, var(--glass-alpha));
        }

        75% {
            background-color: rgba(169, 68, 201, var(--glass-alpha));
        }

        85% {
            background-color: rgba(201, 68, 159, var(--glass-alpha));
        }

        100% {
            background-color: rgba(186, 45, 32, var(--glass-alpha));
        }
    }

    .container 
    {
        width: 94%;
        min-height: 90vh;
        background-color: var(--white);
        margin: auto;

        border-radius: 10px;

        backdrop-filter: blur(20px);
        box-shadow: 10px 10px 50px #000000ab ;

    }


    #content 
    {

        padding:1%;
        display: flex;
        align-content:center;
        width:100%;
    }

    #app-menu {
        flex: 1;
    }

</style>

<style scoped>

    
</style>
